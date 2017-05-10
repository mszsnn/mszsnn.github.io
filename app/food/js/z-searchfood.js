/**
 * Created by hp1 on 2017/5/3.
 */
$(function(){
    // setTimeout(function () {
    //     myScroll.refresh();
    // }, 0);
//    清除历史
    $(".Z-shanchuimg").on("touchstart",function(){
        $(".z-hisjuti").html("");
    });
//    语音特效
    $(".z-yuyin").on("touchend",function(){
        $(".z-zhezhaoz").addClass("z-down1");
        $(".z-false1").css("display","block");

    });
    // document.addEventListener("touchstart",function(e){
    //     e.preventDefault();
    // });
    $(".z-down2").on("touchend",function(){
        $(".z-down2").removeClass("z-down1");
        $(".z-down3").addClass("z-down1");
        setTimeout(function(){
            $(".z-zr").addClass("z-down1");
            $(".z-false").addClass("z-down1");
            $(".z-down3").removeClass("z-down1");
            $(".z-down2").addClass("z-down1");
        },1000);
    });
    $(".z-false1").on("touchstart",function(){
        $(".z-zhezhaoz").removeClass("z-down1");
    });
    $(".z-false").on("touchstart",function(){
        $(".z-zr").removeClass("z-down1");
        $(".z-false").removeClass("z-down1");
    });
//    搜索特效
    $(".z-input")[0].oninput = function() {myFunction()};
    // console.log($(".z-input")[0].value);
    function myFunction() {
        if( $(".z-input")[0].value=="早餐"){
            // console.log(1);
           $(".z-sousuoz").css("display","block");
        }else if( $(".z-input")[0].value==""){
           $(".z-sousuoz").css("display","none");
        }else if($(".z-input")[0].value=="小可爱"){
            $(".z-searchz").each(function(value){
                 $(this).removeClass("z-index");
            });
            $(".z-total li:nth-child(3)").addClass("z-index");

        }else if($(".z-input")[0].value=="西式早餐"){
            $(".z-searchz").each(function(value){
                $(this).removeClass("z-index");
            });
            $(".z-total li:nth-child(2)").addClass("z-index");
        }
    }
});