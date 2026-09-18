function ejercicio1(cantidad, precio, descuento) {
    return cantidad * precio * (1 - descuento / 100);
}


function ejercicio2(poblacion, sueldo) {
    return (poblacion == "Bilbao" || poblacion == "Madrid") && sueldo >= 1000 && sueldo <= 1500;
}


function ejercicio3(contador, limite) {
    return (++contador * 10) > limite;
}


function ejercicio4(var1) {
    return typeof var1 === "undefined";
}


function ejercicio5(producto) {
    return parseInt(producto) + (producto % 2 > 0 ? 1 : 0);
}

function ejercicio6(nombre) {
    return nombre ? nombre : false;
}


function ejercicio7(descuento) {
    return descuento === 0 ? 5 : descuento;
}


function ejercicio7b(descuento) {
    return descuento || 5;
}


console.log(ejercicio1(10, 20, 10));
console.log(ejercicio2("Bilbao", 1200));
console.log(ejercicio3(5, 50));
console.log(ejercicio4(undefined));
console.log(ejercicio5(11));
console.log(ejercicio6("Juan"));
console.log(ejercicio7(0));
console.log(ejercicio7b(0));