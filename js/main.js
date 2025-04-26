/* Animation */
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    live: true
})
wow.init();
/* / Animation */

/* Back To Top Button */

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('.scrollup').fadeIn(200);
    } else {
        $('.scrollup').fadeOut(200);
    }
});
$('.scrollup').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

/* /Back To Top Button */
/*Forwarding*/
$('.forwarding').owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    margin: 30,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 5
        },
        1000: {
            items: 6
        }
    }
})
/*Forwarding*/

/*banner-carousel*/
$(document).ready(function() {
    var owl = $('.banner-carousel');
    owl.owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        items: 1,
        nav: true,
        dots: true
    });
});
/*banner-carousel*/


// tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
// tooltip

/*Banner slide text effect Function*/
$(function() {
    var owl = $('.banner-carousel');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function(event) {
        idx = event.item.index;
        $('.owl-item').eq(idx).find(".carousel-caption").addClass('animated').removeClass("custom-animation");
    });
    owl.on('translated.owl.carousel', function(event) {
        idx = event.item.index;
        $('.owl-item').not(".active").find(".carousel-caption").removeClass('animated').addClass("custom-animation");
    });
});
/*Banner slide text effect Function*/



/*Service section*/
$(document).ready(function() {
    var owl = $('.service-slider');
    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        height: 300,
        margin: 30,
        navText: [
            '<i class="la la-long-arrow-right"></i>',
            '<i class="la la-long-arrow-left"></i>'
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
                items: 1,
                dots: false
            },
            600: {
                items: 2,
                dots: false
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            },
        }
    });
});