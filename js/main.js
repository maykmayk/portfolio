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

  const clip = document.querySelectorAll(".hover-to-play");
  for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
    }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); }