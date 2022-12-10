<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teachers = array("Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя" );

        for ($i = 0; $i < count($teachers); $i++) {
            DB::table('days')->insert(['name' => $teachers[$i]]);
        }

    }
}
