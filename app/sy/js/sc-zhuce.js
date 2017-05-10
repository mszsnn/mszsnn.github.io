/**
 * Created by Administrator on 2017/5/5.
 */
$(document).ready(function (){
    $('.login-1').on('touchstart',function () {
        var name=$('.from-1 > input').val().length;
        var pass=$('.from-2 > input').val();
        var passs=$('.from-3 > input').val();
        var fh=$('.zi-left > input').is(':checked');
        if(name>10){
            if(pass==passs){
                if(pass.length>5&&pass.length<13){
                    if(fh){
                        location.assign('../html/sc-chenggong.html')
                    }else{
                        $('.cuowu-1 > span').html("请仔细阅读使用协议");
                        $('.cuowu-1').css('display','flex');
                    }
                }else{
                    $('.cuowu-1 > span').html("密码格式有误");
                    $('.cuowu-1').css('display','flex');
                }
            }else{
                $('.cuowu-1 > span').html("两次密码输入不同");
                $('.cuowu-1').css('display','flex');
            }
        }else{
            $('.cuowu-1 > span').html("账号格式有误");
            $('.cuowu-1').css('display','flex');
        }
    })


})