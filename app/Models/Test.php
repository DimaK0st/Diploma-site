<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property int $course_id
 * @property int $count
 */
class Test extends Model
{
    use HasFactory;

    protected $appends = ['myResult'];

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'test_id', 'id');
    }

    public function results()
    {
        return $this->hasMany(Result::class, 'test_id', 'id');
    }

    public function result() {
        return $this->hasOne(Result::class)->where('user_id', '=', Auth::user()->id)->oldestOfMany();
    }

    public function getMyResultAttribute()
    {
        $user = Auth::user();

        if (!$user) {
            return 0;
        }

        // if relation is not loaded already, let's do it first
        if (!array_key_exists('result', $this->relations)) {
            $this->load([
                'result' => function (HasOne $builder) use ($user) {
                },
            ]);
        }
        $related = $this->getRelation('result');

        return isset($related->result)?$related->result.'%':null;
    }

}
