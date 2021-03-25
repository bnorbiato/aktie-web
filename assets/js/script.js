// owl carousel
$(document).ready(function() {
 
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })
});

// scroll up on mobile function 
$(function(){ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    }); 
  
    $(".scrollup, .consuela").click(function(){
        $("html, body").animate({ 
          scrollTop: 0 
        }, 400);
    });
});