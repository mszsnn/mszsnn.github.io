var wid=$(window).width();
if(wid<900){
	$('.hidden-md').remove();
}



$(function(){
//	大屏banner
	$('.H-head-icon-list').on('click',function(){
		$('.H-list-box').slideToggle(200);
	})
	var now=0,next=0;
	var ban=$('.H-banner-img');
	var nav=$('.H-nav li');
	function move(){
		next=now+1;
		if(next>ban.length-1){
			next=0;
		}
		ban.eq(now).removeClass('first').end().eq(next).addClass('first');
		nav.eq(now).removeClass('nav-active').end().eq(next).addClass('nav-active');
		now=next;
	}
	var t=setInterval(move,3000);
	ban.mousemove(function(){
		$(this).clearQueue();
		clearInterval(t);
	}).mouseout(function(){
		$(this).clearQueue();
		t=setInterval(move,3000);
	})
	nav.click(function(){
		$(this).clearQueue();
		let index=$(this).index();
			ban.eq(now).removeClass('first').end().eq(index).addClass('first');
			nav.eq(now).removeClass('nav-active').end().eq(index).addClass('nav-active');
			now=index;
	})
//选项卡
	
$('.H-custom-tab li').mousemove(function(){
	$('.H-custom-tab li').removeClass('tab-active');
	$(this).addClass('tab-active');
	let index=$(this).index()
	$('.customBox').css('display','none').eq(index).css('display','block')
})
//middle轮播
var next_2=0,now_2=0,video_m=$('.video-middle');
function move_2(){
	next_2=now_2+1;
	if(next_2>video_m.length-1){
		next_2=0;
	}
	video_m.eq(next_2).fadeIn('slow').end().eq(now_2).fadeOut('slow');
	$('.middle-tab li').removeClass('middle-active').eq(next_2).addClass('middle-active')
	now_2=next_2;
}
var t_2=setInterval(move_2,2000)

//返回顶部
let top=$('.celantop');
	top.click(function(){
	$(document.documentElement).animate({scrollTop:0},800);
	$(document.body).animate({scrollTop:0});
	});
	
//滚轮动画	
$(window).scroll(function(){
	let n=document.documentElement.scrollTop||document.body.scrollTop;
	if(n>4100){
		$('.H-camera').addClass('move-1');
		$('.H-camera').removeClass('move-1-1');
		$('.H-video-box').children('.video-img-1').addClass('move-3').delay(800).end().children('.video-img-2').addClass('move-4').end().children('.video-img-4').addClass('move-2')
		$('.H-video-box').children('.video-img-1').removeClass('move-3-1').delay(800).end().children('.video-img-2').removeClass('move-4-1').end().children('.video-img-4').removeClass('move-2-1')
		$('.video-title-2').removeClass('move-5-1').addClass('move-5')
		$('.video-img-3').fadeIn(600);
	}else{
		$('.H-camera').removeClass('move-1');
		$('.H-camera').addClass('move-1-1');
		$('.H-video-box').children('.video-img-1').removeClass('move-3').delay(800).end().children('.video-img-2').removeClass('move-4').end().children('.video-img-4').removeClass('move-2');
		$('.H-video-box').children('.video-img-1').addClass('move-3-1').delay(800).end().children('.video-img-2').addClass('move-4-1').end().children('.video-img-4').addClass('move-2-1');
		$('.video-img-3').fadeOut(1000);
		$('.video-title-2').removeClass('move-5').addClass('move-5-1')
	}
	
	
})

let width=$(window).width();
$(window).resize(function(){
	width=$(this).width();
	if(width<1000){
		$('.H-main-box').css({
			padding:0,
			width:'100%',
		});
		$('.customBox').removeClass('shadow');
		$('.box-shadow').removeClass('shadow');
	}
})
if(width<1000){
	$('.H-main-box').css({
		padding:0,
		width:'100%',
	});
	$('.customBox').removeClass('shadow');
	$('.box-shadow').removeClass('shadow');
}
})//onload结束

