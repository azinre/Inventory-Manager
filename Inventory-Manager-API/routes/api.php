<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/items', [ItemController::class, 'index']);

Route::get('/items/{id}', [ItemController::class, 'show']);

Route::post('/items', [ItemController::class, 'create']);

Route::put('/items/{id}', [ItemController::class, 'update']);

Route::delete('/items/{id}', [ItemController::class, 'destroy']);


Route::get('/clients', [ClientController::class, 'index']);

Route::get('/clients/{id}', [ClientController::class, 'show']);

Route::post('/clients', [ClientController::class, 'create']);

Route::put('/clients/{id}', [ClientController::class, 'update']);

Route::delete('/clients/{id}', [ClientController::class, 'destroy']);
