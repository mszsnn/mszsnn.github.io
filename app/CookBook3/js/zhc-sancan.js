$(function(){
	$('.zhc-jrtsbox ul li').on('touchend',function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.zhc-box li').eq($(this).index()).addClass('zhc-block').siblings().removeClass('zhc-block')
	})
	
	$('.zhc-every img').first().on('touchend',function(){
		window.history.back();
	})
})
