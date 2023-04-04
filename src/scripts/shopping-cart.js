import updateCounter from "./updateCounter"

// import of images
import productImage from "../images/products/FEND_Coffee_Costa-Rica 2.webp"
import deleteIcon from "../images/icons/burger-menu-close.svg"

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify([]))
}

export default function renderCart() {
  // Getting items back from localStorage
  const cart = document.getElementById('cart')
  const products = JSON.parse(localStorage.getItem('products'))
  const productCounter = document.getElementById('product-counter')
  const productsContainer = document.getElementById('products')
  const subtotalEl = document.getElementById('subtotal')
  const deliveryCostsEl = document.getElementById('delivery-costs')
  const totalEl = document.getElementById('total')
  let productsHTML = ''
  let subtotal = 0
  let deliveryCosts = 0

  // Setting the value of the Product counter
  productCounter.innerText = `${products.length} Produkte`

  // Setting up the Products 
  products.forEach((item, i) => {
    subtotal += item.price
    productsHTML += `
    <div class="cart__product">
      <div class="product__img">
        <img src="${productImage}" alt="">
      </div>
      <div class="product__specs">
        <h3 class="specs__header">${item.prodName}</h3>
        <p class="specs__grind-info">${item.grind ? 'gemahlen' : 'Bohnen'}</p>
        <p class="specs__size-info">${item.size}</p>
        <p class="specs__delivery-info">sofort versandbereit</p>
        <p class="specs__price price">${(item.price / 100).toFixed(2).toString().replace('.', ',')}</p>
        <button class="specs__remove-item" cart-position=${i}><img src="${deleteIcon}"></button>
      </div>
    </div>
  `
  })
  productsContainer.innerHTML = productsHTML


  // Setting values for the order-overview
  subtotalEl.innerText = (subtotal / 100).toFixed(2).toString().replace('.', ',')

  switch (true) {
    case products.length <= 1:
      deliveryCosts = 790
      break
    case products.length <= 2:
      deliveryCosts = 590
      break
    default:
      deliveryCosts = 390
  }

  deliveryCostsEl.innerText = (deliveryCosts / 100).toFixed(2).toString().replace('.', ',')
  totalEl.innerText = ((subtotal + deliveryCosts) / 100).toFixed(2).toString().replace('.', ',')
  registerRemoveButtons(products)
  updateCounter()

  // if no products in the cart hide the cart from user
  if (products.length <= 0) cart.classList.add('cart--hidden')

  if (cart.classList.contains('cart--hidden')) document.getElementsByTagName('body')[0].style.overflow = 'visible'
  else document.getElementsByTagName('body')[0].style.overflow = 'hidden'
}

// registers the remove buttons on the cart product item
const registerRemoveButtons = (productsList) => {
  for (const btn of document.querySelectorAll('.specs__remove-item')) {
    btn.addEventListener('click', (e) => {
      const cartIndex = btn.getAttribute('cart-position')
      productsList.splice(parseInt(cartIndex), 1)
      localStorage.setItem('products', JSON.stringify(productsList))
      renderCart()
    })
  }
}