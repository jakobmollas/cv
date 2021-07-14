const burgerButton = document.getElementsByClassName('burger-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

burgerButton.addEventListener('click', () => { navbarLinks.classList.toggle('open') })

/* close burger menu when links are clicked */
const allNavbarLinks = document.getElementsByClassName('navbar-links')[0].querySelectorAll('a')
allNavbarLinks.forEach(link => {
    link.addEventListener('click', () => { navbarLinks.classList.remove('open') })
});

function scrollToTopOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }