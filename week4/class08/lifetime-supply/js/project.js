// -- global variables can be used in multiple functions-- //
var age;
var maxAge;
var item;
var numPerDay;


document.getElementById('click_me').onclick = calculate;

function calculate() {
	age = parseInt(document.getElementById('age').value);
	maxAge = parseInt(document.getElementById('max_age').value);
	item = document.getElementById('item').value;
	numPerDay = parseInt(document.getElementById('num_per_day').value);
	total_drinks = (maxAge - age) * 365 * numPerDay;

	document.getElementById('solution').innerHTML = total_drinks;
	document.getElementById('drink').innerHTML = item;

	/* -- debugging (check console in browser for values) --
	console.log(age);
	console.log(maxAge);
	console.log(item);
	console.log(numPerDay);
	*/

}


