function ejercicio1() {
    return 4 + 3 * "2" % 2;
}

function ejercicio2() {
    return 12 + "2" + 2;
}

function ejercicio3() {
    return 12 + + "2" + 2;
}

function ejercicio4() {
    return 12 + 2 + "2";
}

function ejercicio5() {
    return 12 && true || undefined;
}

function ejercicio6() {
    return 12 || true && undefined;
}

function ejercicio7() {
    return "Hola" ** 2;
}

function ejercicio8() {
    return ("") ? "uno" : "";
}

function ejercicio9() {
    return undefined >= null;
}

function ejercicio10() {
    return "12" == 12;
}

function ejercicio11() {
    return "12" === 12;
}

function ejercicio12() {
    return +"12" === 12;
}

function ejercicio13() {
    return !!"true" !== true;
}

function ejercicio14() {
    return 12 > 0 && null || "Hola" || undefined;
}

function ejercicio15() {
    return 12 > 0 || null && "Hola" && undefined;
}

console.log(ejercicio1());
console.log(ejercicio2());
console.log(ejercicio3());
console.log(ejercicio4());
console.log(ejercicio5());
console.log(ejercicio6());
console.log(ejercicio7());
console.log(ejercicio8());
console.log(ejercicio9());
console.log(ejercicio10());
console.log(ejercicio11());
console.log(ejercicio12());
console.log(ejercicio13());
console.log(ejercicio14());
console.log(ejercicio15());