const navLinks = document.getElementById('nav-links')
const burgerMenu = document.querySelectorAll('.burger-menu-action')

for (const el of burgerMenu) {
  {
    el.addEventListener('click', () => {
      let toggleState = navLinks.classList.contains !== 'nav-links--open'
      if (toggleState) {
        navLinks.classList.toggle('nav-links--open')
      } else {
        navLinks.classList.toggle('nav-links--open')
      }
    })
  }
}
