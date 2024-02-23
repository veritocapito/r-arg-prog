
//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
const $buttonCalculate = document.querySelector("#button-calculate");

$buttonCalculate.onclick = function(){
  const annualSalary = Number(document.querySelector('#annual-salary').value)
  document.querySelector('#monthly-salary').value = annualSalary / 12
  return false;
}






