const { Router, json } = require('express')
const carritoRouter = Router()
const { carrito: carritoStorage } = require('../daos')()
const { products: productsStorage } = require('../daos')()

carritoRouter.get('/allProductosCarrito', (req, res) => {
    const nombreCarrito = req.body
    return carritoStorage.find()
    .then(carrito => {
        console.log(carrito)
        return res.json(carrito)
    })
})

carritoRouter.post('/crearCarrito', (req, res) => {
    
    const productosName = req.body;
    let arrayNamesProductos = Array();
    productosName.forEach(element => {
        let productoBuscado = productsStorage.find(element);
        arrayNamesProductos.push(productoBuscado);
    })
    data = JSON.parse(arrayNamesProductos);
    carritoStorage.createCarrito(data)
    .then(carrito => {
        console.log(carrito)
        return res.status(204).json(carrito)
    })
})

carritoRouter.delete('/deleteCarrito', (req, res) => {
    const data = req.body

    return carritoStorage.delete(data)
    .then(carrito => {
        console.log(carrito)
        return res.status(204).json(carrito)
    })
})

module.exports = carritoRouter

