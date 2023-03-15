// Set up test Data for local Storage (to be deleted)
// if (!localStorage.getItem('products')) {
//   const productsSet = [
//     {
//       prodID: 0,
//       prodName: 'Produkt 1',
//       grind: true,
//       size: 250,
//       price: 1099
//     },
//     {
//       prodID: 1,
//       prodName: 'Produkt 2',
//       grind: false,
//       size: 250,
//       price: 1099
//     },
//     {
//       prodID: 2,
//       prodName: 'Produkt 3',
//       grind: true,
//       size: 250,
//       price: 1099
//     },
//   ]

//   localStorage.setItem('products', JSON.stringify(productsSet))
// }

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify([]))
}

// Getting items back from localStorage
const productsGet = JSON.parse(localStorage.getItem('products'))
const productCounter = document.getElementById('product-counter')
const productsContainer = document.getElementById('products')
const subtotalEl = document.getElementById('subtotal')
const deliveryCostsEl = document.getElementById('delivery-costs')
const totalEl = document.getElementById('total')

export default function renderCart() {
  let productsHTML = ''
  let subtotal = 0
  let deliveryCosts = 0

  // Setting the value of the Product counter
  productCounter.innerText = `${productsGet.length} Produkte`

  // Setting up the Products 
  productsGet.forEach((item, i) => {

    subtotal += item.price
    productsHTML += `
    <div class="cart__product">
      <div class="product__img">
        <img src="/images/FEND_Coffee_Costa-Rica 2.webp" alt="">
      </div>
      <div class="product__specs">
        <h3 class="specs__header">${item.prodName}</h3>
        <p class="specs__grind-info">${item.grind ? 'gemahlen' : 'Bohnen'}</p>
        <p class="specs__size-info">${item.size}</p>
        <p class="specs__delivery-info">sofort versandbereit</p>
        <p class="specs__price price">${(item.price / 100).toFixed(2).toString().replace('.', ',')}</p>
        <button class="specs__remove-item" cart-position=${i}><img src="/images/icons/burger-menu-close.svg"></button>
      </div>
    </div>
  `
  })
  productsContainer.innerHTML = productsHTML


  // Setting values for the order-overview
  subtotalEl.innerText = (subtotal / 100).toFixed(2).toString().replace('.', ',')

  switch (true) {
    case productsGet.length <= 1:
      deliveryCosts = 790
      break
    case productsGet.length <= 2:
      deliveryCosts = 590
      break
    default:
      deliveryCosts = 390
  }

  deliveryCostsEl.innerText = (deliveryCosts / 100).toFixed(2).toString().replace('.', ',')
  totalEl.innerText = ((subtotal + deliveryCosts) / 100).toFixed(2).toString().replace('.', ',')

  registerRemoveButtons()
}

const registerRemoveButtons = (productsList) => {
  for (const btn of document.querySelectorAll('.specs__remove-item')) {
    btn.addEventListener('click', (e) => {
      const cartIndex = btn.getAttribute('cart-position')
      productsGet.splice(parseInt(cartIndex), 1)
      localStorage.setItem('products', productsGet)
      renderCart()
    })
  }
}
