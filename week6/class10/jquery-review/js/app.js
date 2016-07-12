/* $('#one').click(function(){
		$('#one').css('background-color', 'orange'); 
		$('#one').html('This is an orange box.')
});

$('#two').click(function(){
		$('#two').css('background-color', 'green');
		$('#two').text('This is a green box.'); 
});*/


$('.box').click(function(){
	$('.box').css('background-color', 'green');
	$('.box').css('color', 'white');
	$('.box').css('text-align', 'center');
	$('#one').html('This is box one.');
	$('#two').html('This is box two.');
});

/*$('#one').click(function(){
	$('#one').css('height', '500px');
	$('#one').css('width', '500px');
});

$('#two').click(function(){
	$('#two').css('height', '500px');
	$('#two').css('width', '500px');
});*/


/*$('#one').click(function(){
	$(this).css('height', '500px');
	$(this).css('width', '500px');
});

$('#two').click(function(){
	$(this).css('height', '500px');
	$(this).css('width', '500px');
});*/

$('#one').click(function(){
	$(this).css('height', (this) + '100px');
});