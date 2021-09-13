// Requisito 5 e 6
let createTaskButton = document.querySelector('#criar-tarefa');
let toDoList = document.querySelector('#lista-tarefas'); 

createTaskButton.addEventListener('click', () => {
  let taskText = document.querySelector('#texto-tarefa');
  let newTask = document.createElement('li');
  newTask.innerText = taskText.value;
  toDoList.appendChild(newTask);
  taskText.value = '';
});

// Requisito 7
toDoList.addEventListener('click', (event) => {
  let grayLi = document.querySelector('.gray');
  if (grayLi == null) {
    event.target.classList.add('gray');
  } else {
    grayLi.classList.remove('gray');
    event.target.classList.toggle('gray');
  }
});

// Requisito 8
toDoList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
