$(function(){$('a[href^="#"]').click(function(){var i=$(this).attr("href"),i=$("#index"==i?"html":i).offset().top;return $("body,html").animate({scrollTop:i},400,"swing"),!1})}),$(function(i){i(".answer").css("display","none"),i(".answer1").css("display","none"),i(".question").click(function(){i(".question").not(this).removeClass("open"),i(".question").not(this).next().slideUp(300),i(this).toggleClass("open"),i(this).next().slideToggle(300)})}),$(function(){$(window).scroll(function(){$(".fadein").each(function(){var i=$(this).offset().top,e=$(window).scrollTop();i-$(window).height()+200<e&&$(this).addClass("scrollin")})})}),$(function(){var i=$(".page-top");i.hide(),$(window).scroll(function(){100<$(this).scrollTop()?i.fadeIn():i.fadeOut()}),i.click(function(){return $("body,html").animate({scrollTop:0},500),!1})}),$(function(){var i=$(".mk-mv .mk-mv__inner");i.slick({autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,speed:1600,infinite:!0,draggable:!1,autoplay:!0,fade:!0,responsive:[{breakpoint:768,settings:{arrows:!1}}]}).on({beforeChange:function(i,e,n,s){$(".slick-slide",this).eq(n).addClass("preve-slide"),$(".slick-slide",this).eq(s).addClass("slide-animation")},afterChange:function(){$(".preve-slide",this).removeClass("preve-slide slide-animation")}}),i.find(".slick-slide").eq(0).addClass("slide-animation")});