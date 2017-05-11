$(document).ready(function(){
	var n=0;
	$(".zn_next").on("touchstart",function(){
		n++;
		if(n>2){
			location.href="xx-private.html";
			return;
		}
		$(".zn_butitle").eq(n).addClass("zn_active").siblings().removeClass("zn_active");
		$(".zn_selfcontent > li").eq(n).addClass("zn_active").siblings().removeClass("zn_active");
	})
	$(".zn_one > ul > li").on("touchstart",function(){
		if($(this).index()==0){
			if($(this).children().attr("src")=="img/zn_onean_01.png"){
				$(this).children().attr("src","img/zn_oneliang_01.png");
			}else{
				$(this).children().attr("src","img/zn_onean_01.png");
			}
		}
		if($(this).index()==1){
			if($(this).children().attr("src")=="img/zn_onean_02.png"){
				$(this).children().attr("src","img/zn_oneliang_02.png");
			}else{
				$(this).children().attr("src","img/zn_onean_02.png");
			}
		}
		if($(this).index()==2){
			if($(this).children().attr("src")=="img/zn_onean_03.png"){
				$(this).children().attr("src","img/zn_oneliang_03.png");
			}else{
				$(this).children().attr("src","img/zn_onean_03.png");
			}
		}
	})
	$(".zn_choseing > li").on("touchstart",function(){
		if($(this).html()){
			var content=$(this).html();
			$(this).hide(500);
			$("<li>").html(`${content}`).appendTo($(".zn_chose"));
		}
	})
	var huakuai = new Hammer(document.getElementsByClassName("zn_shenggao")[0]);
	var left;
	huakuai.on('tap', function (e) {
		left=(e.srcEvent.offsetX);
		$(".zn_huakuai").css("left",left);
	});
	
})
