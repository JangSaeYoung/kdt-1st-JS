//SEARCH
const searchEl = document.querySelector('.search');
const inputEl = document.querySelector('input');

searchEl.addEventListener('click', function () {
  inputEl.focus();
});

inputEl.addEventListener('focus', function () {
  inputEl.setAttribute('placeholder', '통합검색');
});

inputEl.addEventListener('blur', function () {
  inputEl.setAttribute('placeholder', '');
});

//NOTICE - SWIPER
const swiperNotice = new Swiper('.notice .notice_line .inner__left .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

//PROMOTION
const swiperPromotion = new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next',
  },
});

function controlAutoplay() {
  if (swiperPromotion.autoplay.running) {
    swiperPromotion.autoplay.stop();
  } else if (swiperPromotion.autoplay.stop) {
    swiperPromotion.autoplay.start();
  }
}

//TOGGLE PROMOTION
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }

  if (promotionToggleBtn.style.transform === 'rotate(180deg)') {
    promotionToggleBtn.style.transform = 'rotate(0deg)';
  } else {
    promotionToggleBtn.style.transform = 'rotate(180deg)';
  }
});

window.onload = () => {
  const visualInner = document.querySelector('.visual .inner');
  visualInner.classList.add('animate');
  console.log('바로 뜨니?');
};

// SCROLL ANIMATION

let scrollYpos;

window.addEventListener('scroll', function () {
  scrollYpos = window.scrollY;
  console.log(scrollYpos);

  const peru = document.querySelector('.peru');
  if (scrollYpos > 384) {
    peru.classList.add('animate_peru');
    console.log('페루작동');
  }

  const indonesia = document.querySelector('.indonesia');
  if (scrollYpos > 730) {
    indonesia.classList.add('animate_indonesia');
    console.log('인도네시아작동');
  }

  const favorite = document.querySelector('.favorite');
  if (scrollYpos > 1300) {
    favorite.classList.add('animate_fav');
    console.log('fav작동');
  }

  const magazine = document.querySelector('.magazine');
  if (scrollYpos > 1989) {
    magazine.classList.add('animate_magazine');
    console.log('magazine작동');
  }

  const store = document.querySelector('.store');
  if (scrollYpos > 2400) {
    store.classList.add('animate_store');
    console.log('store작동');
  }
});
