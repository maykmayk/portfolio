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
	if (window.location.pathname.includes("works.html")) {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
					lenis.scrollTo(this.getAttribute('href'), {offset:-100})
					_app.navEl.classList.remove("closed");
			});
		})
	}

}

_app.textAnim = () => {
	const tl = gsap.timeline();

	tl.from(".headWork", {
		delay: 0.5,
		duration: 1,
		skewY: 7,
		y: -300,
		stagger: {
			amount: 2,
		},
		ease: "power3.Out"
	});

	tl.from(".line span", {
		duration: 1.8,
		y: 100,
		ease: "power4.out",
		skewY: 7,
		stagger: {
			amount: 0.3,
		},
		ease: "power3.Out"
	}, "-=1"); 

	gsap.registerPlugin(ScrollTrigger);
	gsap.from(".textAbout", {
		scrollTrigger: {
			trigger: ".textAbout",
			scrub: true,
			start: "bottom-=350px bottom",
			end: "bottom+=250px bottom",
		},
		stagger: {
			amount: 0.3,
		},
		opacity: 0,
		y: 200,
		ease: "power3.Out"
	})
}

_app.workListAnim = () => {
	const tl = gsap.timeline();

	tl.from(".headWork", {
		delay: .5,
		duration: 1,
		skewY: 7,
		y: -350,
		stagger: {
			amount: 2,
		},
		ease: "power3.Out"
	});
	tl.from(".linez", {
		duration: 1,
		width: "0%",
		stagger: {
			amount: 2,
		},
		ease: "power3.Out"
	},"-=1");
	tl.from(".work-item div, .work-item p",{
		y: 150,
		duration: 0.5,
		stagger: {
			amount: 2.5,
		},
		ease: "power3.Out"
	},"-=3");
}

_app.footerAnim = () => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.from("footer", {
		scrollTrigger: {
			trigger: "footer",
			scrub: true,
			start: "top-=50px bottom",
			end: "top+=130px bottom",
		},
		opacity: 0,
		ease: "power3.Out"
	})
}

_app.workDetAnim = () => {
	gsap.from(".headerDetails", {
		delay: 0.5,
		duration: 1,
		skewY: 7,
		y: -200,
		ease: "power3.Out",
	});

	gsap.registerPlugin(ScrollTrigger);
	gsap.from(".sloganLine", {
		scrollTrigger: {
			trigger: ".sloganLine",
			scrub: true,
			start: "top-=700px",
			end: "top-=400px",
		},
		opacity: 0,
		left: "-200px",
		ease: "power3.Out",
		stagger: {
			amount: 2,
		},
	})
	gsap.from(".linez", {
		scrollTrigger: {
			trigger: ".linez",
			scrub: true,
			start: "top bottom",
			end: "top+=150px bottom",
		},
		width: "0%",
		ease: "power3.Out",
	})
	gsap.from(".goToNextProject", {
		scrollTrigger: {
			trigger: ".goToNextProject",
			scrub: true,
			start: "top-=100px bottom",
			end: "top+=50px bottom",
		},
		y: 100,
		ease: "power3.Out",
	})
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: document.documentElement,
			scrub: true,
			start: "0px",
			end: "+=200px",
		},
	})

	timeline
		.from(".headerImgWork", {
			clipPath: `inset(30%)`
		})
}

_app.startUp = () => {
	_app.owlCarousel();
	_app.smooth();
	_app.menuGestor();
	_app.footerAnim()
	if (window.location.pathname.includes("index.html")) {
		_app.menuGestor();
		_app.textAnim();
	}

	if (window.location.pathname.includes("works.html")) {
		_app.workListAnim();
	}

	if (window.location.pathname.includes("work-details.html")) {
		if (window.location.pathname.includes("work-details.html")) {
			window.onload = function() {
				_app.workDetAnim();
			};
		}
	}
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
	

	