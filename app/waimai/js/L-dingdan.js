$(function(){
	$('.l-nav .l-box ul li').on('touchstart',function(){
		
		$(this).parent().children().removeClass('xuan').eq($(this).index()).addClass('xuan')
		$('.l-main').removeClass('l-block').eq($(this).index()).addClass('l-block')
		var i=$(this).index();
		if(i==0){
			$('.l-nav .l-box .xuan').css({
				'left': '1.85rem',
			})
			$('.l-nav .l-box .xuan2').css({
				'left': '4.82rem',
				'display': 'block',
			})
			
		}else if(i==1){
			$('.l-nav .l-box .xuan').css({
				'left': '4.15rem',
			})
			$('.l-nav .l-box .xuan2').css({
				'display': 'none',
			})
			$(this).css('border-radius',0)
		}else if(i==2){
			$('.l-nav .l-box .xuan').css({
				'left': '6.42rem',
			})
			$('.l-nav .l-box .xuan2').css({
				'left': '2.52rem',
				'display': 'block',
			})
			$(this).css('border-radius','0 0.07rem 0.07rem 0')
		}
		myScroll.refresh();
	})
//支付成功
	$('.l-success .succ-x').on('touchstart',function(e){
		e.preventDefault();
		$('.l-success').css('display','none')
	})
	
//	跳转
     $(".l-main").eq(0).find('.l-tiao').on('touchstart',function(){
     	location.href="xx-process.html";
     })
	$(".l-main").eq(1).find('.l-tiao').on('touchstart',function(){
     	location.href="xx-pay-card.html";
     })
//	取消
	$(".l-main").eq(0).find('.l-quxiao').on('touchstart',function(){
     	$(".l-main").eq(0).find('li').eq($(this).index()).remove();
     	myScroll.refresh();
     })
	$(".l-main").eq(1).find('.l-quxiao').on('touchstart',function(){
     	$(".l-main").eq(1).find('li').eq($(this).index()).remove();
     	myScroll.refresh();
     })
	$(".l-main").eq(2).find('.l-quxiao').on('touchstart',function(){
     	$(".l-main").eq(2).find('li').eq($(this).index()).remove();
     	myScroll.refresh();
     })
	
	var myScroll;
	myScroll = new IScroll('#wrapper', {
		mouseWheel: true,
//		scrollbars: true	
		
	})
	
})