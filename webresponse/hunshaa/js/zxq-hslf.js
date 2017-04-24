$(document).ready(function(){
	$('.zxq-ul li').click(function(){
	
		$(this).addClass('active2').siblings().removeClass('active2');
		$('.zxq-ul img').removeClass('active1').eq($(this).index()).addClass('active1');
	})
	$('.zxq-ul1 li').click(function(){
		$(this).addClass('active2').siblings().removeClass('active2');
		$('.zxq-ul1 img').removeClass('active1').eq($(this).index()).addClass('active1');
	})
	$(".bannerxm").height(509)
	$(window).triggerHandler('resize');//页面加载完成后resize事件至少执行一次
//如果窗口大小发生变化，触发函数
	$(window).resize(function(){
	  let current=$(window).width();
	  if(current>=768){
	  	 $(".banner").height(function(){
		    return $('.banner>.screen>img').height();
	    });
	  }else if(current<768){
	  	 $(".bannerxm").height(function(){
		    return $('.bannerxm>.screen>img').height();
	    });
	  }
	});
	var j=0;
	var img1=$('.bannerxm').find('.screen');//
	var letter1=$('.bannerxm .circle div');//
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
	$('.bannerxm>.list>a').each(function(index,value){
		value.addEventListener('touchstart',function(){
			$('.bannerxm>.list>a').removeClass('active1');
			$(this).addClass('active1');
		})
	})
})
