$(document).ready(function(){
	let width=$(window).width();
	$(window).resize(function(){
		
		if(width>750){
			$('.zhc-box').hover(function(){
				console.log($('.zhc-box .zhc-words'))
				$('.zhc-box .zhc-words').fadeIn()
			},function(){
				$('.zhc-box .zhc-words').fadeOut()
			})
		
			$('.zhc-i img').hover(function(){
				$('.zhc-i img').css({transform:'scaleX(0.6)'})
			},function(){
				$('.zhc-i img').css('transform','scale(1)')
			})
		}
	})
	
})