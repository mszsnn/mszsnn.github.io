/**
 * Created by Administrator on 2017/5/8.
 */
$(document).ready(function(){
    $('.box-nav2 span').each(function(index,value){
        $(this).on('touchstart',function(){
            $(this).addClass('active').siblings().removeClass('active');
    })
    })






    // 返回
    $('.box-nav img:first-child').on('touchstart',function(){
        history.back(0);
    })
})
