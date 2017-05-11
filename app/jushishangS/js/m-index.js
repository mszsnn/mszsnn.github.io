/**
 * Created by Administrator on 2017/5/4.
 */
/*侧滑动效*/
$(function(){
    //slide是侧滑内容
    //content是body内容
    var body = $('body').get(0);
    var content = $('.m-content');
    var cehua = $('.slideslip');
    var cehuas = new Hammer(body);
    var width= Math.abs(parseInt(cehua.css('left')));
    cehuas.on('panright',function (e) {
    	 var flags =$(e.target).parent().eq(0).parent().hasClass('swiper-slide');
    	 if(e.deltaX > 20 && e.deltaY < 50){
            if(!($(e.target).parents().eq(0).hasClass('swiper-slide')) || !flags){
                cehua.animate({
                    left:0,
                },400,'cubic-bezier(.17,.67,.83,.67)');
                content.animate({
                    left:width,
                },400,'cubic-bezier(.17,.67,.83,.67)');
            }
        }
    });
    cehuas.on('panleft',function (e) {
        if(parseInt(cehua.css('left')) == 0){
            cehua.animate({
                left:-width,
            },400,'cubic-bezier(.17,.67,.83,.67)');
            content.animate({
                left:0,
            },400,'cubic-bezier(.17,.67,.83,.67)');
        }
    });
//    搜索
    var ss = new Hammer($('.ss').get(0));
    ss.on('tap', function () {
        location.href = 'X-search1.html';
    });
//    好友添加
    var friend = new Hammer($('.m-header b').get(0));
    friend.on('tap', function () {
        location.href = '_chat-message-jl.html';
    });
});
//链接
$(document).ready(function(){
	var lis = $('.m-all-imgbox').get(0);
	var lisHm = new Hammer(lis);
	lisHm.on('tap',function(){
		location.href = 'X-sales.html';
	});
	
});
