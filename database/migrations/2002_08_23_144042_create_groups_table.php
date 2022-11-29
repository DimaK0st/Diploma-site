<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->Integer('course');
            $table->BigInteger('faculty_id')->unsigned()->index();


        });
        Schema::table('groups', function (Blueprint $table) {
            $table->foreign('faculty_id')->references('id')->on('faculties');

//            $table->foreign('id')->references('group_id')->on('schedules');
//            $table->foreign('course')->references('course')->on('schedules');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
