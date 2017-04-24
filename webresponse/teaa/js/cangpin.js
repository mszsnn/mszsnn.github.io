$(document).ready(function(){
	$('.bt-first').click(function(){
		$(this).parent().parent().parent().parent().find('.ul').removeClass('active1').eq(0).addClass('active1');
		$(this).parent().find('.ye').removeClass('active').eq($(this).parent().parent().parent().parent().find('.active1').index()).addClass('active')
		
	})
	$('.bt-last').click(function(){
		$(this).parent().parent().parent().parent().find('.ul').removeClass('active1').last().addClass('active1');
//		$('.ye').removeClass('active').eq($('.active1').index()).addClass('active')
		$(this).parent().find('.ye').removeClass('active').eq($(this).parent().parent().parent().parent().find('.active1').index()).addClass('active')
		
	})
	$('.bt-next').click(function(){
		let next=$(this).parent().parent().parent().parent().find('.active1').index()+1;
		if(next>=$(this).parent().parent().parent().parent().find('.ul').length){
			next=0;
		}
		$(this).parent().parent().parent().parent().find('.ul').removeClass('active1').eq(next).addClass('active1');
//		$('.ye').removeClass('active').eq($('.active1').index()).addClass('active')
		$(this).parent().find('.ye').removeClass('active').eq($(this).parent().parent().parent().parent().find('.active1').index()).addClass('active')
		
	})
	$('.go').click(function(){
		let index=parseInt($('#ye').val())
		if(index>0&&index<=$(".ul").length){
			$(this).parent().parent().parent().parent().find('.ul').removeClass('active1').eq(index-1).addClass('active1');
//			$('.ye').removeClass('active').eq($('.active1').index()).addClass('active')
			$(this).parent().find('.ye').removeClass('active').eq($(this).parent().parent().parent().parent().find('.active1').index()).addClass('active')
			
		}
		
	})

	$('.jl-menu a:nth-child(5)').append('<div></div>').children().eq(0).addClass('jl-checkedr');
	$('.jl-menu a:nth-child(5)').append('<div></div>').children().eq(1).addClass('jl-checkedc');
	
	$('#shougong-zuopin .box').click(function(){
		location.href='cangpin3.html';
	})
	$('#shougong-yiren .box').click(function(){
		location.href='cangpin3-2.html';
	})
})