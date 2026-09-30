function euromillón() {
    let numeros = " ";
    let cont = 0;

    while (cont < 5) {
        const n = Math.floor(Math.random() * 50) + 1;   
        
        if (!numeros.includes(" " + n + " ")) {
            numeros += n + " ";
            cont++;
        }
    }

    let estrellas = " ";
    cont = 0;
    while (cont < 2) {
        const e = Math.floor(Math.random() * 12) + 1;   
        if (!estrellas.includes(" " + e + " ")) {
            estrellas += e + " ";
            cont++;
        }
    }

    return numeros + ":" + estrellas;                   
}

console.log(euromillón());