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
			coverUrl: "./asset/images/works/nunnarella/headerImg.jpg",
			slogan: "Where food tastes like famiglia",
            text: "Nunnarella is a wannabe traditional Italian restaurant that brings the authentic taste of Italy to your table. With its warm and welcoming atmosphere, Nullarella takes pride in its traditional approach to cooking, with recipes passed down from generations of Italian families. The new revamped branding showcases the passion and commitment that goes into every dish we serve. We've taken inspiration from Italy's rich cultural heritage, its colors, textures, and designs to create an ambiance that transports you to a different world.",
            showSeeMore: true,
            showMoreLink: "https://www.behance.net/mayke",
            haveImages: true,
            images: [
                "./asset/images/works/nunnarella/1Nunna.jpg",
                "./asset/images/works/nunnarella/2Nunna.jpg",
                "./asset/images/works/nunnarella/7Nunna.gif",
                "./asset/images/works/nunnarella/4Nunna.jpg",
                "./asset/images/works/nunnarella/3Nunna.png",
                "./asset/images/works/nunnarella/8Nunna.jpg",
                "./asset/images/works/nunnarella/5Nunna.jpeg",
                "./asset/images/works/nunnarella/6Nunna.gif",
            ],
            haveVideo: false,
            urlVideo: "",
        },
		visart: {
			name: "Visart",
			subTitle: "Connect Your Design Activity",
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
                "./asset/images/works/visart/7Vis.jpg",
                "./asset/images/works/visart/8Vis.png",
            ],
            haveVideo: false,
            urlVideo: "",
		},
		happening: {
			name: "Happening",
			subTitle: "Made for those who wanna live.",
			coverUrl: "./asset/images/works/happening/happeningCover.png",
			slogan: "Find your concert tribe and rock on!",
            text: "Welcome to Happening, the ultimate destination for discovering and booking tickets to the hottest concerts, festivals, and live events in your area. This app makes it easy to find events by genre, location, and date, and our streamlined checkout process makes booking tickets a breeze. Join happening and start experiencing the best live events your city has to offer!",
            showSeeMore: false,
            showMoreLink: "",
            haveImages: true,
            images: [
                "./asset/images/works/happening/1Happening.png",
                "./asset/images/works/happening/3Happening.gif",
            ],
            haveVideo: false,
            urlVideo: "",
        },
        versacrum: {
            name: "Ver Sacrum",
			subTitle: "Art Is Erotic",
			coverUrl: "./asset/images/works/verSacrumCover.png",
			slogan: "Igniting artistic allure through fashion",
            text: "",
            showSeeMore: true,
            showMoreLink: "https://www.versacrumbrand.com",
            haveImages: true,
            images: [
                "./asset/images/works/verSacrum/vs1.png",
                "./asset/images/works/verSacrum/vs2.png",
            ],
            haveVideo: false,
            urlVideo: "",
        },
        md: {
            name: "A Magnificent Desolation",
			subTitle: "Cinematic Short Film",
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
            haveVideo: true,
            urlVideo: "https://www.youtube.com/embed/B0g1aZwxek"
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
                    <div class="padding row mb-4">
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

		workDetailsContainer.innerHTML = `
    <div class="d-flex justify-content-center">
        <div class="titleWorkPage lh-1">
            ${work.name || ''}
        </div>
    </div>
    <div class="d-flex justify-content-center subWork mb-5">
        ${work.subTitle || ''}
    </div>

    <div class="row padding mb-5">
        <div class="col-12">
            <img src="${work.coverUrl || ''}" class="headerImgWork">
        </div>
    </div>

    <div class="padding row mb-5">
        <div class="col-12 col-md-6">
            <div class="sideWorkTitle">
                ${work.slogan || ''}
            </div>
            ${work.showSeeMore ? `
                <div class="fs-6 hover-underline-animation mb-4 mt-3">
                    <a href="${work.showMoreLink}" target="_blank">
                        See more...<img src="./asset/images/icons/arrow-down-right.svg" class="arrow" draggable="false">
                    </a>
                </div>
            ` : ''}
        </div>
        <div class="col-12 col-md-6">
            <div class="sideWorkText">
                ${work.text || ''}
            </div>
        </div>
    </div>
	
	<!-- gallery -->
        ${work.haveVideo ? `
        <div class="padding row mb-4">
            <iframe width="560" height="590" src="${work.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
		`;
	}
}

// Chiamata alla funzione di caricamento dei dettagli del lavoro quando il documento è pronto
document.addEventListener("DOMContentLoaded", () => {
    const workId = getUrlParameter('work');
    loadWorkDetails(workId);
});
