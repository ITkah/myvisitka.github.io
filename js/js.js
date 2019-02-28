$(document).ready(function(){

	var nav = $('.header_bg');
	var navText = $('.navbar-brand,.nav-link');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			nav.addClass('bg-nav');
			navText.addClass('color-link');
		} else {
			nav.removeClass('bg-nav');
			navText.removeClass('color-link');
		}
	});

	$('.navbar-toggler,.dark-menu-bg,.nav-link').on('click', function(){
        $('.dark-menu-bg').toggleClass('toggleMenu_close');
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        	top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.form-call').on('submit', function(event) {
        $("#tymodal").modal({show: true});
        return false;
    })

});


var year = new Date(),
	copyrightYear = document.querySelector('.year').innerHTML = "" + year.getFullYear();
	
