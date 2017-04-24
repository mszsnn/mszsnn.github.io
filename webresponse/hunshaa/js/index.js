$(document).ready(function(){
//	nav
	$('nav>.container>.letter>a').on('click',function(){
		$('nav>.container>.letter>a').removeClass('active');
		$(this).addClass('active');
	})
	//banner
	//改变盒子的宽度
	$(".bannerxm").height(509);
//	$(".bannerxm>.screen>img").height(509);
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
	
//	轮播
	let i=0;
	let img=$('.banner').find('.screen');//
	let letter=$('.banner .circle div');//
 	function move(way='right'){
 		if(way=='right'){
 			i++;
	 		if(i>=img.length){
	 			i=0;
	 		}
 		}
 		if(way=='left'){
 			i--;
 			if(i<0){
	 			i=img.length-1;
	 		}
 		}
 		img.css('opacity','0').eq(i).css('opacity','1');
 		letter.removeClass('active').eq(i).addClass('active');
 	}
	 let t=setInterval(move,1400);
	$('.banner').mouseover(function(){
		clearInterval(t);
	})
	$('.banner').mouseout(function(){
		t=setInterval(move,1400);
	})
	let flag=true;
	$('.left').click(function(){
		if(flag==true){
			flag=false;
			move();
		}	
	})
	$('.right').click(function(){
		if(flag==true){
			flag=false;
			move('left');
		}	
	})
	img.each(function(index){
		img[index].addEventListener('transitionend',function(){//事件监听，当transition运行完毕，执行 
				flag=true;
		})
	})
	letter.mouseover(function(){
		img.css('opacity','0').eq($(this).index()).css('opacity','1');
		letter.removeClass('active').eq($(this).index()).addClass('active');
	})
//	floor3-选项卡
	$('.f3-message>div').on('click',function(){
		$('.f3-message>div>h4').css('color','#b5b5b6').eq($(this).index()).css('color','#ff1818');
		$('.f3-message>div>img').removeClass('active').eq($(this).index()).addClass('active');
		$('.f3>.f3-1').css('display','none').eq($(this).index()).css('display','block')
	})
//floor6
	$('.floor6>.f6>.f6-col').on('click',function(e){
		if(e.target.className!='message'){
			$('.floor6>.f6>.f6-col>.message').removeClass('display').eq($(this).index()).addClass('display');
			$('.floor6>.f6>.f6-col>img').css('opacity','1').eq($(this).index()).css('opacity','0.6');
		}
	})
	$(window).resize(function(){
		let current=$(window).width();
		if(current>768){
			let topbh=$('.samll>').height();		//设置大屏高度
			$('.jl-topbanner').height(topbh);
		}else if(current<=768){
			let topbhx=$('.jlx-topbanner a').height();		//设置小屏高度
			$('.jlx-topbanner').height(topbhx);
		}
	});
	
	//小屏
//	轮播
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
//	小屏
	
	
})
