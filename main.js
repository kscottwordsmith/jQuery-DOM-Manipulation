$(document).ready(function(){
	$('.topper, .text').css('visibility', 'visible')
	$("div:nth-of-type(2)").addClass('active')

	$('.topper').on('click', function(){
		var text = $(this).find('+.text')
		$('.text').removeClass('active')
		text.addClass('active')
	})
})