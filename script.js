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

function moveUp() {
  const sel = document.querySelector('.selected');

  if (sel && sel !== sel.parentElement.firstChild) {
    const prev = sel.previousSibling;
    const temp = prev.innerText;
    prev.innerText = sel.innerText;
    sel.innerText = temp;
    sel.classList.remove('selected');
    prev.classList.add('selected');
  }
}

function moveDown() {
  const sel = document.querySelector('.selected');
  if (sel && sel !== sel.parentElement.lastChild) {
    const next = sel.nextSibling;
    const temp = next.innerText;
    next.innerText = sel.innerText;
    sel.innerText = temp;
    sel.classList.remove('selected');
    next.classList.add('selected');
  }
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

  document.querySelector('#mover-cima').addEventListener('click', moveUp);
  document.querySelector('#mover-baixo').addEventListener('click', moveDown);
};
