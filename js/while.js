(
	function(){
	"use strict";

		// var x = 1;
		// while(x < 65536){
		// 	x = x * 2;
		// 	console.log(x)
		// }



		var allCones = Math.floor(Math.random() * 50) + 50;

		do{
			var cones = Math.floor(Math.random() * 5) + 1;
			if(cones > allCones){
				console.log("I Cannot sell you " + cones + " cones I only have " + allCones);
			}else{
				allCones -= cones;
				console.log("I sold " + cones + " cones.");
			}

		}while (allCones > 0);

		console.log("YAY! Im done!");



	}


)()