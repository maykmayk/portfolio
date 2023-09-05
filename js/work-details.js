function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Funzione per caricare i dettagli del lavoro
function loadWorkDetails(workId) {
	const workDetails = {
		nunnarella: {
			name: "Nunnarella",
			subTitle: "Crafting Delicious Experiences",
            haveCover: true,
			coverUrl: "./asset/images/works/nunnarella/headerImg.png",
			slogan: "Where food tastes like famiglia",
            text: "Nunnarella is a wannabe traditional Italian restaurant that brings the authentic taste of Italy to your table. With its warm and welcoming atmosphere, Nullarella takes pride in its traditional approach to cooking, with recipes passed down from generations of Italian families. The new revamped branding showcases the passion and commitment that goes into every dish we serve. We've taken inspiration from Italy's rich cultural heritage, its colors, textures, and designs to create an ambiance that transports you to a different world.",
            showSeeMore: true,
            showMoreLink: "https://www.behance.net/mayke",
            haveImages: true,
            images: [
                "./asset/images/works/nunnarella/1Nunna.jpg",
                "./asset/images/works/nunnarella/7Nunna.gif",
                "./asset/images/works/nunnarella/2Nunna.jpg",
                "./asset/images/works/nunnarella/4Nunna.jpg",
                "./asset/images/works/nunnarella/3Nunna.png",
                "./asset/images/works/nunnarella/8Nunna.jpg",
                "./asset/images/works/nunnarella/5Nunna.jpg",
                "./asset/images/works/nunnarella/6Nunna.jpg",
            ],
            tags: [
                "Brand Identity",
                "Web Design",
                "Design System",
            ],
            haveVideo: false,
            urlVideo: "",
            nextProjectLink: "./work-details.html?work=visart",
            nextProject: "Visart"
        },
		visart: {
			name: "Visart",
			subTitle: "Connect Your Design Activity",
            haveCover: true,
			coverUrl: "./asset/images/works/visart/visartCover.png",
			slogan: "Empower your design without limits",
            text: "Are you tired of feeling isolated in your design work? Look no further than Visart App! This platform is designed to connect you to the world's best creators, giving you the opportunity to collaborate and learn from the best in the business. With a soft touch in user interface design, this app is intuitive and easy to use, making it simple to share your work, get feedback, and connect with other designers. Whether you're looking to expand your network or learn new skills, this web app is the perfect tool for transforming your design process.",
            showSeeMore: true,
            showMoreLink: "https://www.behance.net/mayke",
            haveImages: true,
            images: [
                "./asset/images/works/visart/1Vis.png",
                "./asset/images/works/visart/5Vis.png",
                "./asset/images/works/visart/3Vis.png",
                "./asset/images/works/visart/4Vis.png",
                "./asset/images/works/visart/2Vis.png",
                "./asset/images/works/visart/6Vis.png",
                "./asset/images/works/visart/7Vis.png",
                "./asset/images/works/visart/8Vis.png",
            ],
            tags: [
                "Brand Identity",
                "Web Design",
                "Design System",
            ],
            haveVideo: false,
            urlVideo: "",
            nextProjectLink: "./work-details.html?work=versacrum",
            nextProject: "Ver Sacrum"
		},
        versacrum: {
            name: "Ver Sacrum",
			subTitle: "Art Is Erotic",
            haveCover: true,
			coverUrl: "./asset/images/works/verSacrumCover.png",
			slogan: "Igniting artistic allure through fashion",
            text: "",
            showSeeMore: true,
            showMoreLink: "https://www.versacrumbrand.com",
            haveImages: true,
            images: [
                "./asset/images/works/verSacrum/vs1.png",
                "./asset/images/works/verSacrum/vs2.png",
                "./asset/images/works/verSacrum/vs3.png",
                "./asset/images/works/verSacrum/vs4.png",
            ],
            tags: [
                "Brand Identity",
                "Web Development",
                "Design System",
                "Clothing Design",
            ],
            haveVideo: false,
            urlVideo: "",
            nextProjectLink: "./work-details.html?work=md",
            nextProject: "Magnificent Desolation"
        },
        md: {
            name: "A Magnificent Desolation",
			subTitle: "Cinematic Short Film",
            haveCover: true,
			coverUrl: "./asset/images/works/magnificent Desolation/mdCover.png",
			slogan: "we missed the most important thing: <br>Perseverance",
            text: "A Magnificent Desolation is a film who celebrates the values that have made space exploration possible: the human spirit of curiosity, determination, and exploration. It reminds us of the power of innovation, collaboration, and risk-taking to achieve the seemingly impossible. It invites us to dream big, push boundaries, and reach for the stars. The film is a full sensory experience that evokes wonder, awe, and inspiration. It is a call to action to pursue our passions and to always strive for new horizons. This short cinematic film is more than just a story about space exploration; it's a celebration of the values that have made it possible. It is a reminder that humanity has an inherent desire to explore and to push the boundaries of what is possible.",
            showSeeMore: false,
            showMoreLink: "",
            haveImages: false,
            images: [
                "",
                "",
            ],
            tags: [
                "Video Making",
                "Story Telling",
            ],
            haveVideo: true,
            urlVideo: "https://www.youtube-nocookie.com/embed/B0g1aZwxekg?si=N2v5waI9IYJduDaB&amp;start=1",
            nextProjectLink: "./work-details.html?work=regular",
            nextProject: "Regular"
        },
        regular: {
            name: "Regular",
			subTitle: "Typo Fanzine",
            haveCover: true,
			coverUrl: "./asset/images/works/regularCover.png",
			slogan: "The Font Folklore",
            text: "Regular ain't your typical typography magazine bossing you around with what fonts to use. Nah! Each month, we'll hook you up with the juiciest typo news, unveil the most mesmerizing font of the month, and drop some mind-blowing typographic tricks that'll leave you saying, 'Whoa! So buckle up, typo explorers, 'cause Regular's about to rock your typophile world!",
            showSeeMore: false,
            showMoreLink: "",
            haveImages: false,
            images: [
                "",
                "",
            ],
            tags: [
                "Brand Identity",
                "Web Development",
                "Design System",
                "Magazine Design",
            ],
            haveVideo: false,
            urlVideo: "",
            nextProjectLink: "./work-details.html?work=spark",
            nextProject: "Spark"
        },
        spark: {
            name: "The Spark",
			subTitle: "Personal Branding",
            haveCover: false,
            videoCover: "./asset/images/works/spark/introSpark.mp4",
            slogan: "Design creates culture.<br>Culture shapes values.<br>Values determine the future.",
            text: "My personal branding is a true labor of love, meticulously crafted to represent who I am as a creative professional. It's more than just a design - it's a visual composition that speaks volumes about my personality and work ethic. The color scheme is carefully chosen to convey energy and warmth, while the typography represents elegance and clarity. Every component of my branding - especially my logo - is a blend of simplicity and creativity that makes a lasting impression on my audience. But my branding is more than just eye-candy - it serves a strategic purpose. It communicates my value proposition, sets me apart from competitors, and positions me as an authority in my industry. My personal branding is a true reflection of my brand identity and what I have to offer to my clients, building relationships, and helping me achieve my business objectives.",
            showSeeMore: false,
            showMoreLink: "",
            haveImages: true,
            images: [
                "./asset/images/works/spark/spark1.png",
                "./asset/images/works/spark/spark2.png",
                "./asset/images/works/spark/spark3.png",
                "./asset/images/works/spark/spark4.png",
                "./asset/images/works/spark/spark5.png",
                "./asset/images/works/spark/spark6.png",
            ],
            tags: [
                "Brand Identity",
                "Web Development",
                "Design System",
            ],
            haveVideo: false,
            urlVideo: "",
            nextProjectLink: "./work-details.html?work=nunnarella",
            nextProject: "Nunnarella"
        }
	};

	const work = workDetails[workId];
	if (work) {
		const workDetailsContainer = document.getElementById("workDetailsContainer");

        let imagesHtml = '';

        // Genera il markup HTML per le immagini
        if (work.images && work.images.length > 0) {
            for (let i = 0; i < work.images.length; i += 2) {
                imagesHtml += `
                    <div class="px-4 row mb-4">
                        <div class="col-12 col-md-6 mb-4 mb-md-0">
                            <img src="${work.images[i]}" class="galleryImg">
                        </div>`;
                if (i + 1 < work.images.length) {
                    imagesHtml += `
                        <div class="col-12 col-md-6">
                            <img src="${work.images[i + 1]}" class="galleryImg">
                        </div>`;
                }
                imagesHtml += `</div>`;
            }
        }

        let tags = ''

        for (let i = 0; i < work.tags.length; i++) {
            tags += `
            <div class="tagWork text-nowrap">
                ${work.tags[i]}
            </div>
            `
        }

		workDetailsContainer.innerHTML = `
    <div class="d-flex justify-content-center pt-3">
        <div class="titleWorkPage editorial">
            ${work.name || ''}
        </div>
    </div>
    <div class="d-flex justify-content-center fs-6 lh-4 text-center mw-100 mb-5">
        ${work.subTitle || ''}
    </div>

    <div class="row mb-5 px-4">
        <div class="col-12">
            ${work.haveCover ? `
                <img src="${work.coverUrl}" class="headerImgWork">
            ` : `
                <video class="headerImgWork" autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                    <source src="${work.videoCover}" data-wf-ignore="true" type="video/mp4">
                    Il tuo browser non supporta la riproduzione di video.
                </video>
            `}
        </div>
    </div>

    <div class="row mb-5 px-4">
        <div class="col-12 col-md-6 d-flex flex-column align-items-start">
            <div class="mb-auto">
                <div class="sideWorkTitle">
                    ${work.slogan || ''}
                </div>
                ${work.showSeeMore ? `
                    <div class="fs-6 hover-underline-animation mb-md-4 mb-0 mt-3">
                        <a href="${work.showMoreLink}" target="_blank">
                            See more...<img src="./asset/images/icons/arrow-down-right.svg" class="arrow" draggable="false">
                        </a>
                    </div>
                ` : ''}
            </div>
            <div id="tags" class="d-flex gap-2 flex-wrap mt-3 mt-md-0 text-center">
                ${tags}
            </div>
        </div>
        <div class="col-12 col-md-6 mt-md-0 mt-3">
            <div class="fs-6">
                ${work.text || ''}
            </div>
        </div>
    </div>
	
	<!-- gallery -->
        ${work.haveVideo ? `
        <div class="px-4 row mb-4">
            <iframe width="560" height="315" src="${work.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        ` : ''}
        ${work.haveImages ? imagesHtml : ''}
        <!-- end gallery -->
	
    ${work.showSeeMore ? `
    <div class="d-flex justify-content-center">
        <div class="fs-6 hover-underline-animation mb-4 mt-3"><a href="${work.showMoreLink}" target="_blank">
            See more...<img src="./asset/images/icons/arrow-down-right.svg" class="arrow" draggable="false"></a>
        </div>
    </div>
    ` : ''}
    <div class="d-flex w-100 justify-content-center mt-5">
        <div class="fs-6">
            <div class="seeWorks me-0">Next project</div>
        </div>
    </div>
    <div class="d-flex w-100 justify-content-center mt-1">
        <div class="fs-1 hover-underline-animation mb-4">
            <a href="${work.nextProjectLink}">
                ${work.nextProject} <img src="./asset/images/icons/arrow-down-right.svg">
            </a>
        </div>
    </div>
		`;
	}
}

// Chiamata alla funzione di caricamento dei dettagli del lavoro quando il documento è pronto
document.addEventListener("DOMContentLoaded", () => {
    const workId = getUrlParameter('work');
    loadWorkDetails(workId);
});
