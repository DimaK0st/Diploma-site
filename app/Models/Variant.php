<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $question_id
 * @property string $text
 * @property bool $correct
 */
class Variant extends Model
{
    use HasFactory;

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id', 'id');
    }
}
