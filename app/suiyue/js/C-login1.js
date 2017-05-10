/**
 * Created by Administrator on 2017/5/4.
 */


$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        errorElement: "span",
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            username: {
                required: "请输入账号/手机号/邮箱",
            },
            password: {
                required: "请输入密码",
            }
        }
    });
    var btn=document.querySelector('button');
    var input=document.querySelectorAll('input');
    var ps=document.querySelectorAll('.cuowu');
    var ul=$('ul');
    var error=document.querySelectorAll('ul > li > .login >span');
    //输入时登录框变色
    ul.focusout(function() {
        if(input[0].value.length!==0||input[1].value.length!==0){
            $('button').css('background','#fdbd24');
        }

    });

    btn.addEventListener('touchstart',function(){
            if(input[0].value.length==0){
                ps[0].style.display='block';
            }
            if(input[1].value.length==0){
                ps[1].style.display='block';
            }
        if(input[0].value.length>0&&input[1].value.length>0){
            location.href="z-index.html";//跳到播放界面
        }
        if(input[0].value.length>0&&input[1].value.length>8){
            location.href="C-shibai.html";
        }

    });
    //当错误信息消失时，ps 不出现
    ul.focusout(function() {
        if(input[0].value.length==0){
            ps[0].style.display='block';
        }
        if(input[1].value.length==0){
            ps[1].style.display='block';
        }
    })

});