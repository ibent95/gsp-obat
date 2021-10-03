<!-- [ Mobile header ] start -->
<div class="pc-mob-header pc-header">
	<div class="pcm-logo">
		<img src="{{ url('assets/images/logo.svg') }}" alt="" class="logo logo-lg">
	</div>
	<div class="pcm-toolbar">
		<a href="#!" class="pc-head-link" id="mobile-collapse">
			<div class="hamburger hamburger--arrowturn">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<a href="#!" class="pc-head-link" id="headerdrp-collapse">
			<i data-feather="align-right"></i>
		</a>
		<a href="#!" class="pc-head-link" id="header-collapse">
			<i data-feather="more-vertical"></i>
		</a>
	</div>
</div>
<!-- [ Mobile header ] End -->

<!-- [ navigation menu ] start -->
<nav class="pc-sidebar ">
	<div class="navbar-wrapper">
		<div class="m-header">
			<a href="{{ url()->to('/') }}" class="b-brand">
				<!-- ========   change your logo hear   ============ -->
				<img src="{{ url('assets/images/logo.svg') }}" alt="" class="logo logo-lg">
				<img src="{{ url('assets/images/logo-sm.svg') }}" alt="" class="logo logo-sm">
			</a>
		</div>
		<div class="navbar-content">
			<ul class="pc-navbar">
				<li class="pc-item pc-caption">
					<label>Navigation</label>
				</li>
				<li class="pc-item">
					<a href="index.html" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">home</i></span><span class="pc-mtext">Dashboard</span></a>
				</li>
				<li class="pc-item pc-caption">
					<label>Elements</label>
					<span>UI Components</span>
				</li>
				<li class="pc-item pc-hasmenu">
					<a href="#!" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">business_center</i></span><span class="pc-mtext">Basic</span><span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
					<ul class="pc-submenu">
						<li class="pc-item"><a class="pc-link" href="bc_alert.html">Alert</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_button.html">Button</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_badges.html">Badges</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_breadcrumb-pagination.html">Breadcrumb & paggination</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_card.html">Cards</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_collapse.html">Collapse</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_carousel.html">Carousel</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_progress.html">Progress</a></li>
						<li class="pc-item"><a class="pc-link" href="bc_modal.html">Modal</a></li>

						<li class="pc-item"><a class="pc-link" href="bc_typography.html">Typography</a></li>
					</ul>
				</li>
				<li class="pc-item">
					<a href="icon-feather.html" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">history_edu</i></span><span class="pc-mtext">Icons</span></a>
				</li>
				<li class="pc-item pc-caption">
					<label>Forms</label>
				</li>
				<li class="pc-item pc-hasmenu">
					<a href="#!" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">edit</i></span><span class="pc-mtext">Forms Elements</span><span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
					<ul class="pc-submenu">
						<li class="pc-item"><a class="pc-link" href="form_elements.html">Form Basic</a></li>
						<li class="pc-item"><a class="pc-link" href="form2_input_group.html">Input Groups</a></li>
						<li class="pc-item"><a class="pc-link" href="form2_checkbox.html">Checkbox</a></li>
						<li class="pc-item"><a class="pc-link" href="form2_radio.html">Radio</a></li>
					</ul>
				</li>
				<li class="pc-item pc-caption">
					<label>table</label>
				</li>
				<li class="pc-item">
					<a href="tbl_bootstrap.html" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">table_rows</i></span><span class="pc-mtext">Bootstrap table</span></a>
				</li>
				<li class="pc-item pc-caption">
					<label>Chart & Maps</label>
					<span>Tones of readymade charts</span>
				</li>
				<li class="pc-item">
					<a href="chart-apex.html" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">bubble_chart</i></span><span class="pc-mtext">Chart</span></a>
				</li>
				<li class="pc-item">
					<a href="map-google.html" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">my_location</i></span><span class="pc-mtext">Maps</span></a>
				</li>
				<li class="pc-item pc-caption">
					<label>Pages</label>
					<span>Redymade Pages</span>
				</li>
				<li class="pc-item pc-hasmenu">
					<a href="#!" class="pc-link"><span class="pc-micon"><i class="material-icons-two-tone">https</i></span><span class="pc-mtext">Authentication</span><span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
					<ul class="pc-submenu">
						<li class="pc-item"><a class="pc-link" href="auth-signup.html" target="_blank">Sign up</a></li>
						<li class="pc-item"><a class="pc-link" href="auth-signin.html" target="_blank">Sign in</a></li>
					</ul>
				</li>
				<li class="pc-item pc-caption">
					<label>Other</label>
					<span>Extra more things</span>
				</li>
				<li class="pc-item pc-hasmenu">
					<a href="#!" class="pc-link"><span class="pc-micon"><i class="material-icons-two-tone">list_alt</i></span><span class="pc-mtext">Menu levels</span><span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
					<ul class="pc-submenu">
						<li class="pc-item"><a class="pc-link" href="#!">Menu Level 2.1</a></li>
						<li class="pc-item pc-hasmenu">
							<a href="#!" class="pc-link">Menu level 2.2<span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
							<ul class="pc-submenu">
								<li class="pc-item"><a class="pc-link" href="#!">Menu level 3.1</a></li>
								<li class="pc-item"><a class="pc-link" href="#!">Menu level 3.2</a></li>
								<li class="pc-item pc-hasmenu">
									<a href="#!" class="pc-link">Menu level 3.3<span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
									<ul class="pc-submenu">
										<li class="pc-item"><a class="pc-link" href="#!">Menu level 4.1</a></li>
										<li class="pc-item"><a class="pc-link" href="#!">Menu level 4.2</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li class="pc-item pc-hasmenu">
							<a href="#!" class="pc-link">Menu level 2.3<span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
							<ul class="pc-submenu">
								<li class="pc-item"><a class="pc-link" href="#!">Menu level 3.1</a></li>
								<li class="pc-item"><a class="pc-link" href="#!">Menu level 3.2</a></li>
								<li class="pc-item pc-hasmenu">
									<a href="#!" class="pc-link">Menu level 3.3<span class="pc-arrow"><i data-feather="chevron-right"></i></span></a>
									<ul class="pc-submenu">
										<li class="pc-item"><a class="pc-link" href="#!">Menu level 4.1</a></li>
										<li class="pc-item"><a class="pc-link" href="#!">Menu level 4.2</a></li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="pc-item"><a href="sample-page.html" class="pc-link "><span class="pc-micon"><i class="material-icons-two-tone">storefront</i></span><span class="pc-mtext">Sample page</span></a></li>

			</ul>
		</div>
	</div>
