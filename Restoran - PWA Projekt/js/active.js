(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // Hero Slider Active Code
        $(".boban-hero-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            nav: true,
            navText: ['', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
        })
        var wel_slides = $('.boban-hero-slides');
        wel_slides.owlCarousel();
        wel_slides.on('translate.owl.carousel', function (event) {
            $('.hero-content h2').removeClass('animated').hide();
            $('.hero-content p').removeClass('animated').hide();
            $('.hero-content .btn').removeClass('animated').hide();
            $('.hero-slides-nav, .boban-hero .owl-next').removeClass('animated').hide();
        })
        wel_slides.on('translated.owl.carousel', function (event) {
            $('.hero-content h2').addClass('animated fadeIn').show();
            $('.hero-content p').addClass('animated fadeIn').show();
            $('.hero-content .btn').addClass('animated fadeIn').show();
            $('.hero-slides-nav, .boban-hero .owl-next').addClass('animated fadeInUp').show();
        })
        // Testimonials Slider Active Code
        $(".boban-testimonials-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        })
        // Menu Slider Active Code
        $(".boban-menu-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 12000,
            margin: 0,
            nav: true,
            navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
        })
    }

    // Dishes Menu Btn Style Active Code
    $('.portfolio-menu button').on('click', function () {
        $('.portfolio-menu button').removeClass('active');
        $(this).addClass('active');
    })
    
    // Dishes Menu Active Code
    if ($.fn.imagesLoaded) {
        $('.boban-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.boban-portfolio').isotope({
                itemSelector: '.single_menu_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_menu_item'
                }
            });
        });
    }
    
    // Btn ScrollDown Active Code
    $("#menubtn").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#menu").offset().top - 100
        }, 1500);
    });

    // :: 4.0 ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }

    // onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#bobanMenu').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }
    
    var $window = $(window);

    // Sticky Active JS
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);