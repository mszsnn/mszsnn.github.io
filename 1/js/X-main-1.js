'use strict'
$(function(){
	var X_shop_seven_rect=$('.X-shop-seven-pasword .X-shop-seven-rect-all .X-shop-seven-rect-one .X-shop-seven-rect');
//	console.log(X_shop_seven_rect);
	
	
	var X_shop_seven_circle=$('.X-shop-seven-pasword .X-shop-seven-rect-all .X-shop-seven-rect-one .X-shop-seven-circle');
//	console.log(X_shop_seven_circle);
	
	var X_shop_seven_input=$('.X-shop-seven-pasword form input');
//	console.log(X_shop_seven_input);
	
	
		X_shop_seven_input.focus(function(){
			if(X_shop_seven_input.val().length==1){
				X_shop_seven_rect.eq(0).addClass('X-shop-seven-rects');
				X_shop_seven_circle.eq(0).show();
//				console.log(X_shop_seven_input.val().length);
			}
			if(X_shop_seven_input.val().length==2){
				X_shop_seven_rect.eq(0).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(1).addClass('X-shop-seven-rects');
				X_shop_seven_circle.eq(0).show();
				X_shop_seven_circle.eq(1).show();
//				console.log(X_shop_seven_input.val().length);
			}
			if(X_shop_seven_input.val().length==3){
				X_shop_seven_rect.eq(0).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(1).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(2).addClass('X-shop-seven-rects');
				X_shop_seven_circle.eq(0).show();
				X_shop_seven_circle.eq(1).show();
				X_shop_seven_circle.eq(2).show();
//				console.log(X_shop_seven_input.val().length);
			}
			if(X_shop_seven_input.val().length==4){
				X_shop_seven_rect.eq(0).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(1).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(2).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(3).addClass('X-shop-seven-rects');
				X_shop_seven_circle.eq(0).show();
				X_shop_seven_circle.eq(1).show();
				X_shop_seven_circle.eq(2).show();
				X_shop_seven_circle.eq(3).show();
//				console.log(X_shop_seven_input.val().length);
			}
			if(X_shop_seven_input.val().length==5){
				X_shop_seven_rect.eq(0).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(1).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(2).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(3).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(4).addClass('X-shop-seven-rects');
				X_shop_seven_circle.eq(0).show();
				X_shop_seven_circle.eq(1).show();
				X_shop_seven_circle.eq(2).show();
				X_shop_seven_circle.eq(3).show();
				X_shop_seven_circle.eq(4).show();
//				console.log(X_shop_seven_input.val().length);
			}
			if(X_shop_seven_input.val().length==6){
				X_shop_seven_rect.eq(0).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(1).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(2).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(3).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(4).addClass('X-shop-seven-rects');
				X_shop_seven_rect.eq(5).addClass('X-shop-seven-rects');
				X_shop_seven_circle.eq(0).show();
				X_shop_seven_circle.eq(1).show();
				X_shop_seven_circle.eq(2).show();
				X_shop_seven_circle.eq(3).show();
				X_shop_seven_circle.eq(4).show();
				X_shop_seven_circle.eq(5).show();
//				console.log(X_shop_seven_input.val().length);
			}
		});

	
});

