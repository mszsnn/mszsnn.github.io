/**
 * Created by hp1 on 2017/5/7.
 */
$(function(){
    function getstyle(card,content){
        $(card).on("touchstart",function(){
            $(card).removeClass('first');
            $(card).eq($(card).index(this)).addClass('first');
            $(content).toggleClass("z-index");
        })
    }
    getstyle(".z-dapeifen",".z-total li")
})
