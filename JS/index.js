/*- una que muestre toda la lista DONE
-⁠una que muestre una tarea DONE
 -⁠una que cree una nueva tarea DONE
- ⁠Una que modifique una tarea
- ⁠una que borre una tarea DONE
*/

//funcion que agrega una tarea//
let TaskList = [];
function addNewTask(tarea) {
  TaskList.push(tarea);
  console.log("se ha agregado " + tarea + " a la lista");
}

addNewTask("llamar cliente");
addNewTask("enviar link de pago");
addNewTask("presupuestar");
addNewTask("pedir pasaportes");

//funcion que muestra la lista

function showList() {
  console.log(TaskList);
}
showList();

//funcion que borra una tarea

function deleteTask(a) {
  let posicionTask = TaskList.indexOf(a);
  TaskList.splice(posicionTask, 1);
  console.log(TaskList);
}
deleteTask("pedir pasaportes");

function position(a) {
  let posicionTask = TaskList.indexOf(a);
  console.log(posicionTask);
}
position("llamar cliente");

//funcion que muestra una tarea
function showTask(position) {
  console.log(position);
}

showTask("llamar cliente");

//funcion modifica tarea

function modify(a) {
  let posicionTask = TaskList.indexOf(a);
  let modifiedTask = TaskList.slice(posicionTask, 1);
  console.log(modifiedTask);
}
modify("llamar cliente");
