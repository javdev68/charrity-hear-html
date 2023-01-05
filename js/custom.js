$(document).ready(function ($){

    /* mobile navbar */
    $('.btn__navbar__toggle').on('click', function(){
        $('.mobile__navbar').css('left', 0);
    })
   $('.btn__navbar__close').on('click', function(){
        $('.mobile__navbar').css('left', -300);
    })

    /* slick slider */
    $('.slider__wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear'
    });


});