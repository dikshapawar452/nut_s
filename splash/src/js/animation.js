
// Animations

jQuery(document).ready(function() {
    'use strict';
    trx_scroll_anim();
});

jQuery(window).scroll(function() { // Scroll actions for animated elements
	'use strict';
    trx_scroll_anim();
});

function trx_scroll_anim() {
	"use strict";
	var IEisRunning = window.document.documentMode;
	var detectEdge = window.navigator.userAgent.indexOf('Edge');
	if (IEisRunning || detectEdge > 0) {
		$('[data-animation^="animated"]').css("visibility", "visible");
		$('[data-animation^="innerAnimated"]').css("visibility", "visible");
		return;
	} else {
		var scroll_offset = jQuery(window).scrollTop();
		jQuery('[data-animation^="animated"]:not(.animated)').each(function () {
			if (jQuery(this).offset().top < scroll_offset + jQuery(window).height() - 200){
				var animation = jQuery(this).data('animation');
				var delay = jQuery(this).data('delay');
				var go = jQuery(this);
				if(delay){
					setTimeout(function () {
						go.addClass(animation);
					}, delay);
				} else {
					go.addClass(animation);
				}
			}
		});
		jQuery('[data-animation^="animationContainer"]:not(.animationContainer)').each(function () {
			var containerOffset = 150;
			var customOffset = jQuery(this).data('offset');
			if (customOffset === 0 || customOffset) {
				containerOffset = customOffset;
			}
			if (jQuery(this).offset().top < scroll_offset + jQuery(window).height() - containerOffset) {
				jQuery(this).find('[data-animation^="innerAnimated"]:not(.innerAnimated)').each(function () {
					var animation = jQuery(this).data('animation');
					var delay = jQuery(this).data('delay');
					var go = jQuery(this);
					if(delay){
						setTimeout(function () {
							go.addClass(animation);
						}, delay);
					} else {
						go.addClass(animation);
					}
				});
			}
		});
	}
}