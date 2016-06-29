alert('Hi');

document.write('writing to the document, like a boss');

console.log("hello");

var fname = "Jennifer";
var lname = "Nappi";

var num1 = 10 * 10;
var num2 = 100 / 10;
var num3 = 50 - 17;
var num4 = 50 + 17;

document.write('<h3>"Time is what keeps everything from happening at once."</h3>');

document.write((10 * 10) + '<br>');

document.write((100 / 10) + '<br>');

document.write((50 - 17) + '<br>');

document.write((50 + 17) + '<br>');

document.write(fname + " " + lname + '<br>');

document.write(num1 + '<br>');

document.write(num2 + '<br>');

document.write(num3 + '<br>');

document.write(num4 + '<br>');



// this is a function definition

function doSomething () {
	alert('this is an alert. this is annoying');
}

// function trigger
doSomething();

document.getElementById('greeting').style.color = "red";

document.getElementById('myPara').style.color = "green";

// or you can make it a variable which is easier to reference again
var myPara = document.getElementById('myPara');

myPara.style.color = "green";
myPara.onclick = doSomething;
