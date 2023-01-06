<?php

namespace App\Services\test;

use App\Repositories\test\VariantRepository;

class VariantService
{
    public function __construct(private VariantRepository $variantRepository)
    {
    }

    public function create(array $variants, $id)
    {
        foreach ($variants as $variant) {
            $this->variantRepository->create($variant, $id);
        }
    }

    public function update(array $variants)
    {
        foreach ($variants as $variant) {
            $this->variantRepository->update($variant);
        }
    }
}
