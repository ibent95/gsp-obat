<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>GSP - Penjualan obat</title>
	<link rel="stylesheet" href="assets/css/core.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
	<!-- [ Pre-loader ] start -->
	<div class="loader-bg">
		<div class="loader-track">
			<div class="loader-fill"></div>
		</div>
	</div>
	<!-- [ Pre-loader ] End -->

	<!-- Header -->
	@include('header')

	<!-- [ Main Content ] start -->
	<div class="pc-container">

		@include('content')

		<div class="pcoded-content">
			<!-- Button trigger modal -->
			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bootstrapModal" data-bs-whatever="@mdo" id="bootstrapModalButton">
				Launch demo modal
			</button>

			<div class="modal fade" id="bootstrapModal" tabindex="-1" aria-labelledby="bootstrapModalLabel" aria-hidden="true" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="bootstrapModalLabel">New message</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<form>
								<div class="mb-3">
									<label for="recipient-name" class="col-form-label">Recipient:</label>
									<input type="text" class="form-control" id="recipient-name">
								</div>
								<div class="mb-3">
									<label for="message-text" class="col-form-label">Message:</label>
									<textarea class="form-control" id="message-text"></textarea>
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary">Send message</button>
						</div>
					</div>
				</div>
			</div>

			<button type="button" class="btn btn-primary" id="sweetalertButton">
				Launch demo SweetAlert2
			</button>
		</div>

	</div>
	<!-- [ Main Content ] end -->

	<!-- [ Footer ] start -->
	<div class="pc-container">
		<div class="pcoded-content">
			@include('footer')
		</div>
	</div>
	<!-- [ Footer ] end -->

	<script src="assets/js/core.js"></script>
	<script src="assets/js/vendor.js"></script>
	<script src="assets/js/manifest.js"></script>
</body>

</html>