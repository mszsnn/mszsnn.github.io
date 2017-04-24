/**
 * Created by Administrator on 2017/4/19.
 */
$(function () {
    var choose=$('.c-choose > div');
    var rect=$('.rect-p > div');
    var left=$('.theme');
    console.log(left);
    rect.hover(function () {
        $(this).addClass('first').siblings().removeClass('first');
        choose.addClass('active').eq($(this).index()).removeClass('active');
    });
    left.click(function () {
        $(this).children().eq(1).slideToggle();
    });
    
    $('.click').click(function () {
        $('.con').removeClass('hidden-xs hidden-sm');
    })
    $(window).resize(function () {
        if($(window).width()>=758){
            choose.removeClass('active');
        }else {
            choose.eq(0).removeClass('active');
            choose.eq(1).addClass('active');
            rect.eq(0).addClass('first');
            rect.eq(1).removeClass('first');
        }
    })
    $(window).triggerHandler('resize');
    //点击事件
    $('.img-box').css('cursor','pointer');
    $('.con').click(function(){
    	location.assign('./reserve-next.html');
    });
})