<html>
    <head>
        <title>
            @yield('title')
        </title>
        
        @vite(['resources/css/template.css'])
        @yield('head')
    </head>

    <body>
        <header>
            <div>
                <img height="50px" src='https://habrastorage.org/getpro/habr/upload_files/060/53d/8b6/06053d8b668c600ba3187e10ea54adcf.png'/>
            <div>
            <a href='/'>Главная</a>
        </header>
    </body>

    <main>
        @yield('main')
    </main>
</html>