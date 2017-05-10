$(document).ready(function(){

    $('.zxq-bottom')[0].addEventListener('touchstart', function(e) {
        var obj=e.target;
        if($(obj).attr('src')=='../img/bf11.png'||$(obj).attr('src')=='../img/bf1.png')
        {
            var audio=$('audio').get(0);
			if(audio.paused){
				audio.play();
				$('.zxq-aa').css('display','none');
				$('.zxq-bb').css('display','block');

			}else{
				audio.pause();
				$('.zxq-bb').css('display','none');
				$('.zxq-aa').css('display','block');

			}
            var jindu=$('.zxq-bottom .zxq-tiao');
            var tiao=$('.zxq-bottom .zxq-ctiao');
            $('.zxq-bottom .zxq-yuan').on('click',false);
            jindu.on('click',function(e){
                audio.currentTime=audio.duration*(e.offsetX/jindu.width());
            })
            $(audio).on('timeupdate',function(){
                var w=jindu.width()*audio.currentTime/audio.duration;
                tiao.width(w);
            });
		}else{
        	location.href="../html/sc-bofang.html";
		}
    })
})