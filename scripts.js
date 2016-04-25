//fade in effect
$(document).ready(function () {
    $('body').css('display', 'none');
    $('body').fadeIn(50);
    $('.pure-menu-link').click(function (event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(250, newpage);
    });
    function newpage() {
        window.location = newLocation;
    }
});
//drawer toggle
$(document).ready(function () {
    $(".toggle-drawer").click(function () {
        $('.toggle').toggleClass('drawer-closed drawer-open');
        $('.backdrop').toggleClass('like-its-hot');
        $('body').toggleClass('scrollable not-scrollable');
    });
});
//drawer ESC toggle
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
        $(".drawer-open").toggleClass('drawer-closed drawer-open');
        $('.backdrop').removeClass('like-its-hot');
        $('body').removeClass('not-scrollable');
    }
});
//parallax effect
$(window).stellar({
    horizontalScrolling: false,
    responsive: false
});
//scroll change navbar color
$(document).ready(function () {
    //var limit = $('.navbar').height() + $('.j1').height();
    var limit1 = $(window).height();
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > limit1) {
            $('.navbar').addClass('navbar-inverse');
        } else {
            $('.navbar').removeClass('navbar-inverse');
        }
    });
    $(window).resize(function () {
        limit1 = $(window).height();
    });
});
