<?php

namespace Database\Seeders;

use App\Models\Course;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseUserSeeder extends Seeder
{
    private Generator $faker;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Factory::create();
        for ($i = 1; $i < 2; $i++) {
            DB::table('course_user')->insert(['user_id' => 1, 'course_id' => $i]);
        }
    }
}
