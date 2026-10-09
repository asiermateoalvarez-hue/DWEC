class Persona {
    #nombre;
    #apellido1;
    #apellido2;
    #edad;

    #numeroCreditosMatriculados;
    
    // GETTERS

    get nombre() {
        return this.#nombre;
    }
    get apellido1() {
        return this.#apellido1;
    }
    get apellido2() {
        return this.#apellido2;
    }
    get edad() {
        return this.#edad;
    }
    get numeroCreditosMatriculados() {
        return this.#numeroCreditosMatriculados;
    }

    //SETTERS
    
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set apellido1(apellido1) {
        this.#apellido1 = apellido1;
    }
    set apellido2(apellido2) { 
       this.#apellido2 = apellido2;
    }
    set edad(edad) { 
        this.#edad = edad;
    }
    set numeroCreditosMatriculados(creditos) { 
        this.#numeroCreditosMatriculados = creditos;
    }
}

class Profesor {
    #nombre;
    #apellido1;
    #apellido2;
    #edad;

    #numeroAsignaturasImpartidas;

    // GETTERS

    get nombre() {
        return this.#nombre;
    }
    get apellido1() {
        return this.#apellido1;
    }
    get apellido2() {
        return this.#apellido2;
    }
    get edad() {
        return this.#edad;
    }
    get numeroAsignaturasImpartidas() {
        return this.#numeroAsignaturasImpartidas;
    }

    //SETTERS
    
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set apellido1(apellido1) {
        this.#apellido1 = apellido1;
    }
    set apellido2(apellido2) { 
       this.#apellido2 = apellido2;
    }
    set edad(edad) { 
        this.#edad = edad;
    }
    set numeroAsignaturasImpartidas(creditos) { 
        this.#numeroAsignaturasImpartidas = creditos;
    }
}

