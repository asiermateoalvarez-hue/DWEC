// VARIABLES

var persona1 = {
    nombre: "Asier",
    curso: "DAW1",
    edad: 20
}

var persona2 = {
    nombre: "Maria",
    curso: "DAW2",
    edad: 19
}

var persona3 = {
    nombre: "Juan",
    curso: "ASIR1",
    edad: 21
}

var persona4 = {
    nombre: "Ana",
    curso: "ASIR2",
    edad: 20
}

// FUNCIONES


// muestra los datos de los arrays y compara las edades de los alumnos

function mostrardatos(){
    for (var i = 0; i < nombre.length; i++) {
        document.write("Nombre: " + nombre[i] + "<br>");
        document.write("Curso: " + curso[i] + "<br>");
        document.write("Edad: " + edad[i] + "<br><br>");
    }

    if (edad[0] > edad[1]) {
        // 0 > 1
        document.write(nombre[0] + " es mayor que " + nombre[1] + "<br>");
    } else if (edad[0] < edad[1]) {
        // 0 < 1
        document.write(nombre[0] + " es menor que " + nombre[1] + "<br>");
    } else if (edad[0] == edad[1]) {
        // 0 == 1
        document.write(nombre[0] + " y " + nombre[1] + " tienen la misma edad<br>");
    } else if (edad[1] > edad[2]) {
        // 1 > 2
        document.write(nombre[1] + " es mayor que " + nombre[2] + "<br>");
    } else if (edad[1] < edad[2]) {
        // 1 < 2
        document.write(nombre[1] + " es menor que " + nombre[2] + "<br>");
    } else if (edad[1] == edad[2]) {
        // 1 == 2
        document.write(nombre[1] + " y " + nombre[2] + " tienen la misma edad<br>");
    } else if (edad[2] > edad[3]) {
        // 2 > 3
        document.write(nombre[2] + " es mayor que " + nombre[3] + "<br>");
    } else if (edad[2] < edad[3]) {
        // 2 < 3
        document.write(nombre[2] + " es menor que " + nombre[3] + "<br>");
    } else {
        // 2 == 3
        document.write(nombre[2] + " y " + nombre[3] + " tienen la misma edad<br>");
    }

}