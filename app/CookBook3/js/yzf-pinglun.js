$(document).ready(function(){
	$('textarea').on('touchstart',function(){
		$(this).html("");
	})
	
	    //返回
    $('.yzf-nav img:nth-child(2)').on('touchstart',function(){
        history.back();
        // console.log(1);
    })
})
