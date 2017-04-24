$(function(){
	let current=$(window).width();
	if(current>768){				
		$('.jl-topbanner').height(530);
	}else if(current<=768){	
		$('.jlx-topbanner').height(500);
	}
	//设置topbanner的高度
	$(window).resize(function(){
		let current=$(window).width();
		if(current>768){
			let topbhx=$('.jl-topbanner a img').height();//设置大屏高度
			if(topbhx==0){
				$('.jl-topbanner').height(530);
			}else{
				$('.jl-topbanner').height(topbhx);
			}
		}else if(current<=768){	
			let topbhx=$('.jlx-topbanner a img').height();//设置小屏高度
			if(topbhx==0){
				$('.jlx-topbanner').height(500);
			}else{
				$('.jlx-topbanner').height(topbhx);
			}
			
		}
	});
	$(window).triggerHandler('resize');		//页面加载完成后resize事件至少执行一次
	//nav选中
//	$('.jl-menu a').append('<div></div>').children().eq(0).addClass('jl-checkedr');
//	$('.jl-menu a').append('<div></div>').children().eq(1).addClass('jl-checkedc');
	//topbanner的轮播
	ban('.jl-topbanner a','.jl-topbanner-spots div','.jl-topbanner','jl-spotshow','','');
	ban('.jlx-topbanner a','.jlx-topbanner-spots div','.jlx-topbanner','jlx-spotshow','','');
	function ban(selectc,selectb,parentclass,displayclass,sright,sleft){
		let now=0;
		let next=0;
		let ass=$(selectc);
		let bspots=$(selectb);
		let right=$(sright);
		let left=$(sleft);
		let move=function(way='right'){
			if(way=='right'){							//默认轮播方向
				next=now+1;
				if(next>ass.length-1){
					next=0;
				}
			}else if(way=='left'){						//左按钮轮播
				next=now-1;
				if(next<0){
					next=ass.length-1;
				}
			}
			ass.eq(now).animate({opacity:0,zIndex:0},400);
			ass.eq(next).animate({opacity:1,zIndex:1},400);
			bspots.eq(now).removeClass().end().eq(next).addClass(displayclass);
			now=next;
		}
		let t=setInterval(move,3000);					//t
		$(parentclass).hover(function(){		//鼠标移入清除轮播，移除恢复轮播
			clearInterval(t);
		},function(){
			t=setInterval(move,3000);
		});
		bspots.click(function(){
			next=$(this).index();
			ass.eq(now).animate({opacity:0,zIndex:0},400);
			ass.eq(next).animate({opacity:1,zIndex:1},400);
			bspots.eq(now).removeClass().end().eq(next).addClass(displayclass);
			now=next;
		});
		right.click(function(){
			move();
		});
		left.click(function(){
			move('left');
		})
	}
})