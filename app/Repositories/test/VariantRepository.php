<?php

namespace App\Repositories\test;

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

    public function update(array $variant){
            $variantModel = Variant::query()
                ->where('id', '=', $variant['id']);
            $variantModel->text = $variant['text'];
            $variantModel->correct = $variant['correct'];
            $variant->save();
    }
}
