<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('', function (Request $request) {
    return view(
        'welcome', 
        [
            "message" => $request->get('name').", Hello world! ",
            "role" => "guest",
            "db" => [
                "user" => "root",
                "url" => "localhost",
                "port" => 5555
            ],
            "array" => []
        ]
    );
});

Route::get('/home', function() {
    return 'Hello world!';
});

Route::get('/test', function() {
    return view('test');
});

Route::get('/sub-test', function() {
    return view('subdirectory.test');
});

Route::get('/sub/test', function() {
    return view('subdirectory.test');
});

/*
Ошибка, так как такой путь доступен из public
Route::get('/build', function() {
    return view('subdirectory.test');
});
*/