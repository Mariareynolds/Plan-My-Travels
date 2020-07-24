// Accordion
$(document).ready(function(){
var allPanels = $('.accordion > dd').hide();

		$('.accordion > dt > a').click(function() {

			allPanels.slideUp();

	    $(this).filter('.open').removeClass('open').addClass('closing')
	    $('.accordion > dt > a').removeClass('open');
	  $(this).not(".closing").addClass('open').parent().next().slideDown();
	    $('.accordion > dt > a').removeClass('closing');

	    return false;
		});




// Typing text

var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	loop: true,
   loopCount: Infinity,
	typeSpeed: 50
});


// This is the pop-up gallery
$('.popup-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
			return item.el.attr('title');
		}
	}
});


// Header- transparent on scrolling
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("#header_bar").addClass("not-transparent");
    }
    else {
        $("#header_bar").removeClass("not-transparent");
    }
});



// Expiry date- Itineraries
var expDate = $("#expire-date").html();
expDate= expDate.split("/");
var newDate=expDate[1]+","+expDate[0]+","+expDate[2];
var parseDate=new Date (newDate).getTime();
var todayDate = Date.now();


if (parseDate < todayDate) {
 $("#expirecontent").addClass("hidecontent");
}



	});

		
