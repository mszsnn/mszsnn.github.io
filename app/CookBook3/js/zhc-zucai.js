$(document).ready(function(){
	
	$('.zhc-zcheader img').first().on('touchend',function(){
		window.history.back();
	})
	
	$('article').each(function(index,val){
		$('ul li',val).on('touchend',function(){
			if($('.zhc-onebian ul li').length<3){

			$(this).children('div').toggleClass('zhc-active');
//			当前点击li中的文字内容
			// var text=$(this).children('p').children('span').text()
			// var texts=$('.zhc-onebian ul li span').text()
			// if(text!=texts){
				
			// }
			}else{
				$(this).children('div').removeClass('zhc-active');
			}
				$('.zhc-onebian ul').empty()
				$('.zhc-active').each(function(){

					var text=$(this).attr('aa');
				$('.zhc-onebian ul').append(`<li><span>${text}</span><p>×</p></li>`);
				})
		})
	})
	$('.zhc-onebian ul').delegate('p','touchend',function(){
		// console.log($(this).prev().html())
		var deln=$(this).prev().html()
		// console.log($('.zhc-active[aa='+deln+']'))
		$('.zhc-active[aa='+deln+']').removeClass('zhc-active');
		$(this).parent().remove();
	})
	
})