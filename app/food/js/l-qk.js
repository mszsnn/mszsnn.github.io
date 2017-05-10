window.onload=function(){
	var puh=document.querySelectorAll('.puh p')	
	var li=document.querySelectorAll('.no ul li')
	 for(let i=0;i<li.length;i++){
     li[i].onmouseover=function(){    	
         for(let j=0;j<puh.length;j++){
             puh[j].style.display="none";
         }
         puh[i].style.display="block";
     }
 }


}