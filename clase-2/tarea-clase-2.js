// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
	return numero1 / numero2;
}


const operador = prompt('Ingrese un operador: +, -, *, /');
const numero1 = Number(prompt("Ingrese el primer numero"));
const numero2 = Number(prompt("Ingrese el segundo numero"));

let resultado;
if (operador === '+') {
    resultado = sumar(numero1, numero2);
} else if (operador === '-') {
    resultado = restar(numero1, numero2);
} else if (operador === '*') {
    resultado = multiplicar(numero1, numero2);
} else if (operador === '/') {
    resultado = dividir(numero1, numero2);
} else {
    console.log(`Perdón, no conozco el operador ${operador}.`);
}

console.log(
    `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`
);

