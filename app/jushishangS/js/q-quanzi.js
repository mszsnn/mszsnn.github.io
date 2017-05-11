$(function(){
	// 点击到专家页
	var a = $('.q-tabB a').get(1);
	var content = $('#q-wrapper ul li');
	content.eq(1).hide();
	var hbg = $('.q-tabB');
	var afun = new Hammer(a);
	afun.on('tap',function(){
		content.eq(0).hide();
		content.eq(1).show();
		$(a).css({
			background:'url(img/q-zhuan-top.png) no-repeat center',
			backgroundSize:'35%'
		});
		$(a).prev().css({
			background:'url(img/q-active-top.png) no-repeat center',
			backgroundSize:'35%'
		});
		hbg.css({
			background:'url(img/q-head2.png) no-repeat center',
			backgroundSize:'cover'
		});
		setTimeout(function(){
	    	var myScroll = new IScroll('#q-wrapper');
	    },200);
	});
	// 点击到动态页
	var a_two = $('.q-tabB a').get(0);
	var a_active = new Hammer(a_two);
	a_active.on('tap',function(){
		content.eq(1).hide();
		content.eq(0).show();
		$(a_two).css({
			background:'url(img/q-active.png) no-repeat center',
			backgroundSize:'35%'
		});
		$(a_two).next().css({
			background:'url(img/q-zhuanjia.png) no-repeat center',
			backgroundSize:'35%'
		});
		hbg.css({
			background:'url(img/q-head.png) no-repeat center',
			backgroundSize:'cover'
		});
		setTimeout(function(){
	    	var myScroll = new IScroll('#q-wrapper');
	    },200);
	});
	// 滚动条
	setTimeout(function(){
    	var myScroll = new IScroll('#q-wrapper');
    },200);


//	详情
    var more = new Hammer($('.q-zhuanBox').get(0));
    more.on('tap', function () {
        location.href = 'p-wzxq.html';
    });

    var zhua = new Hammer($('.q-list-box').get(0));
    zhua.on('tap', function () {
        location.href = 'm-zjxx.html';
    });
});
