import renderCart from './shopping-cart'

const addProductForm = document.getElementById('add-product-form')
const addProductSubmit = document.getElementById('add-product-submit')
const cart = document.getElementById('cart')

addProductSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let currentCart = JSON.parse(localStorage.getItem('products'))
  const formData = new FormData(addProductForm)

  for (const [, value] of formData) {
    const [pID, size, grind] = value.split('-')
    let newProductName = ''
    let newProductPrice = ''
    
    // simuliert Datenbankabfrage anhand der product ID
    if (parseInt(pID) === 100) {
      newProductName = 'Costa Rica'
      newProductPrice = 2690
    }

    const newProductObj = {
      prodID: pID,
      prodName: newProductName,
      grind: grind === 'G' ? true : false,
      size: parseInt(size),
      price: newProductPrice
    }

    currentCart.push(newProductObj)

    const newCart = JSON.stringify(currentCart)

    localStorage.setItem('products', newCart)
  }

  cart.classList.toggle('cart--hidden')
  
  // Renders the cart to the screen
  renderCart()
})