import updateCounter from "./updateCounter"

// If screen is desktopSize enable quick add buttons
if (matchMedia('(min-width: 992px)').matches) {
  const productAction = document.querySelectorAll('.product-action')

  productAction.forEach(el => {
    const productImg = el.previousElementSibling
    const quickAdd = el.children[0]
    const specSelect = el.children[1]

    // Declaration of product obj
    const addProduct = {
      prodID: parseInt(specSelect.getAttribute('product-id')),
      prodName: '',
      grind: '',
      size: '',
      price: '',
    }

    // Simuliert Datenbankabfrage
    if (addProduct.prodID === 100) {
      addProduct.prodName = 'Costa Rica'
      addProduct.price = 2690
      addProduct.grind = true
    }

    productImg.addEventListener('mouseenter', (e) => {
      el.classList.remove('product-action--hidden')
    })

    productImg.addEventListener('mouseout', (e) => {
      el.classList.add('product-action--hidden')

      // Resets quick add and specSelect
      quickAdd.classList.remove('product-action__quick-add--hidden')
      specSelect.classList.add('product-action__spec-select--hidden')
    })

    el.addEventListener('mouseover', (e) => {
      el.classList.remove('product-action--hidden')
    })

    quickAdd.addEventListener('click', (e) => {
      quickAdd.classList.add('product-action__quick-add--hidden')
      specSelect.classList.remove('product-action__spec-select--hidden')
    })

    console.log(specSelect.children);

    for (const el of specSelect.children) {
      el.addEventListener('click', (e) => {
        // Set the size of the product that should be added to the cart
        addProduct.size = parseInt(e.target.getAttribute('product-size'))

        // fetch product cart data from localStorage and append addProduct at the end
        let currentCart = JSON.parse(localStorage.getItem('products'))
        console.log(typeof currentCart, currentCart);
        currentCart.push(addProduct)
        localStorage.setItem('products', JSON.stringify(currentCart))

        // Hide buttons after clicked
        specSelect.classList.add('product-action__spec-select--hidden')

        // update the counter after choosing the size
        updateCounter()
      })
    }
  })
}
