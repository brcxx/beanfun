var swiper=new Swiper(".swiper-container",{slidesPerView:4,spaceBetween:16});$((function(){$("#gotop").click((function(){jQuery("html,body").animate({scrollTop:0},500)})),$(window).scroll((function(){$(this).scrollTop()>0?$("#gotop").fadeIn("slow"):$("#gotop").stop().fadeOut("slow")}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".loading__progress");setTimeout((function(){e.style.width="100%"}),100),setTimeout((function(){document.getElementById("loading").style.display="none"}),600)})),$(document).ready((function(){function e(e){$("html, body").animate({scrollTop:$(e).offset().top},500)}function t(e){$(".menu-nav__item").removeClass("active"),$(".menu-nav__item").eq(e).addClass("active")}$(".menu-nav__name").click((function(n){n.preventDefault();var o=$(this),i=o.attr("href"),s=o.index(".menu-nav__name");e(i),t(s)})),$(".kv-section__scroll-down").click((function(n){n.preventDefault();var o="#sectionResent",i=$('.menu-nav__name[href="'+o+'"]').index(".menu-nav__name");e(o),t(i)})),$(window).scroll((function(){var e=$(window).scrollTop();$(".menu-nav__name").each((function(n){var o=$($(this).attr("href")),i=o.offset().top-10,s=o.outerHeight();if(e>=i&&e<i+s)return t(n),!1}))})),$(".s3-section__video-btn").click((function(){$(".s3-section__video-wrapper").addClass("black-overlay"),$(this).css("display","none");var e=$(".s3-section__video").get(0);$(".s3-section__video").show(),e.play()})),$(".menu-slide__button, .menu-slide__closed").click((function(){$(".menu-slide").toggleClass("open"),$(".menu-slide__button").toggleClass("btn-menu")})),$(".kv-section__play-btn").click((function(e){e.preventDefault(),$(".lightbox__black-overlay").fadeIn(300,(function(){$(this).addClass("toggle__trigger")})),$(".lightbox").fadeIn(300,(function(){$(this).addClass("toggle__trigger")}));var t=$(".lightbox__video"),n=t.attr("src");t.attr("src",n.replace("autoplay=0","autoplay=1"))})),$(".lightbox__closed, .lightbox__black-overlay").click((function(e){e.preventDefault(),$(".lightbox").removeClass("toggle__trigger").fadeOut(300),$(".lightbox__black-overlay").removeClass("toggle__trigger").fadeOut(300);var t=$(".lightbox__video"),n=t.attr("src");t.attr("src",n.replace("autoplay=1","autoplay=0"))}))})),$(document).ready((function(){var e,t,n=$(".s4-section__bg-map"),o=!1,i=-400,s=2560,a=1393;function c(){var e=n.parent().width()-s;i=Math.min(0,Math.max(e,i)),n.css("transform","translate3d("+i+"px, 0px, 0px)")}function l(){var l;window.innerWidth>960?(n.css({width:s+"px",height:a+"px",overflow:"hidden"}),l=window.innerWidth,i=l>1440?-400:l>1280?-600:l>960?-700:0,c(),n.on("mousedown touchstart",(function(t){o=!0,e=t.clientX||t.originalEvent.touches[0].clientX,$(".s4-section__bg-map").css("cursor","grabbing")})),$(document).on("mousemove touchmove",(function(n){o&&(n.preventDefault(),t=(n.clientX||n.originalEvent.touches[0].clientX)-e,e=n.clientX||n.originalEvent.touches[0].clientX,i+=t,c())})),$(document).on("mouseup touchend",(function(){o=!1,$(".s4-section__bg-map").css("cursor","grab")}))):(n.off("mousedown touchstart mousemove touchmove mouseup touchend"),$(".s4-section__bg-map").css("cursor","default"),n.css({width:"",height:"",transform:""}))}l(),$(window).resize(l)}));