$(document).ready(function(){
	var rotation2 = function (){
	   $(".zxq-z").rotate({
	      angle:0, 
	      animateTo:360, 
	      callback: rotation2,
	      easing: function (x,t,b,c,d){        
	          return c*(t/d)+b;
	      }
	   });
	}
	$('.zxq-talk')[0].addEventListener('touchstart',function(e){
		e.preventDefault();
		rotation2();
		
	})
	$('.zxq-talk').on('touchend',function(){
		setTimeout(function(){
            $(".zxq-z").stopRotate();
        }, 100);
  })
	$('.zxq-topp a')[0].addEventListener('touchstart',function(){
		window.history.back();
	})
	

})