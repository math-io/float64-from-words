'use strict';

var round = require( 'math-round' );
var pow = require( 'math-power' );
var toFloat64 = require( './../lib' );

var MAX_UINT;
var high;
var low;
var x;
var i;

MAX_UINT = pow( 2, 32 ) - 1;
for ( i = 0; i < 100; i++ ) {
	high = round( Math.random()*MAX_UINT );
	low = round( Math.random()*MAX_UINT );
	x = toFloat64( high, low );
	console.log( 'higher: %d. lower: %d. float: %d.', high, low, x );
}
