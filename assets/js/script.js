$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	//---------------------捲動設定---------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>80px
			$(".gotop").fadeIn("fast");
			$("header").addClass("up");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("up");
		}

		if ($(this).scrollTop() > 80) {
			$(".js-side-menu").addClass("fixed");
		} else {
			$(".js-side-menu").removeClass("fixed");
		}
	});

	//內頁側邊選單設定
	$(".js-page-navbar-toggler").click(function () {
		$(".js-side-menu").toggleClass("open");
	})

	//---------------------頁籤設定------------------------
	$('.js-check-menu').find(".js-check-button").click(function () {
		var selectedClassName = $(this).attr('data-target');
		$(".js-content-item").removeClass("show");
		$(selectedClassName).addClass("show");
		$('.js-check-menu').find(".js-check-button").removeClass('active');
		$(this).addClass("active");
	});

	$('.js-toggle-menu').find(".js-toggle-button").click(function () {
		$(this).toggleClass("active");
		$(this).siblings('.js-toggle-button').removeClass('active');

	});
	$('.js-toggle-button').click(function () {
		$("html,body").animate(
			{
				scrollTop: $('.js-toggle-menu').offset().top - 160 //直接到相對位置
			},
			200
		);
	})
	$('.dropdown').hover(function () {
		$(this).find(".dropdown-menu").addClass('show');
	}, function () {
		$(this).find(".dropdown-menu").removeClass('show');
	});


	//---------------------文字縮放設定----------------------
	/*$(".js-font-size").find("a").click(function () {
		$(".js-font-size").find("a").removeClass("now");
		$(this).addClass("now");
		if ($(this).attr("data-size") == "txt-sm") {
			$("body").css('font-size', '.9em');
		} else if ($(this).attr("data-size") == "txt-md") {
			$("body").css('font-size', '1em');
		} else if ($(this).attr("data-size") == "txt-lg") {
			$("body").css('font-size', '1.1em');
		}
		return false;
	})*/


	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).addClass("active");
		}

	});


	RESIZE();

	$(window).resize(function () {
		RESIZE();
	});

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();
		if (WINDOW < 1201) {
			$(".js-side-menu").find(".js-anchor-link").click(function () {
				$(".js-page-navbar-toggler").trigger("click");
			});
			$(".js-navbar-nav").find(".js-anchor-link").click(function () {
				$(".js-navbar-toggler").trigger("click");
			});
		}
	}
	function anchor() {
		$(".js-anchor-link").click(function () {
			let target = $(this).attr('href');
			$("html,body").animate(
				{
					scrollTop: $(target).offset().top - 120 //直接到相對位置
				},
				200
			);
			return false;
		});
	}
	


})//JS尾端	