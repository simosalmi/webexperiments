
'use strict';

function goodFunction() {	
	var arr = [1, 2, 3, 4, 5];
	var index = null;
	for (index in arr) {
	    var  myFunc = function() {};
		function fuckingFunction() {
			console.log('motherfucker');
		};
		fuckingFunction();
	}
	
};

goodFunction();

console.log('hi from main');

var isStrict = (function() { return !this; })();

console.log('is strict in main? ' + isStrict);

var isStrict = (function() { return !this; })();

console.log('is strict second time? ' + isStrict);

// code not in strict mode

var nonStrictFunction = function() {
	// code not in strict mode
}

var myFunction = function() {
	'use strict';
	// ...
	// code in strict mode
	var f = function() {
		// code in strict mode;
	};
	
	f(); // strict code call
	
	nonStrictFunction(); // non strict code call
}

// code not in strict mode