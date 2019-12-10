$(document).ready(function() {
    $(".slide-one").owlCarousel({
      margin: 10,
      nav: true,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        550: {
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

    $(".slide-two").owlCarousel({
      margin: 10,
      nav: true,
      navClass: ["slider_nav-left", "slider_nav-right"],
      loop:true,
      autoplay:false,
      responsive: {
        0: {
          items: 1
        },
        550: {
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

  