const button = document.querySelector('.header__burger');
const list = document.querySelector('.header__burger-list');
const nav = document.querySelector('.header__nav');
const actions = document.querySelector('.header__actions');
const logo = document.querySelector('.header__logo');
const select = document.querySelector('.header__select');
const listMobile = document.querySelector('.header__burger-phone');

if (window.screen.width > 768) {
    button.addEventListener('click', () => {
        button.classList.toggle('active-burger');
        list.classList.toggle('active-list');
        list.classList.toggle('scale');
        nav.classList.toggle('hidden');
        actions.classList.toggle('opacity');
        logo.classList.toggle('opacity');
        select.classList.toggle('opacity');
        nav.classList.remove('scale-back');
        actions.classList.remove('scale-back');
        logo.classList.remove('scale-back');
        select.classList.remove('scale-back');
        if (button.classList.contains('active-burger')) { }
        else {
            nav.classList.add('scale-back');
            actions.classList.add('scale-back');
            logo.classList.add('scale-back');
            select.classList.add('scale-back');
        }
    })
} else {
    button.addEventListener('click', () => {
        button.classList.toggle('active-burger');
        listMobile.classList.toggle('active-mobile');
        document.documentElement.classList.toggle('off_scroll');
        document.body.classList.toggle('off_scroll');
    })
}
