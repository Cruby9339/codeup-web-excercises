(
	function(){
	"use strict";

	// MINI EXERCISE //

		function getToDestination(){
			let rideSharePossible = function canGetRideshare(){
				let userMoney = prompt("How much money do you have?");
				let drivers = confirm("Are Drivers in the area?");
				return userMoney > 15 && drivers;
			}
			let userAge = prompt("What is your age?");
			let isLicensed = userAge >= 16;
			let hasCar = confirm("Do you have a car?");
			let	isInsured = confirm("Are you insured?");
			let isLegalDriver = isLicensed && isInsured;
			if (isLegalDriver && hasCar){
				alert("Let's get in and go!");
			} else if(rideSharePossible()){
				alert("Let's call a rideshare!");
			} else{
				alert("I think my friend can give us a lift!");
			}
		}


			getToDestination();


	}


)()