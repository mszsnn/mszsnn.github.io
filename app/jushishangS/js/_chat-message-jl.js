$(function(){
	//滚动条
	var myScroll= new IScroll('#_wrapper',{
		mouseWheel: true,
		click: true,
	});	
	//侧滑的效果
	 for(var i=0;i<$('._chat-message-jl li').length;i++) {
            var hammeraLi = new Hammer($('._li')[i]);
            hammeraLi.on('swipeleft',function(e) {
                $(this).animate({left:"-1.7rem"},500);
                $(this).find('._csign-jl').addClass("_fff");
                $(this).find("._voice-sign-jl").css("color","#fff")
            }.bind($('._li')[i]));
       }
	 
	 for(var i=0;i<$('._chat-message-jl li').length;i++) {
            var hammeraLi = new Hammer($('._li')[i]);
            hammeraLi.on('swiperight',function(e) {
                $(this).animate({left:"0"},500);
                $(this).find('._csign-jl').removeClass("_fff");
                $(this).find("._voice-sign-jl").css("color","#049cff")
            }.bind($('._li')[i]));
       }
	 
	 
	 //点击删除的效果
	$('._delete-rect-jl').click(function(){
		$(this).parent().parent().css("display","none")
	})
	$('._collect-rect-jl').click(function(){
		$(this).find("span:first-child").html('&#xe60d');
		$(this).find("span:last-child").html('已收藏');
	});
})
