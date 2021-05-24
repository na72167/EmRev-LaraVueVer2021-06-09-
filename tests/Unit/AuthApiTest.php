<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthApiTest extends TestCase
{
    //【Laravel】PHPUnitテスト用にDBを設定してデフォルトのDBを汚さなくする
    // https://qiita.com/sola-msr/items/b317bb788f21dac176c4
    // テスト用メソッドは接頭辞がtestじゃないとエラーがでる。
    // https://nao550.hateblo.jp/entry/20130806/p3
    // HTTP レスポンスステータスコード
    // https://developer.mozilla.org/ja/docs/Web/HTTP/Status
    // Laravel 5.3でREST APIのテストコードを書く
    // 422が返ってきている時はバリテーション周りで引っかかっている。
    // https://qiita.com/keitakn/items/1a43d53e9c3b422ec5ef
    // Laravel7でログイン画面を作ってPHPUnitで動作確認する
    // https://engineer-lady.com/program_info/create-login-phpunit-laravel7/

    use RefreshDatabase;

    protected $resetDatabase = false;

    // 【Laravel】テストで使用するsetUpメソッドについて
    // https://tektektech.com/laravel-setup-test/
    /**
     * Setup the test environment.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        if ($this->resetDatabase) {
            Artisan::call('migrate:refresh');
            Artisan::call('db:seed');
        }
        \DB::beginTransaction();
    }

    /**
     * @test
     * @return void
     */
    public function test_新しいユーザーを作成して返却する()
    {
        $response = $this->json('POST', route('register'), [
            'email' => 'dummy@gmail.com',
            'password' => 'test12345',
        ]);
        $response->assertStatus(201);
    }

    /**
     * @test
     * @return void
     */
    // TODO:Trying to get property 'email' of non-object
    // というエラーが出てきて、テストが通らない。
    // 原因:上のsetUp関数が上手く動作していない為。
    // 想定ではテスト用DBに接続後、DB内を掃除。db:seedで
    // ダミーデータが挿入されているはずだが上手く言っておらず、
    // DB内が空のまま->それを参照してもemailのプロパティなんて無いので
    // Trying to get property 'email' of non-objectと返されている。
    public function test_ログイン()
    {
        $response = $this->json('POST', route('login'), [
            'email' => 'dummy@gmail.com',
            'password' => 'test12345'
        ]);
        $response->assertStatus(201);
    }

    //上と同じく
    public function test_パスワード変更()
    {
        $response = $this->json('POST', route('passwordReminder'), [
            'email' => 'dummy@gmail.com'
        ]);
        $response->assertStatus(201);
    }

}
