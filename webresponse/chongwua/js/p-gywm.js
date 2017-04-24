/**
 * Created by Administrator on 2017/4/22.
 */
window.onload=function () {
    $(window).resize(function () {
        let pw=document.documentElement.clientWidth;
        if(pw<400){
            $('.biankuan').removeClass('col-xs-6')
            $('.biankuan').addClass('col-xs-12')
        }else {
            $('.biankuan').removeClass('col-xs-12')
            $('.biankuan').addClass('col-xs-6')
        }
    })
    $(window).triggerHandler('resize');
};
