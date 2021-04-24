(
	function (){
	"use strict";


			// function showMultiplicationTable(num1){
			// 	for (var i = 1; i < 11; i++){
			// 		 console.log(num1 * i);
			// 	}
			// }
			//
			// showMultiplicationTable(5);

		// var random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
		//
		// 	function oneToTwoHundred(num1){
		// 		for(let i = 1; i < 11; i++){
		// 			if (num1 % 2 === 0){
		// 				console.log(num1 + " is even.")
		// 			}else{
		// 				console.log(num1 + " is odd.")
		// 			}
		// 		}
		// 	}
		//
		// 	oneToTwoHundred(random);




		// var x = 1;
		//
		// for (let i = 1; i <= 9; i++) {
		// 	console.log(i.toString().repeat(i))
		//
		// }



		for(let i = 1; i <= 9; i++) {
			var arr = []
			for (let x = 1; x <= i; x++) {
				arr.push(i);
				// console.log(arr)
			}
			console.log(arr.join(""));
		}


		// for(let i = 100; i >= 5; i = i - 5 ){
		// 	console.log(i)
		// }




	}

)()