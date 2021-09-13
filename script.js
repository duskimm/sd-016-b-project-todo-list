function addTask() {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const taskElement = document.createElement('li');

  taskElement.innerText = taskInput.value;
  taskList.appendChild(taskElement);
  taskInput.value = '';
}

const addTaskButton = document.querySelector('#criar-tarefa');
addTaskButton.addEventListener('click', addTask);
