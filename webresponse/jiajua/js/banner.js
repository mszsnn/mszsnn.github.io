/**
 * Created by afei on 2017/4/18.
 */
$(function () {
    $(window).resize(function () {
        let width=$(window).width();
        if(width<=375) {
            $('header .small_screen div.icon').first().unbind().click(function () {
                $('ul.hid').stop().slideToggle(600);
            });
        }else if(width>375){
            $('ul.hid').stop().hide();
        }
    });
    $(window).triggerHandler('resize');

    let imgs=$('.banner .img li');          //获取banner图片
    let now=0;
    let next=0;
    let t=setInterval(move,3000);
    let flag=true;
    function move(way='right'){
        if(way=='right'){
            next=now+1;
            if(next>=imgs.length) {
                next = 0;
            }
        }
        else if(way=='left'){
            next=now-1;
            if(next<0){
                next=imgs.length-1;
            }
        }
        imgs.eq(next).animate({opacity:1},500,function () {
            flag=true;
        }).end().eq(now).animate({opacity:0},500);
        now=next;
    }

//鼠标移入停止时间函数鼠标移出开始时间函数
    $('.banner').hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,3000);
    });

    $('.banner .banner_right').click(function(){
        if(flag){
            flag=false;
            move();
        }
    });
    $('.banner .banner_left').click(function(){
        if(flag){
            flag=false;
            move('left');
        }
    });
})
