const { Router } = require('express')
//const storage = require('../daos')
const { products: productsStorage } = require('../daos')()
const productsRouter = Router()


//const productsStorage = storage().products

productsRouter.get('/allProducts', (req, res) => {
  return productsStorage.findAll()
    .then(products => {
      console.log(products)

      return res.json(products)
    })
  
})

productsRouter.get('/findProduct', (req, res) => {
  const data = req.body
  return productsStorage.find(data)
    .then(products => {
      console.log(products)

      return res.json(products)
    })
  
})

productsRouter.post('/crearProducto', (req, res) => {
  const data = req.body
  
  return productsStorage.create(data)
    .then(newProduct => {
      console.log(newProduct)
      return res.status(201).json(newProduct)
    })
})

productsRouter.put('/updateProducto', (req, res) => {
  const data = req.body

  return productsStorage.update(data)
  .then(product => {
    console.log(product)
    return res.status(201).json(product)
  })
})

productsRouter.delete('/deleteProducto', (req, res) => {
  const data = req.body

  return productsStorage.delete(data)
  .then(product => {
    console.log(product)
    return res.status(204).json(product)
  })
})

module.exports = productsRouter