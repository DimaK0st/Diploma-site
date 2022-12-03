<?php

namespace Database\Seeders;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

//----------------------------------------------------------------------------------------------------------//
        //Create main roles
        DB::table('roles')->insert([
            'name' => 'user'
        ]);
        DB::table('roles')->insert([
            'name' => 'admin'
        ]);
        DB::table('roles')->insert([
            'name' => 'teacher'
        ]);
        DB::table('roles')->insert([
            'name' => 'headman'
        ]);


//----------------------------------------------------------------------------------------------------------//
        //Add main entry for faculties
        $faculties = array('016 Спеціальна освіта',
            '017 Фізична культура і спорт',
            '022 Дизайн',
            '035.04 Філологія (германські мови та літератури (переклад включно))',
            '051 Економіка',
            '052 Політологія',
            '053 Психологія',
            '054 Соціологія',
            '061 Журналістика',
            '071 Облік і оподаткування',
            '072 Фінанси, банківська справа та страхування',
            '073 Менеджмент',
            '073 Менеджмент',
            '075 Маркетинг',
            '076 Підприємництво, торгівля та біржова діяльність',
            '076 Підприємництво, торгівля та біржова діяльність',
            '081 Право',
            '121 Інженерія програмного забезпечення',
            '122 Комп’ютерні науки',
            '123 Комп’ютерна інженерія',
            '124 Системний аналіз',
            '125 Кібербезпека',
            '131 Прикладна механіка',
            '131 Прикладна механіка',
            '132 Матеріалознавство',
            '132 Матеріалознавство',
            '133 Галузеве машинобудування',
            '133 Галузеве машинобудування',
            '134 Авіаційна та ракетно-космічна техніка',
            '136 Металургія',
            '141 Електроенергетика, електротехніка та електромеханіка',
            '144 Теплоенергетика',
            '151 Автоматизація та комп’ютерно-інтегровані технології',
            '151 Автоматизація та комп’ютерно-інтегровані технології',
            '152 Метрологія та інформаційно-вимірювальна техніка',
            '153 Мікро- та наносистемна техніка',
            '172 Телекомунікації та радіотехніка',
            '173 Авіоніка',
            '191 Архітектура та містобудування',
            '192 Будівництво та цивільна інженерія',
            '227 Фізична терапія, ерготерапія',
            '231 Соціальна робота',
            '241 Готельно-ресторанна справа',
            '242 Туризм',
            '262 Правоохоронна діяльність',
            '275.02 Транспортні технології (на залізничному транспорті)',
            '275.03 Транспортні технології (на автомобільному транспорті)',
            '281 Публічне управління та адміністрування',
            '292 Міжнародні економічні відносини'
        );

        for ($i = 0; $i < count($faculties); $i++) {
            DB::table('faculties')->insert(['name' => $faculties[$i]]);

        }


//----------------------------------------------------------------------------------------------------------//
        //Add main entry for groups

        DB::table('groups')->insert([
            'name' => 'KNT-518',
            'faculty_id' => '20',
            'course' => '4'
        ]);


//----------------------------------------------------------------------------------------------------------//
        //Add entry admin for users

        $user = new User();
        $user->firstname = 'Рошковський';
        $user->lastname = 'Денис';
        $user->patronymic = 'Олегович';
        $user->email = '123@gmail.com';
        $user->password = Hash::make("123");;
        $user->role_id = '2';
        $user->group_id = '1';
        $user->save();


//----------------------------------------------------------------------------------------------------------//
        //Add entry teacher for users

        $teacher = new Teacher();

        $teacher->surname = "Паромова";
        $teacher->name = "Татьяна";
        $teacher->patronymic = "Олександровна";
        $teacher->email = "";
        $teacher->save();


//----------------------------------------------------------------------------------------------------------//
//Add main entry for faculties
        $teachers = array(
            array(
                'Грушко',
                'Єфименко',
                'Зеленьова',
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



//----------------------------------------------------------------------------------------------------------//
//Add main entry for faculties
        $teachers = array("Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя" );

        for ($i = 0; $i < count($teachers); $i++) {
            DB::table('days')->insert(['name' => $teachers[$i]]);
        }




//----------------------------------------------------------------------------------------------------------//
//Add main entry for faculties
        $teachers = array("Програмування");

        for ($i = 0; $i < count($teachers); $i++) {
            DB::table('subjects')->insert(['name' => $teachers[$i]]);
        }




//----------------------------------------------------------------------------------------------------------//
//Add main entry for faculties
        $forms = array("Чисельник", "Знаменник","Чисельник і знаменник");

        for ($i = 0; $i < count($forms); $i++) {
            DB::table('forms')->insert(['name' => $forms[$i]]);
        }






//----------------------------------------------------------------------------------------------------------//
//Add main entry for faculties
        $evaluation_options = array("Екзамен", "Залік", "Диференційний залік");

        for ($i = 0; $i < count($evaluation_options); $i++) {
            DB::table('evaluations')->insert(['name' => $evaluation_options[$i]]);
        }



//----------------------------------------------------------------------------------------------------------//
//Add main entry for faculties

        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "2",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "4",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "6",
            'teacher_id' => "1",
            'form_id' => "2",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "1",
            'subject_num' => "6",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "2",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "3",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "4",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);
        DB::table('schedules')->insert(['course' => "4",
            'group_id' => "1",
            'day_id' => "5",
            'subject_num' => "1",
            'teacher_id' => "1",
            'form_id' => "1",
            'subject_id' => "1",
            'evaluation_id' => "1"]);



    }
}
