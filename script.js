function appendTask(task, taskListSelector) {
  document.querySelector(taskListSelector).append(task);
}

function getTaskText() {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskValue = taskInput.value;
  taskInput.value = '';
  return taskValue;
}

function selectTask(evt) {
  const task = evt.target;
  task.classList.toggle('selected');
}

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = getTaskText();
  newTask.addEventListener('click', selectTask);
  appendTask(newTask, '#lista-tarefas');
}

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.addEventListener('click', createTask);
};
