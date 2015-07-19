var arr = [1, 0, 1, 2, 21, 3, 5, 8, 13];

var max = arr.reduceRight(function getMax(prev, curr, i, array) {
	if(curr > prev) 
		return curr;
	
	return prev; 	
});

console.log(max);