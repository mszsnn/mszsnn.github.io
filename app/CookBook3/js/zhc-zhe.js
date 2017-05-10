$(document).ready(function(){
	
	$('.zhc-zcheader img').first().on('touchend',function(){
		window.history.back();
	})
	
	$('.zhc-zcheader img').last().on('touchstart',function(){
		$('body').addClass('.zhebox')
		$('html').addClass('.zhebox')
		$('.zhc-zhe').css('display','block')
	})
	
	// $('.zhc-list').each(function(index,val){
	// 	console.log(index,val)
	// 	$('li',val).on('touchend',function(){
	// 		$(this).addClass('active').siblings().removeClass()
			
//			当前点击的li里的文字内容
			// let texts=$(this).text()
//			创建li 并设置文字内容
	// 		$('.zhc-yx').append(`<li><span>${texts}</span><p>×</p></li>`)
	// 	})
	// })
	$('.zhc-list').delegate('li:not(".zl-more,.active")','touchstart',function(){
		// console.log($(this).html())
		// console.log($(this).parent().index('.zhc-list'))
		var yxznr=$(this).html();
		var yxzindex=$(this).parent().index('.zhc-list');
		var mb=$('.zhc-yx >li');
			$(this).addClass('active').siblings().removeClass('active')

		mb.eq(yxzindex).addClass('zl-show').children('span').html(yxznr)
	}).delegate('li.zl-active','touchstart',function(){
		// console.log($(this).html())
		// console.log($(this).parent().index('.zhc-list'))
		// var yxznr=$(this).html();
		var yxzindex=$(this).parent().index('.zhc-list');
		var mb=$('.zhc-yx >li');
		mb.eq(yxzindex).removeClass('zl-show')
	})



	$('.zhc-yx').delegate('p','touchend',function(){
		$(this).parent().removeClass('zl-show');
		var xzindex=$(this).parent().index('.zhc-yx>li');
		// console.log(xzindex)
		$('.zhc-list').eq(xzindex).children('li').removeClass('active')
	})
	
//	清空筛选
	$('.zhc-qk').on('touchend',function(){
		$('.zhc-yx li').remove().children()
	})
//	完成
	$('.zhc-ends').on('touchend',function(){
		$('.zhc-zhe').css('display','none')
	})
	
	$('.zhc-end div').on('touchend',function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
})
