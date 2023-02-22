const toggleMobileNavbar = () => {
  console.log('Script is running');
  const navLinks = document.getElementsByClassName('nav-links')
  console.log(navLinks[0].style.display);
  let toggleState = navLinks[0].style.display === 'none'
  if (toggleState) {
    navLinks[0].style.display = 'block'
  } else {
    navLinks[0].style.display = 'none'
  }
}