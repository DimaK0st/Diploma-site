<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $test_id
 * @property int $title
 * @property Variant $variants
 */
class Question extends Model
{
    use HasFactory;

    protected $with = ['variants'];

    public function test()
    {
        return $this->belongsTo(Test::class, 'test_id', 'id');
    }

    public function variants()
    {
        return $this->hasMany(Variant::class, 'question_id', 'id');
    }

}
