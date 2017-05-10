$(function(){
	
	
	
	$('.q-ti > li').on('touchstart',function(){
		$('.q-ti > li').removeClass('q-active');
		$(this).addClass('q-active');
		$('div.q-phone > form').addClass('q-active');
		console.log($(this).index());
		$('div.q-phone > form').eq($(this).index()).removeClass('q-active');
	});
	function cha(str1,str2){
		$(str1).focus(function(){
			$(str2).addClass('q-active').on('touchstart',function(){
				document.querySelector(str1).value='';
			})
		})
	}
	cha('.q-phone > form.q-form1 > input[type="text"]','.q-form1 > div.q-chacha1');
	cha('.q-phone > form.q-form2 > input[type="text"]','.q-form2 > div.q-chacha1');
	var falg=true;
	$('.q-phone > form > .yj').on('touchstart',function(){
		var qq=this.nextElementSibling.value;
		var ww=$(this).next().eq(0);
		if(falg){
			falg=false;
			ww.val(' ')
			ww.attr('type','text');
			ww.val(qq);
		}else if(!falg){
			falg=true;
			console.log(qq)
			ww.val(' ');
			ww.attr('type','password').val(qq);
			ww.val(qq);
		}
	})
	$(function(){
		$('.q-form1').validate({
			rules:{
				phone:{
					required:true,
					rangelength:[11,12],
					number:true,
				},
				mima1: {
					required: true,
					minlength: 6,
				},
//				
			},
			messages:{
				phone:{
					required:' ',
					rangelength: $.validator.format(''),
					number:'',
				},
				mima1: {
					required: "",
					email: "",
					minlength: $.validator.format(''),
				},
			},
		})
		$('.q-form2').validate({
			rules:{
				email: {
					required: true,
					email: true,
//						
				},
				mima2: {
					required: true,
					minlength: 6,
				}
			},
			messages:{
				email:{
					required:"",
					email:"",
				},
				mima2: {
					required: "",
					email: "",
					minlength: $.validator.format(''),
				},
			},
		})
	})
})
