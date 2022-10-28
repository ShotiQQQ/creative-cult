const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
    mobileMenu.classList.toggle('header__mobile--active');
});

function initHeroSlider() {
    document.querySelectorAll('.header__item').forEach((e) => {
        e.classList.add('swiper-slide');
    })
    const swiperHeader = new Swiper('.header-swiper', {
        spaceBetween: 10,
        slidesPerView: 'auto',
      });
}
function initBrandsSlider() {
    document.querySelector('.brands__cards').classList.add('swiper-wrapper');
    document.querySelectorAll('.brands__card').forEach((e) => {
        e.classList.add('swiper-slide');
    })
    const swiperBrands = new Swiper('.brands__swiper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.brands__swiper-pagination',
          },
    });
}

window.document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width <= 950) { 
        initHeroSlider();
    } else {
        document.querySelectorAll('.header__item').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
    if (width <= 450) {
        initBrandsSlider();
    } else {
        document.querySelector('.brands__cards').classList.remove('swiper-wrapper');
        document.querySelectorAll('.brands__card').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
})

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width <= 950) {
        initHeroSlider();
    } else {
        document.querySelectorAll('.header__item').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
    if (width <= 450) {
        initBrandsSlider();
    } else {
        document.querySelector('.brands__cards').classList.remove('swiper-wrapper');
        document.querySelectorAll('.brands__card').forEach((e) => {
            e.classList.remove('swiper-slide');
        });
    }
    }
);

const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    slidePerGroup: 1,
    pagination: {
        el: '.hero__swiper-pagination',
      },
  });
