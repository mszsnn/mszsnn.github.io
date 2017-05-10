$(document).ready(function(){
	$('.top>a').on('touchstart',function(){
		history.back(0);
	})
	$('.ly-yxzc').on('touchstart',function(){
		location.href='ly3-2.html';
	})
	//手机验证
	$('#aa').validate({
		onfocusout:false,
		rules:{
			telephone:{
				number:true,
				required:true,
				minlength:11,
				maxlength:11,
			},
			password:{
				required:true,
				minlength:6,
				maxlength:20,
			},
						
		},
		messages:{
			telephone:{
				number:"格式不正确！",
				required:"手机号不能为空！！",
				minlength:"请输入正确的手机号！",
				maxlength:"请输入正确的手机号！",
			},
			password:{
				required:"密码不能为空，请输入密码！",
				minlength:"密码错误，请重新输入!",
				maxlength:"密码错误，请重新输入!",
				
			},
									
		},
		submitHandler:function () { 
			document.cookie='denglu';
			
			location.href='zl-index.html';
		
       }
	})
	
	$('.ly-del').on('touchstart',function(){
		$('#telephone').val('');
	})
	$('.ly-ljzc > a').on('touchstart',function(){
		$('.zc').removeClass('ly-yc');
		$('.ly-close').removeClass('ly-yc');
		$('.ly-zccg').removeClass('ly-yc');
		$('.ly-zc>a').removeClass('ly-yc').on('touchstart',function(){
			history.go(0);
		})
	})
	
	$('.ck').on('touchstart',function(){
		$('#password').attr('type','text');
	})
	$('.ly-kszc').on('touchstart',function(){
		location.href='ly2.html';
	})
	
})