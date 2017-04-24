$(function(){
	//选项卡
	let num=$(`ul.num > li`)
	let img=$(`ul.sel > li`)
	num.each(function(index,value){
		$(this).click(function(){
			num.removeClass()
			num.eq(index).addClass(`clicks`);
			img.removeClass()
			img.eq(index).addClass(`active`)
		})
	})
	
	//第二部分小屏的轮播
	let tiao=$(`ul.tiao > li`)
	let pig=$(`.small > li`)
	tiao.each(function(index,value){
		$(this).click(function(){
			tiao.removeClass()
			tiao.eq(index).addClass(`active`)
			pig.removeClass(`active`)
			pig.eq(index).addClass(`active`)
		})
	})
	
	$(`.spe>ul>li `).click(function(){
		location.href="intro.html"
	})
	
	$(`.twop>ul>li `).click(function(){
		location.href="cangpin.html"
	})
	
	$(`.maps`).click(function(){
		location.href="contact.html"
	})
	
	//关于我们轮播
	let me_now=0,me_next=0;
	function me_move(){
		let me_now=$('.jieshao ul > li.bigpi').index();
		me_next=me_now+1;	
		if(me_next==$('.jieshao ul.imgs > li').length){
			me_next=0;
		}
		$('.jieshao ul.imgs > li').removeClass('bigpi').eq(me_next).addClass('bigpi');
		$('.jieshao ul.circle>li').removeClass('active').eq(me_next).addClass('active');
		
		me_now=me_next;
	}
	
	let t=setInterval(function(){
		me_move();
	},2100)
	
//	$('.jieshao ul.imgs').hover(function(){
//		clearInterval(t)
//	},function(){
//		t=setInterval(function(){
//		me_move();
//	},2100)
//	})
	
	//藏品展示部分轮播
	let twop_way='right';
	let twop_now=0,twop_next=0;
	function move(way='right'){
		let twop_now=$('.twop ul.display').index();
		if(way=='right'){
			twop_next=twop_now+1;
		}else if(way=='left'){
			twop_next=twop_now-1;
		}	
		if(twop_next<$('.twop ul.twop-introuds').length&&twop_next>=0){
			$('.twop ul.twop-introuds').eq(twop_now).removeClass('display').end().eq(twop_next).addClass('display');
			$('.twop ul.circles li').eq(twop_now).removeClass('first').end().eq(twop_next).addClass('first');
		}
		twop_now=twop_next;
	}
	$('.button>div.rights').click(function(){
		move()
	})
	$('.button>div.lefts').click(function(){
		move('left')
	})
})
