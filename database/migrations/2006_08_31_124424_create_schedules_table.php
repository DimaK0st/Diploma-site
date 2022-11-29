<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('course')->unsigned();
            $table->bigInteger('group_id')->unsigned();
            $table->bigInteger('day_id')->unsigned();
            $table->bigInteger('subject_num')->unsigned();
            $table->bigInteger('teacher_id')->unsigned();
            $table->bigInteger('form_id')->unsigned();
            $table->bigInteger('subject_id')->unsigned();
            $table->bigInteger('evaluation_id')->unsigned();



        });


        Schema::table('schedules', function (Blueprint $table) {

            $table->foreign('day_id')->references('id')->on('days');
            $table->foreign('teacher_id')->references('id')->on('teachers');
            $table->foreign('form_id')->references('id')->on('forms');
            $table->foreign('subject_id')->references('id')->on('subjects');
            $table->foreign('group_id')->references('id')->on('groups');
            $table->foreign('evaluation_id')->references('id')->on('evaluations');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
