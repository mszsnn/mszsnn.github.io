/**
 * Created by hp1 on 2017/4/18.
 */
window.onload=function(){
    function getFigure(str3, str4, str5) {
        let flag = true;
        let picture = document.querySelectorAll(str3);
        console.log(str3);
        let circles = document.querySelectorAll(str4);
        let div = document.querySelector(str5);
        let n = 0;
        let t = setInterval(move, 3000);//调用move函数（使用时间函数，让其自动变化）
        function move(way = "right") {//设置move里的参数默认是right
            if (way == "right") {//如果参数是默认情况，和原本就向右走一样，让n自加
                n++;
                if (n >= picture.length) {//当图片到达最后一个时，将其赋值为0，从头开始循环
                    n = 0;
                }
            }
            picture.forEach(function (value, index) {//循环图片
                value.classList.remove("first-two")//将所有含有first-one、first-one-one移除
                circles[index].classList.remove("first-one")
            });
            picture[n].classList.add("first-two");//将此时n值付给点点和图片
            circles[n].classList.add("first-one");
        }
        div.onmouseover = function () {//当移入的时候停止轮播图循环
            clearInterval(t)
        }
        div.onmouseout = function () {
            t = setInterval(move, 3000);//当移除的时候，调用move函数，继续进行循环
        }
        let m;
        circles.forEach(function (value, index) {//
            value.onmouseover = function () {
                clearTimeout(m)
                m = setTimeout(function () {
                    clearTimeout(m);
                    picture.forEach(function (value, index) {
                        value.classList.remove("first-two")
                        circles[index].classList.remove("first-one")
                    })
                    picture[index].classList.add("first-two");
                    value.classList.add("first-one");
                    n = index;
                }, 200)
            }
            value.onmouseout = function () {
                clearTimeout(m)
            }
        });
        picture.forEach(function (value) {
            value.addEventListener('transitionend', function () {
                flag = true;
            })
        });
    }
    getFigure('.tutu','.diandian .changtiao','.z-banner')
    getFigure('.tutu2','.diandian2 .changtiao2','.z-banner2')
}
//小屏
$(function(){
    let body=$('body');
    let html=$('html');
    window.onresize=function() {
        let width=$(window).width();
        if(width<=1200){
            $('.z-nav-3').off();
            $('.z-nav-3').click(function(){
                body.toggleClass('buhuadong');
                html.toggleClass('buhuadong');
                $('body > ul').slideToggle(1000,function(){
                    $('body > ul').clearQueue();
                });
                $('body > ul > li').toggleClass('chuxian');
            })
        }else{
            body.attr({class:""});
            html.attr({class:""});
            $('body > ul').css('display','none')
        }
    }
    $(window).triggerHandler('resize');
});
