$(function(){
	var art=document.querySelector('.art');
	var set=document.querySelector('.set');
	var nig=document.querySelector('.nig');
	var wor=document.querySelectorAll('p');
	var one=document.querySelector('.one');
	var two=document.querySelector('.two');
	var three=document.querySelector('.three');
	var four=document.querySelector('.four');
	var five=document.querySelector('.five');
	//点击页面，菜单显示出来
	art.addEventListener('touchend',function(){
		set.classList.toggle('first')
	});
	//点击夜间模式
	nig.addEventListener('touchend',function(){
		art.classList.toggle('night');
		wor.forEach(function(value,index){
			value.classList.toggle('wordcolor');
		})
	})
	//点击亮度
	var light=document.querySelector('.light');
	var lig=document.querySelector('.lig');
	lig.addEventListener('touchend',function(value){
		fon.classList.remove('font');
		light.classList.toggle('font');
		console.log(1)
	})
	//点击字体
	var font=document.querySelector('.wenzi');
	var fon=document.querySelector('.fon');
	console.log(font)
	font.addEventListener('touchend',function(value){
		light.classList.remove('font');
		fon.classList.toggle('font');
	})
	
	
	
	
	one.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('onecolor');
		})
	})
	two.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('twocolor');
		})
	})
	three.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('threecolor');
		})
	})
	four.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('fourcolor');
		})
	})
	five.addEventListener('touchend',function(){
		wor.forEach(function(value,index){
			$(value).removeClass();
			value.classList.toggle('fivecolor');
		})
	})
	//改变字体大小
	var reduce=document.querySelector('.wordreduce');
	var increase=document.querySelector('.wordincrease');
	var n=$(wor).css('fontSize');
	var m=parseInt(n);
	console.log(m)
	reduce.addEventListener('touchend',function(){
		m++;
		if(m>22){
			m=22
		};
		$(wor).css('font-size',m+'px');
	});
	increase.addEventListener('touchend',function(){
		m--;
		$(wor).css('font-size',m+'px');
	});
	
	
	
	
	
	
})
