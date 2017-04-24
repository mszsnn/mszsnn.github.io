$(document).ready(function(){
	//banner
	//改变盒子的宽度
	$(".bannerxm1").height(509);
	// $(".bannerxm>.screen>img").height(509);
	$(window).triggerHandler('resize');//页面加载完成后resize事件至少执行一次
//如果窗口大小发生变化，触发函数
	$(window).resize(function(){
	  let current=$(window).width();
	  if(current>=768){
	  	 $(".banner").height(function(){
		    return $('.banner>.screen>img').height();
	    });
	  }else if(current<768){
	  	 $(".bannerxm1").height(function(){
		    return $('.bannerxm1>.screen>img').height();
	    });
	  }
	});
	
//	轮播
	//小屏
//	轮播
	var j=0;
	var img1=$('.bannerxm1').find('.screen');//
	var letter1=$('.bannerxm1 .circle div');//
   	function move1(way='right'){
   		if(way=='right'){
   			j++;
	 		if(j>=img1.length){
	 			j=0;
	 		}
   		}
   		if(way=='left'){
   			j--;
   			if(j<0){
	 			j=img1.length-1;
	 		}
   		}
   		img1.css('opacity','0').eq(j).css('opacity','1');
   		letter1.removeClass('active').eq(j).addClass('active');
   	}
	var t1=setInterval(move1,1000);
	$('.bannerxm1>.list>a').each(function(index,value){
		value.addEventListener('touchstart',function(){
			$('.bannerxm1>.list>a').removeClass('active1');
			$(this).addClass('active1');
		})
	})
})