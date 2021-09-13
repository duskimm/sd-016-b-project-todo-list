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
  const taskSelected = evt.target;
  const parent = taskSelected.parentElement;
  Array.from(parent.children).forEach((task) => {
    if (taskSelected === task) {
      task.classList.toggle('selected');
    } else {
      task.classList.remove('selected');
    }
  });
}

function toggleCompletedTask(evt) {
  const taskSelected = evt.target;
  taskSelected.classList.toggle('completed');
}

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = getTaskText();
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', toggleCompletedTask);
  appendTask(newTask, '#lista-tarefas');
}

function clearTaskList() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerText = '';
}

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.addEventListener('click', createTask);
  const clearTaskListButton = document.getElementById('apaga-tudo');
  clearTaskListButton.addEventListener('click', clearTaskList);
};
