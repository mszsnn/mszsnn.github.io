/**
 * Created by qiangxl on 2017/5/8.
 */
//    订单选项卡
$(document).ready(function () {
    $('.list span:nth-child(1)').click(function () {
        $('.list span:nth-child(2)').removeClass('first');
        $(this).next().addClass('first');
        $('.ddbox').removeClass('first');
        $('.ddbox').eq($(this).parent().index()).addClass('first');
    });
	var dui = $('.duigou');
	var ha = new Hammer(dui.get(0));
	ha.on('tap',function(){
		dui.eq(0).toggleClass('duigou-a');
	});
	var ha1 = new Hammer(dui.get(1));
	ha1.on('tap',function(){
		console.log(2);
		dui.eq(1).toggleClass('duigou-a');
	});
	var ha2 = new Hammer(dui.get(2));
	ha2.on('tap',function(){
		console.log(3);
		dui.eq(2).toggleClass('duigou-a');
	});
});
