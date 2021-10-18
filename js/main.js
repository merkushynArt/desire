$(function () {
   $('.header__btn').on('click', function() {
      $('.rightside-menu').removeClass('rightside-menu--close');
   });
   $('.rightside-menu__close').on('click', function() {
      $('.rightside-menu').addClass('rightside-menu--close');
   });
   $('.header__btn-mobile').on('click', function() {
      $('.mobile-menu,.header__btn-mobile').toggleClass('active');
   });

   $('.top__slider').slick({
      arrows: false, 
      dots: true,
      fade: true,
      autoplay: true,
   });

   $('.article-slider__box').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="arrow-left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="arrow-right"></button>',
      fade: true,
      speed: 500,
      cssEase: 'linear',
      infinite: true,
      autoplay: true
   });

   $('.contacts-slider').slick({
      slidesToShow: 10,
      slidesToScroll: 10,
      arrows: false, 
      dots: true,
      responsive: [
         {
            breakpoint: 1900,
            settings: {
               slidesToShow: 9,
               slidesToScroll: 9,
            }
         },
         {
            breakpoint: 1440,
            settings: {
               slidesToShow: 7,
               slidesToScroll: 7,
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },
      ]
   });

   var mixer = mixitup('.gallery__inner', {
      load: {
         filter: '.living'
      }
   });
})