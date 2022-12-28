<?php

namespace App\Http\Requests\Result;

use Illuminate\Foundation\Http\FormRequest;

class CreateResultRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'test_id' => 'required|int',
            'result' => 'required|int',
        ];
    }

    /**
     * @return string
     */
    public function getTestId(): int
    {
        return $this->input('test_id');
    }

    /**
     * @return int
     */
    public function getResult(): int
    {
        return $this->input('result');
    }
}
