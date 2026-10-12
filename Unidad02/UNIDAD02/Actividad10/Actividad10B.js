// EJERCICIO 2: Persona como clase abstracta

class Persona {
    #nombre;
    #apellido1;
    #apellido2;
    #edad;

    constructor(nombre, apellido1, apellido2, edad) {
        if (new.target === Persona) {
            throw new TypeError("Persona es una clase abstracta y no se puede instanciar");
        }
        this.#nombre = nombre;
        this.#apellido1 = apellido1;
        this.#apellido2 = apellido2;
        this.#edad = edad;
    }

    // GETTERS
    get nombre() { return this.#nombre; }
    get apellido1() { return this.#apellido1; }
    get apellido2() { return this.#apellido2; }
    get edad() { return this.#edad; }

    // SETTERS
    set nombre(nombre) { this.#nombre = nombre; }
    set apellido1(apellido1) { this.#apellido1 = apellido1; }
    set apellido2(apellido2) { this.#apellido2 = apellido2; }
    set edad(edad) { this.#edad = edad; }
}

class Alumno extends Persona {
    #numeroCreditosMatriculados;

    constructor(nombre, apellido1, apellido2, edad, numeroCreditosMatriculados) {
        super(nombre, apellido1, apellido2, edad);
        this.#numeroCreditosMatriculados = numeroCreditosMatriculados;
    }

    get numeroCreditosMatriculados() { return this.#numeroCreditosMatriculados; }
    set numeroCreditosMatriculados(creditos) { this.#numeroCreditosMatriculados = creditos; }
}

class Profesor extends Persona {
    #numeroAsignaturasImpartidas;

    constructor(nombre, apellido1, apellido2, edad, numeroAsignaturasImpartidas) {
        super(nombre, apellido1, apellido2, edad);
        this.#numeroAsignaturasImpartidas = numeroAsignaturasImpartidas;
    }

    get numeroAsignaturasImpartidas() { return this.#numeroAsignaturasImpartidas; }
    set numeroAsignaturasImpartidas(asignaturas) { this.#numeroAsignaturasImpartidas = asignaturas; }
}

// PRUEBAS
try {
    const persona = new Persona("Ana", "García", "López", 40);
} catch (e) {
    console.log("Error esperado:", e.message);
}

const alumno = new Alumno("Luis", "Pérez", "Ruiz", 20, 60);
const profesor = new Profesor("Marta", "Sanz", "Gil", 45, 4);

console.log(alumno.nombre, alumno.apellido1, alumno.apellido2, alumno.edad, alumno.numeroCreditosMatriculados);
console.log(profesor.nombre, profesor.apellido1, profesor.apellido2, profesor.edad, profesor.numeroAsignaturasImpartidas);

alumno.numeroCreditosMatriculados = 72;
profesor.edad = 46;
console.log(alumno.numeroCreditosMatriculados, profesor.edad);