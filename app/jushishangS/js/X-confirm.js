'use strict'

//	选择遮罩
$(document).ready(function(){
	var maskdiv=$('.order .trans div');
	var maskone=$('.order .trans div.imgone .imgmask');
	var masktwo=$('.order .trans div.imgtwo .imgmask');
	var maskthree=$('.order .trans div.imgthree .imgmask');
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
	
	
//	时间
	var time=$('.order .time div span');
	console.log(time);
	time.get(0).addEventListener('touchstart',function(e){
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(0).addClass('actives');
	});
	time.get(1).addEventListener('touchstart',function(e){
		time.eq(0).removeClass('actives');
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(1).addClass('actives');
	});
	time.get(2).addEventListener('touchstart',function(e){
		time.eq(0).removeClass('actives');
		time.eq(1).removeClass('actives');
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(2).addClass('actives');
	});
	time.get(3).addEventListener('touchstart',function(e){
		time.eq(0).removeClass('actives');
		time.eq(1).removeClass('actives');
		time.eq(2).removeClass('actives');
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(3).addClass('actives');
	});
	time.get(4).addEventListener('touchstart',function(e){
		time.eq(0).removeClass('actives');
		time.eq(1).removeClass('actives');
		time.eq(2).removeClass('actives');
		time.eq(3).removeClass('actives');
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(4).addClass('actives');
	});
	time.get(5).addEventListener('touchstart',function(e){
		time.eq(0).removeClass('actives');
		time.eq(1).removeClass('actives');
		time.eq(2).removeClass('actives');
		time.eq(3).removeClass('actives');
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(5).addClass('actives');
	});
	time.get(6).addEventListener('touchstart',function(e){
		time.eq(0).removeClass('actives');
		time.eq(1).removeClass('actives');
		time.eq(2).removeClass('actives');
		time.eq(3).removeClass('actives');
		time.eq(4).removeClass('actives');
		time.eq(5).removeClass('actives');
		time.eq(6).removeClass('actives');
		time.eq(6).addClass('actives');
	});
	
	
	
//	上门安装
	var yes=$('.order .install span.yes');
	var no=$('.order .install span.no');
	yes.get(0).addEventListener('touchstart',function(e){
		yes.addClass('actives');
		no.removeClass('actives');
	});
	no.get(0).addEventListener('touchstart',function(e){
		yes.removeClass('actives');
		no.addClass('actives');
	});
	
	
});



