/**
 * Created by Administrator on 2017/4/20.
 */
$(document).ready(function () {
    $('.p-jiantou').click(function () {
        if (parseInt($(this).next().css('width'))){
            $(this).next().animate({width:0},500);
        }else{
            $(this).next().animate({width:'85%'},500);
        }
        $(this).toggleClass('glyphicon glyphicon-menu-right')
        $(this).toggleClass('glyphicon glyphicon-menu-left')

    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });

});

