/**
 * Created by Moonlight on 2017/4/19.
 */
$(function(){
    $('.circle span').click(function(){
        let index=$(this).index();
        $('.circle span').removeClass('active');
        $(this).addClass('active');
        $('.tu').removeClass('xian').eq(index).addClass('xian');
    });
    $('.img').mouseover(function(){
        $(this).find('div').addClass('active');
    });
    $('.img').mouseout(function(){
        $(this).find('div').removeClass('active');
    });


})