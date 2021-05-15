<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //useで引っ張ってきたクラスはサービスプロパイダを経由して
    //インスタンス化されている。(型宣言は基本アノテーションを使って行う。)
    //https://qiita.com/yuzgit/items/5df7924d62ba4c788279

    // 最低限書いておきたいPHPのDocコメント
    // https://qiita.com/motoyan-qwt/items/ee973666f1105435822c
    // PHPDoc リファレンス
    // https://zonuexe.github.io/phpDocumentor2-ja/references/phpdoc/index.html

    protected function register(Request $request)
    {
        Log::debug('登録情報に対してバリテーションを行います。');
        // 入力情報に対してバリテーションを行う
        // confirmed name="xxx"のフィールドとname="xxx_confirmation"のフィールドが同一の値か検証される。
        // ところで$this->validate()は何をしてる？
        // https://liginc.co.jp/359544
        // $request内に無いname属性の物があると正しく走らない。
        // バリテーションに引っかかった場合はリクエストを送信したページにリダイレクトされる。

        $request->validate([
            'email' => 'required|string|email|max:20|min:6',
            'password' => 'required|string|max:20|min:4',
        ]);

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
    protected function login(Request $request)
    {
        Log::debug("リクエスト内容".$request);
        $loginUser = User::where('email',$request["email"])->first();
        Log::debug("検索結果".$loginUser);

        // ワイ「何でsalt無しでHash::checkできるんや？」
        // https://qiita.com/anchor-cable/items/4be34b75d726aee89190
        if($request["email"] === $loginUser["email"] && Hash::check($request["password"], $loginUser["password"])){
            Log::debug("条件が合致しました");
            return response()->json($loginUser,201);
        }else{
            Log::debug("条件に合致しませんでした");
            return false;
        };
    }
}
