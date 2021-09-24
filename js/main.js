$(function () {
   $('.header__btn').on('click', function() {
      $('.rightside-menu').removeClass('rightside-menu--close');
   });
   $('.rightside-menu__close').on('click', function() {
      $('.rightside-menu').addClass('rightside-menu--close');
   });

   $('.top__slider').slick({
      arrows: false, 
      dots: true,
      fade: true,
      autoplay: true,
   });

   $('.contacts-slider').slick({
      slidesToShow: 10,
      slidesToScroll: 10,
      arrows: false, 
      dots: true
   });

   var mixer = mixitup('.gallery__inner', {
      load: {
         filter: '.living'
      }
   });
})