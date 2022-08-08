
  $(function() {
    $(window).scroll(function() {
      var scrollVal = $(this).scrollTop();

      if (scrollVal >= 200) {
        $('#content-menu').addClass('content-menu');
        $('#content-menu').removeClass('content-menu-off');

      }

      if (scrollVal <= 200) {
        $('#content-menu').removeClass('content-menu');
        $('#content-menu').addClass('content-menu-off');

      }
    });
  });
