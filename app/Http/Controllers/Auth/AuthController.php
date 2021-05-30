<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    //useで引っ張ってきたクラスはサービスプロパイダを経由して
    //インスタンス化されている。(型宣言は基本アノテーションを使って行う。)
    //https://qiita.com/yuzgit/items/5df7924d62ba4c788279

    // 最低限書いておきたいPHPのDocコメント
    // https://qiita.com/motoyan-qwt/items/ee973666f1105435822c
    // PHPDoc リファレンス
    // https://zonuexe.github.io/phpDocumentor2-ja/references/phpdoc/index.html

    //-ユーザー登録処理-
    protected function register(Request $request)
    {
        Log::debug('登録情報に対してバリテーションを行います。');
        // 入力情報に対してバリテーションを行う
        // confirmed name="xxx"のフィールドとname="xxx_confirmation"のフィールドが同一の値か検証される。
        // ところで$this->validate()は何をしてる？
        // https://liginc.co.jp/359544
        // $request内に無いname属性の物があると正しく走らない。
        // バリテーションに引っかかった場合はリクエストを送信したページにリダイレクトされる。

		// $request->validate([
        //     'email' => 'required|string|email|max:20|min:6',
        //     'password' => 'required|string|max:20|min:4',
		// ]);

		$registerUser = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
		]);

        Log::debug("登録結果の内容".$registerUser);
        return response()->json($registerUser,201);
    }

    // useで引っ張ってきたクラスはサービスプロパイダを経由して
    // インスタンス化されている。(型宣言は基本アノテーションを使って行う。)
    // https://qiita.com/yuzgit/items/5df7924d62ba4c788279
    //【Laravel】DB登録値取得時のfind()、get()、first()の返り値早見表
    // https://qiita.com/sola-msr/items/fac931c72e1c46ae5f0f

    //-ログイン処理-
    protected function login(Request $request)
    {
        Log::debug('ログイン内容の検索を行います。');
        Log::debug("リクエスト内容".$request);
        $loginUser = User::where('email',$request['email'])->first();
        Log::debug("検索結果".$loginUser);

    // ワイ「何でsalt無しでHash::checkできるんや？」
    // https://qiita.com/anchor-cable/items/4be34b75d726aee89190
        if($request['email'] === $loginUser->email && Hash::check($request['password'],$loginUser->password)){
            Log::debug("条件が合致しました");
            return response()->json($loginUser,201);
                }else{
            Log::debug("条件に合致しませんでした");
            return true;
        };
    }

    // Laravelでセッションを使ってみる
    // https://qiita.com/reflet/items/5638ab18fd7cededed17

    // Laravel・データベースのデータ操作（追加／変更／削除）する全実例
    // https://blog.capilano-fw.com/?p=699

    // Laravelの実装調査 ～パスワードリセット編～
    // https://qiita.com/t-kuni/items/aa906cd07e54037a5eaf
    // [Laravel5.5] APP_KEY の行方を追う
    // https://qiita.com/yk2220s/items/dcbf54c6d1f33a0cb06f
    // TODO:上サイトの「Laravelの実装調査~」のトークンの作り方部分を参考に書き直す。

    // Eloquentのメソッド saveとupdateは処理が異なる
    // https://qiita.com/gomaaa/items/91e5cbd319279a2db6ec

    //-パスワード変更処理-
    protected function updatePassword(Request $request)
    {
        // PHP isset, empty, is_null の違い早見表
        // https://qiita.com/shinichi-takii/items/00aed26f96cf6bb3fe62
        Log::debug("リクエスト内容".$request);
        $updatePasswordUser = User::where('email',$request['email'])->where('delete_flg',0)->first();
        Log::debug("検索結果".$updatePasswordUser);

        if($updatePasswordUser->email){

            Log::debug("条件に合致しました");
            // Laravel Mailableでメール送信機能を実装する
            // https://noumenon-th.net/programming/2020/05/16/mailable/

            $auth_key = Str::random(40);
            User::where('email',$updatePasswordUser->email)->update(['emailToken' => $auth_key]);

            //メールを送信(TODO:要リファクタリング ＊traitなどを使って)
            $from = 'kaifayongakaunto@gmail.com';
            $to = $updatePasswordUser->email;

            $subject = '【パスワード再発行認証】｜Em_Rev';
            //EOTはEndOfFileの略。ABCでもなんでもいい。先頭の<<<の後の文字列と合わせること。最後のEOTの前後に空白など何も入れてはいけない。
            //EOT内の半角空白も全てそのまま半角空白として扱われるのでインデントはしないこと
            $comment = <<<EOT
            本メールアドレス宛にパスワード再発行のご依頼がありました。
            下記のURLにて認証キーをご入力頂くとパスワードが再発行されます。

            パスワード再発行認証キー入力ページ：[ここにURLを記入]
            認証キー：{$auth_key}
            ※認証キーの有効期限は30分となります

            認証キーを再発行されたい場合は下記ページよりお願い致します。
            [ここにURLを記入]
            EOT;

            //送信に必要な情報が一通り揃っているか
            if(!empty($to) && !empty($subject) && !empty($comment)){
                //文字化けしないように設定（お決まりパターンらしい）
                mb_language("Japanese"); //現在使っている言語を設定する
                mb_internal_encoding("UTF-8"); //内部の日本語をどうエンコーディング（機械が分かる言葉へ変換）するかを設定
                //メールを送信（送信結果はtrueかfalseで返ってくる）
                $result = mb_send_mail($to, $subject, $comment, "From: ".$from);
                Log::debug($result);
                //送信結果を判定
                if ($result) {
                    Log::debug("メールを送信しました。");
                } else {
                    Log::debug("【エラー発生】メールの送信に失敗しました。");
                }
            }

            // 認証に必要な情報をセッションへ保存
            // https://tech-blog.rakus.co.jp/entry/20210409/laravel
            // TODO:今のままだと認証用トークンをそのまま受け渡ししている為、セキュリティ的にとても危ない状態になっている。
            // 以下を参考に色々試してみる。
            // SPAのログイン認証のベストプラクティスがわからなかったのでわりと網羅的に研究してみた〜JWT or Session どっち？〜
            // https://qiita.com/Hiro-mi/items/18e00060a0f8654f49d6
            // Laravel SanctumとVue.jsによるSPA認証
            // https://noumenon-th.net/programming/2020/05/26/sanctum/
            // Laravel8 + Vue.js を利用したSanctum認証
            // https://qiita.com/hikkappi/items/b95626bb51bbf2ebcd2d
            $ResponseData = array(['auth_key' => $auth_key,'auth_email' => $updatePasswordUser->email,
            'auth_key_limit' => time()+(60*30)]);//現在時刻より30分後のUNIXタイムスタンプを入れる
            Log::debug($ResponseData);
            return response()->json($ResponseData,201);

        }else if(is_null($updatePasswordUser->email)){
            Log::debug("条件に合致しませんでした");
            return false;
        }
    }

    //パスワード変更用認証キー
    protected function passwordReceive(Request $request)
    {
        Log::debug('パスワード更新処理を行います。');
        Log::debug("リクエスト内容".$request);
        $UpdatePasswordUser = User::where('email',$request['authEmail'])->first();
        Log::debug("検索結果".$UpdatePasswordUser);

        if($request['authEmail'] === $UpdatePasswordUser->email && $request['authenticationKey'] === $UpdatePasswordUser->emailToken){
            Log::debug("条件が合致しました");
            $UpdateUser = User::where('email',$UpdatePasswordUser->email)->update(['password' => Hash::make($request['changedPassword'])]);
            return response()->json($UpdateUser,201);
        }else{
            Log::debug("条件に合致しませんでした");
            return false;
        };
    }
}
