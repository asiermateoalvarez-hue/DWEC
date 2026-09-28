// --- EJERCICIO 1 ---

let juan = {
    nombre: "Juan",
    curso: "DAW2",
    edad: 20
};

let ana = new Object();
ana.nombre = "Ana";
ana.curso = "DAW2";
ana.edad = 23;

for (let p in juan) {
    console.log(`\({p} :\){juan[p]}`);
}

if (juan.edad > ana.edad) {
    console.log("Juan es el mayor");
} else if (juan.edad < ana.edad) {
    console.log("Ana es la mayor");
} else {
    console.log("Ana y Juan tienen la misma edad");
}

juan.dwec = { asignatura: "DWEC", nota: 8 };
juan.dwes = { asignatura: "DWES", nota: 8 };

ana.dwes = { asignatura: "DWES", nota: 8 };
ana.dwec = { asignatura: "DWEC", nota: 8 };
ana.eie = { asignatura: "EIE", nota: 8 };

const mediaJuan = (juan.dwec.nota + juan.dwes.nota) / 2;
const mediaAna = (ana.dwec.nota + ana.dwes.nota + ana.eie.nota) / 3;

if (mediaJuan > mediaAna) {
    console.log("Juan tiene mejor nota media");
} else if (mediaAna > mediaJuan) {
    console.log("Ana tiene mejor nota media");
} else {
    console.log("Tienen la misma nota media");
}

delete juan.edad;

function mostrarAlumno(alumno) {
    for (let p in alumno) {
        if (typeof alumno[p] === "object" && alumno[p] !== null) {
            console.log(`--- ${p} ---`);
            mostrarAlumno(alumno[p]);
        } else {
            console.log(`\({p} :\){alumno[p]}`);
        }
    }
}

mostrarAlumno(juan);
mostrarAlumno(ana);


// --- EJERCICIO 2 ---

let direccion = {
    direccion: "Esperanza, 12",
    poblacion: "Bilbao"
};

let juan2 = {
    nombre: "Juan",
    apellido: "López",
    direccion: direccion
};

let copiaJuan = {};
Object.assign(copiaJuan, juan2);
copiaJuan.direccion.poblacion = "Barakaldo";

console.log(juan2.direccion.poblacion);
console.log(copiaJuan.direccion.poblacion);

function copia(origen) {
    let destino = Array.isArray(origen) ? [] : {};
    for (let p in origen) {
        if (typeof origen[p] === "object" && origen[p] !== null) {
            destino[p] = copia(origen[p]);
        } else {
            destino[p] = origen[p];
        }
    }
    return destino;
}

let copiaJuan2 = copia(juan2);
copiaJuan2.direccion.poblacion = "Madrid";

console.log(juan2.direccion.poblacion);
console.log(copiaJuan2.direccion.poblacion);