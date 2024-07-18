<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;

Route::prefix('api')->group(function () {
    Route::post('/aboutnew/save', [AboutController::class, 'save']);
    Route::post('/api/aboutnew/save', [AboutnewController::class, 'save']);
    Route::post('/aboutnew/save', 'AboutController@save');

});
