/**
 * Created by Administrator on 2017/4/19.
 */
$(function () {
    $('.c-item').hover(function () {
        $('.c-item').removeClass('active')
        $(this).addClass('active')
    },function () {
        $(this).removeClass('active')
    })
})