<?php

namespace App\Http\Requests\Question;

use Illuminate\Foundation\Http\FormRequest;

class UpdateQuestionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required|int',
            'test_id' => 'required|int',
            'title' => 'required|string',
            'variants' => 'required|array',
        ];
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->input('id');
    }

    /**
     * @return int
     */
    public function getTestId(): int
    {
        return $this->input('test_id');
    }

    /**
     * @return int
     */
    public function getTitle(): string
    {
        return $this->input('title');
    }

    /**
     * @return int
     */
    public function getVariants(): array
    {
        return $this->input('variants');
    }
}
