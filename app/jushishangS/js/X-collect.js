'use strict'

$(document).ready(function(){
	var com=$('.headers .commodity .com img');
	var art=$('.headers .commodity .art img');
	var coms=$('.headers .article .com img');
	var arts=$('.headers .article .art img');
	
	var comheader=$('.headers .commodity');
	var artheader=$('.headers .article');
	var comlist=$('.collect');
	var artlist=$('.col_arc');
	
	com.get(0).addEventListener('touchstart',function(){
		comlist.show();
		comheader.show();
		artheader.hide();
		artlist.hide();
	});
	art.get(0).addEventListener('touchstart',function(){
		artlist.show();
		artheader.show();
		comheader.hide();
		comlist.hide();
	});
	coms.get(0).addEventListener('touchstart',function(){
		comlist.show();
		comheader.show();
		artheader.hide();
		artlist.hide();
	});
});



