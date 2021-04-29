(function () {
	"use strict";


	//TODO:
	// -> .length - SUPER IMPORTANT
	// -> .forEach()- ALSO IMPORTANT
	// -> for loop - STILL IMPORTANT


	// var days = ["Monday", "Tuesday", "Wednesday"];
	// days.push("Thursday") // adds items to the end of the array
	//
	// var removedElement = days.pop();
	//
	// console.log(days);
	// console.log("The removed element was: " + removedElement);


	//TODO: MINI EXERCISE
	// -> Create an array with the remaining days of the week
	// -> Call .forEach() on that NEW array
	// -> Inside the inline function you pass into .forEach()
	// -> add the remainingDay of the week to the old array
	// -> When the loop completes, console.log() the completed day of the week array

	// var days = ["Monday", "Tuesday", "Wednesday"];
	// var remainingDays = ["Thursday", "Friday", "Saturday"];
	//
	// remainingDays.forEach(function(day){
	// 	days.push(day);
	// });
	//
	// console.log(days)


	//.unshift(valuetoaddtothebeginning)

	// Start  0, 1, 2, 3
	// Unshift   0, 1, 2, 3
	// w/ New 0, 1, 2, 3, 4

	// var numArray = [1, 2, 3, 4, 5];
	// //console.log(numArray.indexOf(1));//beginning index
	//
	// numArray.push(6)
	//
	// //console.log(numArray.indexOf(1))//ending index
	//
	//
	// var sortedArray = numArray.sort()
	//
	// console.log(sortedArray);

	// var daysInTheMonth = [...Array(32).keys()];
	// console.log(daysInTheMonth)
	// var removedDay = daysInTheMonth.shift()
	// console.log(`This day was removed: ${removedDay}`)
	// console.log(daysInTheMonth)
	// console.log(daysInTheMonth.indexOf(1) === 0)

	// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array


	// var days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday"];
	//
	// function weeks(arr){
	// 	var newArr = [];
	// 	var arrLength = (arr.length)
	// 	for(var i = 0; i < arrLength; i++){
	// 		var popped = arr.pop();
	// 		newArr.unshift(popped)
	// 		console.log(newArr)
	// 	}
	// 	console.log(days);
	// }
	// weeks(days);


	function sortMyNums(num1, num2, num3){
		var numArray = [num1, num2, num3];
		// console.log(numArray);
		numArray.sort(function(a,b){
			console.log(a);
			console.log(b);
			console.log(a - b);
			return a - b;
		});
		console.log(numArray);

		return numArray;
	}

	sortMyNums(13,1,1009);



function giveMissyJustice(notASuspectString){

	var musicalGenius = notASuspectString.split('');

	console.log(musicalGenius);

	// musicalGenius.reverse();

	console.log(musicalGenius.reverse())

	var reversedString = musicalGenius.join('');

	console.log(reversedString);
}

giveMissyJustice("i put my string down, flip it and reverse it");




})()