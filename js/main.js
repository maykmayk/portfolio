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
	if (window.innerWidth >= 767) { 
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		  anchor.addEventListener('click', function (e) {
			e.preventDefault();
			lenis.scrollTo(this.getAttribute('href'), {offset: -100})
			_app.navEl.classList.remove("closed");
		  });
		});
	  }
}

_app.textAnim = () => {
	const tl = gsap.timeline();

	tl.from(".headWork .w-100", {
		delay: .5,
		y: 300,
        skewY: 2,
		duration: 1,
	});

	tl.from(".lineIntro .fs-6", {
		delay: .5,
		y: 150,
        skewY: 2,
		duration: 1,
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
	tl.from(".title .w-100", {
		delay: .5,
		y: 300,
        skewY: 2,
		duration: 1,
	});

	tl.from(".subTitleWorkList .fs-4", {
		y: 150,
        skewY: 2,
		duration: 1,
	}, "-=1");

	tl.from(".linez", {
		delay: 1,
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

_app.workDetAnim = () => {
	// line animating slogan
	gsap.registerPlugin(ScrollTrigger);
	gsap.from(".sloganLine", {
		scrollTrigger: {
			trigger: ".sloganLine",
			scrub: true,
			start: "top-=700px",
			end: "top-=400px",
		},
		opacity: 0,
		y: 0,
		duration: 1,
		ease: "power3.Out",
		stagger: {
			amount: 2,
		},
		
	})

	// buttons
	var hoverMouse = function(elements) {
		elements.forEach(function(element) {
			var self = element;
			var hover = false;
			var offsetHoverMax = self.getAttribute("offset-hover-max") || 0.7;
			var offsetHoverMin = self.getAttribute("offset-hover-min") || 0.5;
		
			var attachEventsListener = function() {
				window.addEventListener("mousemove", function(e) {
				var hoverArea = hover ? offsetHoverMax : offsetHoverMin;
		
				// cursor
				var cursor = {
					x: e.clientX,
					y: e.clientY + window.scrollY
				};
		
				// size
				var width = self.offsetWidth;
				var height = self.offsetHeight;
		
				// position
				var offset = self.getBoundingClientRect();
				var elPos = {
					x: offset.left + width / 2,
					y: offset.top + height / 2
				};
		
				// comparaison
				var x = cursor.x - elPos.x;
				var y = cursor.y - elPos.y;
		
				// dist
				var dist = Math.sqrt(x * x + y * y);
		
				// mutex hover
				var mutHover = false;
		
				// anim
				if (dist < width * hoverArea) {
					mutHover = true;
					if (!hover) {
					hover = true;
					}
					onHover(x, y);
				}
		
				// reset
				if (!mutHover && hover) {
					onLeave();
					hover = false;
				}
				});
			};
	  
			var onHover = function(x, y) {
				console.log("hover");
				TweenMax.to(self, 0.4, {
					x: x * 0.8,
					y: y * 0.8,
					rotation: x * 0.05,
					ease: Power2.easeOut
				});
			};
		
			var onLeave = function() {
				console.log("leave");
				TweenMax.to(self, 0.7, {
					x: 0,
					y: 0,
					scale: 1,
					rotation: 0,
					ease: Elastic.easeOut.config(1.2, 0.4)
				});
			};
		
			attachEventsListener();
		});
	};
	  
	var anchorElements = Array.from(document.querySelectorAll('.tagWork'));
	hoverMouse(anchorElements);
		

	// titleAnimating
	const title = new SplitType("#animTitle")
	gsap.to(".char", {
		y: 0,
		stagger: 0.03,
		delay: 0.5,
		duration: .1
	})

	// right side text anim"
	const revealTypeElements = document.querySelectorAll('.reveal-type');

	revealTypeElements.forEach((element, i) => {
	const bg = element.dataset.bgColor;
	const fg = element.dataset.fgColor;

	// Seleziona solo il testo all'interno dell'elemento "reveal-type"
	const text = element.textContent;

	// Crea un div per il testo
	const textContainer = document.createElement('div');
	textContainer.innerHTML = text;

	// Applica SplitType solo al testo all'interno del div appena creato
	const textSplit = new SplitType(textContainer, { types: 'chars' });

	// Rimuovi la classe "chars" dai caratteri
	textSplit.chars.forEach(char => {
		char.classList.remove('char');
	});

	// Aggiungi il div con il testo splittato all'elemento "reveal-type"
	element.innerHTML = '';
	element.appendChild(textContainer);

	// Applica l'animazione GSAP al testo splittato
	gsap.fromTo(textSplit.chars,
		{
		color: bg,
		},
		{
		color: fg,
		duration: 0.3,
		stagger: 0.02,
		scrollTrigger: {
			trigger: element,
			start: 'top 80%',
			end: 'top 20%',
			scrub: true,
			markers: false,
			toggleActions: 'play play reverse reverse'
		}
		});
	});
	
	// image zoom
	let mm = gsap.matchMedia();
	mm.add("(min-width: 767px)", () => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				toggleActions: "play none none none",
				start: "0px",
				end: "+=200px",
			},
		})
	
		timeline
			.from(".headerImgWork", {
				borderRadius: '+=10%',
				scale: 1.1,
				clipPath: 'inset(0% 20%)'
			})
	});

	// gallery skew
	let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 
	ScrollTrigger.create({
		onUpdate: (self) => {
			let skew = clamp(self.getVelocity() / -500);
			// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
			if (Math.abs(skew) > Math.abs(proxy.skew)) {
				proxy.skew = skew;
				gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
			}
		}
	});
	gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});
	  
	// hover nextProj
	gsap.utils.toArray(".containerHover").forEach((el) => {
		const image = el.querySelector("img.swipeimage"),
		  setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" }),
		  setY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power3" }),
		  align = (e) => {
			const top = el.getBoundingClientRect().top;
			setX(e.clientX);
			setY(e.clientY - top);
		  },
		  startFollow = () => document.addEventListener("mousemove", align),
		  stopFollow = () => document.removeEventListener("mousemove", align),
		  fade = gsap.to(image, {
			autoAlpha: 1,
			ease: "none",
			paused: true,
			onReverseComplete: stopFollow
		  });
	  
		el.addEventListener("mouseenter", (e) => {
		  fade.play();
		  startFollow();
		  align(e);
		});
	  
		el.addEventListener("mouseleave", () => fade.reverse());
	});
}

_app.startUp = () => {
	_app.owlCarousel();
	_app.smooth();
	_app.menuGestor();
	if (window.location.pathname.includes("index.html")) {
		_app.menuGestor();
		_app.textAnim();
	}
	
	if (window.location.pathname.includes("miao.html")) {
		_app.miao();
	}

	if (window.location.pathname.includes("works.html")) {
		_app.workListAnim();
	}

	if (window.location.pathname.includes("work-details.html")) {
		window.onload = function() {
			_app.workDetAnim();
		};
	
	}
}

_app.miao = () => {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: document.documentElement,
			scrub: true,
			markers: true,
			start: "top+=200px",
			end: "top+=600px",
		},
	})

	timeline
		.from(".imageWorkDet", {
			scale: `1.1`,
			clipPath: `inset(0% 30%)`
		})
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
	

	