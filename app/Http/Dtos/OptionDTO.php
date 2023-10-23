<?php

namespace App\Http\Dtos;

class OptionDTO {
    public $variant;
    public $correct;

    public function __construct($data)
    {
        $this->variant = $data['answer'];
        $this->correct = $data['correct'];
    }
}
