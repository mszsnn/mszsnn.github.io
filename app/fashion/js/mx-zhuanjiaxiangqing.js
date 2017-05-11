$(function(){
	//点击分享出现分享页面
	$('.footer>li:nth-child(3)')[0].addEventListener('touchend',function(e){
		e.preventDefault();
		$('.zhezhao').removeClass('hidden');
		$('.zhezhao>.share>button').click(function(){
			$('.zhezhao').addClass('hidden');
		})
	})
	
	//跳转到评论页面
	$('.footer>li:nth-child(2)')[0].addEventListener('touchend',function(e){
//		location.href='https://www.baidu.com';
	})
	
	
	
	//点赞
	$('.footer>li:first-child')[0].addEventListener('touchend',function(e){
		if($(this).find('i')[0].className=="iconfont icon-icon3zanpinglunzhuanfaliulan01"){
			$(this).find('i').addClass('icon-support')
			$(this).find('#nub').html( parseInt($(this).find('#nub').html( ))+1 )
		}
		
	})
	//收藏
	$('.footer>li:last-child')[0].addEventListener('touchend',function(e){
		if($(this).find('i')[0].className=="iconfont icon-shouc01"){
			$(this).find('i').addClass('icon-shoucang2')
			$(this).find('span').html( "已收藏")
			
		}
	})
})
