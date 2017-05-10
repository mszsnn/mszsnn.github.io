$(document).ready(function(){
	$('header img').first().on('touchend',function(){
		window.history.back();
	})
})