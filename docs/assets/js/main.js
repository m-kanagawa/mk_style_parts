function cssAnime(){$(".js-ani").each(function(){var n=$(this).offset().top+200,s=$(window).scrollTop();n-$(window).height()<=s?$(this).addClass("js-ani-on"):$(this).removeClass("js-ani-on")})}function cssAnimeSplit(){$(".js-split").children().addBack().contents().each(function(){$(this).replaceWith($(this).text().replace(/(\S)/g,'<span class="char">$&</span>'))})}$(window).scroll(function(){cssAnime()}),$(window).on("load",function(){cssAnime(),cssAnimeSplit()}),$(function(){$('a[href^="#"]').click(function(){var n=$(this).attr("href"),n=$("#index"==n?"html":n).offset().top;return $("body,html").animate({scrollTop:n},400,"swing"),!1})}),$(function(n){n(".answer").css("display","none"),n(".answer1").css("display","none"),n(".question").click(function(){n(".question").not(this).removeClass("open"),n(".question").not(this).next().slideUp(300),n(this).toggleClass("open"),n(this).next().slideToggle(300)})}),$(function(){$(window).scroll(function(){$(".fadein").each(function(){var n=$(this).offset().top,s=$(window).scrollTop();n-$(window).height()+200<s&&$(this).addClass("scrollin")})})}),$(function(){var n=$(".page-top");n.hide(),$(window).scroll(function(){100<$(this).scrollTop()?n.fadeIn():n.fadeOut()}),n.click(function(){return $("body,html").animate({scrollTop:0},500),!1})});const scheduleTable=$(".time");$(window).on("scroll",function(){150<$(this).scrollTop()?scheduleTable.attr("data-scroll-position","true"):scheduleTable.attr("data-scroll-position","false")}),$(window).trigger("scroll");