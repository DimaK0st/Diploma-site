<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $test_id
 * @property int $title
 */
class Question extends Model
{
    use HasFactory;


    public function test()
    {
        return $this->belongsTo(Test::class, 'test_id', 'id');
    }

    public function variants()
    {
        return $this->belongsTo(Variant::class, 'id', 'question_id');
    }
}
