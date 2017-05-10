$(function(){

// 上下滚	    
		var myScroll;


		myScroll = new IScroll('#wrapper', { mousewheel:true,scrollbars:true,
		fadeScrollbars:true, shrinkScrollbars:'scale',click:true


		});
// 返回按钮
	$('.zl-back').on('touchstart',function(){
		window.history.back();
	})

// jia搜索框
	var input=$('.zl-search >input');
	var placehold=$('.zl-search >p');
	var searchbtn=$('.zl-search >.zl-fd');
	var sbox=$('.zl-scontent');
	var sitem=$('.zl-scontent >a');
	var skinds=$('.zl-scontent >p');
	var stext=$('.zl-scontent >a >span');
	var sclose=$('.zl-search >.zl-sclose');
	var t;
	input.val('');
	placehold.on('touchstart',function(){
		input.focus();
	});
	sclose.on('touchstart',function(){
		input.val('');
		setTimeout(function(){

		input.focus();
		// console.log(111);
		},200)
	})
	input.on('focus',function(){
		clearTimeout(t);
		placehold.css({'display':'none'});
		sclose.css({'display':'block'});

	}).on('blur',function(){
		if(!input.val()){

			t=setTimeout(function(){
				placehold.css({'display':'block'});
			},300)
		}
		t2=setTimeout(function(){
			sbox.css('display','none');
		},200)
		sclose.css({'display':'none'});
	}).keyup(function(){
		if(input.val()){
			
			sbox.css('display','block');
			var searching=input.val();
			if(isChinese(searching)){

			stext.html(searching);
			}
		}else{
			sbox.css('display','none');
			stext.html('早餐');
		}
	})
	searchbtn.on('touchstart',function(){
		if(input.val()){
			console.log(1111)
			var searching=input.val();
			if(isChinese(searching)){
				location.href='zl-sousuo1.html';
			}else{
				location.href='zl-sousuo2.html';
			}
		}
	})
	function isChinese(temp){
	  	var re=/[^\u4e00-\u9fa5]/;
	  	if (re.test(temp)){
	  		return false ;
	  	}else{
	  		return true ;
	  	}
	}
// 清除历史记录
	$('.zl-clear >span').on('touchstart',function(){
		$('.zl-history').html('已清空历史记录');
	})
})