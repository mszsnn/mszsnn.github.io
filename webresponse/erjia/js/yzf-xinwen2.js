$(document).ready(function(){
	$('.fontone').each(function(){
		$(this).on('touchstart',function(index,value){
			var val=$('.fonttwo').eq($(this).index()).html();
//			console.log(val)
			$('.fonttwo').eq($(this).index()).html(parseInt(val)+1)
		})
	})
	
	$('.fontthree').each(function(){
		$(this).on('touchstart',function(index,value){
			var val=$('.fontfour').eq($(this).index()).html();
//			console.log(val)
			$('.fontfour').eq($(this).index()).html(parseInt(val)+1)
		})
	})
	
	
	$('.fontone').each(function(){
		$(this).on('click',function(index,value){
			var val=$('.fonttwo').eq($(this).index()).html();
//			console.log(val)
			$('.fonttwo').eq($(this).index()).html(parseInt(val)+1)
		})
	})
	
	$('.fontthree').each(function(){
		$(this).on('click',function(index,value){
			var val=$('.fontfour').eq($(this).index()).html();
//			console.log(val)
			$('.fontfour').eq($(this).index()).html(parseInt(val)+1)
		})
	})
})
