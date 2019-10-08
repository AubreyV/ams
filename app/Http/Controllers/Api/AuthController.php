<?php

namespace App\Http\Controllers\Api;

// use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('json.response');
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $request['password'] = Hash::make($request['password']);
        $user = User::create($request->toArray());

        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];

        return response($response, 200);
        
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                auth()->login($user);
                $response= [
                    "messsage" => "You have been succesfully logged in!",
                    "token"    => $token];
                return response($response, 200);

            } else {
                $response = "Invalid credentials.";
                return response($response, 401);

            }
        } else {
            $response = 'Email does not exist. Please try again.';
            return response($response, 401);

        }
    }

    public function logout(Request $request)
    {

        $token = $request->user()->token();
        $token->revoke();

        $response = 'You have been succesfully logged out!';
        return response($response, 200);

    }
}
