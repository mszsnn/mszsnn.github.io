/**
 * Created by Administrator on 2017/4/19.
 */
$(function(){
    "use strict";
    $('.dog li:not(.page)').hover(function(){
        $(this).addClass('active');
    },function () {
        $(this).removeClass('active');
    });
    $('.cat li:not(.page)').hover(function(){
        $(this).addClass('active');
    },function () {
        $(this).removeClass('active');
    })
});
