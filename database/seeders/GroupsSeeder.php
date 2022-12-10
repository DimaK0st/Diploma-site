<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->insert([
            'name' => 'KNT-612m',
            'faculty_id' => '20',
            'course' => '1'
        ]);
        DB::table('groups')->insert([
            'name' => 'KNT-622m',
            'faculty_id' => '20',
            'course' => '1'
        ]);
    }
}
