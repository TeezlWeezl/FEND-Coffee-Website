const navLinks = document.getElementById('nav-links')
const burgerMenu = document.getElementsByClassName('burger-menu-action')

Object.entries(burgerMenu).forEach(([key, element]) => {
  element.addEventListener('click', () => {
    let toggleState = navLinks.classList.contains !== 'nav-links--open'
    if (toggleState) {
      navLinks.classList.toggle('nav-links--open')
    } else {
      navLinks.classList.remove('nav-links--open')
    }
  })
});

