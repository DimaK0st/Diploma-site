<?php

namespace App\Http\Requests\Test;

use Illuminate\Foundation\Http\FormRequest;

class DeleteTestRequest extends FormRequest
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
        ];
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->input('id');
    }
}
