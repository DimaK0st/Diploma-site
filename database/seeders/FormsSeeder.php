<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $forms = array("Чисельник", "Знаменник","Чисельник і знаменник");

        for ($i = 0; $i < count($forms); $i++) {
            DB::table('forms')->insert(['name' => $forms[$i]]);
        }
    }
}
