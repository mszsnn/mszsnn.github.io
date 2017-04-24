$(function(){
	
	$('.xuan .circle li').click(function(){
		$(this).parent().find('li img').attr('src','../img/L-img/cir2.png');
		$(this).find("img").attr('src','../img/L-img/cir1.png');
//		console.log($(this).index())
//		console.log(`url(img/L-img/tu${$(this).index()}.jpg)`)
		$('.tu').css(
			{'background-image':`url(../img/L-img/tu${$(this).index()}.jpg)`}
		)
	})
	
	$('.han').on('click',function(){
		$('.navban').toggleClass("anniu");
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})