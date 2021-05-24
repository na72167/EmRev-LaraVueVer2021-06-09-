<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ValidateTest extends TestCase
{

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
    public function test_メールアドレス重複確認()
    {
        $response = $this->json('POST', route('emailDup'), [
            'email' => 'dummy@gmail.com',
        ]);
        $response->assertStatus(201);
    }

}
