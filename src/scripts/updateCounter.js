// Counts the products in the shopping cart and adds its to the badge on the cart icon 
export default function updateCounter() {
  const counterBadge = document.getElementById('counter-badge')
  const productsInCart = JSON.parse(localStorage.getItem('products')).length
  counterBadge.innerHTML = ''
  counterBadge.append(productsInCart.toString())
}