// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const miNombre = 'Veronica';
const nombreUsuario = prompt('Cual es tu nombre?');
const nombrePrima = 'Jorgelina';

if (nombreUsuario === miNombre) {
    alert("Hola, Tocaya! Yo también me llamo " + miNombre);
} else if (nombreUsuario === nombrePrima) {
    alert("Hola " + nombrePrima + ", te llamás igual que mi prima.");
} else {
    alert("Hola " + nombreUsuario);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const miEdad = 44;
const edadUsuario = Number(prompt('Cuantos años tenes?'));

if (edadUsuario === miEdad) {
    alert("Tenemos la misma edad!");
} else if (edadUsuario > miEdad) {
    alert("Sos mas grande en edad que yo.");
} else {
    alert("Ojo, yo soy la mas grande aca.");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = prompt('Tenes documento?').toLowerCase();

if (tieneDocumento === 'si') {
    const edad = Number(prompt('Cuantos años tenes?'));
    if (edad >= 18) {
        alert('Podes entrar al bar.');
    } else {
        alert('No podes entrar al bar.');
    }
} else if (tieneDocumento === 'no') {
    alert('No podes entrar al bar.');
} else {
    alert('No entendi la respuesta.');
}