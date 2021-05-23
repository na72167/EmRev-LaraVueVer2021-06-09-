<?php
namespace Illuminate\Database\Seeds\auth;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('users')->delete();

		// 一般ユーザー権限持ちユーザーを作成する。
		\DB::table('users')->insert(array (
            "email" => "dummy@gmail.com",
            "password" => Hash::make("test12345")
		));
	}
}
