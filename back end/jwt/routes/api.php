<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminQuestionController;
use App\Http\Controllers\AdminSurveyController;
use App\Http\Controllers\MultipleChoiceQuestionController;
use App\Http\Controllers\OpenEndedQuestionsController;




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

Route::post('/add_survey', [AdminSurveyController::class, 'addSurvey']);
Route::post('/add_question_radio', [AdminQuestionController::class, 'addQuestionRadio']);
Route::post('/add_question_multiple_choice', [AdminQuestionController::class, 'addQuestionMultipleChoice']);
Route::post('/add_question_open_ended', [AdminQuestionController::class, 'addQuestionOpenEnded']);



Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
