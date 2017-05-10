/**
 * Created by Administrator on 2017/5/5.
 */
$(function () {

    var body=$('body');
    var i=3;
    var t=setInterval(function(){
        i--;console.log(i);
        if(i<0){
            location.href="C-login1.html";
            clearInterval(t);
            return;
        }
    },500)
})