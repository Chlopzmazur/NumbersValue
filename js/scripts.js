
var a = prompt('Enter the value of a');
var	b = prompt('Enter the value of b');
var mathExpression = ( a * a ) + ( 2 * a * b ) - ( b * b )

if ( mathExpression > 0 ) {
    alert ( mathExpression + '  equals positive number');
}

else if ( mathExpression < 0 ) {
    alert ( mathExpression + ' equals negative number');
}

else  {
	alert (mathExpression + ' equals zero');
} 

console.log('('+ a + ' * ' + a + ') + (2 * ' + a + ' * ' + b + ') - ('+ b +' * ' + b +') = ' + mathExpression  );	