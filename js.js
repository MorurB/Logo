let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let header__list = document.querySelector('.header__list');
let body = document.querySelector('.body');
let header__buttons = document.querySelector('.header__buttons');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    header__list.classList.toggle('header__list_active');
    body.classList.toggle('body_active')
    header__buttons.classList.toggle('header__buttons_active');

    window.scrollTo(0, 0)
})