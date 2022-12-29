<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CourseController\CourseContentController;
use App\Http\Controllers\CourseController\CourseController;
use App\Http\Controllers\ScheduleController\ScheduleController;
use App\Http\Controllers\TestController\QuestionController;
use App\Http\Controllers\TestController\ResultController;
use App\Http\Controllers\TestController\TestController;
use App\Models\Course;
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

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/groupList', [Controller::class, 'getGroupList']);

    Route::get('/course/all', [CourseController::class, 'searchCourse'])->name('');

    Route::group(['middleware' => 'auth:sanctum'], function () {


        Route::group(['prefix' => 'course', 'middleware' => 'auth:sanctum'], function () {
            Route::post('/subscribe_course', [CourseController::class, 'subscribeCourse'])->name('');
            Route::get('/search', [CourseController::class, 'searchCourse'])->name('');
            Route::post('/create', [CourseController::class, 'create'])->name('');
            Route::post('/update', [CourseController::class, 'update'])->name('');
            Route::post('/delete', [CourseController::class, 'delete'])->name('');
            Route::get('/my', [CourseController::class, 'myCourse'])->name('');
            Route::get('/{id}', [CourseController::class, 'index'])->name('');


            Route::group(['prefix' => 'content'], function () {
                Route::post('/create', [CourseContentController::class, 'create'])->name('');
                Route::post('/update', [CourseContentController::class, 'update'])->name('');
                Route::post('/delete', [CourseContentController::class, 'delete'])->name('');
                Route::get('/{id}', [CourseContentController::class, 'index'])->name('');
            });

            Route::group(['prefix' => 'test'], function () {
                Route::post('/create', [TestController::class, 'create'])->name('');
                Route::post('/update', [TestController::class, 'update'])->name('');
                Route::post('/delete', [TestController::class, 'delete'])->name('');
                Route::get('/{id}', [TestController::class, 'index'])->name('');

                Route::group(['prefix' => 'question'], function () {
                    Route::post('/create', [QuestionController::class, 'create'])->name('');
                    Route::post('/update', [QuestionController::class, 'update'])->name('');
                    Route::post('/delete', [QuestionController::class, 'delete'])->name('');
                    Route::get('/{test}', [QuestionController::class, 'getByTestId'])->name('');
                });

                Route::group(['prefix' => 'result'], function () {
                    Route::post('/create', [ResultController::class, 'create'])->name('');
                    Route::get('/{test}', [ResultController::class, 'getByTestId'])->name('');
                });
            });

            Route::get('/schedule/data', [ScheduleController::class, 'getScheduleData'])->name('');
            Route::get('/schedule/add_schedule_data', [ScheduleController::class, 'getAddScheduleData'])->name('');
            Route::post('/schedule/add', [ScheduleController::class, 'addSchedule'])->name('');
            Route::post('/schedule/edit', [ScheduleController::class, 'editSchedule'])->name('');
            Route::post('/schedule/delete', [ScheduleController::class, 'deleteSchedule'])->name('');
            Route::get('/schedule/{group}', [ScheduleController::class, 'showSchedule'])->name('');
        });

        Route::get('/user_courses', function (Request $request) {
            return json_encode([['title' => 'asd2fasdf', 'label' => 'asda2sd'], ['title' => 'a2sdfa3sdf', 'label' => 'asd4asd'], ['title' => 'asdfas5df', 'label' => 'asda6sd'], ['title' => 'asdfasd7f', 'label' => 'a8sdasd'],]);


        });

    });


});
