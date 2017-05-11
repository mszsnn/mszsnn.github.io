/**
 * Created by Administrator on 2017/5/4 0004.
 */
$(function () {
    $("nav input").on('input propertychange', function(){
        if($('nav input').val()=="大床"){
            $("nav .hidden").show();
            $(".hyysl").on('touchstart', function() {
                $('.hyytz').attr("href","hyy-wnsd.html");
            });
        }else{
            $("nav .hidden").hide();
            $(".hyysl").on('touchstart', function() {
                $('.hyytz').attr("href","hyy-ssbd.html");
            });
        };
    })

    //分类
    var p=$('.cehua .incehua > ul > li  ul li p');
    p.each(function(index,val){
        $(val).on('touchstart', function(){
            $(this).toggleClass('butong');
        })
    })
    var reset=$('.hyyqd section:first-child')
    reset.on('touchstart',function(){
        p.removeClass('butong')
    })

    //支付
    var click=$('.dianji ul li.zhi');
    console.log(click);
    click.each(function (index,val) {
        var t=setTimeout(function () {
            $(val).on('touchstart',function () {
                $('.zhezhao').show();
                $('.ladong').show(300);
            })
        },200)
    })

    var close=$('.ladong .innav .cuohao')
    close.on('touchstart',function () {
        $('.zhezhao').hide();
        $('.ladong').hide(300);
    })
})


