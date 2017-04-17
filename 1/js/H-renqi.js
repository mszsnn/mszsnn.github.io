$(function(){
	$('.H-renqi-datebox').children('li').each(function(index,val){
		var jobj=$(val);
		val.addEventListener('touchstart',function(){
			
			switch(index){
				case 0:
				jobj.html(`<img src="../img/H-img/H-renqi-month.png" alt="" />`)
				jobj.next('li').html(`<img src="../img/H-img/H-renqi-day.png" alt="" />`)
				break;
				case 1:
				jobj.prev('li').html(`<img src="../img/H-img/H-renqi-day.png" alt="" />`)
				jobj.html(`<img src="../img/H-img/H-renqi-month.png" alt="" />`)
				jobj.next('li').html(`<img src="../img/H-img/H-renqi-week.png" alt="" /> `)
				break;
				case 2:
				jobj.html(`<img src="../img/H-img/H-renqi-month.png" alt="" />`)
				jobj.prevAll('li').html(`<img src="../img/H-img/H-renqi-week.png" alt="" />`)
			}
			$('.H-main-renqi-box').removeClass('H-renqi-box-active').eq(index).addClass('H-renqi-box-active')
		})
	})
	
})
