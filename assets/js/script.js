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

	if ($(this).scrollTop()>80) { 
		$(".js-side-menu").addClass("fixed");
	} else {
		$(".js-side-menu").removeClass("fixed");
	}
});

//內頁側邊選單設定
$(".js-page-navbar-toggler").click(function() {
	$(".js-side-menu").toggleClass("open");
})
$(".js-anchor-link").click(function() {
	let target=$(this).attr('href');
	$("html,body").animate(
		{
		  scrollTop: $(target).offset().top - 120 //直接到相對位置
		},
		200
	  );
	  return false;
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

$('.dropdown').hover(function() {
	$(this).find(".dropdown-menu").addClass('show');
},function() {
	$(this).find(".dropdown-menu").removeClass('show');
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

/*	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();
	}*/


})//JS尾端	