/**
 * Created by Administrator on 2017/4/18 0018.
 */
$(function(){
    $('.jiantou img').click(function(){
        if(parseInt($('.h_nav').css('width'))){
            $('.h_nav').animate({'width':0},300);
            $('.jiantou img').attr('src','img/h_img/jiant_04.png')
        }else{
            $('.h_nav').animate({'width':'40%'},300);
            $('.jiantou img').attr('src','img/h_img/jiant_03.png')
        }

    })

    $('.qiuqiu a img').mouseover(function () {
        $('.qiuqiu a img').next().css('opacity',0);
        $(this).next().css({'opacity':1,transition:'all 0.5s'});
    })


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



    var t;
    $('.sanlan').each(function (index,val) {
        $(val).hover(function () {
            t=setTimeout(function () {
                $('.zhezhao').eq(index).animate({'opacity':1},300)
            },150)
        },function () {
            clearTimeout(t);
            $('.zhezhao').eq(index).animate({'opacity':0},300)
        })

    })

});

