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
		delay: .5,
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
	// gsap.from(".sloganLine", {
	// 	scrollTrigger: {
	// 		trigger: ".sloganLine",
	// 		scrub: true,
	// 		start: "top-=700px",
	// 		end: "top-=400px",
	// 	},
	// 	opacity: 0,
	// 	y: 0,
	// 	duration: 1,
	// 	ease: "power3.Out",
	// 	stagger: {
	// 		amount: 2,
	// 	},
		
	// })

	// titleAnimating
	const title = new SplitType("#animTitle")
	gsap.to(".char", {
		y: 0,
		// stagger: 0.03,
		stagger : {
			amount: 0.3,
			from: 'random'
		},
		delay: 0.5,
		duration: .1
	})
	gsap.from(".numberWork", {
		opacity: 0,
		stagger : {
			amount: 0.3,
			from: 'random'
		},
		duration: 1,
		delay: 1,
	})
	gsap.from(".subtitleWork", {
		opacity: 0,
		stagger : {
			amount: 0.3,
			from: 'random'
		},
		duration: 1,
		delay: 1,
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
	const textSplit = new SplitType(textContainer);

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
	window.addEventListener("load", () => {
		_app.owlCarousel();
		_app.smooth();
		_app.menuGestor();
		_app.copyEmail();
		if (window.location.pathname.includes("work-details.html")) {
			_app.workDetAnim();
		} else if (window.location.pathname.includes("works.html")) {
			_app.workListAnim();
			_app.playPauseVideo();
		} else {
			_app.textAnim();
		}
	});
}

_app.playPauseVideo = () => {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}

_app.copyEmail = () => {
	let emailElements = document.querySelectorAll(".email");
  
	emailElements.forEach((element) => {
		element.addEventListener("click", () => {
			let copyText = "mvitade@gmail.com";
	
			document.addEventListener("copy", (e) => {
				e.clipboardData.setData("text/plain", copyText);
				e.preventDefault();
				console.log("Testo copiato con successo: " + copyText);
			});
			document.execCommand("copy");
		});
	});
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
	
