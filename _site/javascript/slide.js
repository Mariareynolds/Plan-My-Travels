// alert('bob')
var threshold = 0;

$(document).ready(function() {
    $(window).scroll( function(){
      $('.fadein').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1'},1000);
            }
        });
    });
});



// slide in right
      $(document).ready(function() {
        $(window).scroll( function(){
          $('.slideinright').each( function(i){
            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},2500);
            }
            });
          });
      });



      // slide in left

      $(document).ready(function() {
        $(window).scroll( function(){
          $('.slideinleft').each( function(i){
              var bottom_of_element_left = $(this).offset().top;
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              if( bottom_of_window > bottom_of_element_left ){
                  $(this).animate({'margin-left':'0px'},2500);
              }
            });
          });
        });

// slide on button click

        function doAnimation(id) {
    $(id).children('.slideleft').fadeIn(function () {
        $(this).animate({
            marginLeft: '103px'
        }, 1000, function () {
            // Animation complete.
        });
    });
    $(id).children('.slideright').fadeIn(function () {
        $(this).animate({
            marginRight: '12px'
        }, 1000, function () {
            // Animation complete.
        });
    });
}

function animatePeople(id) {
    // If there are visible people
    if ($('.people:visible').length > 0) {
        // Fade out the visible people and then process the following callback function
        $('.people:visible').fadeIn(function () {
            // Reset the margins
            $('.people').css({
                'margin-left': '',
                'margin-right': ''
            });
            doAnimation(id);
        });
    } else {
        // Do the new animation
        doAnimation(id);
    }
}

$('#nav-button-1').click(function () {
    animatePeople('#people-holder-1');
});
$('#nav-button-2').click(function () {
    animatePeople('#people-holder-2');
});
