/*- una que muestre toda la lista DONE
-⁠una que muestre una tarea DONE
 -⁠una que cree una nueva tarea DONE
- ⁠Una que modifique una tarea
- ⁠una que borre una tarea
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

/*function showList() {
  console.log(TaskList);
}
showList();*/

/*funcion que muestra una tarea
TaskList.forEach(function (tareas, indice) {
  console.log(`${indice} : ${tareas} `);
});*/

//borra tarea//

deletedTask("presupuestar");

function deleteTask(a) {
  let posicionTask = TaskList.indexOf(a);
  console.log(posicionTask, a);
  TaskList.splice(posicionTask, 1);
  console.log(TaskList);
}
deleteTask("pedir pasaportes");
