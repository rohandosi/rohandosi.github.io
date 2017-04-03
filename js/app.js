$(document).ready(function() {

    var scrollTop = 0;
    var lastScrollTop = 0;

    $('#fixedMenu').css("padding-top", $('#navigation').outerHeight());

    $('#hamburger').click(function () {
        $('#fixedMenu').css("padding-top", $('#navigation').outerHeight());
        if ($('#navigation').hasClass("move")) {
            $('.logo img').attr('src', 'assets/logo-white.png');
            $('#navigation').removeClass("move").addClass("fix");
        }
        $("#fixedMenu").animate({height: 'toggle'}, 300);
    });

    $('#fixedMenu a').click(function () {
        $("#fixedMenu").animate({height: 'toggle'}, 300);
    });
});
