const swiperReviews = new Swiper('.swiper-reviews', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

const swiperBricks = new Swiper('.swiper-bricks', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loopedSlides: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

document.querySelectorAll('.swiper-bricks .swiper-slide').forEach((slide) => {
    slide.addEventListener('click', (event) => {
      if (slide.classList.contains('swiper-slide-next')) {
        swiperBricks.slideNext();
      } else if (slide.classList.contains('swiper-slide-prev')) {
        swiperBricks.slidePrev();
      }
    });
  });