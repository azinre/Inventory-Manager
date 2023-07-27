<?php

use App\Http\Controllers\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProviderController;
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

Route::get('/providers', [ProviderController::class, 'index']);
Route::get('/providers/{id}', [ProviderController::class, 'show']);
Route::post('/providers', [ProviderController::class, 'create']);
Route::put('/providers/{id}', [ProviderController::class, 'update']);
Route::delete('/providers/{id}', [ProviderController::class, 'destroy']);
Route::get('/clients',[ClientController::class, 'index']);

Route::get('/clients/{id}',[ClientController::class, 'show']);

Route::post('/clients',[ClientController::class, 'create']);

Route::put('/clients/{id}',[ClientController::class, 'update']);

Route::delete('/clients/{id}',[ClientController::class, 'destroy']);
