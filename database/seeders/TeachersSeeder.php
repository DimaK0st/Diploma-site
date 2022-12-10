<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeachersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teachers = array(
            array(
                'Грушко',
                'Єфименко',
                'Зеленьова',
                'Касьян',
                'Касьян',
                'Киричек',
                'Кудерметов',
                'Луценко',
                'Паромова',
                'Польска',
                'Рибін',
                'Скрупський',
                'Точилін',
                'Хохлов',
                'Щербак',
            ),
            array(
                'Світлана',
                'Микола',
                'Ірина',
                'Микола',
                'Констянтин',
                'Галина',
                'Равіль',
                'Наталя',
                'Тетяна',
                'Ольга',
                'Вадим',
                'Степан',
                'Сергій',
                'Микола',
                'Наталія',

            ),
            array('Сергіїйна',
                'Володимирович',
                'Яковлівна',
                'Миколайович',
                'Миколайович',
                'Григорівна',
                'Камілович',
                'Володимирівна',
                'Олександрівна',
                'Володимирівна ',
                'Олегович',
                'Юрійович',
                'Дмитрович',
                'Миколайович',
                'Володимирівна',
            )
        );

        for ($i = 0; $i < count($teachers[0]); $i++) {
            DB::table('teachers')->insert(['surname' => $teachers[0][$i], 'name' => $teachers[1][$i], 'patronymic' => $teachers[2][$i]]);

        }
    }
}
