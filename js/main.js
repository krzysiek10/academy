$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	autoplay:true,
	autoplayTimeout:3000,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
});
$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type:'image',
		gallery:{enabled:true}
	});
});