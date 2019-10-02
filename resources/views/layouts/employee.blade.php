@extends('layouts.app')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/pages/login_page.css') }}">
@endsection

@section('content')
    <router-view name="navBar"></router-view>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <router-view name="sideBar"></router-view>
            <router-view></router-view>
        </div>
    </div>
@endsection