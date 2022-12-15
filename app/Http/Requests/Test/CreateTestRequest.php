<?php

namespace App\Http\Requests\Test;

use Illuminate\Foundation\Http\FormRequest;

class CreateTestRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'description' => 'required|string',
            'course-id' => 'required|int',
        ];
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->input('title');
    }

    /**
     * @return int
     */
    public function getCourseId(): int
    {
        return $this->input('course-id');
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->input('description');
    }
}
