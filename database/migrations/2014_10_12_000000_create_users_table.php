<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('lastname');
            $table->string('firstname');
            $table->string('patronymic');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->BigInteger('role_id')->unsigned()->default("1");
            $table->BigInteger('group_id')->unsigned();


            $table->rememberToken();
            $table->timestamps();
        });
        Schema::table('users', function (Blueprint $table) {

            $table->foreign('group_id')->references('id')->on('groups');
            $table->foreign('role_id')->references('id')->on('roles');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
