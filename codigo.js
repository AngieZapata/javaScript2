// let numero1 = 10;
// let ST1 = "Yo me llamo Angie";

// alert(ST1);

// // es posible solicitar datos por pantalla utilizando la funciòn prompt
// let nombre;
// nombre = prompt("Ingrese su nombre");
// alert("Su nombre es " + nombre);

// let numero = 10;
// numero += 5;
// document.write(numero);

// let nombre = "Angie";
// frase = `me llamo ${nombre} y me gustan los animales`;
// document.write(frase);

// let var1=Math.random(), var2=Math.random();

//     if(var1>=var2){
//         alert("var1 mayor");
//         document.write("" + var1 + var2);
//     }
//     else{
//         alert("var2 mayor");
//         document.write("" + var1 + var2);
//     }

// Personaje confla parte 1

let pha = 0.6;
let phc = 1;
let bhmheladix = 1.6;
let bhmheladovich=1.7;
let bhmhelardo=1.8;
let phconfetis=2.9;
let helado14=2.9;

let dinero = prompt("Ingrese su dinero: ");
let cambio = 0, helado=undefined;

dineronum = parseFloat(dinero);
document.write(dineronum);

    if(dineronum >= pha){
        helado = "Palito de helado de agua";
        cambio = pha-dineronum;
    }
    if(dineronum >= phc){
        helado = "Palito de helado de crema";
        cambio = phc-dineronum;
    }
    if(dineronum >= bhmheladix){
        helado = "Bombom de helado marca heladix";
        cambio = bhmheladix-dineronum;
    }
    if(dineronum >= bhmheladovich){
        helado = "Bombon de helado marca heladovich";
        cambio = bhmheladovich-dineronum;
    }
    if(dineronum >= bhmhelardo){
        helado = "Bombon de helado marca helardo";
        cambio = bhmheladix-dineronum;
    }
    if(dineronum >= phconfetis){
        helado = "Potecito de helado con confetis y pote de 1/4 KG";
        cambio = phconfetis-dineronum;
    }
    if(dineronum < pha){
        helado = "No le alcanza el dinero para ningún helado"; 
    }

document.writeln("  " + helado + "  " + cambio);

