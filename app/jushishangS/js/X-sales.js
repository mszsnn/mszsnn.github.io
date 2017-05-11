'use strict'
$(document).ready(function(){
	var add = $('.med');
	var buy = $('.con > .right');
	var buyHm = new Hammer(buy.get(0));
	buyHm.on('tap',function(){
		zhes.toggle();
		zhe.toggleClass('sofals');
	});
	var zhe = $('.mask .sofall');
	var zhes = $('.mask');
	var addHm = new Hammer(add.get(0));
	addHm.on('tap',function(e){
		zhes.toggle();
		zhe.toggleClass('sofals');
		add.attr('go','1');
	});
	var zhesHm = new Hammer(zhes.get(0));
	zhesHm.on('tap',function(e){
		if($(e.target).hasClass('mask')){
			zhes.toggle();
			zhe.toggleClass('sofals');	
			add.attr('go','0');
		}
	});
	//确定按钮
	var yes = $('.sure').get(0);
	var yesHm = new Hammer(yes);
	var sus = $('.addGou');
	sus.hide();
	yesHm.on('tap',function(){
		if(add.attr('go') == 1){
			zhes.toggle();
			zhe.toggleClass('sofals');
			sus.show();
			add.attr('go','0');
			setTimeout(function(){
				sus.hide();
			},2000);
		}else{
			location.href = 'X-confirm.html';
		}
	});
	
	
//	选择颜色
	var maskdiv=$('.mask .sofall .colors div');
	var maskone=$('.mask .sofall .colors div.imgone .imgmask');
	var masktwo=$('.mask .sofall .colors div.imgtwo .imgmask');
	var maskthree=$('.mask .sofall .colors div.imgthree .imgmask');
	maskdiv.get(0).addEventListener('touchstart',function(){
		maskone.show();
		masktwo.hide();
		maskthree.hide();
	});
	maskdiv.get(1).addEventListener('touchstart',function(){
		maskone.hide();
		masktwo.show();
		maskthree.hide();
	});
	maskdiv.get(2).addEventListener('touchstart',function(){
		maskone.hide();
		maskthree.show();
		masktwo.hide();
	});
	
	
//	选择数量
	var plus=$('.mask .sofall .num .plus');
	var shuzi=$('.mask .sofall .num .shuzi');
	var sub=$('.mask .sofall .num .sub');
	
	var i=1;
	var	zhi
	plus.get(0).addEventListener('touchstart',function(){
		i++;
		zhi=$(shuzi).html(i);
		if(i>1){
			sub.addClass('active');
		}
		
	});
	sub.get(0).addEventListener('touchstart',function(){
		i--;
		zhi=$(shuzi).html(i);
		if(i==1){
			sub.removeClass('active');
		}
		if(i<=0){
			i=1;
		}
	});
});

//选择数量

