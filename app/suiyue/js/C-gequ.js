/**
 * Created by 李雨健 on 2017/4/29.
 */

$(document).ready(function(){
// //    侧滑
    $(".swipeLeft li").each(function(index,value){
        value.addEventListener('touchstart', function(e) {
            e.preventDefault();
            startX = e.changedTouches[0].pageX,
                startY = e.changedTouches[0].pageY;
        });
        value.addEventListener("touchmove", function(e) {
            e.preventDefault();
            moveEndX = e.changedTouches[0].pageX,
                moveEndY = e.changedTouches[0].pageY,
                X = (moveEndX - startX)/100,
                Y = (moveEndY - startY)/100;
            var l=parseInt($(".show").eq(index).css('marginLeft'));
            if(0>=l>-3){
                if(X<-0.4){
                    $(".show").eq(index).css('marginLeft','-1.42rem');
                }
            }
            if(l<0){
                if(X>0.4){
                    $(".show").eq(index).css('marginLeft','0');
                }
            }
        });
    })



})


