function cssAnime(){$(".js-ani").each(function(){var n=$(this).offset().top+200,i=$(window).scrollTop();n-$(window).height()<=i?$(this).addClass("js-ani-on"):$(this).removeClass("js-ani-on")})}function cssAnimeSplit(){jQuery(".js-split").children().addBack().contents().each(function(){3===this.nodeType&&jQuery(this).replaceWith(jQuery(this).text().replace(/(\S)/g,'<span class="char">$&</span>'))})}$(window).scroll(function(){cssAnime()}),$(window).on("load",function(){cssAnime(),cssAnimeSplit()}),window.matchMedia("(max-width: 768px)").matches?$(".header__nav li").click(function(){$("ul:not(:animated)",this).slideToggle(200)},function(){$("ul",this).slideToggle(200),$(this).toggleClass("open_menu")}):window.matchMedia("(min-width:769px)").matches&&$(".header__nav li").hover(function(){$("ul:not(:animated)",this).slideDown(200)},function(){$("ul",this).slideUp(200)}),$(".toggle_nav,.toggle_nav_bg").on("click",function(){$("body").toggleClass("open")}),$(".header__nav li > ul").parent().addClass("li-parent"),$(function(){$('a[href^="#"]').click(function(){var n=$(this).attr("href"),n=$("#index"==n?"html":n).offset().top;return $("body,html").animate({scrollTop:n},400,"swing"),!1})}),$(function(n){n(".answer").css("display","none"),n(".answer1").css("display","none"),n(".question").click(function(){n(".question").not(this).removeClass("open"),n(".question").not(this).next().slideUp(300),n(this).toggleClass("open"),n(this).next().slideToggle(300)})}),$(function(){var n=$(".page-top");n.hide(),$(window).scroll(function(){100<$(this).scrollTop()?n.fadeIn():n.fadeOut()}),n.click(function(){return $("body,html").animate({scrollTop:0},500),!1})});const scheduleTable=$(".time");$(window).on("scroll",function(){150<$(this).scrollTop()?scheduleTable.attr("data-scroll-position","true"):scheduleTable.attr("data-scroll-position","false")}),$(window).trigger("scroll");