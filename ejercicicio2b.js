var boton_ingresoE = document.getElementById("boton_ingreso-estudiante"); 
var boton_tomarAsis = document.getElementById("boton_tomar-asistencia");
var boton_generarR = document.getElementById("boton_generar-reporte");

let alumnno = {
    nombre: this.nombre,
    asistencias: this.asistencias
}

let NombresAlumnos = [];
let asistencia = [];
let cAsis = 1;
let asis; 
let banderaDias=0;

boton_ingresoE.onclick = function(){

    let cantidad = prompt("Ingrese la cantidad de alumnos: ");

    for (let i = 0; i < cantidad; i++) {
        NombresAlumnos[i]=prompt(`Ingrese el alumno numero ${i+1}: `);     
    }

    if(NombresAlumnos.length>=1){
        asistencia = asistencia.fill.call({length: NombresAlumnos.length}, 0);
    }

    console.log(asistencia);
}

boton_tomarAsis.onclick = function(){
    banderaDias++;
    for (let i = 0; i < NombresAlumnos.length; i++) {
        asis = prompt(`el estudiante ${NombresAlumnos[i]} asistio a clase?: `);
        if(asis == "si"){
            asistencia[i]++;
        }      
    }
    console.log(asistencia);
}

boton_generarR.onclick = function(){
    for (let i = 0; i < NombresAlumnos.length; i++) {
        porAsis = banderaDias * 0.1;
        asistencia[i]
        if((banderaDias - asistencia[i]) >= porAsis){
            alert(`El estudiante ${NombresAlumnos[i]} perdio por fallas`);
        }
        else{
            alert(`El estudiante ${NombresAlumnos[i]} cumple con el requisito de asistencia`);
        }
    }
}