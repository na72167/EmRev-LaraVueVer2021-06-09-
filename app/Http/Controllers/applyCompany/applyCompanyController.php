<?php

namespace App\Http\Controllers\applyCompany;

use App\Http\Controllers\Controller;
use App\CompanyInformation;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class applyCompanyController extends Controller
{
    protected function applyCompany(Request $request)
    {
        Log::debug('会社情報登録処理を行います。');
        Log::debug("リクエスト内容".$request);
        $CompanyRegistrationResults = CompanyInformation::create([
            'company_name' => $request['company_name'],
            'industry' => $request['industry'],
            // TODO:のちに実装
            // 'company_url' => $request['email'],
            // 'zip1' => $request['email'],
            // 'zip2' => $request['email'],
            // 'zip3' => $request['email'],
            'location' => $request['location'],
            'number_of_employees' => $request['number_of_employees'],
            'year_of_establishment' => $request['year_of_establishment'],
            'representative' => $request['representative'],
            'listed_year' => $request['listed_year'],
            'average_annual_income' => $request['average_annual_income'],
            'average_age' => $request['average_age'],
            'number_of_reviews' => $request['number_of_reviews'],
        ]);
        $CompanyRegistrationResults = CompanyInformation::where('email',$request['authEmail'])->first();
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
