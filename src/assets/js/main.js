// Scroll
$(function(){
  $('a[href^="#"]').click(function() {
    let speed = 400;
    let type = 'swing';
    let href= $(this).attr("href");
    let target = $(href == "#index" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, type);
    return false;
  });
});

// Accordion
$(function ($) {
  $(".answer").css("display", "none");
  $(".answer1").css("display", "none");
  $(".question").click(function () {
    $(".question").not(this).removeClass("open");
    $(".question").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});

//fadein
$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});

//page top
$(function(){
	var topBtn = $('.page-top');
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	topBtn.click(function () {
		$('body,html').animate({
					scrollTop: 0
		}, 500);
		return false;
	});
});



$(function(){
	// スライダーフェイド
	var $slide = $(".mk-mv .mk-mv__inner")
	$slide.slick({
		autoplaySpeed: 5000,
		slidesToShow: 1, //スライドが見える数
		slidesToScroll: 1, //スライドがスクロールする数
		speed: 1600, //スライドアニメーションの時間(ms)
		infinite: true, //無限スクロール
		draggable: false, //マウスドラッグでのスクロール
		autoplay: true, //自動再生
		//arrows: false,
		fade:true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows:false,
			}
		}]
	})
	.on({
		beforeChange: function(event, slick, currentSlide, nextSlide) {
			$(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
			$(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
		},
		afterChange: function() {
			$(".preve-slide", this).removeClass("preve-slide slide-animation");
		}
	});
	$slide.find(".slick-slide").eq(0).addClass("slide-animation");
	//▼最初の縦並び対策 cssで最初の画像以外を非表示に設定
	//$('.mk-mv .mk-mv__inner div img').delay(3000).css('display','block');
});
