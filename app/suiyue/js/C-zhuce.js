/**
 * Created by Administrator on 2017/5/4.
 */


$().ready(function() {
    var btn=document.querySelector('button');
    var input=document.querySelectorAll('input');
    var ul=$('ul');
    var cuowu=document.querySelector('.cuowu');
    //输入时登录框变色
    ul.focusin(function() {
        if(input[0].value.length!==0||input[1].value.length!==0||input[1].value.length!==0){
            cuowu.style.display='none';
        }
    });
    btn.addEventListener('touchstart',function(){
        if(input[0].value.length>0&&input[1].value.length>0&&input[2].value.length>0){
            // location.href="C-login1.html";
            // window.open("C-login1.html");
            location.assign("C-login1.html");
            cuowu.style.display='none';
        }else{
            cuowu.style.display='block';
        }
    })
});