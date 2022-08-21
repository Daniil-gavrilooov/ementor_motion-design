let burgerMenu = document.querySelector('.header__burger-menu')
let burgerBtn = document.querySelector('.header__burger-btn')
let burgerMenuItem = document.querySelectorAll('.header__menu-item')
let body = document.querySelector('body')
let header = document.querySelector('.header')

burgerBtn.onclick = function() {
    this.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
    body.classList.toggle('lock')
    header.classList.toggle('header--active')
}

burgerMenuItem.forEach(item => item.onclick = function() {
    burgerBtn.classList.remove('header__burger-btn--active')
    burgerMenu.classList.remove('header__burger-menu--active')
})

let  questionsBtn = document.querySelectorAll('.questions__item-btn')

questionsBtn.forEach(btn => btn.onclick = function () {
    let questionsButton = this.querySelector('.questions__item-button')
    let mainItem = this.parentNode
    let questionsText = mainItem.querySelector('.questions__item-text')
    let questionsTitle = mainItem.querySelector('.questions__item-title')

    questionsButton.classList.toggle('questions__item-button--active')
    questionsText.classList.toggle('questions__item-text--active')
    questionsTitle.classList.toggle('questions__item-title--active')

})