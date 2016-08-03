var hasBeenClicked = false;

$('#click_me').click(function(){
	if(hasBeenClicked === false){
		$('#show_hide').hide();
		hasBeenClicked = true;
	}else if (hasBeenClicked === true) {
		$('#show_hide').show();
		hasBeenClicked = false;
	}
	
});