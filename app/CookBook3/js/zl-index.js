$(function(){



// 轮播
	   	var swiper = new Swiper('.swiper-container1', {
		    pagination: '.swiper-pagination',
		    // nextButton: '.swiper-button-next',
		    // prevButton: '.swiper-button-prev',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    // autoplay: 0,
		    autoplay: 2500,
		    loop: true,
		    autoplayDisableOnInteraction: false
		});
// 滑动
		var swiper2 = new Swiper('.swiper-container2', {
        //  pagination: '.swiper-pagination',
	        slidesPerView: 2,
	        slidesOffsetBefore : 15,
	        slidesOffsetAfter : -100,
	        paginationClickable: true,
	        simulateTouch : true,
	        spaceBetween: 30,
	        freeMode: true
	    });
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
// 底部按钮们
	$('.zl-dl').on('touchstart',function(){
		$('.zl-zao').css('height','100%').on('transitionend',function(){

			$('.zl-yuandi').addClass('zl-show');
		})
	})
	$('.zl-close').on('touchstart',function(){

		$('.zl-yuandi').removeClass('zl-show');
		// $('.zl-chuancai').on('transitionend',function(){
			
			$('.zl-zao').off().css('height','0')
		// })
	})
	$('.zl-meishi').on('touchstart',function(){
		// var zl=document.cookie;
		// if(zl=='denglu'){
			location.href='yzf-meishi.html';
		// }else{
			// location.href='ly3.html';
		// }
	})
	$('.zl-chuancai').on('touchstart',function(){
		// var zl=document.cookie;
		// if(zl=='denglu'){
			location.href='zl-chuancai.html';
		// }else{
			// location.href='ly3.html';
		// }
	})
	
// 搜索框
	// $('.zl-search >input').on('focus',function(){
	// 	// location.href=''
	// 	location.href='zl-sousuo.html'
	// })
	$('.zl-search').on('touchstart',function(){
		// location.href=''
		location.href='zl-sousuo.html'
	})
// 侧滑
     
 	$('.zl-menu').on('touchstart',function(){
 		// var zl=document.cookie;
		// if(zl=='denglu'){
	 		$('.zl-you').css({'left':'5.8rem','transform':'rotateY(-30deg)'})
	 		$('.zl-zuo').css('left','0')
			
		// }else{
		// 	location.href='ly3.html';
		// }  
 	})
	var hammertime = new Hammer(document.querySelector(".zl-zuo"));
	//为该dom元素指定触屏移动事件
	hammertime.on("swipeleft", function () {
	//控制台输出
		$('.zl-you').css({'left':'0','transform':'rotateY(0deg)'})
 		$('.zl-zuo').css('left','-5.8rem')
	
	});
})