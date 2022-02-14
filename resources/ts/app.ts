import $ from 'jquery';
import jQuery from 'jquery';
//window.$ = jQuery;
import * as bootstrap from 'bootstrap';
import 'datatables.net';
import 'lodash';
import PerfectScrollbar from 'perfect-scrollbar';
import feather from '@feathersjs/feathers';
import ApexCharts from 'apexcharts';
import Swal from 'sweetalert2';

window: Window;


'use strict';

var flg = "0";

$(document).ready(function() {

	// Main configuration for body
	if ($(document).ready(function () {
		function e(e: any) {
			try {
				e.attr("placeholder").length
			} catch (e) {
				0
			}
			e.val().length > 0 ? e.parent(".form-group").addClass("fill") : e.parent(".form-group").removeClass("fill")
		}
		//feather.replace(),
		setTimeout(function () {
			$(".loader-bg").fadeOut("slow", function () {
				$(this).remove()
			})
		}, 400), $("body").hasClass("pc-horizontal") || addscroller(), $(".pc-horizontal").hasClass("navbar-overlay") && addscroller(), $(".hamburger:not(.is-active)").on("click", function () {
			$(this).hasClass("is-active") ? $(this).removeClass("is-active") : $(this).addClass("is-active")
		}), $("#overlay-menu").on("click", function () {
			menuclick(), $(".pc-sidebar").hasClass("pc-over-menu-active") ? rmovermenu() : ($(".pc-sidebar").addClass("pc-over-menu-active"), $(".pc-sidebar").append('<div class="pc-menu-overlay"></div>'), $(".pc-menu-overlay").on("click", function () {
				rmovermenu(), $(".hamburger").removeClass("is-active")
			}))
		}), $("#vertical-nav-toggle").on("click", function () {
			console.log("123"), $("body").hasClass("minimenu") ? ($("body").removeClass("minimenu"), menuclick()) : ($("body").addClass("minimenu"), $(".pc-navbar li:not(.pc-trigger) .pc-submenu").removeAttr("style"), collapseedge())
		}), $("#mobile-collapse").on("click", function () {
			$("body").hasClass("pc-horizontal") || menuclick(), $(".pc-sidebar").hasClass("mob-sidebar-active") ? rmmenu() : ($(".pc-sidebar").addClass("mob-sidebar-active"), $(".pc-sidebar").append('<div class="pc-menu-overlay"></div>'), $(".pc-menu-overlay").on("click", function () {
				rmmenu(), $(".hamburger").removeClass("is-active")
			}))
		}), $(".pc-horizontal #mobile-collapse").on("click", function () {
			$(".topbar").hasClass("mob-sidebar-active") ? rmmenu() : ($(".topbar").addClass("mob-sidebar-active"), $(".topbar").append('<div class="pc-menu-overlay"></div>'), $(".pc-menu-overlay").on("click", function () {
				rmmenu(), $(".hamburger").removeClass("is-active")
			}))
		}), $("#header-collapse").on("click", function () {
			$(".pc-header:not(.pc-mob-header)").hasClass("mob-header-active") ? rmthead() : ($(".pc-header:not(.pc-mob-header)").addClass("mob-header-active"), $(".pc-header:not(.pc-mob-header)").append('<div class="pc-md-overlay"></div>'), $(".pc-md-overlay").on("click", function () {
				rmthead()
			}))
		}), $("#headerdrp-collapse").on("click", function () {
			$(".pc-header:not(.pc-mob-header) .pc-mob-drp").hasClass("mob-drp-active") ? rmdrp() : ($(".pc-header:not(.pc-mob-header) .pc-mob-drp").addClass("mob-drp-active"), $(".pc-header:not(.pc-mob-header)").append('<div class="pc-md-overlay"></div>'), $(".pc-md-overlay").on("click", function () {
				rmdrp()
			}))
		}), $(".pc-horizontal .topbar .pc-navbar>li>a").on("click", function (e) {
			setTimeout(function () {
				$(this).parents(".dropdown").children(".dropdown-menu").removeAttr("style")
			}, 1e3)
		}), $(".form-v2 .form-control").each(function () {
			e($(this))
		}), $(".form-v2 .form-control").on("blur", function () {
			e($(this))
		}), $(".form-v2 .form-control").on("focus", function () {
			$(this).parent(".form-group").addClass("fill")
		}), $("body").hasClass("pc-horizontal") && horizontalmobilemenuclick(), $("body").hasClass("minimenu") && collapseedge()
	}), $(".email-more-link").on("click", function (e) {
		$(this).children("span").slideToggle(1)
	}), $(window).resize(function () {
		$("body").hasClass("pc-horizontal") || (rmmini(), menuclick()), $("body").hasClass("pc-horizontal") && rmactive()
	}), $(window).scroll(function () { }), $(window).on("load", function () {
		var e = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]')),
			a = (e.map(function (e) {
				return new bootstrap.Tooltip(e)
			}), [].slice.call(document.querySelectorAll('[data-toggle="popover"]')));
		a.map(function (e) {
			return new bootstrap.Popover(e)
		})
	}), $(".pc-sidebar .pc-navbar a").each(function () {
		var e = window.location.href.split(/[?#]/)[0];
		if ((this instanceof HTMLAnchorElement) && (this.href == e) && "" != $(this).attr("href") && ($(this).parent("li").addClass("active"), $(this).parent("li").parent().parent(".pc-hasmenu").addClass("active").addClass("pc-trigger"), $(this).parent("li").parent().parent(".pc-hasmenu").parent().parent(".pc-hasmenu").addClass("active").addClass("pc-trigger"), $(this).parent("li").parent().parent(".sidelink").addClass("active"), $(this).parents(".pc-tabcontent").addClass("active"), $("body").hasClass("tab-layout"))) {
			var a = $(".pc-tabcontent.active").attr("data-value");
			$(".tab-sidemenu > li").removeClass("active"), $('.tab-sidemenu > li > a[data-cont="' + a + '"]').parent("li").addClass("active")
		}
	}), $(".tab-sidemenu > ul >li").on("click", function () {
		var e = $(this).children("a").attr("data-cont");
		$(".navbar-content .pc-tabcontent").removeClass("active"), $(".tab-sidemenu > ul > li").removeClass("active"), $(this).addClass("active"), $('.navbar-content .pc-tabcontent[data-value="' + e + '"]').addClass("active")
	}), $(".pc-toggle-sidemenu").click(function () {
		$(".pc-toggle-sidemenu").hasClass("active") ? $(".pc-sideoverlay,.page-sidebar,.pc-toggle-sidemenu").removeClass("active") : $(".pc-sideoverlay,.page-sidebar,.pc-toggle-sidemenu").addClass("active")
	}), $(".pc-sideoverlay, .pc-toggle-sidemenu.active").click(function () {
		$(".pc-sideoverlay,.page-sidebar,.pc-toggle-sidemenu").removeClass("active")
	}), $("body").hasClass("layout-topbar") && $(".pc-header .list-unstyled > .dropdown").hover(function () {
		$(this).children(".dropdown-menu").addClass("show")
	}, function () {
		$(this).children(".dropdown-menu").removeClass("show")
	}), $("body").hasClass("pc-horizontal")) {
		var hpx: PerfectScrollbar, docH = $(window).height(),
			docW = $(window).width();
		docW! > 1024 && $(".pc-horizontal .topbar .pc-submenu .pc-hasmenu").hover(function () {
			var e = $(this).children(".pc-submenu"),
				a = e.offset(),
				s = a!.left,
				i = a!.top,
				o = e.width(),
				r = e.height(),
				c = $(window).scrollTop();
			if (s + o! <= docW! || e.addClass("edge"), !(i + r! <= docH!)) {
				var n = i - c!;
				e.addClass("scroll-menu"), e.css("max-height", "calc(100vh - " + n + "px)"), hpx = new PerfectScrollbar(".scroll-menu", {
					wheelSpeed: .5,
					swipeEasing: false,
					suppressScrollX: !0,
					wheelPropagation: true,
					minScrollbarLength: 40
				})
			}
		}, function () {
			hpx.destroy(), $(".scroll-menu").removeAttr("style"), $(".scroll-menu").removeClass("scroll-menu")
		})
	}

	$(".prod-likes .form-check-input").change(function () {
		$(this).is(":checked") ? ($(this).parent(".prod-likes").append('<div class="pc-like"><div class="like-wrapper"><span><span class="pc-group"><span class="pc-dots"></span><span class="pc-dots"></span><span class="pc-dots"></span><span class="pc-dots"></span></span></span></div></div>'), $(this).parent(".prod-likes").find(".pc-like").addClass("pc-like-animate"), setTimeout(function () {
			$(this).parent(".prod-likes").find(".pc-like").remove()
		}, 3e3)) : $(this).parent(".prod-likes").find(".pc-like").remove()
	});

	// Timeout for floatchart
	setTimeout(function() {
		floatchart()
	}, 700);

	// [ campaign-scroll ] start
	let fs = new PerfectScrollbar('.feed-scroll', {
		wheelSpeed: .5,
		swipeEasing: false,
		wheelPropagation: true,
		minScrollbarLength: 40,
	});
	let ps = new PerfectScrollbar('.pro-scroll', {
		wheelSpeed: .5,
		swipeEasing: false,
		wheelPropagation: true,
		minScrollbarLength: 40,
	});
	// [ campaign-scroll ] end
});

function horizontalmobilemenuclick() {
	$(window)[0].innerWidth;
	$(".pc-navbar li").off("click"), $(".pc-navbar > li:not(.pc-caption)").on("click", function () {
		$(this).children(".pc-submenu").removeAttr("style"), $(this).hasClass("pc-trigger") ? $(this).removeClass("pc-trigger") : ($("li.pc-trigger").removeClass("pc-trigger"), $(this).addClass("pc-trigger"))
	}), $(".pc-navbar > li:not(.pc-caption) li").on("click", function (e) {
		e.stopPropagation(), $(this).hasClass("pc-trigger") ? $(this).removeClass("pc-trigger") : ($(this).parent(".pc-submenu").find("li.pc-trigger").removeClass("pc-trigger"), $(this).addClass("pc-trigger"))
	})
}

function addscroller() {
	if (rmmini(), menuclick(), $(".navbar-content")[0]) {
		new PerfectScrollbar(".navbar-content", {
			wheelSpeed: .5,
			swipeEasing: false,
			suppressScrollX: !0,
			wheelPropagation: true,
			minScrollbarLength: 40
		})
	}
}

function menuclick() {
	$(window)[0].innerWidth;
	$(".pc-navbar li").off("click"), $("body").hasClass("minimenu") || ($(".pc-navbar li:not(.pc-trigger) .pc-submenu").slideUp(), $(".pc-navbar > li:not(.pc-caption)").on("click", function () {
		$(this).hasClass("pc-trigger") ? ($(this).removeClass("pc-trigger"), $(this).children(".pc-submenu").slideUp("fast")) : ($("li.pc-trigger").children(".pc-submenu").slideUp("fast"), $("li.pc-trigger").removeClass("pc-trigger"), $(this).addClass("pc-trigger"), $(this).children(".pc-submenu").slideDown("fast"))
	}), $(".pc-navbar > li:not(.pc-caption) li").on("click", function (e) {
		e.stopPropagation(), $(this).hasClass("pc-trigger") ? ($(this).removeClass("pc-trigger"), $(this).children(".pc-submenu").slideUp("fast")) : ($(this).parent(".pc-submenu").find("li.pc-trigger").children(".pc-submenu").slideUp("fast"), $(this).parent(".pc-submenu").find("li.pc-trigger").removeClass("pc-trigger"), $(this).addClass("pc-trigger"), $(this).children(".pc-submenu").slideDown("fast"))
	}))
}

function rmdrp() {
	$(".pc-header:not(.pc-mob-header) .pc-mob-drp").removeClass("mob-drp-active"), $(".pc-header:not(.pc-mob-header) .pc-md-overlay").remove()
}

function rmthead() {
	$(".pc-header:not(.pc-mob-header)").removeClass("mob-header-active"), $(".pc-header:not(.pc-mob-header) .pc-md-overlay").remove()
}

function rmmenu() {
	$(".pc-sidebar").removeClass("mob-sidebar-active"), $(".topbar").removeClass("mob-sidebar-active"), $(".pc-sidebar .pc-menu-overlay").remove(), $(".topbar .pc-menu-overlay").remove()
}

function rmovermenu() {
	$(".pc-sidebar").removeClass("pc-over-menu-active"), $(".topbar").removeClass("mob-sidebar-active"), $(".pc-sidebar .pc-menu-overlay").remove(), $(".topbar .pc-menu-overlay").remove()
}

function rmactive() {
	$(".pc-sidebar .pc-navbar li").removeClass("active"), $(".pc-sidebar .pc-navbar li").removeClass("pc-trigger"), $(".topbar .dropdown").removeClass("show"), $(".topbar .dropdown-menu").removeClass("show"), $(".pc-sidebar .pc-menu-overlay").remove(), $(".topbar .pc-menu-overlay").remove()
}

function rmmini() {
	var e = $(window)[0].innerWidth;
	e <= 1024 ? $("body").hasClass("minimenu") && ($("body").removeClass("minimenu"), flg = "1") : e > 1024 && "1" == flg && ($("body").addClass("minimenu"), flg = "0")
}

function collapseedge() {
	var e: PerfectScrollbar, a = $(window).height();
	1
	$(window).width()! > 1024 && $(".minimenu .pc-sidebar .pc-submenu .pc-hasmenu").hover(function () {
			var s = $(this).children(".pc-submenu"),
				i = s.offset(),
				o = (i!.left, i!.top),
				r = (s.width(), s.height()),
				c = $(window).scrollTop();
			if (!(o? + r! <= a!)) {
				var n = o! - c! ;
				s.addClass("scroll-menu"), s.css("max-height", "calc(100vh - " + n + "px)"), e = new PerfectScrollbar(".scroll-menu", {
					wheelSpeed: .5,
					swipeEasing: false,
					suppressScrollX: !0,
					wheelPropagation: true,
					minScrollbarLength: 40
				})
			}
		}, function () {
			e.destroy(), $(".scroll-menu").removeAttr("style"), $(".scroll-menu").removeClass("scroll-menu")
	})
}

function floatchart() {
	// [ support-chart ] start
	$(function() {
		var options1 = {
			chart: {
				type: 'area',
				height: 85,
				sparkline: {
					enabled: true
				}
			},
			colors: ["#7267EF"],
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			series: [{
				data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
			}],
			tooltip: {
				fixed: {
					enabled: false
				},
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function(seriesName = 'Ticket') {
							return seriesName;
						}
					}
				},
				marker: {
					show: false
				}
			}
		}
		new ApexCharts(document.querySelector("#support-chart"), options1).render();
		var options2 = {
			chart: {
				type: 'bar',
				height: 85,
				sparkline: {
					enabled: true
				}
			},
			colors: ["#7267EF"],
			plotOptions: {
				bar: {
					columnWidth: '70%'
				}
			},
			series: [{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
			}],
			xaxis: {
				crosshairs: {
					width: 1
				},
			},
			tooltip: {
				fixed: {
					enabled: false
				},
				x: {
					show: false
				},
				y: {
					title: {
						formatter: function(seriesName = 'seriesName') {
							return seriesName;
						}
					}
				},
				marker: {
					show: false
				}
			}
		}
		new ApexCharts(document.querySelector("#support-chart1"), options2).render();
	});
	// [ support-chart ] end
	// [ account-chart ] start
	$(function() {
		$(function() {
			var options = {
				chart: {
					height: 350,
					type: 'line',
					stacked: false,
				},
				stroke: {
					width: [0, 3],
					curve: 'smooth'
				},
				plotOptions: {
					bar: {
						columnWidth: '50%'
					}
				},
				colors: ['#7267EF', '#c7d9ff'],
				series: [{
					name: 'Total Sales',
					type: 'column',
					data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
				}, {
					name: 'Average',
					type: 'line',
					data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
				}],
				fill: {
					opacity: [0.85, 1],
				},
				labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
				markers: {
					size: 0
				},
				xaxis: {
					type: 'datetime'
				},
				yaxis: {
					min: 0
				},
				tooltip: {
					shared: true,
					intersect: false,
					y: {
						formatter: function(y: number) {
							if (typeof y !== "undefined") {
								return "$ " + y.toFixed(0);
							}
							return y;

						}
					}
				},
				legend: {
					labels: {
						useSeriesColors: true
					},
					markers: {
						customHTML: [
							function() {
								return ''
							},
							function() {
								return ''
							}
						]
					}
				}
			}
			var chart = new ApexCharts(
				document.querySelector("#account-chart"),
				options
			);
			chart.render();
		});
	});
	// [ account-chart ] end
	// [ satisfaction-chart ] start
	$(function() {
		var options = {
			chart: {
				height: 260,
				type: 'pie',
			},
			series: [66, 50, 40, 30],
			labels: ["extremely Satisfied", "Satisfied", "Poor", "Very Poor"],
			legend: {
				show: true,
				offsetY: 50,
			},
			dataLabels: {
				enabled: true,
				dropShadow: {
					enabled: false,
				}
			},
			theme: {
				monochrome: {
					enabled: true,
					color: '#7267EF',
				}
			},
			responsive: [{
				breakpoint: 768,
				options: {
					chart: {
						height: 320,

					},
					legend: {
						position: 'bottom',
						offsetY: 0,
					}
				}
			}]
		}
		var chart = new ApexCharts(document.querySelector("#satisfaction-chart"), options);
		chart.render();
	});
	// [ satisfaction-chart ] end
}

/**
 * Custom
 */



const boortapModal = document.getElementById('bootstrapModal');
boortapModal?.addEventListener('show.bs.modal', function (this: HTMLElement, event: Event) {
	const recipient = 'Ibnu' ;
	// If necessary, you could initiate an AJAX request here
	// and then do the updating in a callback.

	// Update the modal's content.
	let modalTitle = boortapModal.querySelector('.modal-title') as HTMLHeadingElement;
	let modalBodyInput = boortapModal.querySelector('.modal-body input') as HTMLInputElement;

	// Change value
	modalTitle.textContent = 'New message to ' + recipient;
	modalBodyInput.value = recipient || '';
});

const sweetalertButton = document.getElementById('sweetalertButton');
sweetalertButton?.addEventListener('click', function (this: HTMLElement) {
	Swal.fire({
		title: 'Error!',
		text: 'Do you want to continue',
		icon: 'error',
		confirmButtonText: 'Cool'
	});
});