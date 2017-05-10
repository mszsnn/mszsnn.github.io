$(function(){

// 上下滚	    
		var myScroll;


		myScroll = new IScroll('#wrapper', { mousewheel:true,scrollbars:true,
		fadeScrollbars:true, shrinkScrollbars:'scale',click:true


		});
// 返回按钮
	$('.zl-back').on('touchstart',function(){
		window.history.back();
	})
// 添加图片
	$('.zl-addimg').on('touchstart',function(){
		$('.zl-zao').css('height','100%');
		$('.zl-xiangji').animate({top:'50%'},700,"cubic-bezier(0.68, -0.55, 0.27, 1.55)");
	})
	$('.zl-no').on('touchstart',function(){
		$('.zl-xiangji').animate({top:'-2rem'},700,"cubic-bezier(0.68, -0.55, 0.27, 1.55)",function(){

		$('.zl-zao').css('height',0);
		});

	})

})