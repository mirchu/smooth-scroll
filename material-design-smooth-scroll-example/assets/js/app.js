////////////////////////////////////////////////////////
///////////////Section equal height///////////////////////////
////////////////////////////////////////////////////////
function equalizeHeight() {
    var section = $('html').not('.ie6').find('.section'); // getting the sections in all but ie8
	section.css({'min-height': (($(window).height()-0))+'px'});
    $(window).resize(function(){
        section.css({'min-height': (($(window).height()-0))+'px'});
    });
}

equalizeHeight();

////////////////////////////////////////////////////////
///////////////Floating menu///////////////////////////
////////////////////////////////////////////////////////

var num = 60; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > num) {
        jQuery('.main-menu').addClass('floating-menu');
    } else {
        jQuery('.main-menu').removeClass('floating-menu');
    }
});
////////////////////////////////////////////////////////
///////////////dropdown//////////////
////////////////////////////////////////////////////////
$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
////////////////////////////////////////////////////////
///////////////Smooth scroll for top navbar///////////////////////////
////////////////////////////////////////////////////////
smoothScroll.init({
			speed: 1000,
			easing: 'easeInOutCubic',
			offset: 0,
			updateURL: false,
			callbackBefore: function ( toggle, anchor ) {},
			callbackAfter: function ( toggle, anchor ) {}
});
////////////////////////////////////////////////////////
///////////////preloader ///////////////////////////
////////////////////////////////////////////////////////

jQuery(window).load(function() { // makes sure the whole site is loaded
			jQuery('#status').fadeOut(); // will first fade out the loading animation
			jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			jQuery('body').delay(350).css({'overflow':'visible'});
	});