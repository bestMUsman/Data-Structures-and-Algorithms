/*
https://www.freecodecamp.org/challenges/drop-it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

function dropElements(arr, func) {
	if (!arr || !func || arr.length == 0) return [];
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i, arr.length);
    }
  }
	return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
