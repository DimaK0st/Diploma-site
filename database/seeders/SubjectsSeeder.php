<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teachers = array("Програмування",
            "        Сучасні методи та моделі інтелектуальних систем",
            "Комп'ютерне 3D-моделювання",
            "Архітектура і технології вебсервісів",
            "Методи синтезу енергоефективних систем на ПЛІС",
            "Основи Інтернету речей",
            "Інтегровані комп'ютерні системи",
            "Інтегровані комп'ютерні системи",
            "Вбудовані комп'ютерні системи",
            "Методологія наукових досліджень та академічне письмо",
            "Міждисциплінарний курсовий проєкт",
        );

        for ($i = 0; $i < count($teachers); $i++) {
            DB::table('subjects')->insert(['name' => $teachers[$i]]);
        }

    }
}
