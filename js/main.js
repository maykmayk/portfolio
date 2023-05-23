$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop:true,
        margin: 10,
        dots: false,
        autoplay:true,
        stagePadding: 10,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
            },
            415: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items:6,
            },

        }
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
