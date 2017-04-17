window.onload=function(){
	var myScroll;
	myScroll=new IScroll("#wrapper", {
		scrollbars: false,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		resizeScrollbars:true,
		click:true
	});
	
	$('.D-title > div:nth-child(4)').click(function(){
		$(".D-qingkong").remove();
	})
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
	
//	搜索重绘
	$("#H-search").focus(function(){
		$(".D-focus").remove();
//		$('#H-search').keyup(function(){
//			let value=$(this).val();
//			let arr=[];
//			$(".H-renqi-titleBox .title-1").each(function(){	
//				let name=$(this).attr("value");
//				arr.push(name);				
//			})
//			if(arr.indexOf(value)!=-1){
//				$(this).parent().parent().show();
//			}else{
//				$(this).parent().parent().hide();
//			}
//			
//		})
	})
	
	
//	语音
	$(".H-search-yy").click(function(){
		$(".D-zhao").css("display","block")
	})
	$(".D-zhaobox .W-talk-voice>div.D-zhaoimg2").click(function(){
		$(".D-zhaobox .W-talk-voice>p:first-child").html("").html("正在录音");
		$(".D-zhaobox .W-talk-voice>p:last-of-type").html("").html("松开话筒以结束");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg").css("display","none");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg1").css("display","block");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg2").css("display","none");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg3").css("display","block");
	})
	$(".D-zhaobox .W-talk-voice>div.D-zhaoimg3").click(function(){
		$(".D-zhaobox").css("display","none");
		$(".D-zhaobox1").css("display","block");
	})
	$(".D-zhaobox1 .W-talk-voice>div.D-zhaoimg2").click(function(){
		$(".D-zhaobox1").css("display","none");
		$(".D-zhaobox").css("display","block");
		$(".D-zhaobox .W-talk-voice>p:first-child").html("").html("开始录音");
		$(".D-zhaobox .W-talk-voice>p:last-of-type").html("").html("按住话筒以开始");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg1").css("display","none");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg").css("display","block");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg3").css("display","none");
		$(".D-zhaobox .W-talk-voice > div.D-zhaoimg2").css("display","block");
	})
	$(".D-zhaobox1 .W-talk-voice>div.D-zhaoimg3").click(function(){
		$(".D-zhao").css("display","none")
	})
	$(".D-x").click(function(){
		$(".D-zhao").css("display","none")
	})
	
}