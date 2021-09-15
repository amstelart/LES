// Если на проекте jQuery
$(document).ready(function () {

    //animate header
    var fixNav = 400;
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if ( scroll >= fixNav ) {
            $('.header').addClass('sticky');
        }
        else {
            $('.header').removeClass('sticky');
        }
    });
    //animate header end

    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__menu').click(function () {
        $('.header__burger, .header__menu').removeClass('active');
        $('.header').removeClass('active');
        $('body').removeClass('lock');
    });
});

// Изоляция без jQuery
(function(){
  // code
}());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });


const slider1 = new Swiper('.main-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    }
});

const cardSlider = new Swiper('.card-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    }
});

// gallery-slider 1
const slider1_1 = new Swiper(".gallery-slider1_1", {
    spaceBetween: 8,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

const slider1_2 = new Swiper(".gallery-slider1_2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: slider1_1,
    },
});

// gallery-slider 2
const slider2_1 = new Swiper(".gallery-slider2_1", {
    spaceBetween: 8,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

const slider2_2 = new Swiper(".gallery-slider2_2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: slider2_1,
    },
});

// gallery-slider 3
const slider3_1 = new Swiper(".gallery-slider3_1", {
    spaceBetween: 8,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

const slider3_2 = new Swiper(".gallery-slider3_2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: slider3_1,
    },
});

// gallery-slider 4
const slider4_1 = new Swiper(".gallery-slider4_1", {
    spaceBetween: 8,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

const slider4_2 = new Swiper(".gallery-slider4_2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: slider4_1,
    },
});

// gallery-slider 5
const slider5_1 = new Swiper(".gallery-slider5_1", {
    spaceBetween: 8,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

const slider5_2 = new Swiper(".gallery-slider5_2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: slider5_1,
    },
});