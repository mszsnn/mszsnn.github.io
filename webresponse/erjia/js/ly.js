$(document).ready(function(){
	$(window).resize(function(){
		location.reload();
		let height=parseInt($('article').css('height'))
		console.log(height)
		$('.zhc-footer').css('marginTop','height')
	})

	var scrWidth = window.screen.width;
if(screen.width < 750){  
$.getScript("../js/swiper.js",function(){ 
	
				// document.write("<script src='../js/swiper.js'><//script>");    
			var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    // nextButton: '.swiper-button-next',
		    // prevButton: '.swiper-button-prev',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    loop: true,
		    autoplayDisableOnInteraction: false
		});
});  
	}else{
	//	banner
	let lis=$('header>ul>li')
	console.log(lis);
	let imgs=$('.ly-banner>div')
	let n=0;
	let t;
	let flag=true;
	let zjt=$('.zjt');
	let yjt=$('.yjt');
	console.log('.zjt');
	t=setInterval(move,3000);
	function move(){
		n++;
		if(n>=imgs.length){
			n=0;
		}
		lis.eq(n).addClass('licolor').siblings().removeClass('licolor');
		imgs.eq(n).addClass('ly-op').siblings().removeClass('ly-op')
	}
	
	$('.ly-banner').hover(function(){
		clearInterval(t)
	},
	function(){
		t=setInterval(move,3000);
	})
	
	addEventListener("transitionend",function(){
		flag=true;
	})
		
	yjt.on('click',function(){
		move();
	})
	zjt.on('click',function(){
		n--;
		if(n<0){
			n=imgs.length-1;
		}
		lis.eq(n).addClass('licolor').siblings().removeClass('licolor');
		imgs.eq(n).addClass('ly-op').siblings().removeClass('ly-op')
	})
	lis.on('mouseover',function(){
		n=$(this).index();
		lis.eq(n).addClass('licolor').siblings().removeClass('licolor');
		imgs.eq(n).addClass('ly-op').siblings().removeClass('ly-op')
	})

}    		
	
})


