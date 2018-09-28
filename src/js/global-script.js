// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

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

(function(){

      var swiper1 = new Swiper('.features__slider', {
      centeredSlides: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span class="features__bullet-num">' + (index + 1) + '</span>' + '</span>';
        },
      },
      breakpoints: {
        // when window width is <= 640px
        1280: {
          spaceBetween: 40
        }
      },
    });

}());
