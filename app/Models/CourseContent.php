<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $course_id
 * @property string $title
 * @property string $description
 * @property string $url
 */
class CourseContent extends Model
{
    use HasFactory;


    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }
}
