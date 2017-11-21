<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>ReactJs Blog</title>
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/bangadam/abc-game/master/public/favicon.ico">
    <!-- Bootstrap core CSS -->
    <link href="{{asset('blog/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="{{asset('blog/vendor/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="{{asset('blog/css/clean-blog.min.css')}}" rel="stylesheet">

  </head>

    <body>

        <div id="root"></div>


    <script src="{{asset('js/app.js')}}" ></script>
    <!-- Bootstrap core JavaScript -->
    <script src="{{asset('blog/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('blog/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <!-- Custom scripts for this template -->
    <script src="{{asset('blog/js/clean-blog.min.js')}}"></script>
    </body>
</html>