(function(){
	"use strict";

	/**
	 * TODO:
	 * Create an array of 4 people's names and store it in a variable called
	 * 'names'.
	 */

	var names = ["Christian", "Marina", "Miyavi", "Kiryu"]

	/**
	 * TODO:
	 * Create a log statement that will log the number of elements in the names
	 * array.
	 */

	console.log(names.length);



	/**
	 * TODO:
	 * Create log statements that will print each of the names individually by
	 * accessing each element's index.
	 */


	/**
	 * TODO:
	 * Write some code that uses a for loop to log every item in the names
	 * array.
	 */
// function myNames(array) {
// 		for (var i = 0; i < array.length; i++){
// 			console.log(array[i]);
// 		}
// 	}
//
// 	myNames(names);

	/**
	 * TODO:
	 * Refactor your above code to use a `forEach` loop
	 */

	function myNames(array) {
		array.forEach(element => console.log("Some names I recognize are: " + element));
	}

	myNames(names);

	// names.forEach(element => console.log(element));

	/**
	 * TODO:
	 * Create the following three functions, each will accept an array and
	 * return an an element from it
	 * - first: returns the first item in the array
	 * - second: returns the second item in the array
	 * - last: returns the last item in the array
	 *
	 * Example:
	 *  > first([1, 2, 3, 4, 5]) // returns 1
	 *  > second([1, 2, 3, 4, 5]) // returns 2
	 *  > last([1, 2, 3, 4, 5]) // return 5
	 */
		var nums = [1, 2, 3, 4, 5];

		function findFirst(arr){
			console.log(arr[0])
		}

		findFirst(nums);

		function findTwo(arr){
			console.log(arr[1])
		}

		findTwo(nums);

		function findFive(arr){
		console.log(arr[4])
		}

		findFive(nums);

})();