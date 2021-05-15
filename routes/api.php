<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 認証系
Route::post('/register', 'Auth\AuthController@register')->name('register');
Route::post('/login', 'Auth\AuthController@login')->name('login');




// バリテーション関係
// emailの重複確認
Route::post('/emailDup', 'validate\validController@emailDup')->name('emailDup');
