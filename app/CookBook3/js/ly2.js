$(document).ready(function(){
	$('.ly-yxzc').on('touchstart',function(){
		location.href='ly2-2.html';
	})
	$('.top>a').on('touchstart',function(){
		history.back(0);
	})
	
	//手机验证
	$('#aa').validate({
		onfocusout:false,
		rules:{
			telephone:{
				required:true,
				minlength:11,
				maxlength:11,
				number:true,
			},
			password:{
				required:true,
				minlength:6,
				maxlength:20,
			},
			confirm_password:{
				required: true,
				minlength:6,
				maxlength:20,
				equalTo: "#password",
			},	
			yanzheng:{
				required:true,
				minlength:4,
				maxlength:4,				
			}
		},
		messages:{
			telephone:{
				number:"格式不正确！",
				required:"请输入手机号！",
				minlength:"请输入正确的手机号！",
				maxlength:"请输入正确的手机号！",
			},
			password:{
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
				
			},
			confirm_password:{
				equalTo:"请输入相同的密码",
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
			},	
			yanzheng:{
				required:"验证码不能为空",
				minlength:"请输入正确的验证码！",
				maxlength:"请输入正确的验证码！",
			}
		},
		submitHandler:function () { 
			$('.zc').removeClass('ly-yc');
			$('.ly-zccg').removeClass('ly-yc');
			$('.ly-ljzc>a').removeClass('ly-yc').on('touchstart',function(){
			location.href='ly3.html';
		})
       }
		
     
	})

	$('.ck').on('touchstart',function(){
		$('#password').attr('type','text');
	})
	
})
