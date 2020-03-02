var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var navbar = document.getElementById('navbar');
var counter = document.getElementById('counter');

hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

//hide nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-70px';
    }
    prevScrollpos = currentScrollPos;
};
//nav
$('.home').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.welcome').offset().top
    }, 500);
    $('.menu, .hamburger').removeClass('active');
})
$('.btn-2').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about').offset().top
    }, 500);
    $('.menu, .hamburger').removeClass('active');
})
$('.btn-3').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.offer').offset().top
    }, 500);
    $('.menu, .hamburger').removeClass('active');
})
$('.btn-4').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 500);
    $('.menu, .hamburger').removeClass('active');
})
// arrow
$(document).ready(function () {
    $('.arrow').hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.arrow').fadeIn();
            } else {
                $('.arrow').fadeOut();
            }
        });

        $('.arrow').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
});

//number counter
var a = 0;
$(window).scroll(function () {

    var oTop = $('.counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        a = 1;
    }
});