$(document).ready(function(){
	$('.topper, .text').css('visibility', 'visible')
	$("#para1").addClass('active')

	$('.topper').on('click', function(){
		var text = $(this).find('+.text')
		console.log(text)
		$('.text').removeClass('active')
		text.addClass('active')
	})
})