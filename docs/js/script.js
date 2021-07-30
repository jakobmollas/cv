const burgerButton = document.getElementsByClassName('burger-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-list')[0]

/* open/close burger menu when clicked directly */
burgerButton.addEventListener('click', () => { navbarLinks.classList.toggle('open') })

/* close burger menu when links are clicked */
const allNavbarLinks = document.getElementsByClassName('navbar-list')[0].querySelectorAll('a')
allNavbarLinks.forEach(link => {
    link.addEventListener('click', () => { navbarLinks.classList.remove('open') })
});