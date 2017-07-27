
var a = prompt('Enter the value of a');
var	b = prompt('Enter the value of b');


if ( ( a * a ) + ( 2 * a * b ) - ( b * b ) > 0 ) {
    alert ('Expression (a * a) + (2 * a * b) - (b * b) equals positive number');
}

else if ((a * a) + (2 * a * b) - (b * b) < 0) {
    alert ('Expression (a * a) + (2 * a * b) - (b * b) equals negative number');
}

else  {
	alert ('Expression (a * a) + (2 * a * b) - (b * b) equals zero');
} 