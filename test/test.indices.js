'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var indices = require( './../lib/indices.js' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( typeof indices === 'object', 'main export is an object' );
	t.end();
});

tape( 'object contains a HIGH and a LOW index', function test( t ) {
	t.equal( typeof indices.HIGH, 'number', 'HIGH index' );
	t.equal( typeof indices.LOW, 'number', 'LOW index' );
	t.end();
});

tape( 'if little endian, the HIGH index is 1 and the LOW index is 0', function test( t ) {
	var indices = proxyquire( './../lib/indices.js', {
		'utils-is-little-endian': true
	});

	t.equal( indices.HIGH, 1, 'HIGH equals 1' );
	t.equal( indices.LOW, 0, 'LOW equals 0' );
	t.end();
});

tape( 'if big endian, the HIGH index is 0 and the LOW index is 1', function test( t ) {
	var indices = proxyquire( './../lib/indices.js', {
		'utils-is-little-endian': 'beep' // a value other than `true`
	});

	t.equal( indices.HIGH, 0, 'HIGH equals 0' );
	t.equal( indices.LOW, 1, 'LOW equals 1' );
	t.end();
});

