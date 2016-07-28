
$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width() >= 960 ){
			$('#mobile-nav').hide();
		}
	})

	$('.hamburger').click(function(){
		$('#mobile-nav').slideToggle();
	});

})