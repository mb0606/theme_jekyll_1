$( document ).ready(function() {
	smoothScroll(1000)
	workBelt()
  //

});

// smoothScroll function is applies from document readu function 
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top 
			}, duration);
		}
	})
}

function workBelt() {
	$('.thumb-unit').click(function() {
		event.preventDefault();
		$('.work-container').show();
		$('.work-belt').css('left', '-100%');
	});

	$('.work-return').click(function() {
		$('.work-container').hide();
		$('.work-belt').css('left', '0%');
	});

}