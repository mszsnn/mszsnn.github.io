

$(document).ready(function(){
	//	导航栏划入划出
	$('.navmin > div').last().on('touchstart',function(){
		$('.navmin > div ul').toggle(200)
	})
	
//	大屏返回顶部
	$('.zhc-fot a').click(function(){
		let back = $(".zhc-fot").offset().top;
    	$("html,body").animate({scrollTop: 0}, 500);   //带滑动效果的跳转
	})
//	小屏返回顶部	
	$('.zhc-fotmin a')[0].addEventListener('touchstart',function(){
		let back = $(".zhc-fotmin").offset().top;
    	$("html,body").animate({scrollTop: 0}, 500);   //带滑动效果的跳转
	})
})