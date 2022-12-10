<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->firstname = 'Рошковський';
        $user->lastname = 'Денис';
        $user->patronymic = 'Олегович';
        $user->email = '123@gmail.com';
        $user->password = Hash::make("123");;
        $user->role_id = '2';
        $user->group_id = '1';
        $user->save();
    }
}
