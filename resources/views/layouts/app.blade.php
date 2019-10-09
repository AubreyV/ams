<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>AMS</title>

        <!-- add icon link -->
        <link 
            rel = "icon" 
            href = "https://img.icons8.com/color/124/000000/rick-sanchez.png" 
            type = "image">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        @yield('css')
    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
