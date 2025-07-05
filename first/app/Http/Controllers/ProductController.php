<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Intervention\Image\Facades\Image;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class ProductController extends VoyagerBaseController
{
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');

            $originalName = $file->getClientOriginalName();
            $request->merge([
                'avatar_filename' => $originalName,
            ]);
        }

        return parent::update($request, $id);
    }
}
