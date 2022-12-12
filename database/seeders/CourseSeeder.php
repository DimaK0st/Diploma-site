<?php

namespace Database\Seeders;

use App\Models\Course;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
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
        for ($i = 0; $i < 50; $i++) {
            Course::insert(['user_id' => 1, 'title' => (string)$this->faker->realText(), 'description' => (string)$this->faker->realText()]);
        }
    }
}
