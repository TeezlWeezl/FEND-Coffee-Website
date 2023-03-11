// Test Data for local Storage

const products = [
  {
    prodID: 0,
    prodName: 'Produkt 1',
    prodSpec: '250-G',
    price: 10.99
  },
  {
    prodID: 1,
    prodName: 'Produkt 2',
    prodSpec: '250-G',
    price: 12.99
  },
  {
    prodID: 2,
    prodName: 'Produkt 3',
    prodSpec: '250-G',
    price: 14.99
  },
]

localStorage.setItem('products', JSON.stringify(products))




