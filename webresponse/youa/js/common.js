$(document).ready(function(){
	
	let tiao=$('.tiao');
	let navxs=$('.navxs');
	tiao.click(function(){
		navxs.stop().slideToggle();
	})
	
	
	let navlglis=$('.navlgcontent > li');
	let navlg=$('.navlgcontent');
	let num=$('.navlgcontent > li.active').index();
	navlg.hover(function(){
		navlglis.mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
	},function(){
		navlglis.removeClass('active').eq(num).addClass('active');
	})
	
})
