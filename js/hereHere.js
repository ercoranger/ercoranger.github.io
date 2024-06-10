$(function() {
    var buffer = $(window).height() * 0.3; // Buffer of the total height
    var sections = [];
    var contentMenus = [];

    // Function to update sections and contentMenus arrays
    function updateSections() {
        sections = [];
        contentMenus = [];
        for (var i = 1; ; i++) {
            var section = $('#sec-' + i);
            if (!section.length) break; // Break the loop if section doesn't exist

            var sectionOffsetTop = section.offset().top;
            sections.push(sectionOffsetTop);
            contentMenus.push('#content-menu-' + i);

            // Log each section's offsetTop value
            console.log('Section ' + i + ' offsetTop: ' + sectionOffsetTop);
        }
    }

    // Debounce function to limit the rate of function execution
    function debounce(func, wait) {
        var timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    // Initial update of sections and contentMenus after page fully loads
    $(window).on('load', function() {
        updateSections();
    });

    // Update sections and contentMenus on window resize with debounce
    $(window).resize(debounce(function() {
        updateSections();
    }, 100));

    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        console.log('scrollTop: ' + scrollVal); // Log current scroll position

        // Highlighting menu items based on scroll position
        $('.here-here').removeClass('here-here');
        for (var j = sections.length - 1; j >= 0; j--) {
            var screenTop = sections[j] - buffer;
            console.log('Section ' + (j + 1) + ' screenTop: ' + screenTop); // Log screenTop for each section

            if (scrollVal >= screenTop) {
                $(contentMenus[j] + ' li').addClass('here-here');
                break;
            }
        }

        // Toggle 'content-menu' and 'content-menu-off' classes based on scroll position
        if (scrollVal >= 240) {
            $('#content-menu').addClass('content-menu');
            $('#content-menu').removeClass('content-menu-off');
        } else {
            $('#content-menu').removeClass('content-menu');
            $('#content-menu').addClass('content-menu-off');
        }
    });

    // Smooth scrolling to sections
    $('[id^=content-menu-] li').click(function() {
        var menuId = $(this).parent().attr('id');
        var sectionIndex = menuId.split('-')[2]; // Extract the index from the id, e.g., 'content-menu-1' -> '1'
        var sectionOffset = $('#sec-' + sectionIndex).offset().top;

        $('html, body').animate({ scrollTop: sectionOffset - 50 }, 800); // 800 ms for smooth scrolling animation
    });

    // Smooth scrolling to the top
    $("#gotop").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 2000); // 2000 ms for smooth scrolling animation to the top
    });
});
