$(document).ready(function () {

	$('#myForm').submit(function(){
		var name = $('#name-input').val();
		$('#target').text(name);
		$('#name-input').val('');
		//console.log(event.target.id);
		event.preventDefault();
	});


})
