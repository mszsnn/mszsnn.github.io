$(document).ready(function(){
	$("button").click(function(){
		$(this).css({
			background: '#FFB11E',
			color:'#fff',
		});
		setTimeout(function(){
			location.href= 'm-index.html';
		},500);
	});
});