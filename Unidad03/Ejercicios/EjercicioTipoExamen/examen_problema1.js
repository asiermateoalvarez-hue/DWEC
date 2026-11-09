/* Codigo del alumno */

class Concesionario {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.automoviles = [];
    }

    get nombre() {
        return this.nombre;
    }

    set nombre(nombre) {
        this.nombre = nombre;
    }

    get direccion() {
        return this.direccion;
    }

    set direccion(direccion) {
        this.direccion = direccion;
    }

    get automoviles() {
        return this.automoviles;
    }

    set automoviles(automoviles) {
        this.automoviles = automoviles;
    }

    // Añadir un automóvil
    agregarAutomovil(automovil) {
        this.automoviles.push(automovil);
    }
}


class Automovil {
    constructor(matricula, marca, modelo) {

        if (new.target === Automovil) {
            throw new Error("No se puede instanciar la clase Automovil");
        }

        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
    }

    // Getters
    get matricula() {
        return this.matricula;
    }

    get coche() {
        return this.coche;
    }

    get modelo() {
        return this.modelo;
    }

    // Setters
    set matricula(matricula) {
        this.matricula = matricula;
    }

    set coche(coche) {
        this.coche = coche;
    }

    set modelo(modelo) {
        this.modelo = modelo;
    }
}


class Coche {
    constructor(potencia, puertas, capacidadMaletero) {
        this.potencia = potencia;
        this.puertas = puertas;
        this.capacidadMaletero = capacidadMaletero;
    }

    get potencia() {
        return this.potencia;
    }

    set potencia(potencia) {
        this.potencia = potencia;
    }

    get puertas() {
        return this.puertas;
    }

    set puertas(puertas) {
        this.puertas = puertas;
    }

    get capacidadMaletero() {
        return this.capacidadMaletero;
    }

    set capacidadMaletero(capacidadMaletero) {
        this.capacidadMaletero = capacidadMaletero;
    }

    toString() {
        return `Coche: Potencia: ${this.potencia} CV, 
                Puertas: ${this.puertas}, 
                Capacidad del maletero: ${this.capacidadMaletero} litros`;
    }
}


class Motocicleta {
    constructor(portaequipajes, cilindrada) {
        this.portaequipajes = portaequipajes;
        this.cilindrada = cilindrada;
    }

    get portaequipajes() {
        return this.portaequipajes;
    }

    set portaequipajes(portaequipajes) {
        this.portaequipajes = portaequipajes;
    }

    get cilindrada() {
        return this.cilindrada;
    }

    set cilindrada(cilindrada) {
        this.cilindrada = cilindrada;
    }

    toString() {
        return `Motocicleta: Portaequipajes: ${this.portaequipajes ? "Sí" : "No"}, 
                Cilindrada: ${this.cilindrada} cc`;
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
