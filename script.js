//EJERCICIO 1
function saludar(){
    let nombre = prompt("Ingresa tu nombre:");
    let ejercicio1 = document.getElementById("ejercicio1");
    ejercicio1.innerHTML = "Hola " + nombre;
    console.log("Hola " + nombre);
}

//EJERCICIO 2
function calculadora(){
    let num1 = parseFloat(prompt("Ingresa un número:"));
    let num2 = parseFloat(prompt("Ingresa otro número:"));
    const sumar = num1 + num2;
    const restar = num1 - num2;
    const multiplicar = num1 * num2;
    const dividir = num1 / num2;
    let cadena = `Suma: ${sumar} || Resta: ${restar} || Multiplicación: ${multiplicar} || División: ${dividir}`
    let ejercicio2 = document.getElementById("ejercicio2");
    ejercicio2.innerHTML = cadena;
    console.log(cadena);
}

//EJERCICIO 3
function parOImpar() {
    let num = parseFloat(prompt("Ingresa un número para definir si es par o impar:"));
    let resultado;
    if(num % 2 == 0) {
        resultado = "Es Par";
    }
    else{
        resultado = "Es Impar";
    }
    let ejercicio3 = document.getElementById("ejercicio3");
    ejercicio3.innerHTML = resultado;
    console.log(resultado);
}


//EJERCICIO 4
function contadorCaracteres(){
    let cadena = prompt("Ingresa una palabra:");
    cantidadCaracteres = cadena.length;
    let ejercicio4 = document.getElementById("ejercicio4");
    ejercicio4.innerHTML = cantidadCaracteres;
    console.log(cantidadCaracteres);

}

//EJERCICIO 5
function repetirFrase(){
let frase = prompt("Ingresa una frase:");
let num = parseFloat(prompt("Ingresa un número:"));
let cadena =""
for(let i=0; i < num; i++)
{
    cadena += frase + " "
}
let ejercicio5 = document.getElementById("ejercicio5");
ejercicio5.innerHTML = cadena;

}

//EJERCICIO 6
function tablaDeMultiplicar(){
let num = parseFloat(prompt("Ingresa un número:"));
let cadena =""
for(let i=1; i < 10; i++)
{
    cadena += (num * i) + " "
}
let ejercicio6 = document.getElementById("ejercicio6");
ejercicio6.innerHTML = cadena;

}

//EJERCICIO 7
let random = Math.floor(Math.random() * 10) + 1;
function numeroSecreto(){
    let adivino = false;
    while(!adivino){
    let adivinar = parseFloat(prompt("Ingresa un número del 1 al 10:"));
    let mensaje = " ";
    if (adivinar < random)
        {
            adivino = true;
            mensaje = "El número que dijiste es MENOR al número secreto";
        }
    else if (adivinar == random)
        {
            adivino = true;
            mensaje = "¡Acertaste!"
        }
    else
        {
            adivino = true;
            mensaje = "El número que dijiste es MAYOR al número secreto";
        }
    
        let ejercicio7 = document.getElementById("ejercicio7");
        ejercicio7.innerHTML = mensaje;
    }
}

