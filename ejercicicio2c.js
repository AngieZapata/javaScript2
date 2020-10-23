let botonCalcular = document.getElementById("Calcular");

const sumar = (num1, num2) => { return num1 + num2; }
const restar = (num1, num2) => { return num1 - num2; }
const multiplicar = (num1, num2) => { return num1 * num2; }
const dividir = (num1, num2) => { return num1 / num2; }

botonCalcular.onclick = function(){
    alert("Que operación desea realizar? ");
    let operacion = prompt("1: sumar, 2: resta, 3: multiplicación, 4: division");
    let numero1 = parseInt(prompt("Ingrese el primer numero: "));
    let numero2 =parseInt(prompt("Ingrese el segundo numero: "));
    let resultado;

    if (operacion == 1) {
        resultado = sumar(numero1, numero2);
    }
    else if (operacion == 2){
        resultado = restar(numero1, numero2);
    }
    else if (operacion == 3){
        resultado = multiplicar(numero1, numero2);
    }
    else if (operacion == 4){
        resultado = dividir(numero1, numero2);
    }
    else{
        alert("no se encontro la operacion solicitada");
    }

    alert(`El resultado es: ${resultado}`);
}