// can't figure out: 
	// have the reset function run if the input box is cleared


	function reset(){
		$('#tempType1').html('__________');
		$('#tempType2').html('__________');
		$('#degreesNum1').html('____');	
		$('#degreesNum2').html('____');
	}

$('#celcius').click(function() { 
	$('#submit').css('background-color', 'lightblue').css('color', 'black');
})

$('#farenheit').click(function() { 
	$('#submit').css('background-color', 'lightblue').css('color', 'black');
})



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
	};

	if  ($('input').val() == ''){
		$("input:radio").attr("checked", false);
		reset();
	};

});
