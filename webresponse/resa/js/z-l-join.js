/**
 * Created by hp1 on 2017/4/18.
 */
window.onload=function(){

}
//С��
$(function(){
    var body=$('body');
    var html=$('html');
    window.onresize=function() {
        var width=$(window).width();
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
    //ѡ�
    function xuanxuan(xuan1,xuan2,xuan3=''){
        $(xuan1).mouseover(function(){
            $(xuan1).removeClass('first');
            $(this).addClass('first');
            $(xuan2).removeClass('first');
            $(xuan2).eq($(this).index(xuan3)).addClass('first');
        })
    }
    xuanxuan(".z-content-l .z-smallimg img",".z-content-l .z-bigimg img")
    xuanxuan('.z-zi',".dian",".z-zi");
    xuanxuan('.z-zizi','.imgbox1','.z-zizi');
//    lunbo
    function getFigure(str3, str4, str5) {
        var flag = true;
        var picture=$(str3);
        var circles=$(str4);
        var div=$(str5)
        var n = 0;
        var t = setInterval(move, 3000);//����move������ʹ��ʱ�亯���������Զ��仯��
        function move(way = "right") {//����move��Ĳ���Ĭ����right
            console.log(1);
            if (way == "right") {//���������Ĭ���������ԭ����������һ������n�Լ�
                n++;
                if (n >= picture.length) {//��ͼƬ�������һ��ʱ�����丳ֵΪ0����ͷ��ʼѭ��
                    n = 0;
                }
            }
            picture.each(function (index) {//ѭ��ͼƬ
                picture.eq(index).removeClass("first-two")//�����к���first-one��first-one-one�Ƴ�
                console.log(picture.eq(index));
                circles.eq(index).removeClass("first-one")
            });
            picture.eq(n).addClass("first-two");//����ʱnֵ��������ͼƬ
            circles.eq(n).addClass("first-one");
        }
        div.mouseover(function () {//�������ʱ��ֹͣ�ֲ�ͼѭ��
            clearInterval(t)
        });
        div.mouseout(function () {
            t = setInterval(move, 1500);//���Ƴ���ʱ�򣬵���move��������������ѭ��
        });
        var m;
        circles.each(function (i) {//
            circles.eq(i).mouseover(function () {
                clearTimeout(m)
                m = setTimeout(function () {
                    clearTimeout(m);
                    picture.each(function (index) {
                        picture.eq(index).removeClass("first-two")
                        circles.eq(index).removeClass("first-one")

                    })
                    picture.eq(i).addClass("first-two");
                    circles.eq(i).addClass("first-one");
                    n = i;
                }, 200)
            });
            circles.eq(i).mouseout(function () {
                clearTimeout(m)
            });
        });
        picture.each(function (v) {
            picture.get(v).addEventListener('transitionend', function () {
                flag = true;
            })
        });
    }
    getFigure('.tutu','.diandian .changtiao','.z-banner')
    getFigure('.tutu2','.diandian2 .changtiao2','.z-banner2')
    getFigure('.z-x-banner4','.diandian1 .changtiao4','.imgbox12')
    getFigure('.z-x-banner5','.diandian1 .changtiao5','.imgbox13')
    getFigure('.z-x-banner6','.diandian1 .changtiao6','.imgbox14')
});
