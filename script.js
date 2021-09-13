// Constantes
const task = document.querySelector("#texto-tarefa");
const newTask = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");
const clenear = document.querySelector("#apaga-tudo");
const clearCompletedTask = document.querySelector("#remover-finalizados");
// add a new task
function addTask() {
  const newLi = document.createElement("li");
  const text = task.value;
  newLi.innerText = text;
  list.appendChild(newLi);
  task.value = "";
};
newTask.addEventListener("click", addTask);
// BackGroundColor change
function selectedItem(event) {
  const allTasks = document.querySelectorAll("li");
  if (event.target.classList.contains("selected")) {
    event.target.classList.remove("selected");
  } else {
    for (index = 0; index < allTasks.length; index += 1) {
      allTasks[index].classList.remove("selected");
    }
    event.target.classList.add("selected");
  }
};
list.addEventListener("click", selectedItem);
// Completed tasks
function completedTask(event) {
  if (event.target.classList.contains("completed")){
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
}
list.addEventListener("dblclick", completedTask);
// Clear List
// Para realizar este requisito busquei auxilio no site stackoverflow e MDN nos
// seguintes links.
// link stackoverflow :
// https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul
// link MDN : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
function clearList() {
  while (list.firstChild) {
    list.firstChild.remove();
  }
}
clenear.addEventListener("click", clearList);
// Clear Completed taks
function clearCompletedTasks() {
  const allTasksCompleted = document.querySelectorAll("#lista-tarefas .completed");
  for (index = 0; index < allTasksCompleted.length; index += 1) {
    allTasksCompleted[index].remove();
  }
}
clearCompletedTask.addEventListener("click", clearCompletedTasks);