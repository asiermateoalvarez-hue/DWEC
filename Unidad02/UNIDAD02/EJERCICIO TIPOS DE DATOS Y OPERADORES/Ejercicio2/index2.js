function calculoVariable() {
    let var1 = 10;

    let resultado = ++var1 ** 2;
    return { var1, resultado };
}

console.log(calculoVariable());