<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $test_id
 * @property int $user_id
 * @property int $result
 */
class Result extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function test()
    {
        return $this->belongsTo(Test::class, 'test_id', 'id');
    }
}
