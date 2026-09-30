let cadena = prompt("Introduce una cadena");    

function mostrarInvertida(){
    let posicionFinal = cadena.length -1;
    let cadenaFinal = cadena.charAt(posicionFinal);

    while (posicionFinal > -1) {
        --posicionFinal;
        cadenaFinal += cadena.charAt(posicionFinal);
    }

    return cadenaFinal;
}

function primeraPalabra(texto) {
    if (!texto.includes(" ")) {
        return texto;
    }

    let resultado = "";
    let pos = 0;

    while (pos < texto.length && texto.charAt(pos) !== " ") {
        resultado += texto.charAt(pos);
        pos++;
    }

    return resultado;
} 

function ultimaPalabra(texto) {
    let resultado = "";
    let pos = texto.length - 1;

    if (!texto.includes(" ")) {
        return texto;
    }

    while (pos > 0 && texto.charAt(pos) !== " ") {
        resultado = texto.charAt(pos) + resultado;
        pos--;
    }

    return resultado;
}

function toVersales(texto){
    return texto
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

function replaceAcentos(){
    const acentos = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u" };
    let resultado = "";
 
    for (const letra of cadena) {
        if (acentos[letra]) {
            resultado += acentos[letra];
        } else {
            resultado += letra;
        }
    }
 
    return resultado;
}

let restante = cadena;
while (restante.length > 0) {
    console.log(restante);
    const espacio = restante.indexOf(" ");
    if (espacio === -1) {
        restante = "";
    } else {
        restante = restante.slice(espacio + 1);
    }
}

console.log(mostrarInvertida());
console.log(primeraPalabra(cadena));
console.log(ultimaPalabra(cadena))
console.log(toVersales(cadena));
console.log(replaceAcentos());

