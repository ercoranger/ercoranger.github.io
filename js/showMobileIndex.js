$(document).ready(function() {
    if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
        $("#mb-index").load("components/mobile-index.html");
    }
});
