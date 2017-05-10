$(document).ready(function(){
	$(".zxq-innertop span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$('.zxq-top .zxq-innertop a')[0].addEventListener('touchstart',function(){
		window.history.back();
	})
})
