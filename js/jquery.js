"use strict";

// $(document).ready(function() {
// 	alert( 'The DOM has finished loading!' );
// });
//
//
// var contents = $('#header').html();
// alert(contents);
//

// $(".codeup").css('border', '1px solid red');
//
// $("li").css('font-size', '20px')
//
//
// $("h1, p, li").css('background-color', '#FF0');
//
// var contents = $('h1').html();
// alert(contents);

$('#header').click(function (){
		$(this).css('background-color', 'yellow');
	});

$('#paragraph').dblclick(function (){
	$(this).css('font-size', '18px');
});

$('.list').hover(
	function (){
	$(this).css('color', 'red');
},
	function (){
		$(this).css('color', 'black')
	});