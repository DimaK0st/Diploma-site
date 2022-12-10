<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EvaluationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $evaluation_options = array("Екзамен", "Залік", "Диференційний залік");

        for ($i = 0; $i < count($evaluation_options); $i++) {
            DB::table('evaluations')->insert(['name' => $evaluation_options[$i]]);
        }
    }
}
