// Constantes
const task = document.querySelector("#texto-tarefa");
const newTask = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");
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
}
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