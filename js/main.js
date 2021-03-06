let swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  resizeObserver: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    // when window width is >= 640px
    1130: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1290: {
      slidesPerView: 'auto',
      spaceBetween: 30
    }
  },

});
const scrollToTopButton = document.getElementById('scrollToTop')
const featuresSection = document.getElementById('features')
const scrollToElementButton = document.getElementById('scrollDown')
const mobileOpenButton = document.getElementById('mobileOpen')
const mobileCloseButton = document.getElementById('mobileClose')
const mobileOverlay = document.getElementById('mobileOverlay')
const mobileMenu = document.getElementById('mobileMenu')
const mobileNav = document.getElementById('mobileNav')
const navLink = document.querySelectorAll('#mobileLink')

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollToElement() {
  featuresSection.scrollIntoView({block: "center", behavior: "smooth"})
}
function openMobile() {
  mobileOpenButton.style.display = 'none';
  mobileMenu.style.display = 'flex'
  mobileNav.style.display = 'flex'
  mobileOverlay.classList.add('mobile__overlay_visible')
  mobileOverlay.addEventListener('click', closeMobile)
  mobileCloseButton.style.display = 'block'
}
function closeMobile() {
  mobileOpenButton.style.display = 'block';
  mobileMenu.style.display = 'none'
  mobileNav.style.display = 'none'
  mobileOverlay.classList.remove('mobile__overlay_visible')
  mobileOverlay.classList.add('mobile__overlay')
  mobileOverlay.removeEventListener('click', closeMobile)
  mobileCloseButton.style.display = 'none'
}
scrollToTopButton.addEventListener('click', scrollToTop)
scrollToElementButton.addEventListener('click', scrollToElement)
mobileOpenButton.addEventListener('click', openMobile)
mobileCloseButton.addEventListener('click', closeMobile)
window.addEventListener('keydown', e => {
  if (e.key == 'Escape') closeMobile(e)
})
navLink.forEach(link => link.addEventListener('click', closeMobile))