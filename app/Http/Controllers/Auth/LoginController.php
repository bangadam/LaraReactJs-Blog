<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function postLogin(Request $request) {

        if(Auth::attempt(
            ['email' => $request['email'], 
            'password' => $request['password']
            ]);
        ) {
          return response()->json(true);
        }
        return response()->json(false);
    }
}
