const { Schema, model} = require('mongoose')

const carritoSchema = new Schema({
  productosCarrito: { type: Array}
})

module.exports = model('carrito', carritoSchema)