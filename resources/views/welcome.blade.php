<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{asset('js/app.css')}}" rel="stylesheet"/>
        <link href="{{asset('js/reset.css')}}" rel="stylesheet"/>

        @viteReactRefresh
        @vite('resources/js/app.jsx')

    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>
</html>
