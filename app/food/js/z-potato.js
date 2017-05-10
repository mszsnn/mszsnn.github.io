/**
 * Created by hp1 on 2017/5/6.
 */
$(function(){
    function getstyle(card,content){
        $(card).on("touchstart",function(){
            $(card).removeClass('first');
            $(card).eq($(card).index(this)).addClass('first');
            $(content).toggleClass("first");
        })
    }
    getstyle(".z-dapeifen",".z-slide a")
})
