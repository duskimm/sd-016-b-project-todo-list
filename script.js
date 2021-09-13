const task = document.querySelector("#texto-tarefa");
const newTask = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");
function addTask() {
  const newLi = document.createElement("li");
  const text = task.value;
  newLi.innerText = text;
  list.appendChild(newLi);
  task.value = "";
};
newTask.addEventListener("click", addTask);
