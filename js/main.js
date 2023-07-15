const _app = {}

_app.openNav = () => {
	document.querySelector(".menuMob").style.marginTop = "0px";
}
	
_app.closeNav = () => {
	document.querySelector(".menuMob").style.marginTop = "-40vh";
}

_app.owlCarousel = () => {
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			lazyLoad:true,
			dots: false,
			stagePadding: 20,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			responsive:{
				0:{
						items:3,
				},
				600:{
						items:4,
				},
				1000:{
						items:5,
				},
				1200:{
						items:6,
				},
				1500:{
					items:7,
			}
			}
		});
	});

	$('.owl-carousel').on('changed.owl.carousel', function(event) {
		var currentItem = event.item.index;
		var animatedImage = $('.owl-item').eq(currentItem).find('.animated-image');
	
		// Anima l'immagine in base alla direzione di scorrimento
		if (event.relatedTarget.direction == 'left') {
			animatedImage.css('transform', 'translateZ(-50px)');
		} else {
			animatedImage.css('transform', 'translateZ(50px)');
		}
	});
}

_app.logoHover = () => {
	const logoHead = document.querySelector('.logo');

	logoHead.addEventListener('mouseover', () => {
		logoHead.src = './asset/images/logoHeadChromed.png';
	});

	logoHead.addEventListener('mouseout', () => {
		logoHead.src = './asset/images/logo.png';
	});
}

_app.startUp = () => {
	_app.owlCarousel();
	_app.logoHover();
	_app.openNav();
	_app.closeNav();
}

_app.startUp();
	

	