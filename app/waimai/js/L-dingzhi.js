$(function(){
	$('.main li .l-mbox .l-img').on('touchstart',function(){
		$(this).toggleClass('xuan');	
//		console.log($('.main li .l-mbox .xuan').parent().find('.l-jiage div span:nth-child(1)').html())
		var money=0;
		$('.main li .l-mbox .xuan').each(function(index,value){
			var m=$(value).parent().find('.l-jiage div span:nth-child(1)').html();
			money=money+parseInt(m);
			
		})
		$('.l-di .l-jiage span:nth-child(1)').html(money);
		$('.l-di #l-gou h1').html($('.main li .l-mbox .xuan').length);
	})
	var myScroll;
	myScroll = new IScroll('#wrapper', {
		mouseWheel: true,
	})
})