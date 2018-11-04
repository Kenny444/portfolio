$(function () {
    $('#home-page').show();
    
    $('nav > a').hover(borderBottom);
    function borderBottom() {
        $('#banner').toggleClass('border-bottom');
    }

    $('nav > a').click(function () {
        var href = $(this).attr("href");
        var page = $(href + "-page");
        $('.page').fadeOut(250);
        if (page.hasClass("dynamic")) {

        } else {
            $(page).fadeIn(250);
        }
        return false;
    });
/*
    $('div > .arrows').hover(function () {
        var animated = 'animated-' + findAnimated(substring(8));

        if ($('#arrow-right').hasClass('animated-')) {
            $(this).addClass(animated);
        } else {
            return false;
        }
    });

    function findAnimated(name) {
        return name.substring(0, 8) + name.substring(8);
    }
*/
    




});