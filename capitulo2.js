let frutas = ["banano", "manzana", "pera"];

let pc = {
    nombre: "NombrePC",
    procesador: "Intel core I7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `el nombre del PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la ram es: <b>${ram}</b> <br>
         el espacio es: <b>${pc["espacio"]}</b> <br>`;

document.write(frase);

let numeroCiclo=0;

document.write("<br>" + "while" + "<br>");

while (numeroCiclo < 5) {
    numeroCiclo++;
    document.write(numeroCiclo + "<br>");
}

document.write("<br>" + "do while" + "<br>");
numeroCiclo=0;

do {
    numeroCiclo++;
    document.write(numeroCiclo + "<br>");
} while (numeroCiclo < 5);

document.write("<br>" + "while + break" + "<br>");
numeroCiclo=0;

while (numeroCiclo < 100) {
    numeroCiclo++;
    document.write(numeroCiclo + "<br>");
    if (numeroCiclo == 2) {
        break;
    }
}

document.write("<br>" + "for" + "<br>");

let vector=[23, 23, 455, 45, 356, 567, 78, 78, 23, 21];

for (let i = 0; i < vector.length; i++) {
    if (i == 5) {
        continue;
    }
    document.write(vector[i] + ", ");
    if (i == 7) {
        break;
    }
    
}

// array.forEach(element => {
    
// });

let idiomas = ["ingles", "español", "aleman", "mandarin", "japones", "frances"];

idiomas.forEach(function(valor, indice, idiomas){
    console.log(`El lenguaje ${valor}, es la posición ${indice}`);  
});

// El método hasOwnProperty verifica si un objecto contiene la propiedad
// solicitada 

//for in sirve para encontrar e imprimir posiciones de un vector

for (const lenguaje in idiomas) {
    if (idiomas.hasOwnProperty(lenguaje)) {
        console.log(lenguaje);
    }
}

// for of sirve para encontrar los valores de un objeto

for (const lenguaje of idiomas) {
    console.log(lenguaje);
}

// Funciones

function suma(name1, name2) {
    let suma = name1 + name2;
    document.write(" <br> " + suma);
    return suma*2;
}

let multiplicacion = suma(10, 2);
document.write(" <br> " + multiplicacion);

// Funciones flecha

const saludar = nombre => alert(`Hola ${nombre}`);

saludar("Angie");


