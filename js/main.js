$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop:true,
        margin: 10,
        dots: false,
        autoplay:true,
        stagePadding: 10,
        autoplayTimeout:2000,
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
        },
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  var current = 0;
  var icons = ['../asset/images/favicon/favicon1.ico', '../asset/images/favicon/favicon2.ico', '../asset/images/favicon/favicon3.ico', '../asset/images/favicon/favicon4.ico'];
  // Every 2 seconds, switch your icon
  setInterval(function () {
      // Determine the next icon
      var icon = (++current % icons.length);
      // Grab the URL to use
      var url = icons[icon];
      // Update your elements
      document.getElementById('icon-a').href = url;
      document.getElementById('icon-b').href = url;
  }, 2000);
