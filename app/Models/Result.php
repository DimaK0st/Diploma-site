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

    protected $with = ['user'];
    protected $appends = ['formattedResult'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function test()
    {
        return $this->belongsTo(Test::class, 'test_id', 'id');
    }

    public function getFormattedResultAttribute()
    {
        if (!$this->result) {
            return 'empty';
        }

        if ($this->result < 60) {
            return 2;
        }

        if ($this->result < 75) {
            return 3;
        }

        if ($this->result <= 90) {
            return 4;
        }

        if ($this->result <= 100) {
            return 5;
        }
    }
}
