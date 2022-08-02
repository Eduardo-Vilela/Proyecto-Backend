let nuevoJson = './country.json'
const fs = require("fs");

const express = require("express");
const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => 
{console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => 
console.log(`Error en servidor ${error}`));

app.get("/productos", (req, res) => 
{
    try {
		fs.promises.readFile(nuevoJson, "utf-8")
        .then(contenido => 
            
            res.send(JSON.parse(contenido))
            )
	} catch (err) {
		// 
        console.log("no anda una mierda")
	}
});




app.get("/productosRandom", (req, res) => {

	fs.promises.readFile(nuevoJson, "utf-8")
        .then(contenido => 
            // res.send([(Math.random() * JSON.parse(contenido))])
            res.send(JSON.parse(contenido)[(Math.random() * JSON.parse(contenido).length) | 0])
       )
});
