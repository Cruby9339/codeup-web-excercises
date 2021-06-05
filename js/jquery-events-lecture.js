// //make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
// 	addListeners();
// });
// //parent method for adding all listeners
// function addListeners(){
// 	//get the elements to add listener and change image
// 	let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
// 	addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpeg', 'mouseover');
// 	addEvents(cardContainers, 'img/question.png', 'mouseout');
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
// 	cardContainers.forEach((cc) => {
// 		let card = cc;
// 		//create listener which will call function change the image
// 		let listener = function (event) {
// 			let cardImg = card.querySelector(".card .card-img-top");
// 			changeImage(cardImg, imgPath);
// 		};
// 		cc.addEventListener(listenerType, listener);
// 	});
// }
// //actual function to swap images
// function changeImage(card, imgPath){
// 	card.setAttribute('src', imgPath);
// }
//

// $(document).ready(function (){
// 	$(".card-img-top").hover(function (){
// 		$(this).attr("src", "img/jazz-music-rubber-duck.jpeg");
// 	}, function (){
// 		$(this).attr("src", "img/question.png");
// 	})
// });



let cardContainers = $('.col-md-3')

let submitButton = $('#submitBtn')
let overBoot = $('#override-bootstrap')

$(document)
	.ready(function () {
		cardContainers.hover(function () {
			$(this)
				.find(".card-img-top")
				.attr("src", "img/jazz-music-rubber-duck.jpeg");
		}, function () {
			$(this)
				.find(".card-img-top")
				.attr("src", "img/question.png");
		})
	});


$(document).ready(function (){
	submitButton.click(function (){
		overBoot.css("background-color", "red");
	})
})

$(document).ready(function (){
	$(".card-text").click(function (){
		$(this).css("background-color", "red");
	})
})

$(document).ready(function (){
	$('#resetBtn').click(function (){
		location.reload()
	})
})

$(document).ready(function (){
	$('#main-title').click(function (){
		$(this).css("font-size", "4em");
	})
})