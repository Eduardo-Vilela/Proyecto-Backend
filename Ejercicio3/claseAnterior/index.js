
const Contenedor = require("./classContenedor.js");
const fs = require("fs");

//DEFINO EL CONTENEDOR
let route = "./country.json";

async function checkProducts(route) {
	try {
		const data = await fs.promises.readFile(route, "utf-8");
		products = JSON.parse(data);
	} catch (err) {
		await fs.promises.writeFile(route, JSON.stringify([]));
		products = [];
	}
}

const product1 = {
	title: "Escuadra",
	price: 123.45,
	thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};

const product2 = {
	title: "Calculadora",
	price: 234.56,
	thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
};

const product3 = {
	title: "Globo Terráqueo",
	price: 345.67,
	thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
};

const archivo = new Contenedor(route);

async function main() {
	await checkProducts(route);
	await archivo.save(product1);
	await archivo.save(product2);
	await archivo.save(product3);
	await archivo.getAll();
	await archivo.getById(4);
	await archivo.deleteAll();
	await archivo.deleteById(1);
	console.log("Fin de la ejecucion");
}

main();
