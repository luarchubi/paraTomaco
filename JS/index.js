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

//funcion que muestra la lista

function showList() {
  console.log(TaskList);
}
showList();

//funcion que muestra una tarea
TaskList.forEach(function (tareas, indice) {
  console.log(`${indice} : ${tareas} `);
});
