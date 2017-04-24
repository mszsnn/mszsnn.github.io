$(document).ready(function(){
//	鼠标一入一出
//	$(window).resize(function(){
		let width=$(window).width()
//		if(width>750){
			$('.col-lg-4 img').each(function(index,val){
				$(this).hover(function(){
					$(this).css({
						transform:'scale(1.2)'
					})
				},function(){
					$(this).css({
						transform:'scale(1)'
					})
				})
			})
//		}
//	})
	
	//	表单验证
	$('#form').validate({
		rules:{
			name:{
				required:true,
				maxlength:8 
			},
			email:{
				required:true,
				maxlength:8 
			},
			mob:{
				required:true,
			}
		},
		messages:{
			name:{
				required:'用户名不能为空',
				maxlength:$.validator.format("请输入一个 长度最多是 {0} 的字符串")
			},
			email:{
				required:'验证码不能为空',
				email:true,
			},
			mob:{
				required:'MOB不能为空'
			}
		},
		errorElement:'div',
		errorPlacement:function(erry,val){
			erry.css({color:'red',fontSize:'12px',marginTop:'2px',width:'98%',height:'16px',float:'left',paddingLeft:'2%'}).insertAfter(val)
		},

	})
	
})