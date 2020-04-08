(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {
			$body = $('body');
			$body.addClass('is-loading');
			$(window).on("load", function() {
					$body.removeClass('is-loading');
					$cover = $('#cover');
					$cover.fadeOut(500);
					$spinner = $("#spinner");
					$spinner.fadeOut(500);
			});


		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);
