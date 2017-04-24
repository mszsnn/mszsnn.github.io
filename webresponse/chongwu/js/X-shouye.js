//首页导航
$(function(){
   $('.big ul li').hover(function(){
       $(this).css({background:'#E6E6E6',borderRadius:'12px',marginTop:-20}).children().eq(0).css({
           display:'block',
           width:'80%',
           height:"60%",
           borderRadius:'6px',
           lineHeight:'40px',
           textAlian:'center',
           position:'absolute',
           top:0,
           left:0,
           right:0,
           bottom:0,
           margin:'auto',
           zIndex:999,
           color:'#2EB6BE',
           fontSize:"15%",
           background:'#EDEDED',
       });
       $('<div><img src="img/m-img/nav-a.png" alt="" style="width:100%;height:100%;"></div>').appendTo($(this))
   },function(){
        $(this).removeAttr('style').children().eq(0).removeAttr('style');
        $('.big ul li div').remove();
   })
});

//爱心团队
$(function(){
    $('.love').hover(function(){
        $('.X-five-shade').eq($(this).index()).css('display','none');
        $('.X-personal-message').eq($(this).index()).css('bottom','-78px').animate({'z-index':'999'},200);
    },function(){
        $('.X-five-shade').eq($(this).index()).css('display','block');
        $('.X-personal-message').eq($(this).index()).removeAttr('style');
    })
});
