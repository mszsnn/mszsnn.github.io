/**
 * Created by chen on 2017/5/3.
 */
$(document).ready(function () {
    let input= $('header  div.d-search  input');
    input.focus(function () {
        $('section.d-result').css({display:"block"});
        $('img.d-searchicon').css({display:"none"});
        $('img.d-clearicon').css({display:"inline-block"});
    });
    input.blur(function () {
        $('section.d-result').css({display:"none"});
        $('img.d-searchicon').css({display:"inline-block"});
        $('img.d-clearicon').css({display:"none"});
    });
});