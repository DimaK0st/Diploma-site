<?php

namespace App\Http\Dtos;

class OptionDTO {
    public $answer;
    public $correct;

    public function __construct($data)
    {
        $this->answer = $data['answer'];
        $this->correct = $data['correct'];
    }
}
