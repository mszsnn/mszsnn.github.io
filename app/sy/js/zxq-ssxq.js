$(document).ready(function(){
	$(".zxq-content .zxq-top h1").on('touchstart',function(){
		$(this).addClass("zxq-di").siblings().removeClass("zxq-di");
	})
	$('.zxq-topp a')[0].addEventListener('touchstart',function(){
		window.history.back();
	})
})