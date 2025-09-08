/*- una que muestre toda la lista 
-⁠una que cree una nueva tarea 
- ⁠Una que modifique una tarea
- ⁠una que borre una tarea 
-⁠una que muestre una tarea 
*/

//funcion que agrega una tarea//
let taskList = [];
function addNewTask(tarea) {
  taskList.push(tarea);
  let position = taskList.indexOf(tarea);
  console.log(taskList);
  return position;
}
addNewTask("llamar cliente");
addNewTask("enviar link de pago");
addNewTask("presupuestar");
addNewTask("pedir pasaportes");

//funcion que muestra la lista
function showList() {
  let tamanoArray = taskList.length;
  if (tamanoArray > 0) {
    for (let i = 0; i < taskList.length - 1; i++) {
      return taskList[i];
    }
  } else {
    alert("no hay actividades en la lista");
  }
}
showList();

function position(tarea) {
  let posicionTask = taskList.indexOf(tarea);
  return posicionTask;
}
position("llamar cliente");

//FUNCION QUE BORRA UNA TAREA

function deleteTask(tarea) {
  let posicionTask = taskList.indexOf(tarea);
  taskList.splice(posicionTask, 1);
  return true;
}
deleteTask("pedir pasaportes");

//FUNCION QUE MUESTRA UNA TAREA
function showTask(position) {
  let posicionTask = taskList.indexOf(position);
  return posicionTask;
}

showTask("llamar cliente");
