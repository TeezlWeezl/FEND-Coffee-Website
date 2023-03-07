const quickAdd = document.querySelectorAll('.quick-add')
quickAdd.forEach(el => {
  const productImage = el.previousElementSibling
  const specSelectButtonWrapper = el.nextElementSibling
  el.addEventListener('click', (e) => {
    el.classList.add('quick-add--clicked')
    specSelectButtonWrapper.classList.add('spec-select--active')
  })
  productImage.addEventListener('mouseover', e => {
    el.classList.toggle('quick-add--active')
  })
  productImage.addEventListener('mouseout', (e) => {
    el.classList.remove('quick-add--active')
    el.classList.remove('quick-add--clicked')
    specSelectButtonWrapper.classList.remove('spec-select--active')
  })
})