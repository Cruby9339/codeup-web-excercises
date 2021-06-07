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
				$(this)
					.css('background-color', 'yellow')
			})
	})

$(document)
	.ready(function () {
		$('#highlight-li')
			.click(function () {
				$('ul li:last-child')
					.css('background-color', 'yellow')
			})
	})


$(document)
	.ready(function () {
		$('h3')
			.click(function () {
				$(this)
					.next()
					.children()
					.css('font-weight', 'bold')
			})
	})

$(document)
	.ready(function () {
		$('li')
			.click(function () {
				$(this)
					.parent()
					.children()
					.first()
					.css('color', 'blue')
			})
	})