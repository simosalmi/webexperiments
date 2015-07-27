'use strict';

var prop2Value = 108,
	readOnlyPropertyValue = 2,
	myObj = Object.create(Object.prototype, {
		prop1: {
			enumerable: true,
			configurable: false,
			writable: false,
			value: {
				field1: 1,
				field2: 21
			}
		},	
		prop2: {
			enumerable: false,
			configurable: true,
			get: function() {
				console.log('accessed property prop2 with value', prop2Value);
				return prop2Value;			
			},
			set: function(value) {
				prop2Value = value;
				console.log('assigned value to prop2, it\'s now', prop2Value);
			}
		}
	});
	
Object.defineProperty(myObj, 'readOnlyProperty',
	{
		enumerable: true,
		configurable: false,
		get: function() {			
			return readOnlyPropertyValue;
		}
	}
);

try {
	Object.defineProperties(myObj, {	
		'prop2': {		
			enumerable: true 
		},
		'prop1': {
			writable: true	
		}
	});	
}
catch(e) {
	console.log(e);
	// TODO report error
}

for(var prop in myObj){ console.log(prop); } // logs prop1	prop2	readOnlyProperty

console.log(myObj.prop2); // logs:
// accessed property prop2 with value 108
// 108
// the other attributes of the descriptor for pro2 stay the same

var myVar2 = 3,
	myObj2 = {
		prop1: 1,
		get prop2() {
			return myVar2;
		}
	};
	
Object.defineProperty(myObj2, 'prop1', {
	enumerable: false
});

myObj2.prop2 = 108;