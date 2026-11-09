/* Codigo del alumno */

class Concesionario {
    constructor(nombre, direccion) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._automoviles = [];
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get direccion() {
        return this._direccion;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }

    get automoviles() {
        return this._automoviles;
    }

    set automoviles(automoviles) {
        this._automoviles = automoviles;
    }

    // Añadir un automóvil
    agregarAutomovil(automovil) {
        this._automoviles.push(automovil);
    }
}


class Automovil {
    constructor(matricula, marca, modelo) {

        if (new.target === Automovil) {
            throw new Error("No se puede instanciar la clase Automovil");
        }

        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
    }

    // Getters
    get matricula() {
        return this._matricula;
    }

    get coche() {
        return this._coche;
    }

    get modelo() {
        return this._modelo;
    }

    // Setters
    set matricula(matricula) {
        this._matricula = matricula;
    }

    set coche(coche) {
        this._coche = coche;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }
}


class Coche {
    constructor(potencia, puertas, capacidadMaletero) {
        this._potencia = potencia;
        this._puertas = puertas;
        this._capacidadMaletero = capacidadMaletero;
    }

    get potencia() {
        return this._potencia;
    }

    set potencia(potencia) {
        this._potencia = potencia;
    }

    get puertas() {
        return this._puertas;
    }

    set puertas(puertas) {
        this._puertas = puertas;
    }

    get capacidadMaletero() {
        return this._capacidadMaletero;
    }

    set capacidadMaletero(capacidadMaletero) {
        this._capacidadMaletero = capacidadMaletero;
    }

    toString() {
        return `Coche: Potencia: ${this._potencia} CV, 
                Puertas: ${this._puertas}, 
                Capacidad del maletero: ${this._capacidadMaletero} litros`;
    }
}


class Motocicleta {
    constructor(portaequipajes, cilindrada) {
        this._portaequipajes = portaequipajes;
        this._cilindrada = cilindrada;
    }

    get portaequipajes() {
        return this._portaequipajes;
    }

    set portaequipajes(portaequipajes) {
        this._portaequipajes = portaequipajes;
    }

    get cilindrada() {
        return this._cilindrada;
    }

    set cilindrada(cilindrada) {
        this._cilindrada = cilindrada;
    }

    toString() {
        return `Motocicleta: Portaequipajes: ${this._portaequipajes ? "Sí" : "No"}, 
                Cilindrada: ${this._cilindrada} cc`;
    }
}

/* Fin codigo del alumno */

/* Probando el problema */

const moto1 = new Motocicleta("BI-1234-CC", "Kawasaki", "Ninja zx6r", false, 636);
const coche1 = new Coche("BI-1235-CC", "BMW", "325i", 192, 5, 370);
const moto2 = new Motocicleta("BI-1236-CC", "Honda", "CBR650r", false, 649);
const coche2 = new Coche("BI-1237-CC", "Audi", "A4", 170, 4, 390);
const coche3 = new Coche("BI-1238-CC", "Renault", "Clio", 80, 3, 350);

moto1.marca = "KAWASAKI";
moto1.modelo = "NINJA ZX6R";
moto1.portaequipajes = true;
moto1.cilindrada = 630;

coche3.marca = "RENAULT";
coche3.modelo = "CLIO";
coche3.potencia = 75;
coche3.numPuertas = 5;
coche3.capacidadMaletero = 345;

const concesionario1 = new Concesionario("Concesionario Zabalburu", "Itxaropen Kalea, 12, 48005 Bilbo, Bizkaia");
concesionario1.agregarAutomovil(moto1);
concesionario1.agregarAutomovil(coche1);
concesionario1.agregarAutomovil(moto2);
concesionario1.agregarAutomovil(coche2);
concesionario1.agregarAutomovil(coche3);

for(const automovil of concesionario1.automoviles) {
    document.write(automovil);
    document.write("<br>");
}

try {
    const cocheGenerico = new Automovil("BI-1239-CC", "Seat", "Ibiza");
}
catch(e) {
    document.write("<br>")
    document.write(e);
}
