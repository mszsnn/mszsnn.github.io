$(document).ready(function(){
	$('.top>a').on('touchstart',function(){
		history.back(0);
	})
	$('.ly-sjzc').on('touchstart',function(){
		location.href='ly3.html';
	})
	
	$('#aa').validate({
		onfocusout:false,
		rules:{
			email:{
				required:true,
				email:true,
			},
			password:{
				required:true,
				minlength:6,
				maxlength:20,
			},
						
		},
		messages:{
			email:{			
				required:"邮箱地址不能为空",
				email:'请输入正确的邮地址',
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
		$('#email').val('');
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
		location.href='ly2-2.html';
	})
	
})