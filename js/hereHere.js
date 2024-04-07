$(function() {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    var buffer = windowHeight * 0.05;

    var distanceToSection1 = $('#sec-1').offset().top - buffer;
    var distanceToSection2 = $('#sec-2').offset().top - buffer;
    var distanceToSection3 = $('#sec-3').offset().top - buffer;

    if (scrollTop <= 300) {
      $('.here-here').removeClass('here-here');
    } else if (scrollTop >= distanceToSection1 && scrollTop < distanceToSection2) {
      $('.here-here').removeClass('here-here');
      $('#content-menu-1').addClass('here-here');
    } else if (scrollTop >= distanceToSection2 && scrollTop < distanceToSection3) {
      $('.here-here').removeClass('here-here');
      $('#content-menu-2').addClass('here-here');
    } else if (scrollTop >= distanceToSection3) {
      $('.here-here').removeClass('here-here');
      $('#content-menu-3').addClass('here-here');
    }
  });
});
