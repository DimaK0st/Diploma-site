<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RolesSeeder::class,
            FacultiesSeeder::class,
            GroupsSeeder::class,
            AdminSeeder::class,
            TeachersSeeder::class,
            DaysSeeder::class,
            SubjectsSeeder::class,
            FormsSeeder::class,
            EvaluationsSeeder::class,
            SchedulesSeeder::class,
            CourseSeeder::class,
            CourseUserSeeder::class,
            CourseContentSeeder::class,
        ]);
    }
}
