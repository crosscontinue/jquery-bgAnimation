(function($){
	$.fn.bgAnimation = function(options){
		options = $.extend({
			bgWidth: 1230,
			bgHeight: 643,
			duration: 10000,
			easing: 'swing'
		}, options);

		var bgWrap = $(this);
		var bgWidth    = options.bgWidth;
		var bgHeight   = options.bgHeight;
		var maskWidth  = bgWrap.width();
		var maskHeight = bgWrap.height();
		if( bgWidth < maskWidth ){
			bgWidth = maskWidth;
		}
		if( bgHeight < maskHeight ){
			bgHeight = maskHeight;
		}
		var maxWidth   = bgWidth-maskWidth;
		var maxHeight  = bgHeight-maskHeight;
		
		function scrollbackground(){
			offsetW = Math.round(Math.floor(Math.random()*maxWidth));
			offsetH = Math.round(Math.floor(Math.random()*maxHeight));
			bgWrap.animate({
				backgroundPositionX: -offsetW,
				backgroundPositionY: -offsetH
			}, options.duration, options.easing, function(){
				scrollbackground();
			});
		}

		scrollbackground();
		return this;

	}
})(jQuery);