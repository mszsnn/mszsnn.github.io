/**
 * Created by Administrator on 2017/5/4.
 */
let t =0, n =0, count;
$(document).ready(function () {
    $('section').hide();
    $('#chu').on('click', function () {
        console.log(1);
        $('section').show();
        $('body').addClass('hidden');
    });
    $('section').on('touchmove', function () {
        console.log(2);
        $('section').hide();
        $('body').removeClass('hidden');
    });
    count = $(".banner-main a").length;  //banner图的个数
    $(".banner-main a:not(:first-child)").hide();    //除了第一张其他全部隐藏
    $(".circle li").click(function () {
        let i = $(this).index();    //将当前的下标赋给i
        n = i;
        if (i >= count) return;     //当i>=count 返回（true）跳至下一个循环
        //筛选出所有可见的a>渐出>找父元素>父元素下的子元素>筛选出第i个（当前）>渐入
        $(".banner-main a").filter(":visible").fadeOut(200).parent().children().eq(i).fadeIn(400);
        $(this).toggleClass("first1");   //给当前元素子元素添加（删除）类名
        $(this).siblings().removeAttr("class");  //当前元素>所有同辈元素>子元素>删除属性
    });
    t = setInterval("showAuto()", 4000);    //时间函数
});
function showAuto(way=`r`) {
    switch (way){
        case `r`:n = n >= (count - 1) ? 0 : ++n;break;
        case `l`:n = n <= 0 ? count-1 : --n;
    }
    $(".circle li").eq(n).trigger('click');     //给当前元素绑定点击事件
}