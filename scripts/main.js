$(document).ready(function(){
    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 50));
    });

    
///RESPONSIVE MENU START

var body = $('body');
var menuTrigger = $('.js-menu-trigger');
var mainOverlay = $('.js-main-overlay');

menuTrigger.on('click', function(){
  body.addClass('menu-is-active');
});

mainOverlay.on('click', function(){
  body.removeClass('menu-is-active');
});

$('.menu li a').on('click', function(){
    $('body').removeClass("menu-is-active");
});

    // MASNRY
// $('.grid').masonry({
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: 120,
//     fitWidth: true
// });

// SLICK SLIDER
// $(".slider").slick({
//     autoplay: true,
//     dots: true,
//     responsive: [{ 
//         breakpoint: 100,
//         settings: {
//             dots: false,
//             arrows: false,
//             infinite: false,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         } 
//     }]
// });

// $('.slider').slick({
//     autoplay: true,
//     autoplaySpeed:1000,
//     arrows: true,
//     centerPadding:'100px',
//     dots:false,
//     centerMode: true,
//     slidesToShow: 1,
//     fade:true,
//     adaptiveHeight:true,
//     prevArrow:'<button type="button" class="slick-prev">Previous</button>',
//     nextArrow:'<button type="button" class="slick-next">Previous</button>'
// });
// $('.carousel').carousel({
//     interval: 1000
//   });

});
