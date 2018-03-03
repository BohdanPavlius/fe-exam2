;(function($){
	$(document).ready(function(){
		$('.as-hero__slider').slick({
			dots: true
		});

		var $gallery = $('.as-work__gallery').isotope({
			itemSelector: '.as-work__gallery-item',
			persentPosition: true,
			masonry: {
				columnWidtn: '.as-work-gallery-sizer'
			}

		});
		$('.as-work__filter').on('click' , 'a',function(event){
			event.preventDefault();
			var $filterValue = $(this).data('filter');
			$gallery.isotope({filter: $filterValue});
			$(this).addClass('active').siblings().removeClass('active');
		})
	});
})(jQuery);