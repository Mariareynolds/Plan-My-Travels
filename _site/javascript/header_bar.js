// var opacity = 0;
// var lastScrollTop = 0;
// $(window).scroll(function(){
//     var st = $(this).scrollTop();
//     if(st == 0)
//         $('#header_bar').css('opacity','0');
//
//     if (opacity < 0.5 && (st > lastScrollTop)){
//        $('#header_bar').css('opacity','+=0.01');
//        opacity += 0.01;
//     }
//     else if(opacity > 1)
//     {
//        $('#header_bar').css('opacity','-=0.01');
//         opacity -= 0.01;
//     }
//     lastScrollTop = st;
// });
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("#header_bar").addClass("not-transparent");
    }
    else {
        $("#header_bar").removeClass("not-transparent");
    }
});
