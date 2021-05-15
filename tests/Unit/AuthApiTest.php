<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthApiTest extends TestCase
{
    use RefreshDatabase;

    // テスト用メソッドは接頭辞がtestじゃないとエラーがでる。
    // https://nao550.hateblo.jp/entry/20130806/p3
    // HTTP レスポンスステータスコード
    // https://developer.mozilla.org/ja/docs/Web/HTTP/Status
    // Laravel 5.3でREST APIのテストコードを書く
    // 422が返ってきている時はバリテーション周りで引っかかっている。
    // https://qiita.com/keitakn/items/1a43d53e9c3b422ec5ef

    /**
     * A basic feature test get method.
     * @test
     * @return void
     */
    public function test_新しいユーザーを作成して返却する()
    {
        $response = $this->json('POST', route('register'), [
            'email' => 'dummy@email.com',
            'password' => 'test12345',
        ]);

        $response->assertStatus(201);
    }
    public function test_ログイン()
    {
        // ->where('password',$request['password'])
        $response = $this->json('POST', route('login'), [
            'email' => 'dummy@email.com',
            'password' => 'test12345',
        ]);
        $response->assertStatus(201);
    }
}
