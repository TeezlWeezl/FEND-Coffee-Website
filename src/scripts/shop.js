// If screen is desktopSize enable quick add buttons
if (matchMedia('(min-width: 992px)').matches) {
  const productAction = document.querySelectorAll('.product-action')

  productAction.forEach(el => {
    const productImg = el.previousElementSibling
    const quickAdd = el.children[0]
    const specSelect = el.children[1]

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

    for (const el of specSelect.children) {
      el.addEventListener('click', (e) => {
        specSelect.classList.add('product-action__spec-select--hidden')
      })
    }
  })
}
