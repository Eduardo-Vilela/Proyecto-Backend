const carrito = require('../models/carrito')

class ContenedorMongoDB {
    constructor (mongodb, productos) {
        this.mongodb = require('../mongodb')
        this.productsModel = require('../models/productos')
        this.carritoModel = require('../models/carrito')
    }
  
    findAll() {
        return this.mongodb
        .then(_ => this.productsModel.find({}))
        .then(producto => console.log(producto))
        .catch(err => console.error(`Error: ${err.message}`))
    }
  
    find(name) {
        return this.mongodb
        .then(_ => this.productsModel.findOne({ name: (name) }))
        .then(producto => console.log(producto))
        .catch(err => console.error(`Error: ${err.message}`))
    }
  
    create(data) {
        const product = new this.productsModel(data)
        return this.mongodb
        .then(_ => product.save())
        .then(document => console.log('Product saved', document))
        .catch(err => console.error(`Error: ${err.message}`))
    }

    createCarrito(data){
      const carrito = new this.carritoModel(data)
      return this.mongodb
      .then(_ => carrito.save())
      .then(document => console.log('Carrito saved', document))
      .catch(err => console.error(`Error: ${err.message}`))
    }
  
    update(data) {
        return this.mongodb
        .then(_ => {
            return this.productsModel.
            updateMany({
              name: (data.name)
            }, {
              $set: { name: (data.nameNew), price: (data.price), description: (data.description) }
            })
          })
          .then(result => console.log(result))
          .catch(err => console.error(`Error: ${err.message}`))
    }
  
    delete(data) {
        return this.mongodb
        .then(_ => {
            return this.productsModel.deleteOne({
              name: (data.name)
            })
          })
          .then(result => console.log(result))
          .catch(err => console.error(`Error: ${err.message}`))
    }
  }
  
  module.exports = ContenedorMongoDB