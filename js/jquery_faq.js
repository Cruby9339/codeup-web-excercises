$(document)
	.ready(function () {
		$('#hide-answers')
			.click(function (event) {
				event.preventDefault();
				$('dd')
					.toggleClass('invisible')
			})
	})

$(document)
	.ready(function () {
		$('dt')
			.click(function () {
			$(this).css('background-color', 'yellow')
			})
	})