<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProviderController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/providers', [ProviderController::class, 'index']);
Route::get('/providers/{id}', [ProviderController::class, 'show']);
Route::post('/providers', [ProviderController::class, 'create']);
Route::put('/providers/{id}', [ProviderController::class, 'update']);
Route::delete('/providers/{id}', [ProviderController::class, 'destroy']);


// Route::prefix('providers')->group(function () {
    
//     Route::get('/', [ProviderController::class, 'index']);

   
//     Route::get('/{provider}', [ProviderController::class, 'show']);


//     Route::post('/', [ProviderController::class, 'store']);

    
//     Route::put('/providers/{provider}', [ProviderController::class, 'update']);


    
//     Route::delete('/{provider}', [ProviderController::class, 'destroy']);
// });
