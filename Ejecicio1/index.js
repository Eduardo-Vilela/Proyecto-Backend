class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
    addMascotas = (nombre) =>{
        this.mascotas.push(nombre)
        console.info("El nombre del perro se agrego con exito!")
    }
    countMascotas(){
        console.info(`Tengo ${this.mascotas.length} mascotas`)
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
        console.log("El libro se agrego con exito!")
    }
    getBookNames(){
        console.log(this.libros.map((libros) =>libros.nombre))
    }

}
const usuario1 = new Usuario("Eduardo", "Vilela")

usuario1.getFullName()
usuario1.addMascotas("Franco")
usuario1.addMascotas("milanesa")
console.log(usuario1.mascotas)
usuario1.countMascotas();
usuario1.addBook("El señor de los anillos", "J.R.R Tolkien");
usuario1.addBook("Harry Potter y el caliz de fuego", "J.K. Rowling");
console.log(usuario1.libros)
usuario1.getBookNames();
