$(document).ready(function(){
	// $('.bb > li').each(function(index,value){
	// 	$(this).on('touchstart',function(){
	// 		$(this).on('touchmove',function(){
	// 			$(this).toggleClass('move');
	// 			$('.guanzhu').eq(index).toggleClass('active');
	// 			$('.del').eq(index).toggleClass('active2');
	// 			$('.del img:first-child').on('touchstart',function(){
	// 				$('.bb > li').eq(index).prependTo('.bb');
	// 				// $('.bb > li').eq(index).css('transform','translateX(0)');
	// 				// $('.guanzhu').eq(index).css('display','block');
	// 				// $('.del').eq(index).css('display','none');
	// 			})
	// 			$('.del img:nth-child(2)').on('touchstart',function(){
	// 				$('.bb > li').eq(index).css('display','none');
	// 			})
	// 		})
	// 	})
	// })

	// $('.bb > li').each(function(index,value){
	// 	var hammertime = new Hammer(value);
	// 	var that=$(this)
	// 	//为该dom元素指定触屏移动事件
	// 	hammertime.on("swipeleft", function () {
 //                //控制台输出
 //            that.css('transform','translateX(-0.5rem)');
 //            $('.guanzhu').eq(index).css('display','none');
 //            $('.del').eq(index).css('display','block');
	// 		//删除
 //            $('.del img:nth-child(2)').on('touchstart',function(){

	// 			$('.bb > li').eq(index).css('display','none');
	// 		})
	// 		//置顶
 //            $('.del img:first-child').on('touchstart',function() {
 //                $('.bb > li').css('transform','translateX(0rem)').eq(index).prependTo('.bb');
 //                $('.del').eq(index).css('display','none');
 //                $('.guanzhu').eq(index).css('display','block');
 //            })
	// 	})


 //    	hammertime.on("swiperight", function () {
 //        		//控制台输出
 //            that.css('transform','translateX(0rem)');
 //            $('.guanzhu').eq(index).css('display','block');
 //            $('.del').eq(index).css('display','none');
 //        })
 //        })

$('.bb > li').hammer().bind("swipeleft",function(){
　　$(this).css('transform','translateX(-0.5rem)').children('.guanzhu').css('display','none').end().children('.del').css('display','block');
　　$(this).siblings().css('transform','translateX(0)').children('.guanzhu').css('display','block').end().children('.del').css('display','none');
	
}).bind("swiperight",function(){
　　$(this).css('transform','translateX(0)').children('.guanzhu').css('display','block').end().children('.del').css('display','none');
// 　　$(this).siblings().css('transform','translateX(-0.5rem)').children('.guanzhu').css('display','none').end().children('.del').css('display','block');
	
});
//删除
$('.del img:nth-child(2)').on('touchstart',function(){
	// $(this).parents('.bb > li').css('display','none');
	$(this).parents('.bb > li').remove();
})
// 置顶
$('.del img:first-child').on('touchstart',function() {
    $(this).parents('.bb > li').prependTo('.bb');
})



//列表

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
    $('.yzf-box img:first-child').on('touchstart',function(){
        history.back(0);
    })
})
