<?php

use App\Http\Controllers\ScheduleController\ScheduleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'v1', 'middleware' => ['cors']], function () {

    Auth::routes();

    Route::get('/groupList', [\App\Http\Controllers\Controller::class, 'getGroupList']);

    Route::get('/schedule/data', [ScheduleController::class,'getScheduleData'])->name('');
    Route::get('/schedule/add_schedule_data', [ScheduleController::class,'getAddScheduleData'])->name('');
    Route::post('/schedule/add_schedule', [ScheduleController::class,'addSchedule'])->name('');

    Route::get('/user_courses',  function (Request $request) {
        return json_encode([['title' => 'asd2fasdf','label'=>'asda2sd'],['title' => 'a2sdfa3sdf','label'=>'asd4asd'],['title' => 'asdfas5df','label'=>'asda6sd'],['title' => 'asdfasd7f','label'=>'a8sdasd'],]);


    });


    Route::get('/schedule/{group}', [ScheduleController::class,'showSchedule'])->name('');

















});
