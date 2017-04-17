window.onload=function(){
		loaded();
	function isPassive() {
	    var supportsPassiveOption = false;
	    try {
	        addEventListener("test", null, Object.defineProperty({}, 'passive', {
	            get: function () {
	                supportsPassiveOption = true;
	            }
	        }));
	    } catch(e) {}
	    return supportsPassiveOption;
	};
		function loaded () {
		myScroll = new IScroll('#wrapper', {
			
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'clip',
			fadeScrollbars: true,
			click:true,
			resizeScrollbars:true,
		});
	};
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
		capture: false,
		passive: false,
	} : false);
//主页banner

}
