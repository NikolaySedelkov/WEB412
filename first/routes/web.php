<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\NavigateController;

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

Route::get('', [NavigateController::class, 'toHome']);

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

Route::get('/contact', [NavigateController::class, 'toContact'])->name('page-contant');;

Route::get('/about', [NavigateController::class, 'toAbout'] )->name('page-about');

Route::get('/korzina', [NavigateController::class, 'toKorzina'])->name('page-korzina');;

/*
Ошибка, так как такой путь доступен из public
Route::get('/build', function() {
    return view('subdirectory.test');
});
*/