const _app = {}
_app.body = document.querySelector("body")

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

_app.textAnim = () => {
	const tl = gsap.timeline();

	tl.from(".line span", 1.8, {
		y: 100,
		ease: "power4.out",
		delay: .5,
		skewY: 7,
		stagger: {
			amount: 0.3
		}
	});
	
}

_app.loader = () => {
	return new Promise((resolve) => {
		_app.body.classList.add("overflow-hidden");
		const tl = gsap.timeline();
		const welcomeScreen = gsap.timeline({
		  paused: true,
		});
		
		tl.from(".title", {
			duration: 0.5,
			opacity: 0,
			y: 10,
		});
		tl.from(".bracket", {
			duration: 0.3,
			scale: 0,
			margin: 0,
		});
		tl.from("#loader", {
			duration: 0.2,
			scale: 0,
		});
		tl.from("loading-images, img", {
			duration: 0.8,
			y: 150,
			opacity: 0,
			stagger: {
				amount: 01,
			},
		});
		tl.from(
			".bottom-line",
			{
				duration: 0.5,
				y: 50,
				opacity: 0,
				stagger: {
				amount: 0.1,
				},
			},
			"-=.5"
		);
		welcomeScreen.to(".loading-section, .loading-images-container", {
			y: -10,
			opacity: 0,
		});
		welcomeScreen.to(".loading-screen", {
			duration: 0.8,
			y: -2000,
			ease: "Power4.out",
		});
		welcomeScreen.from(".welcome-screen", {
				y: 200,
				duration: 0.5,
				stagger: {
				amount: 0.2,
				},
			}, "-=.8"
		);
		welcomeScreen.eventCallback("onComplete", () => {
			resolve();
		  });
		let id,
		i = 0;
		function loader() {
		id = setInterval(frame, 45);
		}
		function frame() {
		if (i >= 100) {
			clearInterval(id);
			welcomeScreen.play();
		} else {
			i++;
			document.getElementById("loader").innerHTML = i + "%";
		}
		}
		window.onload = function () {
		loader();
		};
	});
}

_app.startUp = () => {
	if (window.location.pathname.includes("index.html")) {
		_app.owlCarousel();
		_app.loader().then(() => {
			_app.body.classList.remove("overflow-hidden");
			setTimeout(() => {				
				document.getElementById("text-open").classList.remove("opacity-0", "invisible");
			}, 100);
			_app.textAnim();
			_app.menuGestor();
		});	
	}

	_app.menuGestor();

	if (window.location.pathname.includes("works.html")) {
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
	_app.smooth();
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
	setTimeout(() => {
		_app.navEl.classList.add("fixed-top")
	}, 6000);

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
	

	