@extends('pages.templates.simple-template')

@section('title', 'О нас')

@section('head')
    @vite(['resources/js/hello.js'])
@endsection

@section('main')
    <h1>О нас</h1>
@endsection