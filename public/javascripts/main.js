// see how it changes the array itself
var arr1 = [1, 3, 2];

arr1.forEach(function(el, i, arr) {
	arr[i] = 2*el;
	arr.push(i + 1);
});

console.log(arr1); // logs [2, 6, 4, 1, 2, 3]
// it doesn't iterate on elements added/removed after the call to forEach

// see how it skips undefined indexes
var arr2 = [];

arr2[1] = 0;

arr2[3] = 1;

arr2.forEach(function(el, i, arr) {
	console.log(i, el);
}); 
// logs:
// 1 0
// 3 1 