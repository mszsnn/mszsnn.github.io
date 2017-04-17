$(document).ready(function(){
	 $("#commentForm").validate({  
                rules: {  
                    username: {  
                            required:true,  
                            minlength:10  
                    },    
                    password: {  
                        required: true,  
                        minlength: 6  
                    }
                },  
                messages: {  
                    username: {  
                            required:"用户名必填",  
                            minlength:"至少10个字符"  
                    },  
                    password: {  
                        required: "请输入密码",  
                        minlength: "密码不能少于6个字符"  
                    }
                }, 
                errorElement:'div',
                errorPlacement:function(error,val){
                	console.log(val)
                	console.log(error)
                	error.css({'color':'red','font-size':'12px'}).insertAfter(val);
                },
                success:function(){
                	$('.star').attr('src','../img/L-img/9.png')
                }   
       }); 
    console.log($('.btn'))
    $('.btn').click(function(){
    	$('.btn>.cir').toggleClass('app');
    	$('.btn>.bac').toggleClass('back');
    })
})
