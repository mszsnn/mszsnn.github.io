/**
 * Created by Administrator on 2017/5/3.
 */
$(document).ready(function () {
    // 选择套餐
    var div=$('.three > div');
    div.on('touchstart',function () {
        div.removeClass().eq($(this).index()).addClass('bg-img');
        $('.three > div > div').removeClass().eq($(this).index()).addClass('bg-color');
    });
    // 点击出现支付页面
    $('.three > div > div').on('touchstart',function () {
        $('.pay').removeClass('pui');
    });
    // 支付界面
    $('.choose').on('touchstart',function () {
        // console.log($(this).index());
        $('.choose > div').removeClass().eq($(this).index()-2).addClass('c5');
    });
    // 确认支付
    $('.sure').on('touchstart',function () {
        location.href='https://htmlpreview.github.io/?https://github.com/musicAPP-suiyue/music/blob/master/html/cll-success.html';
    })

})