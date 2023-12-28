const _app = {};

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
};

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
	gsap.registerPlugin(ScrollTrigger);
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
    skewSetter = gsap.quickSetter("canvas", "skewY", "deg"), // fast
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
	gsap.set("canvas", {transformOrigin: "right center", force3D: true});
	  
	// hover nextProj
	gsap.utils.toArray(".containerHover").forEach((el) => {
		const image = el.querySelector("img.swipeimage"),
		  setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" }),
		  align = (e) => {
			setX(e.clientX);
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

_app.copy = () => {
	var styles = [
		' background: linear-gradient(90deg, #7bb8f2 0%, #dee7f8 100%);'
		, 'color: black'
		, 'display: block'
		, 'padding: 20px 10px'
		, 'text-align: center'
	].join(';');
	
	console.log('%cHandmade by mayke - mvitade@gmail.com', styles);
}

_app.pixel = () => {
	let imageArray = [];

	let options = {
		root: null, // Cambia la radice a seconda della tua struttura HTML
		rootMargin: '0px',
		threshold: 1.0
	};

	let callback = (entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// console.log(entry.target.classList[0]);
				imageArray[+entry.target.classList[0]].reveal();
			}
		});
	});

	let observer = new IntersectionObserver(callback, options);
	class PixelImage{
		constructor(id, image, width, height){
			this.id = id;
			this.image = image;
			this.styleWidth = width;
			this.styleHeight = height;
			this.width = width * window.devicePixelRatio;
			this.height = height * window.devicePixelRatio;
			this.percent = .001;
			this.applyCanvas();
			this.draw();
		}
	
		applyCanvas(){
			this.canvas = document.createElement('canvas');
			this.canvas.classList.add(this.id);
			this.ctx = this.canvas.getContext('2d');
			this.image.parentElement.appendChild(this.canvas);
			this.canvas.width = this.width;
			this.canvas.height = this.height;
			this.canvas.style.width = `${this.styleWidth}px`;
			this.canvas.style.height = `${this.styleHeight}px`;
			this.scaledWidth = this.width * this.percent;
			this.scaledHeight = this.height * this.percent;
	
			// turn off image aliasing
			this.ctx.msImageSmoothingEnabled = false;
			this.ctx.mozImageSmoothingEnabled = false;
			this.ctx.webkitImageSmoothingEnabled = false;
			this.ctx.imageSmoothingEnabled = false;

			// this.canvas.classList.add('w-100');
	
			observer.observe(this.canvas);
		}
	
		draw(){
			this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
			this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
		}
	
		reveal(){
			this.canvas.classList.add('active');
			this.percent = this.percent < .1 ? this.percent += .005 : this.percent += .2;
			if(this.percent > 1) this.percent = 1;
			this.scaledWidth = this.width * this.percent;
			this.scaledHeight = this.height * this.percent;
	
			this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
			this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
			if(this.percent < 1) requestAnimationFrame(this.reveal.bind(this));
		}
	}
	
	function generatePixelImages() {
		let images = document.querySelectorAll('.galleryImg');
		images.forEach((image, idx) => {
			image.style.opacity = '0';
			let { width, height } = image.getBoundingClientRect();
			let pixelImage = new PixelImage(idx, image, width, height);
			imageArray.push(pixelImage);
	
			// Osserva il canvas associato a ogni immagine
			observer.observe(pixelImage.canvas);
		});
	}

	function handleResize() {
        imageArray.forEach(pixelImage => {
            // Update canvas size based on new image dimensions and device pixel ratio
            let { width, height } = pixelImage.image.getBoundingClientRect();
            pixelImage.width = width * window.devicePixelRatio;
            pixelImage.height = height * window.devicePixelRatio;
            pixelImage.canvas.width = pixelImage.width;
            pixelImage.canvas.height = pixelImage.height;
            pixelImage.canvas.style.width = `${width}px`;
            pixelImage.canvas.style.height = `${height}px`;

            // Redraw the pixel image with the updated size
            pixelImage.draw();
        });
    }

    // Event listener for screen resize
    window.addEventListener('resize', handleResize);

    generatePixelImages();
}

_app.startUp = () => {
	_app.copy();
	_app.owlCarousel();
	_app.hour();
	if (window.innerWidth > 768) {		
		_app.smooth();
	}
	_app.menuGestor();
	_app.copyEmail();
	if (window.location.pathname.includes("work-details.html")) {
		window.addEventListener("load", () => {
			_app.pixel();
			_app.workDetAnim();
		});	
	} else if (window.location.pathname.includes("works.html")) {
		_app.workListAnim();
		_app.playPauseVideo();
	} else {
		_app.textAnim();
	}
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

_app.hour = () => {
	function updateMilanTime() {
		const milanTimezoneOffset = 2; // Milano è UTC+2
		const now = new Date();
		const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Converti in tempo UTC
		const milanTime = new Date(utcTime + (milanTimezoneOffset * 60 * 60 * 1000));
	  
		let hours = milanTime.getHours();
		const minutes = milanTime.getMinutes();
		const ampm = hours >= 12 ? 'PM' : 'AM';
	  
		if (hours > 12) {
		  hours -= 12;
		}
	  
		const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
		document.querySelector('.timeCont').textContent = formattedTime;
	  }
	  
	  setInterval(updateMilanTime, 1000);
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
	