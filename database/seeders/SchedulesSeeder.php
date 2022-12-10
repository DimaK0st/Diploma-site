<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchedulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "2",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "4",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "6",
            'teacher_id' => "1",
            'form_id' => "2",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "6",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "2",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "3",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "4",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "5",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);


    }
}
