@extends('layouts.app')

@section('content')
    Hi! {{ auth()->user() }}
@endsection