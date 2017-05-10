/**
 * Created by Administrator on 2017/5/4.
 */
$(function () {
    $('.z-yuyin').on('touchstart',function () {
        $('html','body').addClass('hidden');
        $('.zhe').css('display',"block");
    });

    $('.complete').on('touchstart',function () {
        $('html','body').removeClass('hidden');
        $('.zhe').css('display',"none");
    });

    // $('.c-s-con >div').forEach(function (val,index) {
    //     console.log($(val).attr('class'))
    //     var cl=$(val).attr('class');
    //     $(`.${cl} .c-f-list >li`).on('touchstart',function () {
    //         $('.time >.c-f-list >li').removeClass('first');
    //         $(this).addClass('first');
    //         var yixuan=$(this).clone(true).attr('class',`${cl}list first`).append(`<img src="../img/c-img/cha.png" alt="">`);
    //         $(`.${cl}list`).replaceWith(yixuan.appendTo($('.yx-list')));
    //
    //         //点击删除
    //         $('.yx-list > .first').on('touchstart','img',function () {
    //             var con=$(this).parent().children('span.c-x-text').html();
    //             $(this).parent().remove();
    //             $(`.${cl} .c-f-list >li .c-x-text`).forEach(function (val,index) {
    //                 if($(val).html()==con){
    //                     $(`.${cl}  .c-f-list >li`).eq(index).removeClass('first');
    //                 }
    //             })
    //         })
    //
    //     });
    // })

        $(`.time .c-f-list >li`).on('touchstart',function () {
            $('.time >.c-f-list >li').removeClass('first');
            $(this).addClass('first');
            var yixuan=$(this).clone(true).attr('class','timelist first').append(`<img src="../img/c-img/cha.png" alt="">`);
            $('.timelist').replaceWith(yixuan.appendTo($('.yx-list')));

            //点击删除
            $('.yx-list > .first').on('touchstart','img',function () {
                var con=$(this).parent().children('span.c-x-text').html();
                $(this).parent().remove();
                $('.time .c-f-list >li .c-x-text').forEach(function (val,index) {
                    if($(val).html()==con){
                        $('.time .c-f-list >li').eq(index).removeClass('first');
                    }
                })
            })

        });
        
        $(`.step .c-f-list >li`).on('touchstart',function () {
            $('.step >.c-f-list >li').removeClass('first');
            $(this).addClass('first');
            var yixuan=$(this).clone(true).attr('class','steplist first').append(`<img src="../img/c-img/cha.png" alt="">`);
            $('.steplist').replaceWith(yixuan.appendTo($('.yx-list')));

            //点击删除
            $('.yx-list > .first').on('touchstart','img',function () {
                var con=$(this).parent().children('span.c-x-text').html();
                $(this).parent().remove();
                $('.step .c-f-list >li .c-x-text').forEach(function (val,index) {
                    if($(val).html()==con){
                        $('.step .c-f-list >li').eq(index).removeClass('first');
                    }
                })
            })

        })

        $(`.taste .c-f-list >li`).on('touchstart',function () {
            $('.taste >.c-f-list >li').removeClass('first');
            $(this).addClass('first');
            var yixuan=$(this).clone(true).attr('class','tastelist first').append(`<img src="../img/c-img/cha.png" alt="">`);
            $('.tastelist').replaceWith(yixuan.appendTo($('.yx-list')));

            //点击删除
            $('.yx-list > .first').on('touchstart','img',function () {
                var con=$(this).parent().children('span.c-x-text').html();
                $(this).parent().remove();
                $('.taste .c-f-list >li .c-x-text').forEach(function (val,index) {
                    if($(val).html()==con){
                        $('.taste .c-f-list >li').eq(index).removeClass('first');
                    }
                })
            })

        });
        $(`.tech .c-f-list >li`).on('touchstart',function () {
            $('.tech >.c-f-list >li').removeClass('first');
            $(this).addClass('first');
            var yixuan=$(this).clone(true).attr('class','techlist first').append(`<img src="../img/c-img/cha.png" alt="">`);
            $('.techlist').replaceWith(yixuan.appendTo($('.yx-list')));

            //点击删除
            $('.yx-list > .first').on('touchstart','img',function () {
                var con=$(this).parent().children('span.c-x-text').html();
                $(this).parent().remove();
                $('.tech  .c-f-list >li .c-x-text').forEach(function (val,index) {
                    if($(val).html()==con){
                        $('.tech .c-f-list >li').eq(index).removeClass('first');
                    }
                })
            })

        });




    //清空
    $('.c-btn >.clear').on('touchstart',function () {
        $('.yx-list >li').remove();
        $('.c-f-list >li').removeClass('first');
    });


});