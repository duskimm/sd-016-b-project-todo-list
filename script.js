function selectTask(event) {
  const lis = document.getElementsByTagName('li');
  const task = event.target;
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].classList.remove('selected');
  }
  task.classList.add('selected');
}

function completeTask(event) {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function clearCompleted() {
  const finishedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < finishedTasks.length; i += 1) {
    finishedTasks[i].parentElement.removeChild(finishedTasks[i]);
  }
}

function addTask(list) {
  const input = document.querySelector('#texto-tarefa');
  const task = document.createElement('li');
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completeTask);
  task.innerText = input.value;
  input.value = '';
  list.appendChild(task);
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.parentElement.removeChild(selected);
  }
}

function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function saveList() {
  const list = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('list', list);
}

window.onload = () => {
  const list = document.querySelector('#lista-tarefas');
  if (localStorage.getItem('list')) {
    list.innerHTML = localStorage.list;
  }
  const createTaskBtn = document.querySelector('#criar-tarefa');
  const clearBtn = document.querySelector('#apaga-tudo');
  const clearCompletedBtn = document.querySelector('#remover-finalizados');
  const removeSelBtn = document.querySelector('#remover-selecionado');
  const saveBtn = document.querySelector('#salvar-tarefas');
  createTaskBtn.addEventListener('click', () => addTask(list));
  clearBtn.addEventListener('click', () => clearList(list));
  clearCompletedBtn.addEventListener('click', clearCompleted);
  removeSelBtn.addEventListener('click', removeSelected);
  saveBtn.addEventListener('click', saveList);
};
