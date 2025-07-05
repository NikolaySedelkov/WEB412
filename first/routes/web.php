<?php

use App\Http\Controllers\BlackListController;
use App\Http\Controllers\FilmAndActorController;
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

Route::get('/contact', [NavigateController::class, 'toContact'])->name('page-contant');

Route::get('/black-list', [BlackListController::class, 'listView'])->name('black-list-view');
Route::get('/products', function() {
    return view('product.read');
})->name('products-view');

Route::get('/about', [NavigateController::class, 'toAbout'] )->name('page-about');

Route::get('/korzina', [NavigateController::class, 'toKorzina'])->name('page-korzina');

Route::get('/actors', [FilmAndActorController::class, 'view'])->name('test-film-actor');

Route::get('/actor/create', [FilmAndActorController::class, 'createActorView'])->name('create-actor-view');
Route::get('/actor/update/{id}', [FilmAndActorController::class, 'updateActorView'])->name('update-actor-view');

Route::post('/actor', [FilmAndActorController::class, 'createActor'])->name('create-actor');
Route::put('/actor/{id}', [FilmAndActorController::class, 'updateActor'])->name('update-actor');
/*
Ошибка, так как такой путь доступен из public
Route::get('/build', function() {
    return view('subdirectory.test');
});
*/

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
