const quickAdd = document.querySelectorAll('.quick-add')
quickAdd.forEach(el => {
  el.addEventListener('click', (e) => {
    console.log(e.target.classList);
    e.target.classList.toggle('quick-add--clicked')
  })
})