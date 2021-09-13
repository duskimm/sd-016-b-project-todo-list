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
