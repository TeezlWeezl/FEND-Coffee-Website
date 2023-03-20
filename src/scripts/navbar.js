import renderCart from './shopping-cart'
import updateCounter from './updateCounter'

// toggle the display for the navbar mobile view 
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

// Update the counter when the navbar is rendered for the first time
updateCounter()

// Register click event to toggle the sopping cart in desktop view
const cartIcon = document.getElementById('shopping-cart-icon')
const cart = document.getElementById('cart')
cartIcon.addEventListener('click', () => {
  renderCart()
  cart.classList.toggle('cart--hidden')
})