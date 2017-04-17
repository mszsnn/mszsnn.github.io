$(document).ready(function(){
	var audio=$('audio')[0];
	$('.H-icon-center').on('touchstart',function(){
		if(audio.paused){
			audio.play();
		}

	})
})