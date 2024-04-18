import '../scss/style.scss'

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

// brands

function toggleBrands(arr) {
  arr.forEach((img, i) => {
    if (innerWidth > 768) {
      if (i > 7) {
        img.classList.add('brands__item--hide')
      } else img.classList.remove('brands__item--hide')
    } else if (innerWidth > 520) {
      if (i > 5) {
        img.classList.add('brands__item--hide')
      } else img.classList.remove('brands__item--hide')
    } else if (innerWidth > 320) {
      if (i > 3) {
        img.classList.add('brands__item--hide')
      } else img.classList.remove('brands__item--hide')
    }
  })
}

const brandsBtn = document.querySelector('.brands__btn')
const servicesBtn = document.querySelector('.services__btn')

let imgs = document.querySelectorAll('.brands__item')

toggleBrands(imgs)

if (innerWidth <= 320) {
  document.querySelector('.brands').classList.remove('brands')
  brandsBtn.style.display = 'none'
  servicesBtn.style.display = 'none'

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination'
    }
  })

  // services

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination2'
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  })

  // prices

  const swiperPrices = new Swiper('.prices', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.prices__pagination'
    }
  })
}

// Burger

const burgerMenu = document.querySelector('.burger')
const burgerBtn = document.querySelector('.main-nav__item')
const closeBtn = document.querySelector('.burger__btn')
const wrapper = document.querySelector('.wrapper')

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('active')
  wrapper.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('active')
  wrapper.classList.remove('active')
})

// Event listener for clicks on the document body
document.body.addEventListener('click', function (event) {
  // Check if the clicked element is inside the burger menu
  if (!burgerMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
    burgerMenu.classList.remove('active')
    wrapper.classList.remove('active')
  }
})

brandsBtn.addEventListener('click', () => {
  let hideItem = document.querySelectorAll('.brands__item--hide')

  if (hideItem.length > 0) {
    hideItem.forEach((item) => {
      item.classList.remove('brands__item--hide')
    })
    document.querySelector('.more__img').src = './img/hide.svg'
    document.querySelector('.more__text').textContent = 'Скрыть'
  } else {
    toggleBrands(imgs)
    document.querySelector('.more__img').src = './img/expand.svg'
    document.querySelector('.more__text').textContent = 'Показать все'
  }
})

// call

const bookCall = document.querySelector('.burger__btn--call')
const callModal = document.querySelector('.call')
const callClose = document.querySelector('.call__close')

bookCall.addEventListener('click', () => {
  callModal.style.display = 'flex'
})

callClose.addEventListener('click', () => {
  callModal.style.display = 'none'
})

// feedback

const feebackBtn = document.querySelector('.burger__btn--feed')
const feedbackModal = document.querySelector('.feedback')
const feebackClose = document.querySelector('.feedback__close')

feebackBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'flex'
})

feebackClose.addEventListener('click', () => {
  feedbackModal.style.display = 'none'
})
