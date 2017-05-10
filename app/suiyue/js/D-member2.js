/**
 * Created by chen on 2017/5/4.
 */
$(document).ready(function () {
    let lis=$(".d-open > li");
    setTimeout(function () {
        lis.on("touchstart",function (e) {
            // e.preventDefault();
            lis.each(function (num,value) {
                $(value).removeClass();
            });
            $(this).addClass("first");
        });
    },1000)

});