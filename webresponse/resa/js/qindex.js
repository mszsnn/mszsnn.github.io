$(function(){
	function getFigure(str3, str4, str5) {
        let flag = true;
        let div = document.querySelector(str5);
        let picture = div.querySelectorAll(str3);
        let circles = div.querySelectorAll(str4);
        
        let n = 0;
        let t = setInterval(move, 3000);//����move����ʹ��ʱ�亯�������Զ��仯��
        function move(way = "right") {//����move��Ĳ���Ĭ����right
            if (way == "right") {//��������Ĭ���������ԭ����������һ����n�Լ�
                n++;
                if (n >= picture.length) {//��ͼƬ�������һ��ʱ�����丳ֵΪ0����ͷ��ʼѭ��
                    n = 0;
                }
            }
            picture.forEach(function (value, index) {//ѭ��ͼƬ
                value.classList.remove("first-two")//�����к���first-one��first-one-one�Ƴ�
                circles[index].classList.remove("first-one")
            });
            picture[n].classList.add("first-two");//����ʱnֵ�������ͼƬ
            circles[n].classList.add("first-one");
        }
        div.onmouseover = function () {//�������ʱ��ֹͣ�ֲ�ͼѭ��
            clearInterval(t)
        }
        div.onmouseout = function () {
            t = setInterval(move, 3000);//���Ƴ��ʱ�򣬵���move����������ѭ��
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
    getFigure('.z-bannerbig >.tutu','.diandian .changtiao','.z-bannerbig');
    getFigure('.z-bannermidden >.tutu','.z-bannermidden >.diandian .changtiao','.z-bannermidden');
    
    getFigure('.z-bannersmall >.tutu','.z-bannersmall >.diandian .changtiao','.z-bannersmall');
    
	let a=$(".footer-middle-div-h4");
    let b=$('.footer-div-div-ul');
    let c=$('.span');
    let flag=true;
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
	
	
	$('<a href="l-tsms.html" class="more">').html('>').appendTo($('.pingpai > .zi > li.first'));
	$('.pingpai > .zi > li').click(function(){
		$('.pingpai > .zi > li').removeClass('first');
		$(this).addClass('first');
		$('<a href="l-tsms.html"  class="more">').html('>').appendTo($(this));
	})
	$('.pingpai > .smallzi > li').click(function(){
		console.log(this)
		$('.pingpai > .smallzi > li').removeClass('first');
		$(this).addClass('first');
	})
	$('.tese .main1 .mm').mouseover(function(){
		$('.tese .main1 .mm').removeClass('first');
		$(this).addClass('first');
		$('.tese .check1 .boxmian').removeClass('first');
		$('.tese .check3 ul').removeClass('first');
		$('.tese .check1 .boxmian').eq($(this).index('.mm')).addClass('first');
		$('.tese .check3 ul').eq($(this).index('.mm')-3).addClass('first');
	})
	$('.tese .main2 .mm').mouseover(function(){
		console.log($('.tese .check3 ul'))
		$('.tese .main2 .mm').removeClass('first');
		$(this).addClass('first');
		$('.tese .check2 ul').removeClass('first');
		$('.tese .check2 ul').eq($(this).index('.mm')-3).addClass('first');
		
	});
	
	 function getFigure(str3, str4, str5) {
        let flag = true;
        let picture = document.querySelectorAll(str3);
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
    getFigure('.z-x-banner','.diandian1 .changtiao1','.imgbox1')
    
    $('.tui > ul.circle > li').mouseover(function(){
    	$('.tui > ul.circle > li').removeClass('first');
		$(this).addClass('first');
		$('.tui > .list > li > .meng').removeClass('first');
		$('.tui > .list > li > .meng').eq($(this).index()).addClass('first');
    })
     $('.jia > ul.box > li').mouseover(function(){
    	$('.jia > ul.box > li').removeClass('first');
		$(this).addClass('first');
    })
      $('.xin > section > ul > li').mouseover(function(){
    	$('.xin > section > ul > li').removeClass('first');
		$(this).addClass('first');
    })
})