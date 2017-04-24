$(document).ready(function(){
	//banner
	//改变盒子的宽度
	$(".bannerxm").height(509)
	$(window).triggerHandler('resize');		//页面加载完成后resize事件至少执行一次
	$(window).resize(function(){
	  let current=$(window).width();
	  if(current<768){
	  	console.log($('.bannerxm>.screen1>img').height());
	  	if($('.bannerxm>.screen1>img').height()!=0){
		  	 $(".bannerxm").height(function(){
			    return $('.bannerxm>.screen1>img').height();
		    });
		}
	  }
	});
	let j=0;
	let img1=$('.small>.bannerxm>.screen1');//
	let letter1=$('.bannerxm .circle div');//
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
	let t1=setInterval(move1,1000);
	$('.bannerxm>.list>a').each(function(index,value){
		value.addEventListener('touchstart',function(){
			$('.bannerxm>.list>a').removeClass('active1');
			$(this).addClass('active1');
		})
	})
})