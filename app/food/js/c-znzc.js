
/**
 * Created by Administrator on 2017/5/2.
 */
$(function(){
    // li的点击事件
    var arr=[];
    var flag=true;
    $('main >div >ul >li').on('touchstart',function() {
        // // 如果添加的里的长度大于4
        if ($('.c-xuan>li').length > 3) {
            return;
        }
        else {
            //获取li的菜名
            var name = $(this).children('*:nth-child(3)').children('span').html();
            // 点击后给这个li下的 .dui 类名 active
            $(this).children('*:nth-child(2)').addClass('active');

            var li=$(`<li type=${name}>`).html(`<span>${name}</span>
        <img src="../img/c-img/cha.png">`);

            //把添加的li的type值放进arr中，如果arr里面不含有这个type值就让它添加进去
            if(!arr.includes($(li).attr("type"))){
                li.appendTo('.c-xuan');
                arr.push($(li).attr("type"));
            }

            $('.c-xuan>li').on('touchstart','img',function () {
                var typeval=$(this).parent().attr('type');
                $(this).parent().remove();
                $('main >div >ul >li').forEach(function (value,index) {
                    if($(value).children('*:nth-child(3)').children('span').html()==typeval){
                        $('main >div >ul >li').eq(index).children('*:nth-child(2)').removeClass('active');
                    }
                });
                //将arr中对应的元素删除
                var num=arr.findIndex(function () {
                    arr.forEach(function (val,index) {
                        val==$(this).attr('type');
                    })
                });
                arr.splice(num,1)

            });
        }
    })

});
