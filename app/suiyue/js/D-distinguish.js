/**
 * Created by chen on 2017/5/6.
 */

$(document).ready(function(){
    var rotate = function (){
        $(".load > img:nth-of-type(1)").rotate({
            angle:0,
            animateTo:360,
            callback: rotate,
            easing: function (x,t,b,c,d){
                return c*(t/d)+b;
            }
        });
    }
    $('.btn').on('touchstart',function(e){
        e.preventDefault();
        rotate();
    })
    $('.btn').on('touchend',function(){
        setTimeout(function(){
            $(".load > img").stopRotate();
        }, 100);
    })

    //返回上一个页面
    $(".d-top > a:nth-of-type(1) ").on("touchstart",function () {
        history.go(-1);
    })
})