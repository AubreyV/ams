<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

// Admin pages
Route::get('/employee/{any?}', function () {
    return view('layouts.employee');
})->where('any', '([A-z\d\-\/_.]+)?');


Route::get('/try', function () {
    dd(auth()->user());
});
