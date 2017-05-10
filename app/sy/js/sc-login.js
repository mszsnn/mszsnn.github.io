/**
 * Created by Administrator on 2017/5/5.
 */
$(document).ready(function () {
    $('.login').on('touchstart',function () {
    	console.log(1);
        var name=$('.from-1 > input').val().length;
        var pass=$('.from-2 > input').val().length;
        if(name==0||pass==0){
            $('.cuowu-1').css('display','flex');
        }else{
//          location.assign('../html/index.html');
			location.href='index.html';
        }
    })
})