new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active'    ,
  },

  slidesPerView: 2,

  spaceBetween: 178,
  
  centeredSlides: true,

  // slidesOffsetBefore: 16,
  
  breakpoints: {
    768: {
      enabled: false,
    },
  }
});