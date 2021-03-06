<script>
	//let table = new DataTable('#table-list', {
	//	// options
	//});
</script>
<div class="pcoded-content">
	<!-- [ breadcrumb ] start -->
	<div class="page-header">
		<div class="page-block">
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="page-header-title">
						<h5 class="m-b-10">{{ $title }}</h5>
					</div>
					<ul class="breadcrumb">
						<li class="breadcrumb-item"><a href="index.html">Home</a></li>
						<li class="breadcrumb-item">Master data</li>
						<li class="breadcrumb-item">{{ $title }}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- [ breadcrumb ] end -->
	<!-- [ Main Content ] start -->
	<div class="row">
		<!-- support-section start -->
		<div class="col-md-12 col-xl-12">
			<!--<h5>Header and Footer</h5>
			<hr>-->
			<div class="card">
				<h5 class="card-header">{{ $title }}</h5>
				<div class="card-body">

					<!-- Action buttons -->
					<div class="row mb-4">
						<div class="col-md d-flex flex-row">
							<div class="btn-group">
								<button class="btn btn-sm btn-shadow btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Expor</button>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#!">.pdf</a>
									<a class="dropdown-item" href="#!">Another action</a>
									<a class="dropdown-item" href="#!">Something else here</a>-->
								</div>
							</div>
						</div>
						<div class="col-md d-flex flex-row-reverse">
							<button class="btn btn-sm btn-shadow btn-primary">Tambah</button>
						</div>
					</div>

					<!-- Table -->
					<div class="row mb-3">
						<div class="col-md">
							<div class="table-wrapper">
								<table class="table table-striped table-condensed table-hover" id="table-list">
									<thead>
										<tr>
											<th>#</th>
											<th>Tanggal transaksi</th>
											<th>Jumlah item</th>
											<th>Aksi</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="4">
												<div class="text-center">Belum ada data.</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<!-- customer-section end -->
	</div>
	<!-- [ Main Content ] end -->
</div>