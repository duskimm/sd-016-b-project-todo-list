// Requisito 5 e 6
const createTaskButton = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');

createTaskButton.addEventListener('click', () => {
  const taskText = document.querySelector('#texto-tarefa');
  const newTask = document.createElement('li');
  newTask.innerText = taskText.value;
  newTask.className = 'task';
  toDoList.appendChild(newTask);
  taskText.value = '';
});

// Requisito 7 e 8
toDoList.addEventListener('click', (event) => {
  const grayLi = document.querySelector('.gray');
  if (grayLi == null) {
    event.target.classList.add('gray');
  } else if (grayLi === event.target) {
    event.target.classList.toggle('gray');
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
const eraseAllButton = document.querySelector('#apaga-tudo');

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

// BÔNUS
// Requisito 12
const saveTasksButton = document.querySelector('#salvar-tarefas');

saveTasksButton.addEventListener('click', () => {
  const li = document.querySelectorAll('.task');
  const tasks = [];
  const classTasks = [];
  for (let i = 0; i < li.length; i += 1) {
    tasks.push(li[i].innerText);
    classTasks.push(li[i].className);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('classTasks', JSON.stringify(classTasks));
});

window.onload = () => {
  const retrieveTasks = JSON.parse(localStorage.getItem('tasks'));
  const retrieveClassTasks = JSON.parse(localStorage.getItem('classTasks'));
  if (retrieveTasks !== null) {
    for (let i = 0; i < retrieveTasks.length; i += 1) {
      const newTask = document.createElement('li');
      newTask.innerText = retrieveTasks[i];
      newTask.className = retrieveClassTasks[i];
      toDoList.appendChild(newTask);
    }
  }
};
