$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      margin: 10,
      nav: true,
      // navClass: ["slider_nav-left", "slider_nav-right"],
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        700: {
          items: 2
        },
        900: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  });

  