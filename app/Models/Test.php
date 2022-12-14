<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property int $course_id
 */
class Test extends Model
{
    use HasFactory;

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function questions()
    {
        return $this->belongsTo(Question::class, 'id', 'test_id');
    }

    public function results()
    {
        return $this->belongsTo(Test::class, 'id', 'test_id');
    }
}
