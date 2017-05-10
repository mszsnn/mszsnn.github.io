/**
 * Created by Administrator on 2017/5/4.
 */
$(document).ready(function () {
    // 音效
    $('.box > div').on('touchstart',function () {
        $('.box > div').removeClass().eq($(this).index()).addClass('active');
    })
})