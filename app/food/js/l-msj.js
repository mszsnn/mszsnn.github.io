window.onload=function(){
	var li=document.querySelectorAll('.l-t a p');
	var z=document.querySelectorAll('.bbj');

 for(var i=0;i<li.length;i++){
     li[i].onmouseover=function(){
     	
         for(let j=0;j<z.length;j++){
             z[j].style.display="none";
         }
         z[i].style.display="block";
     }
 }
}
$(function(){
	$('.l-t a').click(function(){
		$('.l-t a').css({'color':"#FFDC3E","background":"#fff"});
		$(this).css({'color':"#fff","background":"#FFDC3E"});
	})

	})
	