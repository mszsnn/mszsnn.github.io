$(document).ready(function(){
//	console.log(1)
		console.log($('.yzf-list li xuangou'));
	$('.yzf-list li .xuangou').each(function(index,value){
		$(this).on('touchstart',function(){
			$('.yzf-chanpin').eq(index).toggleClass('active');
		})
	})
	
	
//	清空
	$('.yzf-del').on('touchstart',function(){
		$('ul').css('display','none');
	})
	
//	点击
	$('.yzf-center > span:first-child').on('touchstart',function(){
		$(this).css({
			"background":"#ffdc3b",
			"color":"#fff"
		});
		$('.yzf-center > span:nth-child(2)').css({
			'background':'#fff',
			'color':'#ffdc3b'
		});
	})
	$('.yzf-center > span:nth-child(2)').on('touchstart',function(){
		$(this).css({
			"background":"#ffdc3b",
			"color":"#fff"
		});
		$('.yzf-center > span:nth-child(1)').css({
			'background':'#fff',
			'color':'#ffdc3b'
		});
	})


    // 返回
    $('.yzf-box a img:first-child').on('touchstart',function(){
        history.back();
    })
})
