<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class RegisterController extends Controller
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
            'email' => 'required|string|email|max:20',
            'password' => 'required|string|min:4',
        ]);

        $registerUser = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        Log::debug("登録結果の内容".$registerUser);
        return response()->json($registerUser,201);
    }
}
