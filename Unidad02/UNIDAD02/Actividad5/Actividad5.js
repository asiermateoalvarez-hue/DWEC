const efectivo = {
    saldo: 0,

    ingresar(cantidad) {
        this.saldo += cantidad;
        return this;
    },

    gastar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        }
        return this;
    }
};

function mostrarSaldo() {
    document.getElementById("saldo").textContent = "Saldo : " + efectivo.saldo;
}

function leerCantidad() {
    return parseFloat(document.getElementById("cantidad").value);
}

function ingresarDinero() {
    const cantidad = leerCantidad();
    if (isNaN(cantidad) || cantidad <= 0) return;

    efectivo.ingresar(cantidad);
    mostrarSaldo();
    console.log("Ingresados " + cantidad + "€. Efectivo : " + efectivo.saldo + "€");
}

function gastarDinero() {
    const cantidad = leerCantidad();
    if (isNaN(cantidad) || cantidad <= 0) return;

    if (cantidad > efectivo.saldo) {
        console.log("No hay saldo para un gasto de " + cantidad + "€");
    } else {
        efectivo.gastar(cantidad);
        mostrarSaldo();
        console.log("Gastados " + cantidad + "€. Efectivo: " + efectivo.saldo + "€");
    }
}

// Saldo inicial
efectivo.saldo = +prompt("Saldo inicial : ") || 0;
console.log("Efectivo inicial : " + efectivo.saldo + "€");
mostrarSaldo();