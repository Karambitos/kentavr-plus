$(document).ready(function() {
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
            url: "mail.php",//Change
            data: th.serialize()
        }).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });
    
    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
            url: "telegram.php",
			data: th.serialize()
		}).done(function() {
            // alert("Thank you!");
            $('.js-overlay-thank-you').fadeIn(); 
			$(this).find('input').val('');
            $('#form').trigger('reset');
            $('.modal__background').fadeOut();
            $('.modal').fadeOut();
            
			setTimeout(function() {
				// Done Functions
                th.trigger("reset");
                $('.js-overlay-thank-you').fadeOut();
                location.reload();
			}, 3000);
		});
		return false;
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

