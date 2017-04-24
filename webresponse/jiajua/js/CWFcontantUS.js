/**
 * Created by Administrator on 2017/4/21.
 */
'use strict'
window.onload=function(){
    let divs=document.querySelectorAll('.con>.list >li>div>div.ch');
    let uls=document.querySelectorAll('.con>.list >li>div>ul.ch1');

    console.log(divs);
    console.log(uls);

    divs.forEach(function(value,index){
        value.addEventListener("touchstart",function(){
            uls[index].classList.toggle('bl');
            value.classList.toggle('ys');
            // uls[index].style.display='block';
        })
        // value.addEventListener("touchend",function(){
        //     uls[index].style.display='none';
        // })



    })



}

