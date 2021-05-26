<?php

namespace App\Http\Controllers\applyCompany;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class applyCompanyController extends Controller
{
    protected function applyCompany(Request $request)
    {
        // Log::debug('パスワード更新処理を行います。');
        // Log::debug("リクエスト内容".$request);
        // $UpdatePasswordUser = User::where('email',$request['authEmail'])->first();
        // Log::debug("検索結果".$UpdatePasswordUser);

        // if($request['authEmail'] === $UpdatePasswordUser->email && $request['authenticationKey'] === $UpdatePasswordUser->emailToken){
        //     Log::debug("条件が合致しました");
        //     $UpdateUser = User::where('email',$UpdatePasswordUser->email)->update(['password' => Hash::make($request['changedPassword'])]);
        //     return response()->json($UpdateUser,201);
        // }else{
        //     Log::debug("条件に合致しませんでした");
        //     return false;
        // };
    }
}
