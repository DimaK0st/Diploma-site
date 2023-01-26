<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="keywords" content="онлайн навчання, онлайн навчання безкоштовно,
        курси онлайн навчання, школа онлайн навчання, навчання нуля онлайн безкоштовно, навчання мов онлайн,
        англійська онлайн навчання, дистанційне навчання онлайн, дистанційне навчання, дистанційне, навчання,
        школа дистанційного навчання, дистанційне навчання школи, школи дистанційного навчання, школа, університет, технікум, EducationalSite, Educational, educational"/>
    <meta name="language" content="uk">

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
