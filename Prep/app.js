/*
document.write('<h1>This is the heading</h1>');
document.write('Hello world once again!!');

document.write('<br/>');
document.write('<br/>');
var numberOfThings = 5;
document.write(numberOfThings);

document.write('<br/>');

var x = 'some words';
document.write('the value of x is: ' + x + ', x is a :');
document.write(typeof x);

document.write('<br/>');

x = 5;
document.write('the value of x is: ' + x + ', x is a :');
document.write(typeof x);

document.write('<br/>');

x = 10 + 5;
document.write('the value of x is: ' + x + ', x is a :');
document.write(typeof x);

document.write('<br/>');

x = 10 + '5';
document.write('the value of x is: ' + x + ', x is a :');
document.write(typeof x);

document.write('<br/>');

x = 0.1;
var y = 0.2;
var z = x + y;

if (z === 0.3) {
	document.write('<br/>');
	document.write('They are equal');
} else {
	document.write('<br/>');
	document.write('They are not equal');
}

document.write('<br/>');
document.write('the value of z is: ' + z + ', z is a :');
document.write(typeof z);
*/

x = 5;
var elem = document.getElementById("demo");
elem.innerHTML = x;
elem.style.color = 'red';
