let cadena = prompt("Introduce una cadena");    

function mostrarInvertida(){
    let posicionFinal = cadena.length -1;
    let cadenaFinal = cadena.charAt(posicionFinal);

    /* while (posicionFinal > -1) {
        --posicionFinal;
        cadenaFinal += cadena.charAt(posicionFinal);
    }*/

    return cadenaFinal;
}

console.log(mostrarInvertida(cadena));