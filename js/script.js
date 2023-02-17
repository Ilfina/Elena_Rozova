const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('_active');
      burger.classList.remove('_active');
      body.classList.remove('_lock');
    })
  })
}

//Swiper
const swiper = new Swiper('.swiper-main', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});