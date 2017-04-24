$(document).ready(function(){
	var strategylis=$('.strategy .circle li');
	var strategyimgs=$('.strategy .img li');
	strategylis.click(function(){
		var num=$(this).index();
		strategylis.removeClass('active').eq(num).addClass('active');
		strategyimgs.removeClass('active').eq(num).addClass('active');
	})
	
	var destinationlglis=$('.destination .lgcircle li');
	var destinationxslis=$('.destination .xscircle li');
	var destinationimgs=$('.destination .img >li');
	var destinationleft=$('.destination .left');
	var destinationright=$('.destination .right')
	destinationlglis.click(function(){
		var num=$(this).index();
		destinationlglis.removeClass('active').eq(num).addClass('active');
		destinationimgs.removeClass('active').eq(num).addClass('active');
	})
	destinationxslis.click(function(){
		var num=$(this).index();
		destinationxslis.removeClass('active').eq(num).addClass('active');
		destinationimgs.removeClass('active').eq(num).addClass('active');
	})
	destinationleft.click(function(){
		var now=$('.destination .img >li.active').index();
		var next=now-1;
		if(next<0){
			next=0;
		}
		destinationxslis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationlglis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationimgs.eq(now).removeClass('active').end().eq(next).addClass('active');
	})
	destinationright.click(function(){
		var now=$('.destination .img >li.active').index();
		var next=now+1;
		if(next>=11){
			next=10;
		}
		destinationxslis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationlglis.eq(now).removeClass('active').end().eq(next).addClass('active');
		destinationimgs.eq(now).removeClass('active').end().eq(next).addClass('active');
	})
	var contentimgs,tiaos;
	destinationimgs.mouseenter(function(){
		contentimgs=$('.destination .img >li.active .content li');
		tiaos=$('.destination .img >li.active .circle li');
		contentimgs.mouseenter(function(){
			var num=$(this).index();
			contentimgs.removeClass('active').eq(num).addClass('active');
			tiaos.removeClass('active').eq(num).addClass('active');
		})
		tiaos.click(function(){
			var num=$(this).index();
			contentimgs.removeClass('active').eq(num).addClass('active');
			tiaos.removeClass('active').eq(num).addClass('active');
		})
	})
	
	var merchantlis=$('.merchant .circle > li');
	var merchantimgs=$('.merchant .img > li');
	merchantlis.click(function(){
		var num=$(this).index();
		merchantlis.removeClass('active').eq(num).addClass('active');
		merchantimgs.removeClass('active').eq(num).addClass('active');
	})
	// $('.zn_zi1 p:nth-child(2)').click(function(){
	// 	location.href='merchant.html';
	// })
	// $('.zn_zi2 p:nth-child(2)').click(function(){
	// 	location.href='merchant.html';
	// })
	// $('.community .container li.active img ').click(function(){
	// 	location.href='nearby.html';
	// })
	// $('.travel .row li > div').click(function(){
	// 	location.href='zwsyyj.html';
	// })
	
	
	
	
})
