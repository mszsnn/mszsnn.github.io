$(function(){
//显示详情的事件
	$('.pull').on('touchmove',function(){
		$('.pull').off();
		$('.mx-xq').removeClass('hidden')
		var myScroll = new IScroll('#wrapper');
	})
//购买时效果
	$('#footer .buy').click(function(){
		$('.buybuy').removeClass('hidden');
		$('.buybuy a').off('click');
		$('.bb-close').click(function(){
			$('.buybuy').addClass('hidden');	
		})
	})

//加入购物车时效果
	$('#footer .add').click(function(){
		$('.buybuy').removeClass('hidden');	
		$('.buybuy a').on('click',function(e){ 
			e.preventDefault();
			alert('加入购物车成功');
			$('.buybuy').addClass('hidden');	
		})				
		$('.bb-close').click(function(){
			$('.buybuy').addClass('hidden');	
		})
		
	})
//添加商品数量
	$('.buybuy .bb-nub').click(function(e){
		
		if(e.target.className=='nub-add active'){
			$('.buybuy .nub').html(parseInt($('.buybuy .nub').html())+1);
		}else if(e.target.className=='nub-sub active'){
			$('.buybuy .nub').html(parseInt($('.buybuy .nub').html())-1);	
		}
		if(parseInt($('.buybuy .nub').html())>1){
			$('.buybuy .nub-sub').addClass('active');
		}else{
			$('.buybuy .nub-sub').removeClass('active');	
		}
	})
//商品颜色选中效果
$('.bb-color').click(function(){
	$('.bb-color').removeClass('active');
	$(this).addClass('active');
})
	
})
