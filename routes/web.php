<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\DrugController;
use App\Http\Controllers\TransactionController;

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

Route::get('/', [HomeController::class, 'index']);

// Drug's route
Route::get('/drug', [DrugController::class, 'index']);
Route::get('/drug/{uuid}', [DrugController::class, 'detail']);
Route::post('/drug', [DrugController::class, 'insert']);
Route::put('/drug/{uuid}', [DrugController::class, 'insert']);
Route::delete('/drug/{uuid}', [DrugController::class, 'remove']);

// Transaction's route
Route::get('/transaction', [TransactionController::class, 'index']);
Route::get('/transaction/{uuid}', [TransactionController::class, 'detail']);
Route::post('/transaction', [TransactionController::class, 'insert']);
Route::put('/transaction/{uuid}', [TransactionController::class, 'insert']);
Route::delete('/transaction/{uuid}', [TransactionController::class, 'remove']);
