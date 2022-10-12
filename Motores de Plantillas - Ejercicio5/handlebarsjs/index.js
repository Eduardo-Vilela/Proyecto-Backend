const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

let productsHC = [
  { id: 1, title: 'nike ball', price: 101, thumbnail: 'http://localhost:8080/public/nike-ball.jpg' },
  { id: 2, title: 'nike shoes', price: 102, thumbnail: 'http://localhost:8080/public/nike-shoes.jpg' },
  { id: 3, title: 'adidas shoes', price: 102, thumbnail: 'http://localhost:8080/public/adidas-shoes.jpg' },
];

app.get('/products', (req, res) => {
  //sirve productslist.hbs en index.hbs (index.hbs es la plantilla por defecto donde arranca todo)
  res.render('productslist', { products: productsHC, productsExist: true });
});

// res.json({products: productsHC, productsExist: true})


/* traer producto por id*/

app.get('/products/:id', (req, res) => {

const {id} = req.params
 try{
  let found = productsHC.find( e => e.id == id)
  if(found){
    res.render('oneProduct', { product: found, title: 'detalle del producto' }); 
  }else{
    res.render('errorId', { errorDeId:'No se encontro ese id' }); 
  }
 }catch(error){
  console.log(err)
 }

});


/*FORMULARIO*/
app.get('/form', (req, res) => {

  res.render('formulario');
});