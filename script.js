// Constantes
const task = document.querySelector('#texto-tarefa');
const newTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clenear = document.querySelector('#apaga-tudo');
const clearCompletedTask = document.querySelector('#remover-finalizados');
const clearSelected = document.querySelector('#remover-selecionado');
const saveButton = document.querySelector('#salvar-tarefas');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');

// add a new task
function addTask() {
  const newLi = document.createElement('li');
  const text = task.value;
  newLi.innerText = text;
  list.appendChild(newLi);
  task.value = '';
}
newTask.addEventListener('click', addTask);
// BackGroundColor change
function selectedItem(event) {
  const allTasks = document.querySelectorAll('li');
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
  } else {
    for (let index = 0; index < allTasks.length; index += 1) {
      allTasks[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}
list.addEventListener('click', selectedItem);
// Completed tasks
function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
list.addEventListener('dblclick', completedTask);
// Clear List
// Para realizar este requisito busquei auxilio no site stackoverflow e MDN nos
// seguintes links.
// link stackoverflow :
// https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul
// link MDN : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
function clearList() {
  while (list.firstChild) {
    list.firstChild.remove();
  }
}
clenear.addEventListener('click', clearList);
// Clear Completed tasks
function clearCompletedTasks() {
  const allTasksCompleted = document.querySelectorAll('#lista-tarefas .completed');
  for (let index = 0; index < allTasksCompleted.length; index += 1) {
    allTasksCompleted[index].remove();
  }
}
clearCompletedTask.addEventListener('click', clearCompletedTasks);
// Clear the selected task
function clearSelectedTask() {
  const allTasks = document.querySelectorAll('li');
  const selectedTask = document.querySelector('.selected');
  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index] === selectedTask) {
      allTasks[index].remove();
    }
  }
}
clearSelected.addEventListener('click', clearSelectedTask);
// Save the List and restore
// Para realizar esse requisito eu busquei informações nos seguintes sites.
// link:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// link:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// link: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
function saveList() {
  window.localStorage.clear();
  const tasksToSave = [];
  const tasksClassToSave = [];
  const allTasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < allTasks.length; index += 1) {
    tasksClassToSave.push(allTasks[index].className);
    tasksToSave.push(allTasks[index].innerText);
  }
  window.localStorage.setItem('TaskStore', JSON.stringify(tasksToSave));
  window.localStorage.setItem('TaskClassStore', JSON.stringify(tasksClassToSave));
}
saveButton.addEventListener('click', saveList);
function restoreList() {
  const savedList = JSON.parse(localStorage.TaskStore).length;
  for (let index = 0; index < savedList; index += 1) {
    const newLi = document.createElement('li');
    const text = JSON.parse(window.localStorage.TaskStore)[index];
    const name = JSON.parse(window.localStorage.TaskClassStore)[index];
    newLi.innerText = text;
    newLi.className = name;
    list.appendChild(newLi);
  }
}

// Precisei buscar informações no seguinte site.
// link : https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
function goUp() {
  const selected = document.querySelector('.selected');
  list.insertBefore(selected, selected.previousElementSibling);
}
up.addEventListener('click', goUp);

function goDown() {
  const selected = document.querySelector('.selected');
  list.insertBefore(selected.nextElementSibling, selected);
}
down.addEventListener('click', goDown);

window.onload = function carregada() {
  if (localStorage.TaskStore) {
    restoreList();
  }
};
