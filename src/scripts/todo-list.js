const listParent = document.querySelector('ul')
const addButton = document.querySelector('.input-form > button')
const removeButton = document.querySelector('#remove-all')

addButton.addEventListener('click', (e) => {
  e.preventDefault()
  const inputText = document.getElementById('todo-input')
  if (inputText.value.trim() === '') {
    inputText.value = ''
    return
  }
  const newListEl = document.createElement('li')
  newListEl.innerHTML = `
  <li>
    <input type="checkbox" name="todo-item" id="todo-item-${'1'}" />
    <label for="todo-item-1">${inputText.value}</label>
    <button>Entfernen</button>
  </li>`
  newListEl.querySelector('button').addEventListener('click', (e) => {
    newListEl.remove()
  })
  inputText.value = ''
  listParent.appendChild(newListEl)
})

removeButton.addEventListener('click', (e) => {
  document.querySelectorAll('ul > li').forEach((el) => { el.remove() })
})