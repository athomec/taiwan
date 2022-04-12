$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度
//---------------------捲動設定---------------------
$(".gotop").click(function () {
	$("html,body").animate({ scrollTop: 0 }, 300);
	return false;
})
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
		$(".gotop").fadeIn("fast");
		$("header").addClass("up");
	} else {
		$(".gotop").stop().fadeOut("fast");
		$("header").removeClass("up");
	}

	var index = 0;//各單元區塊順序
	var st = $(window).scrollTop();//現在捲軸位置
	var wh = $(window).height();//視窗高度
});


//---------------------頁籤設定------------------------
$('.js-check-menu').find(".js-check-button").click(function () {
	var selectedClassName = $(this).attr('data-target');
	$(".js-content-item").removeClass("show");
	$(selectedClassName).addClass("show");
	$(this).addClass("active");
	$(this).siblings('.js-check-button').removeClass('active');
});
$('.js-toggle-menu').find(".js-toggle-button").click(function () {
	$(this).toggleClass("active");
	$(this).siblings('.js-toggle-button').removeClass('active');
	
});

	//---------------------文字縮放設定----------------------
	$(".js-font-size").find("a").click(function () {
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
	})


	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).addClass("active");
		}

	});

	
	
	//消息輪播設定
	$('.flood-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });

	  $('.disaster-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });

	RESIZE();

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();

		if (WINDOW < 1200) {
			$("#locate-all").removeClass("show");
		} else {
			$("#locate-all").addClass("show");
		}
	}


})//JS尾端	