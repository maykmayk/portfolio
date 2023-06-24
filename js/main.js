const _app = {}

_app.openNav = () => {
    document.getElementById("myNav").style.width = "100%";
}
  
_app.closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
}

_app.favicon = () => {
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
}

_app.owlCarousel = () => {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      lazyLoad:false,
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
        }
      }
    });
  });
}

_app.startUp = () => {
    _app.openNav();
    _app.closeNav();
    _app.favicon();
    _app.owlCarousel();
}

_app.startUp();
  

  