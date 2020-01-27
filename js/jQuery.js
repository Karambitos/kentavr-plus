$(document).ready(function() {
  // mask
  // ============================================
  $(document).ready(function (){
    $('#user_phone').mask('+38 (999) 999-99-99');
  });
    // telegramm 
    $("form").submit(function(e) { //Change
      e.preventDefault();
      console.log('ok')
    var th = $(this);

    $.ajax({
      type: "POST",
      url: "/telegram.php",//Change    
      data: th.serialize(),
      success: function(data){
        if (data=='error') {
          console.log('error');
          $(".divError").fadeIn(); 
          setTimeout(function() {
          $(".divError").fadeOut();
          }, 2000);
        }else{
          $.ajax({
            type: "POST",
            url: "/mail.php",//Change
            data: th.serialize(),
          });
          $('.modal__background').fadeOut();
          $('.modal_form').fadeOut(); 
          $('.js-overlay-thank-you').fadeIn(); 
          $(this).find('input').val('');
          $('#form').trigger('reset');
           setTimeout(function() {
          $('.js-overlay-thank-you').fadeOut();
            location.reload();     
         }, 3000);
        }
      }
    });
	});

    // Закрыть попап «спасибо»
    $('.js-close-thank-you').click(function() { // по клику на крестик
        $('.js-overlay-thank-you').fadeOut();
    });

    $(document).mouseup(function (e) { // по клику вне попапа
        var popup = $('.popup');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-thank-you').fadeOut();
        }
    });

});
// ============================================

// owlCarousel
// ============================================
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
        }
      }
    });
  });
// ============================================

// scroll
// ============================================
// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });
// ============================================