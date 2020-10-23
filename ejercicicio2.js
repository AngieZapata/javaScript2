// Ejercicio:
//     - dejar pasar solamente a los mayores de edad
//     - después de las 2am no Pagan 

//     - crear un mini-sistema para registrar presentes p y ausentes a
//     - pasados 30 dias mostrar la situación final del alumno 
//     - maximo 10% de fallas

//     - crear una calculadora 

var hoy = new Date();
// var hora = hoy.getHours() + ":" + hoy.getMinutes();
// console.log(hora);

// let 

var boton = document.getElementById("boton_registro");

let persona ={
    edad: this.edad,
    hora: this.hora
}

boton.onclick = function(){
    console.log(this.id+": Clicked!");

   persona["edad"] = prompt("La edad de la persona es: ");
   persona["hora"] = hoy.getHours();
   console.log(persona.hora);

   alertaIngreso(persona.edad, persona.hora);
}

function alertaIngreso(edad, hora) {
    if (edad >= 18) {
        if (hora >= 2 && hora < 5) {
            alert("Puede ingresar y no debe pagar el cover");
        }
        else{
            alert("Puede ingresar y debe pagar el cover");
        }
    } else {
        alert("Lo sentimos, está prohibido el ingreso de menores");
    }
}