
$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width() >= 1024 ){
			$('#mobileNav').hide();
		}
	})

	$('#burger').click(function(){
		$('#mobileNav').slideToggle();
	});

})



