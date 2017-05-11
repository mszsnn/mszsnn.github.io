window.onload=function(){
	
		var input=document.querySelector('input');
		var chu=document.querySelector('.hidden');
		var sou=document.querySelector('.ss>i')
		console.log(input);
		input.onfocus=function(){
			chu.style.display='block';
			sou.classList.remove('icon-search');
			sou.classList.add('icon-cuowu');
			
		}
		sou.addEventListener('touchstart',function(){
			chu.style.display='none';
			sou.classList.add('icon-search');
			sou.classList.remove('icon-cuowu');
		})
		var huatong=document.querySelector('.icon-huatong');
		var close=document.querySelector('.close');
		var zhe=document.querySelector('.zh');
//		console.log(zhe)
		
		var di=document.querySelector('.di');
		huatong.addEventListener('touchstart',function(){
			di.classList.add("active");
			zhe.classList.add("action");
//			zhe.classList.remove("zh");
			
		})
		close.addEventListener('touchstart',function(){
			di.classList.remove("active");
			zhe.classList.remove("action");
//			zhe.classList.add("zh");
		})
		
		//清除历史记录
		var qc=document.querySelector('.fg');
		var ul=document.querySelectorAll('.shang1>.list');
		qc.addEventListener('touchstart',function(){
			ul.forEach(function(value){
				value.classList.add('bian');
			})
			
		})
	
}
