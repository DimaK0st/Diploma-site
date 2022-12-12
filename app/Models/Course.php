<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $description
 */
class Course extends Model
{
    use HasFactory;

    public function content()
    {
        return $this->belongsTo(CourseContent::class, 'id', 'course_id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
