// can't figure out: 
	// have the reset function run if the input box is cleared
	// cap the number of decimal places shown
	// get the button to become 'active' when input has a alue and a button is checked.



if ($('input:text').is(":empty")) {
	reset();
}

if($('#celcius').is(':checked')) { 
		$('#submit').css('background-color', 'lightblue');
}

if($('#farenheit').is(':checked')) { 
		$('#submit').css('background-color', 'lightblue');
}



$('#submit').click(function(){

	var tempInput = parseInt($('#temp').val());
	var toCelcius = (tempInput * 1.8) + 32;
	var toFarenheit = (tempInput - 32) / 1.8;


	$('#degreesNum1').html(tempInput).css('color', 'black');


	if($('#celcius').is(':checked')) { 
		//alert("it's checked"); 
		$('#tempType1').html('celcius').css('color', 'black');
		$('#tempType2').html('farenheit').css('color', 'black');
		$('#degreesNum2').html(toCelcius.toFixed(2)).css('color', 'black');

	} else if ($('#farenheit').is(':checked')) {
		$('#tempType1').html('farenheit').css('color', 'black');
		$('#tempType2').html('celcius').css('color', 'black');
		$('#degreesNum2').html(toFarenheit.toFixed(2)).css('color', 'black');

	} else {
		reset;
	}

});


function reset(){
$('#tempType1').html('_____________');
$('#tempType2').html('_____________');
$('#degreesNum1').html('______');	
$('#degreesNum2').html('______');
}