// Test Data for local Storage

const productsSet = [
  {
    prodID: 0,
    prodName: 'Produkt 1',
    grind: true,
    size: '250g',
    price: 1099
  },
  {
    prodID: 1,
    prodName: 'Produkt 2',
    grind: false,
    size: '250g',
    price: 1099
  },
  {
    prodID: 2,
    prodName: 'Produkt 3',
    grind: true,
    size: '250g',
    price: 1099
  },
]

localStorage.setItem('products', JSON.stringify(productsSet))

// Getting items back from localStorage
const productsGet = JSON.parse(localStorage.getItem('products'))
const productCounter = document.getElementById('product-counter')
const productsContainer = document.getElementById('products')
let productsHTML = ''
let subtotal = 0
let deliveryCosts = 0
const subtotalEl = document.getElementById('subtotal')
const deliveryCostsEl = document.getElementById('delivery-costs')
const totalEl = document.getElementById('total')

// Setting the value of the Product counter
productCounter.innerText = `${productsGet.length} Produkte`

// Setting up the Products 
for (const item of productsGet) {
  subtotal += item.price
  productsHTML += `
    <div class="cart__product">
    <div class="product__img">
      <img src="src/images/FEND_Coffee_Costa-Rica 2.webp" alt="">
    </div>
    <div class="product__specs">
      <h3 class="specs__header">${item.prodName}</h3>
      <p class="specs__grind-info">${item.grind ? 'gemahlen' : 'Bohnen'}</p>
      <p class="specs__size-info">${item.size}</p>
      <p class="specs__delivery-info">sofort versandbereit</p>
      <p class="specs__price price">${(item.price / 100).toFixed(2).toString().replace('.', ',')}</p>
      <button class="specs__remove-item">X</button>
    </div>
  </div>
  `
}
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