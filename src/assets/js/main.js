

// 動きのきっかけとなるアニメーションの名前を定義
function cssAnime() {
	$('.js-ani').each(function () { //js-aniというクラス名が
		var elemPos = $(this).offset().top + 200;//要素より、200px下の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('js-ani-on');// 画面内に入ったらjs-ani-onというクラス名を追記
		} else {
			$(this).removeClass('js-ani-on');// 画面外に出たらjs-ani-onというクラス名を外す
			//一度だけ動かしたい場合は削除
		}
	});
}

//テキストを1文字ずつ span で分割
function cssAnimeSplit() {
	jQuery('.js-split').children().addBack().contents().each(function() {
		if (this.nodeType === 3) { // テキストノードの場合
			jQuery(this).replaceWith(jQuery(this).text().replace(/(\S)/g, '<span class="char">$&</span>'));
		}
	});
}
// function cssAnimeSplit() {
// 	jQuery('.js-split').children().addBack().contents().each(function() {
// 		jQuery(this).replaceWith(jQuery(this).text().replace(/(\S)/g, '<span class="char">$&</span>'));
// 	});
// }

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	cssAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	cssAnime();/* アニメーション用の関数を呼ぶ*/
	cssAnimeSplit();//テキストを1文字ずつ span で分割
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//----------------------------------------------------
// ナビのドロップダウン
// PCの時はホバーで、SPの時はクリックで開く
//----------------------------------------------------

if (window.matchMedia('(max-width: 768px)').matches) {
	//スマホ処理
	$('.header__nav li').click(function(){
		$("ul:not(:animated)", this).slideToggle(200);
	}, function(){
		$("ul",this).slideToggle(200);
		$(this).toggleClass('open_menu');
	});
} else if (window.matchMedia('(min-width:769px)').matches) {
	//PC処理
	$('.header__nav li').hover(function(){
		$("ul:not(:animated)", this).slideDown(200);
	}, function(){
		$("ul",this).slideUp(200);
	});
}




//----------------------------------------------------
// ドロワーメニュー
//----------------------------------------------------
    //ドロワーメニュー
    $('.toggle_nav,.toggle_nav_bg').on('click', function () {
      $('body').toggleClass('open');
    });
    //ドロワーメニューのアコーディオン
    // $('.header__nav > ul a[href^=#]').click(function(){
    //   $(this).next('.sub-menu').slideToggle();
    //   $(this).toggleClass('open_menu');
    //   return false;//上部にスクロールされる問題を解決
    // });


		//ドロワーメニューの子要素がある親要素にクラスを追加
		$('.header__nav li > ul').parent().addClass("li-parent");




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

// 診療時間
const scheduleTable = $('.time');
$(window).on("scroll", function() {
	if ($(this).scrollTop() > 150) {
		scheduleTable.attr('data-scroll-position', 'true');
	} else {
		scheduleTable.attr('data-scroll-position', 'false');
	}
});
$(window).trigger('scroll');


