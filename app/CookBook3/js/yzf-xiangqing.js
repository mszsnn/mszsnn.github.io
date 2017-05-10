$(document).ready(function(){
	$('.di').on('touchstart',function(){
		$(this).css('background','#ffdc3b');
		$('.da').css('background','#fff');
	})
		$('.da').on('touchstart',function(){
		$(this).css('background','#ffdc3b');
		$('.di').css('background','#fff');
	})
		
		
	$('.yzf-nav img:nth-child(1)').on('touchstart',function(){
        history.back();
        // console.log(1);
    })
})
