/**
 * Created by Administrator on 2017/5/3.
 */
$(document).ready(function () {
    $('.fh-kai').on('touchstart',function () {
        $('.fh-show').css({
            height:'3.5rem',
            overflow:'visible'
        });
    })
    $('.fh-last').on('touchstart',function () {
        $('.fh-show').css({
            height:'0',
            overflow:'hidden'
        });
    })
})