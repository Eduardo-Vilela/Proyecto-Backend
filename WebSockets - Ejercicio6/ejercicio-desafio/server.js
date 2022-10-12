const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const PORT = 8080;
const httpServer= require("http").createServer(app);
const io = require('socket.io')(httpServer ,{
    cors: 
    {origin: '*',},
})

app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', './views');

// server.on('error', (error) => console.log(`Error en servidor ${error}`));


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
  { id: 1, title: 'BOTAS NIKE', price: 1000, thumbnail: 'http://localhost:8080/public/botas.png' },
  { id: 2, title: 'GORRA NY', price: 2000, thumbnail: 'http://localhost:8080/public/gorra.png' },
  { id: 3, title: 'RELOJ CASIO', price: 4000, thumbnail: 'http://localhost:8080/public/reloj.png' },
  { id: 3, title: 'REMERA NIKE', price: 3000, thumbnail: 'http://localhost:8080/public/remera.png' },
];

let chat = [
  { 
    email:"admin@admin.com",
    message:"welcome",
    date: new Date().toLocaleDateString()
   },
];


app.get('/', (req, res) => {
  //sirve productslist.hbs en index.hbs (index.hbs es la plantilla por defecto donde arranca todo)
  res.render('productslist', { root: __dirname +"/public"});
});



io.on('connection', (socket) => {

  console.log("Conexion Correcta!♥")

  io.sockets.emit('products',productsHC);
  io.sockets.emit('chat',chat);

  socket.on('newProduct', (data) => {
    productsHC.push(data);
    io.sockets.emit('products',productsHC);
  });

  socket.on('newMessage', (msg) => {
    chat.push(msg);
    io.sockets.emit('chat',chat);
  });
});


/* traer producto por id*/

// app.get('/products/:id', (req, res) => {

// const {id} = req.params
//  try{
//   let found = productsHC.find( e => e.id == id)
//   if(found){
//     res.render('oneProduct', { product: found, title: 'detalle del producto' }); 
//   }else{
//     res.render('errorId', { errorDeId:'No se encontro ese id' }); 
//   }
//  }catch(error){
//   console.log(err)
//  }

// });


/*FORMULARIO*/
// app.get('/form', (req, res) => {

//   res.render('formulario');
// });

httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto`);
});
