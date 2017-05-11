$(document).ready(function(){
	$("input").on("focus",function(){
		$(this).css({"background":"#ffb493"},{"border":"1px solid #ffb493"});
		$(this).attr("placeholder","");
	})
	$("input").on("blur",function(){
		$(this).css({"background":"#f9f9f9"},{"border":"1px solid #cacaca"});
	})
	$("button").on("touchstart",function(e){
		e.preventDefault();
		if(!($("input").eq(0).val()=="admin"&&$("input").eq(1).val()=="123456")){
			$(this).css("backgroundColor","#b4b4b4");
			$(".zn_jinggao").show();
		}else{
			$(this).css("backgroundColor","#FC6955");
			$(".zn_jinggao").hide();
			location.href="zn_index.html";
		}
	})
})
