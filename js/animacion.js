
$(document).ready(function() {
    $(window).scroll(function() {
        $('.persona').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                $(this).addClass('visible');
            }
        });
    });
});