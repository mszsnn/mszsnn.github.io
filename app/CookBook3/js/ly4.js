$(function(){
//	console.log($('.xuanze > li.neirong').attr('aa'));
	$('.ly-foods>div').on("touchstart",function(e){
		str=$(this).attr('aa');
//		console.log(str)
		$('.tianjia').html(`<li class="zong"><p>··食物添加··</p></li>`)
		$("<li>").html(str).appendTo('.tianjia');
	})
	
})
