$(function() {
    var buffer = $(window).height() * 0.3; // buffer of the total height
    var sections = [];
    var contentMenus = [];

    // Populate sections and contentMenus arrays based on existing sections
    for (var i = 1; ; i++) {
        var section = $('#sec-' + i);
        if (!section.length) break; // Break the loop if section doesn't exist

        sections.push(section.offset().top - buffer);
        contentMenus.push('#content-menu-' + i + ' li');
    }

    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();

        // Highlighting menu items based on scroll position
        $('.here-here').removeClass('here-here');
        for (var j = sections.length - 1; j >= 0; j--) {
            if (scrollVal >= sections[j]) {
                $(contentMenus[j]).addClass('here-here');
                break;
            }
        }

        if (scrollVal >= 300) {
           $('#content-menu').addClass('content-menu');
           $('#content-menu').removeClass('content-menu-off');
       } else {
           $('#content-menu').removeClass('content-menu');
           $('#content-menu').addClass('content-menu-off');
       }
    });

    // Smooth scrolling to sections
    $('[id^=content-menu-] li').click(function() {
        var sectionIndex = $(this).parent().attr('id').split('-')[2];
        var sectionOffset = $('#sec-' + sectionIndex).offset().top;
        $('html, body').animate({ scrollTop: sectionOffset - 50 }, 1000); // 1000 ms for smooth scrolling animation
    });

    // Smooth scrolling to the top
    $("#gotop").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 2000); // 2000 ms for smooth scrolling animation to the top
    });
});
