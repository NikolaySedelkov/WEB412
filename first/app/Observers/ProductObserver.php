<?php

namespace App\Observers;

use App\Models\Product;
class ProductObserver {
    public function saving(Product $product) {
        $request = request();
        if($request ->hasFile('avatar')) {
            $file = $request->file('avatar');
            $product->avatar_filename = $file->getClientOriginalName();
        }
    }
}
