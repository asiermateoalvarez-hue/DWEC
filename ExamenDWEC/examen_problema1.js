/* Codigo del alumno */

class Catalogo {

  constructor(nombre, productos = []) {
    this.nombre = "";
    this.productos = [];
    this.nombre = nombre;
    this.productos = productos;
  }
//GETTERS Y SETTERS
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set productos(productos) {
    this._productos = productos;
  }

  get productos() {
    return this._productos;
  }

  guardarProductos() { //electrodomésticos y muebles
    return this.productos;
  }
 
  agregarNuevoProducto(codigo, producto) { //añade un nuevo registro al catálogo, conservando el orden de inserción
    this.productos.push({ codigo, producto });
  }

}

class Producto { //no instanciar o crear productos genéricos (sólo se pueden crear Electrodomesticos y Muebles)

  constructor(nombre, marca, precio) {
    if (new.target === Producto) {
      throw new Error("Producto es una clase abstracta y no se puede instanciar directamente.");
    }

    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
  }

//GETTERS Y SETTERS

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set marca(marca) {
    this._marca = marca;
  }
  
  get marca() {
    return this._marca;
  }

  set precio(precio) {
    this._precio = precio;
  }
  
  get precio() {
    return this._precio;
  }
}

class Electrodomestico extends Producto {
  constructor(nombre, marca, precio, potencia, garantia) {
    super(nombre, marca, precio);
    this.potencia = potencia;
    this.garantia = garantia;
  }

//GETTERS Y SETTERS

  set potencia(potencia) {
    this._potencia = potencia;
  }

  get potencia() {
    return this._potencia;
  }

  set garantia(garantia) {
    this._garantia = garantia;
  }

  get garantia() {
    return this._garantia;
  }


  //TOSTRING
  toString() {
    return `Electrodoméstico: ${this.nombre}, ${this.marca}, ${this.precio}€, Potencia: ${this.potencia}, Garantía: ${this.garantia}`;
  }
}

class Mueble extends Producto {
  constructor(nombre, marca, precio, peso) {
    super(nombre, marca, precio);
    this.peso = peso;
  }

//GETTERS Y SETTERS

  set peso(peso) {
    this._peso = peso;
  }

  get peso() {
    return this._peso;
  }
//TOSTRING
  toString() {
    return `Mueble: ${this.nombre}, ${this.marca}, ${this.precio}€, Peso: ${this.peso}`;
  }
}


/* Fin del codigo del alumno */

/* PRUEBA: descomentar al terminar. No modificar su contenido. */

const e1 = new Electrodomestico("Lavadora", "Bosch", 499, 2000, 24);
const e2 = new Electrodomestico("Microondas", "Samsung", 129, 800, 24);
const e3 = new Electrodomestico("Aspiradora", "Rowenta", 159, 750, 36);

e1.nombre = "Lavadora Eco";
e1.marca = "Balay";
e1.precio = 459;
e1.potencia = 1800;
e1.garantia = 36;

const m1 = new Mueble("Mesa", "Ikea", 99, 15);
const m2 = new Mueble("Estanteria", "Kave Home", 149, 20);

m1.nombre = "Mesa de comedor";
m1.marca = "Conforama";
m1.precio = 119;
m1.peso = 18;

const catalogo = new Catalogo("MiCatalogo");
catalogo.nombre = "Catalogo de la tienda";
catalogo.agregarNuevoProducto("ELE-001", e1);
catalogo.agregarNuevoProducto("ELE-002", e2);
catalogo.agregarNuevoProducto("ELE-003", e3);
catalogo.agregarNuevoProducto("MUE-001", m1);
catalogo.agregarNuevoProducto("MUE-002", m2);

document.write(`Catalogo: ${catalogo.nombre}<br><br>`);
for (let posicion = 0; posicion < catalogo.productos.length; posicion++) {
  const registro = catalogo.productos[posicion];
  document.write("Producto<br>");
  document.write(`Codigo: ${registro.codigo} Detalle: ${registro.producto}<br><br>`);
}

try {
  new Producto("Producto generico", "Marca generica", 10);
  document.write("ERROR: se ha podido instanciar Producto.");
} catch (error) {
  document.write(error.toString());
}

