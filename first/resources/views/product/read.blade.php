@php
    use App\Models\Product;
@endphp

<style>
    .container_gallery {
        display: flex;
        direction: row;

        gap: 5px;
    }
    
</style>

<div>
    <ul>
        @foreach(Product::all() as $product)
            <li>
                <h1>
                    {{ $product['name'] }}
                </h1>
                <i>
                    {{ $product['description'] }}
                </i>
                </br>
                <img
                    src="{{ Storage::url($product['avatar']) }}"
                />
                @isset($product['gallery'])
                    <div>
                        @foreach(json_decode($product['gallery']) as $imgSrc)
                            <img
                                height="40px" 
                                src="{{ Storage::url( $imgSrc) }}"
                            />
                        @endforeach
                    </div>
                @endisset
            </li>
        @endforeach
    </ul>
</div>