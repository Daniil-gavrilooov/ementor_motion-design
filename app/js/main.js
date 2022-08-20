let burgerMenu = document.querySelector('.header__burger-menu')
let burgerBtn = document.querySelector('.header__burger-btn')
let burgerMenuItem = document.querySelectorAll('.header__menu-item')
let body = document.querySelector('body')

burgerBtn.onclick = function() {
    this.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
    body.classList.toggle('lock')
}

burgerMenuItem.forEach(item => item.onclick = function() {
    burgerBtn.classList.remove('header__burger-btn--active')
    burgerMenu.classList.remove('header__burger-menu--active')
})