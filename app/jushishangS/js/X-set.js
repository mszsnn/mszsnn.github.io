'use strict'

window.onload=function(){
//	设置
	var clears=document.querySelector('.set ul li:nth-child(4) div:nth-child(4)');
	
	var mask=document.querySelector('.setclear');
	
	var sures=document.querySelector('.setclear .clear div:nth-child(4)');
	
	clears.onclick=function(){
		mask.style.display="block";
	}
	sures.onclick=function(){
		mask.style.display="none";
	}
	
	
}
