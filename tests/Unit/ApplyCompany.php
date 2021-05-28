<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApplyCompany extends TestCase
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
    public function test_会社情報を登録する()
    {
        $response = $this->json('POST', route('applyCompany'), [
            'company_name' => 'DummyData',
            'industry' => 'DummyData',
            'location' => 'DummyData',
            'number_of_employees' => '2000',
            'year_of_establishment' => '2000',
            'representative' => 'DummyData',
            'listed_year' => '2000',
            'average_annual_income' => '2000',
            'average_age' => '2000',
        ]);
        $response->assertStatus(201);
    }
}
