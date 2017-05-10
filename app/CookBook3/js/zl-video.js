$(function(){
// 上下滚	    
		var myScroll;


		myScroll = new IScroll('#wrapper', { mousewheel:true,scrollbars:true,
		fadeScrollbars:true, shrinkScrollbars:'scale',click:true


		});
// 点赞取消赞
	
	$('.zl-zan').on('touchstart',function(){
		
		var v=$(this).text()
		if($(this).attr('class')=='zl-zan zl-z'){
			$(this).html("<span></span>"+(v-1))
		}else{
			$(this).html("<span></span>"+(v-0+1))
		}
		$(this).toggleClass('zl-z');
	})
// 返回按钮
	$('.zl-back').on('touchstart',function(){
		window.history.back();
	})

// 搜索按钮
	$('.zl-searching').on('touchstart',function(){
		// location.href=''
		location.href='zl-sousuo.html'
	})
})