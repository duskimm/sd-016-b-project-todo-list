// Requisito 5 e 6
const createTaskButton = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');

createTaskButton.addEventListener('click', () => {
  const taskText = document.querySelector('#texto-tarefa');
  const newTask = document.createElement('li');
  newTask.innerText = taskText.value;
  toDoList.appendChild(newTask);
  taskText.value = '';
});

// Requisito 7 e 8
toDoList.addEventListener('click', (event) => {
  const grayLi = document.querySelector('.gray');
  if (grayLi == null) {
    event.target.classList.add('gray');
  } else {
    grayLi.classList.remove('gray');
    event.target.classList.toggle('gray');
  }
});

// Requisito 9
toDoList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

// Requisito 10
let eraseAllButton = document.querySelector('#apaga-tudo');

eraseAllButton.addEventListener('click', () => {
  toDoList.innerHTML = '';
});

// Requisito 11
const removeFinishedButton = document.querySelector('#remover-finalizados');

removeFinishedButton.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    toDoList.removeChild(completed[i]);
  }
});