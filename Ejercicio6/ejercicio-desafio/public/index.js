const socket = io();

socket.on('connection', () =>{
    console.log('Conexion Correcta!♥')
})

let prod = [];

socket.on('products', (data) =>{
    
   prod = data;

   let htmlToRender = '';

   console.log(data);

   for (let i= 0; i < prod.length; i++) {
    htmlToRender = htmlToRender + `
    <table class="default">
        <tr>
            <td><h1>${prod[i].title}</h1></td>
            <td>${prod[i].price}</td>
            <td><img width:'10px' src="${prod[i].thumbnail}"/>/td>
        </tr>
    </table>
    `
   }

   let htmlMap = data.map(prod=>{
    return  `
        <tr>
            <td><h1>${prod.title}</h1> </td>
            <td>${prod.price} </td>
            <td><img src="${prod.thumbnail}"/> </td>
        </tr>

    `
   })

   let htmlReduce = data.reduce((previewHtml, CurrentHtml) => previewHtml + `
   <table class="default">
   <tr>
    <th>TITLE</th>
    <th>PRICE</th>
    <th>THUMBNAIL</th>
   </tr>
    <tr>
        <td>${CurrentHtml.title}</td>
        <td>${CurrentHtml.price} </td>
        <td><img  src="${CurrentHtml.thumbnail}" width:"100"/> </td>
    </tr>
   </table>
   
   `,''
   
   )

// document.querySelector('#products').innerHTML = htmlToRender;
// document.querySelector('#products').innerHTML = htmlMap;
document.querySelector('#products').innerHTML = htmlReduce;
})

socket.on('chat', (data) =>{
    let htmlReduce = data.reduce((previewHtml, CurrentHtml) => previewHtml + `
    <table>
        <tr style="display: flex;flex-direction: row;justify-content: center;column-gap: 20px;">
        <td><b style="color: blue;">${CurrentHtml.email}</b></td>
        <br/>
        <td><p style="color: brown;margin: 0;"">${CurrentHtml.date}</p></td>
        <br/>
        <td><p style="color: green;font-style: italic;margin: 0;"">${CurrentHtml.message}</p></td>
        </tr>
    </table>
    
    `,''
    
    )
    document.querySelector('#message').innerHTML = htmlReduce;

})

function addMessage(addMessage){
    let messageToAdd= {
        email: addMessage.email.value,
        message: addMessage.message.value,
        date: new Date().toLocaleDateString(),
    }
    socket.emit('newMessage',messageToAdd)
}

function addProduct(addProduct){
    let product= {
        title: addProduct.title.value,
        price: addProduct.price.value,
        thumbnail: addProduct.thumbnail.value,
    }
    socket.emit('newProduct',product)
}