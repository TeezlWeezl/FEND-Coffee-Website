const toggleMobileNavbar = () => {
  const navLinks = document.getElementsByClassName('nav-links')
  let toggleState = navLinks[0].classList.contains !== 'nav-links--open'
  if (toggleState) {
    navLinks[0].style.transition = 'background-color 2s ease-in;'
    navLinks[0].classList.toggle('nav-links--open')
  } else {
    navLinks[0].classList.remove('nav-links--open')
  }
}