</nav>
<!-- [ navigation menu ] end -->
<!-- [ Header ] start -->
<header class="pc-header ">
	<div class="header-wrapper">
		<div class="mr-auto pc-mob-drp">
			<ul class="list-unstyled">
				<li class="dropdown pc-h-item">
					<a class="pc-head-link active dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
						Level
					</a>
					<div class="dropdown-menu pc-h-dropdown">
						<a href="#!" class="dropdown-item">
							<i class="material-icons-two-tone">account_circle</i>
							<span>My Account</span>
						</a>
						<div class="pc-level-menu">
							<a href="#!" class="dropdown-item">
								<i class="material-icons-two-tone">list_alt</i>
								<span class="float-right"><i data-feather="chevron-right" class="mr-0"></i></span>
								<span>Level2.1</span>
							</a>
							<div class="dropdown-menu pc-h-dropdown">
								<a href="#!" class="dropdown-item">
									<i class="fas fa-circle"></i>
									<span>My Account</span>
								</a>
								<a href="#!" class="dropdown-item">
									<i class="fas fa-circle"></i>
									<span>Settings</span>
								</a>
								<a href="#!" class="dropdown-item">
									<i class="fas fa-circle"></i>
									<span>Support</span>
								</a>
								<a href="#!" class="dropdown-item">
									<i class="fas fa-circle"></i>
									<span>Lock Screen</span>
								</a>
								<a href="#!" class="dropdown-item">
									<i class="fas fa-circle"></i>
									<span>Logout</span>
								</a>
							</div>
						</div>
						<a href="#!" class="dropdown-item">
							<i class="material-icons-two-tone">settings</i>
							<span>Settings</span>
						</a>
						<a href="#!" class="dropdown-item">
							<i class="material-icons-two-tone">support</i>
							<span>Support</span>
						</a>
						<a href="#!" class="dropdown-item">
							<i class="material-icons-two-tone">https</i>
							<span>Lock Screen</span>
						</a>
						<a href="#!" class="dropdown-item">
							<i class="material-icons-two-tone">chrome_reader_mode</i>
							<span>Logout</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
		<div class="ml-auto">
			<ul class="list-unstyled">
				<li class="dropdown pc-h-item">
					<a class="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
						<i class="material-icons-two-tone">search</i>
					</a>
					<div class="dropdown-menu dropdown-menu-right pc-h-dropdown drp-search">
						<form class="px-3">
							<div class="form-group mb-0 d-flex align-items-center">
								<i data-feather="search"></i>
								<input type="search" class="form-control border-0 shadow-none" placeholder="Search here. . .">
							</div>
						</form>
					</div>
				</li>
				<li class="dropdown pc-h-item">
					<a class="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
						<img src="assets/images/user/avatar-2.jpg" alt="user-image" class="user-avtar">
						<span>
							<span class="user-name">Joseph William</span>
							<span class="user-desc">Administrator</span>
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right pc-h-dropdown">
						<div class=" dropdown-header">
							<h5 class="text-overflow m-0"><span class="badge bg-light-primary"><a href="https://gumroad.com/dashboardkit" target="_blank">Upgrade to Pro</a></span></h5>
						</div>

						<a href="auth-signin.html" class="dropdown-item">
							<i class="material-icons-two-tone">chrome_reader_mode</i>
							<span>Logout</span>
						</a>
					</div>
				</li>
			</ul>
		</div>

	</div>
</header>
<!-- [ Header ] end -->