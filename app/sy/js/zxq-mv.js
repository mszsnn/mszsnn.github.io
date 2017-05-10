$(document).ready(function(){
	$('.zxq-f3 .zxq-line2 .zxq-z')[0].addEventListener('touchstart',function(){
		
		var val=parseInt($('.zxq-f3 .zxq-line2 .zxq-z span').html())
		$('.zxq-f3 .zxq-line2 .zxq-z span').html(val+=1);
	})
	$('.zxq-f3 .zxq-line3 .zxq-z1')[0].addEventListener('touchstart',function(){
		var val=parseInt($('.zxq-f3 .zxq-line3 .zxq-z1 span').html())
		$('.zxq-f3 .zxq-line3 .zxq-z1 span').html(val+=1);
	})
	$('.zxq-f3 .zxq-line4 .zxq-z2')[0].addEventListener('touchstart',function(){
		var val=parseInt($('.zxq-f3 .zxq-line4 .zxq-z2 span').html())
		$('.zxq-f3 .zxq-line4 .zxq-z2 span').html(val+=1);
	})
	$('.zxq-f3 .zxq-line2  .zxq-img').on('touchstart',function(){
		$(this).css('display','none').siblings().css('display','block');
	})
	$('.zxq-head a')[0].addEventListener('touchstart',function(){
		window.history.back();
	})
})
