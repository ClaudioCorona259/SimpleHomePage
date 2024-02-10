const wrapper = document.querySelector('.wrapper')

const menuMobile = document.querySelector(".menu");
const navBarMobile = document.querySelector(".nav-bar-mobile");

const darkModes = document.querySelectorAll('.dark-light-mode')

const h1 = document.querySelector('h1')
const text = document.querySelector('.subtitle')
const navText = document.querySelector('.nav-bar-tablet ul')
const buttonDarkMode = document.querySelector('.dark-light-mode.tablet')


menuMobile.addEventListener("click", toggleMobileMenu);
darkModes.forEach(darkMode => {darkMode.addEventListener('click', toggleColor);});

function toggleMobileMenu() {
   navBarMobile.classList.toggle("inactive")
}

function toggleColor() {
   wrapper.classList.toggle('dark-mode')
   h1.classList.toggle('dark-mode')
   text.classList.toggle('dark-mode')
   navText.classList.toggle('dark-mode')
   buttonDarkMode.classList.toggle('dark-mode')
   menuMobile.classList.toggle('dark-mode')
   
}
