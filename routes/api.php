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

Route::group(['middleware' => 'auth:api'], function() {
    Route::group(['namespace' => 'Api'], function() {
        Route::post('/logout', 'AuthController@logout');
        Route::get('/user', 'UserController@user');
    });

});


Route::group(['middleware' => 'guest'], function() {
    Route::group(['namespace' => 'Api'], function()  {
        Route::post('/login', 'AuthController@login');
        Route::post('/register', 'AuthController@register');
    });
});