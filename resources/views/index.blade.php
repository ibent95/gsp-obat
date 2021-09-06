<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>GSP - Penjualan obat</title>
		<link rel="stylesheet" href="assets/css/core.css">
	</head>
	<body>

		@include('header')

		<div class="container">

			<h3>Home</h3>

			<!-- Button trigger modal -->
			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testModal">
			Launch demo modal
			</button>

		</div>

		@include('footer')

		<script src="assets/js/core.js"></script>
	</body>
</html>