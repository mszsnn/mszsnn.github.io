$(document).ready(function(){
	var myscroll=new IScroll("#h-iscroll",{
		mouseWheel:true,
		scrollbars:false,
		click:true,
	});
	var mySwiper = new Swiper ('.h-bannerbox',{
		pagination:'.h-nav',
		
	})
	var mySwiper_2 = new Swiper ('.h-cookBox',{
		pagination:false,
		slidePerView:2,
	})
	$('.q-footer-two').on('touchstart',function(){
		$('.q-footer').addClass('q-active');
		$('.q-zhao').addClass('q-active');
	})
	$('.q-chacha').on('touchstart',function(){
		$('.q-footer').removeClass('q-active');
		$('.q-zhao').removeClass('q-active');
	})
	$('#h-list').on('touchstart',function(){
		$('.h-box-you').css({left:'5.3rem',transform:'rotateY(-30deg)',transition:'all 0.5s'});
		$('.zl-zuo').toggleClass('h-active-2');
	})
	
	var hammertime = new Hammer(document.querySelector(".zl-zuo"));
	hammertime.on("swipeleft", function () {
		$('.h-box-you').css({left:'0',transform:'rotateY(0)',transition:'all 0.5s'});
 		$('.zl-zuo').removeClass('h-active-2');
	
	});
})