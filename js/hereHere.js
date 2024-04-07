$(function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height(); // Total height of the viewport
        var buffer = windowHeight * 0.05; // 5% buffer of the total height

        var sections = [];
        var contentMenus = [];

        // Populate sections and contentMenus arrays based on existing sections
        for (var i = 1; ; i++) {
            var sectionId = '#sec-' + i;
            var contentMenuId = '#content-menu-' + i;

            var section = $(sectionId);
            if (!section.length) break; // Break the loop if section doesn't exist

            var sectionOffset = section.offset();
            if (sectionOffset && sectionOffset.top !== 0) {
                sections.push(sectionOffset.top - buffer);
                contentMenus.push(contentMenuId);
            }
        }

        $('.here-here').removeClass('here-here');

        // Adjust the loop condition based on the number of sections
        for (var j = sections.length - 1; j >= 0; j--) {
            if (scrollTop >= sections[j]) {
                $(contentMenus[j]).addClass('here-here');
                break;
            }
        }
    });
});

//by chatGPT, 2024
