'use strict';

// MODULES //

var tape = require( 'tape' );
var pinf = require( 'const-pinf-float64' );
var ninf = require( 'const-ninf-float64' );
var pow = require( 'math-power' );
var words = require( 'math-float64-to-words' );
var toFloat64 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof toFloat64 === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns number', function test( t ) {
	var x = toFloat64( 5, 4 );
	t.equal( typeof x, 'number', 'returns a number' );
	t.end();
});

tape( 'the function creates a floating-point number from a higher order word and a lower order word', function test( t ) {
	var values;
	var v;
	var x;
	var w;
	var i;

	values = [
		5,
		pow( 2, 53 ),
		1e308,
		-1e308,
		-3.14,
		1e-324,
		4.94e-324,
		1.234567890123456789,
		-4.94e-324,
		6.333333333333333333e-310,
		-0,
		0,
		100,
		1/10,
		0.625,
		1/3,
		5e-240,
		-5e-240,
		10,
		15,
		-10,
		-15,
		pow( 2, -42 ),
		-pow( 2, 100 ),
		1,
		-1,
		1.5,
		1111111111111.111111111,
		-1111111111111.111111111,
		pow( 2, 54 ),
		pow( 2, 53 ) + 1,
		pow( 2, 53 ) + 2,
		pow( 2, 55 ),
		pow( 2, 56 ) - 1,
		-pow( 2, 57 ) + 5,
		3*pow( 2, 53 ),
		8*pow( 2, 54 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		w = words( v );
		x = toFloat64( w[ 0 ], w[ 1 ] );
		t.equal( x, v, 'returns ' + x + ' from a higher order word (' + w[0] + ') and a lower order word (' + w[1] + ')' );
	}
	t.end();
});

tape( 'the function can return `NaN`', function test( t ) {
	var w;
	var x;

	w = words( NaN );
	x = toFloat64( w[0], w[1] );

	t.ok( x !== x, 'returns NaN' );
	t.end();
});

tape( 'the function can return `+infinity`', function test( t ) {
	var w;
	var x;

	w = words( pinf );
	x = toFloat64( w[0], w[1] );

	t.equal( x, pinf, 'returns positive infinity' );
	t.end();
});

tape( 'the function can return `-infinity`', function test( t ) {
	var w;
	var x;

	w = words( ninf );
	x = toFloat64( w[0], w[1] );

	t.equal( x, ninf, 'returns negative infinity' );
	t.end();
});
