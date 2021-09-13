let createTaskButton = document.querySelector('#criar-tarefa');
let toDoList = document.querySelector('#lista-tarefas'); 

createTaskButton.addEventListener('click', () => {
  let taskText = document.querySelector('#texto-tarefa');
  let newTask = document.createElement('li');
  newTask.innerText = taskText.value;
  toDoList.appendChild(newTask);
  taskText.value = '';
});