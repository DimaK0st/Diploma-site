<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseContent;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseContentSeeder extends Seeder
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
        for ($i = 0; $i < 4; $i++) {
            CourseContent::insert(['course_id' => 1, 'title' => (string)$this->faker->realText(), 'description' => (string)$this->faker->realText(), 'url' => (string)$this->faker->url()]);
        }
    }
}
