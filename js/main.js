const _app = {}

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

_app.smooth = () => {
	const lenis = new Lenis({
		direction: 'vertical',
		smooth: true,
		smoothTouch: false,
		touchMultiplier: 2,
	  })

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
				lenis.scrollTo(this.getAttribute('href'), {offset:-100})
				_app.navEl.classList.remove("closed");
		});
	})
}

_app.startUp = () => {
	_app.owlCarousel();
	_app.menuGestor()
	_app.smooth();

	var workCont = document.querySelectorAll(".workImg");
	workCont.forEach(work => {
		work.addEventListener("mouseover", function(e) {
			_app.startFollowing();
		})
		work.addEventListener("mouseleave", function(e) {
			_app.leaveFollowing();
		})
	});
}

_app.startFollowing = () => {
	var follow = document.getElementById("follow");
	follow.style.opacity = "1"
	follow.style.visibility = "visible"
  
	document.addEventListener("mousemove", function(e) {
	  var offsetX = 10; // Sposta l'elemento di 10 pixel orizzontalmente
	  var offsetY = 10; // Sposta l'elemento di 10 pixel verticalmente
  
	  follow.style.left = e.pageX + offsetX + "px";
	  follow.style.top = e.pageY + offsetY + "px";
	});
  }

_app.leaveFollowing = () => {
	var follow = document.getElementById("follow");
	follow.style.opacity = "0"
	follow.style.visibility = "hidden"
}  

_app.menuGestor = () =>{
	_app.navEl = document.querySelector("#navbar");
	_app.prevScroll = window.scrollY;
	document.addEventListener("wheel", (e) => {
	if (e.deltaY > 0) {
		_app.navEl.classList.add("closed");
	} else {
		_app.navEl.classList.remove("closed");
	}
	})
}

_app.startUp();
	

	