<?php

namespace App\Http\Controllers\Validate;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class validController extends Controller
{
    protected function emailDup(Request $request)
    {
        Log::debug('Emailの重複検索を行います。');
        Log::debug('Requestの内容'.$request['email']);

        $result = User::where('email',$request['email'])->first();

        Log::debug('検索結果'.$result);

        if($result){
            Log::debug('メールアドレスが一致しました。');
            return response()->json(true,201);
        }else if(!$result){
            Log::debug('メールアドレスが一致しませんでした。');
            return false;
        }

        // Laravelのクエリビルダーの戻り値を勘違いしていた件について
        // https://qiita.com/HorikawaTokiya/items/679b5d3b1cfe1c3b2f71

        //【Laravel】DB登録値取得時のfind()、get()、first()の返り値早見表
        // https://qiita.com/sola-msr/items/fac931c72e1c46ae5f0f

        // Laravel Response 大全 2020
        // https://qiita.com/nunulk/items/3e12fc7a40cf002aa983

        // DBの接続自体が上手く言っているのか分からないので先にDB接続の方を行う
        // $request->validate([
        //     'email' => 'unique:users',
        // ]);

        // return response()->json($result);

        // 入力情報に対してバリテーションを行う
        // confirmed name="xxx"のフィールドとname="xxx_confirmation"のフィールドが同一の値か検証される。
        // ところで$this->validate()は何をしてる？
        // https://liginc.co.jp/359544
        // $request内に無いname属性の物があると正しく走らない。
        // バリテーションに引っかかった場合はリクエストを送信したページにリダイレクトされる。
        // $request->validate([
        //     'email' => 'required|string|email|max:255',
        //     'password' => 'required|string|min:8',
        // ]);

        // $registerUser = User::create([
        //     'email' => $request['email'],
        //     'password' => Hash::make($request['password']),
        // ]);

        // // return view('index');
        // // return response(201)->json($registerUser);
        // return response()->json('',201);
    }
}
