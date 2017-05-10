$(document).ready(function(){
	var search=$('.zxq-topp input');
	var mask=$('.zxq-searchmask')
	var searchcontent=$('.zxq-searchcontent')
	var submit=$('.zxq-sc')
	search.focus(function(){
		mask.slideDown(200);
	}).focusout(function(){
		mask.slideUp(200);
	}).keyup(function(){
		if(search.val()){
			searchcontent.show();
		}else{
			searchcontent.hide();
		}
	})	
	// 默认已获取焦点
	
	submit.on('touchstart',function(){
		searchcontent.slideUp(200);
		search.off();
		mask.slideDown(200);
		if(search.val()){
			location.href='zxq-ssxq.html';
		}else{
			location.href='zxq-fail.html';
		}		
	})
	//清除历史
	$('.zxq-content .zxq-first .zxq-line4 h3').on('touchstart',function(){
		$(this).parent().siblings().eq(1).css('opacity','0');
		$(this).parent().siblings().eq(2).css('opacity','0');
	})
	
	$('.zxq-topp a')[0].addEventListener('touchstart',function(){
		window.history.back();
	})
})
