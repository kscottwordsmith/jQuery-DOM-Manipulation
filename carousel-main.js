$(document).ready(function() {
	var imgCounter = 0
	var images = []
	carouselImages.forEach(function(item) {
		images.push(item.image_url)
	})

	$('#forwardBtn').on('click', function() {
		if (imgCounter < images.length) {
			document.querySelector("imgGoesHere").innerHTML = `<img src="${images[imgCounter]}">`
			imgCounter++
		} else if (imgCounter === images.length) {
			imgCounter = 0
			document.querySelector("imgGoesHere").innerHTML = `<img src="${images[imgCounter]}">`
			imgCounter++
		}
	})
})