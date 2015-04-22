function indentNewArray(array, i) {
	var len = array.length,
		ind = len,
		res = new Array(len);

	i = i % len;
	if (i < 0) {
		i = len + i;
	}
	
	while (ind--) {
		res[(ind + i) % len] = array[ind];
	}

	return res;
}

function indentSameArray(array, i) {
	var len = array.length;
	
	i = (len - (i % len)) % len;
	
	if (i > 0) {
		reverse(array, 0, i-1);
		reverse(array, i, len-1);
		reverse(array, 0, len-1);
	}

	return array;
}

function reverse(array, from, to) {
	from--;
	to++;
	while (++from < --to) {
		array[from] = array[from] ^ array[to];
		array[to] = array[from] ^ array[to];
		array[from] = array[from] ^ array[to];
	}
}

function testIndent(indent) {
	console.assert(indent([1, 2, 3], 0) == '1,2,3');
	console.assert(indent([1, 2, 3], 1) == '3,1,2');
	console.assert(indent([1, 2, 3], 2) == '2,3,1');
	console.assert(indent([1, 2, 3], 3) == '1,2,3');
	console.assert(indent([1, 2, 3], 7) == '3,1,2');
	console.assert(indent([1, 2, 3], -1) == '2,3,1');
	console.assert(indent([1, 2, 3], -2) == '3,1,2');
	console.assert(indent([1, 2, 3], -3) == '1,2,3');
	console.assert(indent([1, 2, 3], -7) == '2,3,1');
}

testIndent(indentNewArray);
testIndent(indentSameArray);
