;(function($) {
	"use strict";

/*		var tabs = $('.ba-tabs a'),
			cont = $('.ba-content__tab');

		$('.ba-tabs').on('click', 'li', function(){
			var li = $(this);

			tabs.removeClass('active');
			li.children('a').addClass('active');

			cont.filter('.active').stop().fadeOut(200,function(){
				var currentContent = $(this),
					showedContent = cont.eq(li.index());

				currentContent.removeClass('active');
				showedContent.stop().fadeIn(200).addClass('active');
			});
		});

	$('[data-modal]').on('click',function(event){
		event.preventDefault();
		var modal = $(this).data('modal');

		$('#' + modal).toggleClass('ba-modal--open');
	});

	$('.ba-overlay').on('click', function(){
			$('.ba-modal').removeClass('ba-modal--open');
	});*/

	$('.ba-slider').slick();

})(jQuery);

