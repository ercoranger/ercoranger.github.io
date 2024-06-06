
  $(function() {
    $(window).scroll(function() {
      var scrollVal = $(this).scrollTop();

      if (scrollVal >= 300) {
        $('#content-menu').addClass('content-menu');
        $('#content-menu').removeClass('content-menu-off');

      }

      if (scrollVal <= 300) {
        $('#content-menu').removeClass('content-menu');
        $('#content-menu').addClass('content-menu-off');

      }
    });
  });
