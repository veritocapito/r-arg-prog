//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números, 4 en cada una.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const numberList1 = Array.from(document.querySelectorAll('#numberList1 li')).map(li => parseInt(li.textContent));
const numberList2 = Array.from(document.querySelectorAll('#numberList2 li')).map(li => parseInt(li.textContent));

const allNumbers = [...numberList1, ...numberList2];
const sum = allNumbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / allNumbers.length;

const minNumber = Math.min(...allNumbers);

const maxNumber = Math.max(...allNumbers);


document.getElementById('average').textContent += average;
document.getElementById('minNumber').textContent += minNumber;
document.getElementById('maxNumber').textContent += maxNumber;

