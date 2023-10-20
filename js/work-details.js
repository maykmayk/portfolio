function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Funzione per caricare i dettagli del lavoro
function loadWorkDetails(workId) {
	const workDetails = {
		nunnarella: {
			name: "Nunnarella",
            number: "03",
			subTitle: "Crafting Delicious Experiences",
            haveCover: false,
			videoCover: "./asset/images/works/nunnarella/headerVid.mp4",
			slogan: "Where food tastes like famiglia",
            text: "Nunnarella is a wannabe traditional Italian restaurant that brings the authentic taste of Italy to your table. With its warm and welcoming atmosphere, Nullarella takes pride in its traditional approach to cooking, with recipes passed down from generations of Italian families. The new revamped branding showcases the passion and commitment that goes into every dish we serve. We've taken inspiration from Italy's rich cultural heritage, its colors, textures, and designs to create an ambiance that transports you to a different world. Illustrations made by Harry Wright.",
            showSeeMore: false,
            showMoreLink: "",
            haveImages: true,
            images: [
                "./asset/images/works/nunnarella/1Nunna.jpg",
                "./asset/images/works/nunnarella/4Nunna.jpg",
                "../asset/images/works/nunnarella/ignunna.jpg",
                "../asset/images/works/nunnarella/nuvolanunna.jpg",
                "./asset/images/works/nunnarella/scannunna.jpg",
                "./asset/images/works/nunnarella/7Nunna.gif",
                "./asset/images/works/nunnarella/2Nunna.jpg",
                "./asset/images/works/nunnarella/8Nunna.jpg",
            ],
            tags: [
                "Brand Identity",
                "Web Design",
                "Design System",
            ],
            haveVideo: false,
            urlVideo: "",
            nextProjectLink: "./work-details.html?work=visart",
            nextProjectImage: "./asset/images/works/visart/3Vis.png"
        },
		visart: {
			name: "Visart",
            number: "04",
			subTitle: "Connect Your Design Activity",
            haveCover: false,
            videoCover: "./asset/images/works/visart/visCover.mp4",
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
            nextProjectLink: "./work-details.html?work=regular",
            nextProjectImage: "./asset/images/works/regular/1Reg.jpg"
		},
        // versacrum: {
        //     name: "Ver Sacrum",
        //     number: "02",
		// 	subTitle: "Art Is Erotic",
        //     haveCover: true,
		// 	coverUrl: "./asset/images/works/verSacrumCover.png",
        //     slogan: "Igniting artistic allure through fashion",
        //     text: "",
        //     showSeeMore: true,
        //     showMoreLink: "https://www.versacrumbrand.com",
        //     haveImages: true,
        //     images: [
        //         "./asset/images/works/verSacrum/vs1.png",
        //         "./asset/images/works/verSacrum/vs2.png",
        //         "./asset/images/works/verSacrum/vs3.png",
        //         "./asset/images/works/verSacrum/vs4.png",
        //     ],
        //     tags: [
        //         "Brand Identity",
        //         "Web Development",
        //         "Design System",
        //         "Clothing Design",
        //     ],
        //     haveVideo: false,
        //     urlVideo: "",
        //     nextProjectLink: "./work-details.html?work=regular",
        //     nextProjectImage: "./asset/images/works/regular/1Reg.jpg"
        // },
        regular: {
            name: "Regular",
            number: "02",
			subTitle: "Typo Fanzine",
            haveCover: true,
			coverUrl: "./asset/images/works/regular/regularCover.jpg",
            slogan: "The Font Folklore",
            text: "Regular ain't your typical typography magazine bossing you around with what fonts to use. Nah! Each month, we'll hook you up with the juiciest typo news, unveil the most mesmerizing font of the month, and drop some mind-blowing typographic tricks that'll leave you saying, 'Whoa! So buckle up, typo explorers, 'cause Regular's about to rock your typophile world!",
            showSeeMore: false,
            showMoreLink: "",
            haveImages: true,
            images: [
                "./asset/images/works/regular/1Reg.jpg",
                "./asset/images/works/regular/3Reg.jpg",
                "./asset/images/works/regular/4Reg.jpg",
                "./asset/images/works/regular/2Reg.jpg",
                "./asset/images/works/regular/5Reg.jpg",
                "./asset/images/works/regular/6Reg.jpg",
                "./asset/images/works/regular/8Reg.jpg",
                "./asset/images/works/regular/7Reg.jpg",
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
            nextProjectImage: "./asset/images/works/sparkCover.gif"
        },
        spark: {
            name: "The Spark",
            number: "01",
			subTitle: "Personal Branding",
            haveCover: false,
            videoCover: "./asset/images/works/spark/renderLogoAnim.mp4",
            slogan: "Design creates culture.<br> Culture shapes values.<br> Values determine the future.",
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
            nextProjectImage: "./asset/images/works/nunnarella/nuvolanunna.jpg"
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
                            <img src="${work.images[i]}" class="galleryImg skewElem">
                        </div>`;
                if (i + 1 < work.images.length) {
                    imagesHtml += `
                        <div class="col-12 col-md-6" >
                            <img src="${work.images[i + 1]}" class="galleryImg skewElem">
                        </div>`;
                }
                imagesHtml += `</div>`;
            }
        }

        let tags = ''

        for (let i = 0; i < work.tags.length; i++) {
            tags += `
            <div class="position-relative tagWork text-nowrap">
                ${work.tags[i]}
            </div>
            `
        }

		workDetailsContainer.innerHTML = `
        <div class="headerDetails">
            <div class="d-flex justify-content-center pt-3" id="main">
                <div class="d-flex align-items-center">
                    <div class="titleWorkPage editorial" id="animTitle">
                        ${work.name || ''}
                    </div>
                    <div class="fs-6 mb-md-5 mb-3 ms-2 editorial numberWork">
                        [${work.number || ''}]
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center fs-6 lh-4 text-center mw-100 mb-md-5 mb-4 subtitleWork">
                ${work.subTitle || ''}
            </div>
        </div>
    

    <div class="row">
        <div class="col-12 ">
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

    <div class="row mb-5 px-4 mt-md-5 mt-4">
        <div class="col-12 col-md-6 d-flex flex-column align-items-start">
            <div class="mb-auto">
                <div class="sideWorkTitle">
                    ${work.slogan}
                </div>
                ${work.showSeeMore ? `
                    <div class="fs-6 hover-underline-animation mb-md-4 mb-0 mt-3">
                        <a href="${work.showMoreLink}" target="_blank">
                            See more...<img src="./asset/images/icons/arrow-down-right.svg" class="arrow" draggable="false">
                        </a>
                    </div>
                ` : ''}
            </div>
            <div id="tags" class="position-relative d-flex gap-2 flex-wrap mt-3 text-center">
                ${tags}
            </div>
        </div>
        <div class="col-12 col-md-6 mt-md-0 mt-3 d-flex align-items-start">
            <div class="fs-6 reveal-type" data-bg-color="#cccccc" data-fg-color="black">
                ${work.text || ''}
            </div>
        </div>
    </div>
	
	<!-- gallery -->
        ${work.haveVideo ? `
        <div class="px-4 row mb-4">
            <iframe src="${work.urlVideo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe>
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
    <div class="linez"></div>
    <div class="containerHover"><a href="${work.nextProjectLink}">
        <div class="d-flex w-100 h-100 justify-content-center align-items-center">
            <div class="fs-2">
                <div class="seeWorks me-0">Next Project</div>
            </div>
        </div>
        <img class="swipeimage" src="${work.nextProjectImage}">
        <div class="swipecursor"></div>
    </a></div>
		`;
	}
}

        // <div class="d-flex w-100 justify-content-center mt-1">
        //     <div class="fs-1 hover-underline-animation mb-4">
        //         <a href="${work.nextProjectLink}">
        //             ${work.nextProject} <img src="./asset/images/icons/arrow-down-right.svg">
        //         </a>
        //     </div>
        // </div>
// Chiamata alla funzione di caricamento dei dettagli del lavoro quando il documento è pronto
document.addEventListener("DOMContentLoaded", () => {
    const workId = getUrlParameter('work');
    loadWorkDetails(workId);
});
