<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    </head>
    <body>
        @php
            use Illuminate\Foundation\Application;
            $hIndex = rand(1, 6);
        @endphp

        <h{{ $hIndex }}>{{rand()}}</h{{ $hIndex }}>
        <h3>
            unless - отобразить, если выражение true
        </h3>

        <h3>
            isset - отобразить, если переменная существует и не равна null
        </h3>

        <style>
            .text {
                font-style: italic;
            }

            .error {
                color: red;
            }
        </style>

        <span
            @class([
                'text',
                'error' => rand(1, 2) == 1
            ])
        >
            @@class = @class
        </span>

        @unless(rand(1, 5) == 3)
            <h1>Вам повезло</h1>
        @endunless
        <table>
            <tr>
                <td>Сообщение</td>
                <td>{{$message}}</td>
            </tr>
            
            @isset($role)
                <tr>
                    <td>Роль</td>
                    <td>{{$role}}</td>
                </tr>

                @if ($role == 'admin')
                    <tr>
                        <td>База данных</td>
                        <td>{{json_encode($db)}}</td>
                    </tr>
                @elseif ($role == 'guest')

                @else
                    <tr>
                        <td>База данных</td>
                        <td>Обратитель к администратору</td>
                    </tr>
                @endif
            @endisset
        </table>

        <ul>
            @for($i = 1; $i <= 6; ++$i)
                <li>
                    <h{{$i}}>{{$i}}</h{{$i}}>
                </li>
            @endfor
        </ul>

        @isset($db)
            <table>
                @foreach ($db as $key=>$value)
                    @if($loop->odd)
                        @continue
                    @endif
                    <tr>
                        <td>{{$key}}</td>
                        <td>{{$value}}</td>
                    </tr>
                @endforeach
            </table>
        @endisset

        @forelse($array as $item)
            <span>{{$item}}</span>
        @empty
            <p>Пустой массив</p>
        @endforelse


        <div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
            Laravel v{{ Application::VERSION }} (PHP v{{ PHP_VERSION }})
        </div>
    </body>
</html>
