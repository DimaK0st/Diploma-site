<?php

namespace App\Http\Requests\CourseContent;

use Illuminate\Foundation\Http\FormRequest;

class CreateCourseContentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'course_id' => 'required|int',
            'title' => 'required|string',
            'description' => 'required|string',
            'url' => 'nullable|string',
        ];
    }

    /**
     * @return int
     */
    public function getCourseId(): int
    {
        return $this->input('course_id');
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->input('title');
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->input('description');
    }

    /**
     * @return string|null
     */
    public function getUrl(): string|null
    {
        return $this->input('url');
    }
}
