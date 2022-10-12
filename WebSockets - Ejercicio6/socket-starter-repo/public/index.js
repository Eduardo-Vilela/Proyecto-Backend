// console.log('prueba si anda')

const socket = io();


socket.on("connect", () => 
{
    console.log("me conecte!");
});

socket.on("data-generica", (data) => 
{
    console.log(data);
});

socket.on("arr-chat", (data) => 
{
    console.log(data);

    const html = data.reduce((html, item)=> html + '<li>' + item + '</li>',"")

   document.getElementById("div-chats").innerHTML = html

    console.log(html)
});


function enviar() {
    
    const nombre = document.getElementById("caja-nombre").value;
    const msg = document.getElementById("caja-msg").value;
    socket.emit("data-generica", nombre + "dice" + msg);
    return false;
}