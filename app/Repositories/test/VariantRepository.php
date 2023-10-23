<?php

namespace App\Repositories\test;

use App\Http\Dtos\OptionDTO;
use App\Models\Variant;

class VariantRepository
{
    public function create(array $variant, $id){
            $variantModel = new Variant();
            $variantModel->question_id = $id;
            $variantModel->text = $variant['text'];
            $variantModel->correct = $variant['correct'];
            $variantModel->save();
    }

    public function createFromAi(OptionDTO $optionDTO, $id){
            $variantModel = new Variant();
            $variantModel->question_id = $id;
            $variantModel->text = $optionDTO->variant;
            $variantModel->correct = $optionDTO->correct;
            $variantModel->save();

            return $variantModel;
    }

    public function update(array $variant){
            $variantModel = Variant::query()
                ->where('id', '=', $variant['id']);
            $variantModel->text = $variant['text'];
            $variantModel->correct = $variant['correct'];
            $variant->save();
    }
}
