$(document).ready(function(){
	$('.ly-sjzc').on('touchstart',function(){
		location.href="ly2.html";
	})	
	$('.top>a').on('touchstart',function(){
		history.back(0);
	})
	//邮箱验证
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
			email:{			
				required:"邮箱地址不能为空",
				email:'请输入正确的邮地址',
			},
			password:{
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
				
			},
			confirm_password:{
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
				equalTo:"请输入相同的密码",
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
			location.href='ly3-2.html';
		})
       }
	})
		
	//马上注册

	$('.ck').on('touchstart',function(){
		$('#password').attr('type','text');
	})
})