<?php

namespace App\Http\Requests\Schedule;

use Illuminate\Foundation\Http\FormRequest;

class AddScheduleRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'course' => 'required|int',
            'group-id' => 'required|int',
            'day-id' => 'required|int',
            'subject-num' => 'required|int',
            'teacher-id' => 'required|int',
            'form-id' => 'required|int',
            'subject-id' => 'required|int',
            'evaluation-id' => 'required|int',
        ];
    }

    /**
     * @return int
     */
    public function getCourse(): int
    {
        return $this->input('course');
    }

    /**
     * @return int
     */
    public function getGroupId(): int
    {
        return $this->input('group-id');
    }

    /**
     * @return int
     */
    public function getDayId(): int
    {
        return $this->input('day-id');
    }

    /**
     * @return int
     */
    public function getSubjectNum(): int
    {
        return $this->input('subject-num');
    }

    /**
     * @return int
     */
    public function getTeacherId(): int
    {
        return $this->input('teacher-id');
    }

    /**
     * @return int
     */
    public function getFormId(): int
    {
        return $this->input('form-id');
    }

    /**
     * @return int
     */
    public function getSubjectId(): int
    {
        return $this->input('subject-id');
    }

    /**
     * @return int
     */
    public function getEvaluationId(): int
    {
        return $this->input('evaluation-id');
    }
}
