const getAddButton = document.getElementById('criar-tarefa');
const getList = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');
const getListItem = document.getElementsByTagName('li');
const getCleanButton = document.getElementById('apaga-tudo');
const getCompletedTask = document.getElementsByClassName('completed');
const getCleanCompletedTaskButton = document.getElementById('remover-finalizados');

function eraseInputInformation() {
  getInput.value = '';
}

function changeColorOfSelectedTask(ev) {
  for (let i = 0; i < getListItem.length; i += 1) {
    getListItem[i].classList.remove('selected');
  }
  ev.target.classList.add('selected');
}

function assigningColor() {
  for (let i = 0; i < getListItem.length; i += 1) {
    getListItem[i].addEventListener('click', changeColorOfSelectedTask);
  }
}

function completedTask(ev) {
  if (ev.target.classList.contains('completed') === true) {
    ev.target.classList.remove('completed');
  } else {
    ev.target.classList.add('completed');
  }
}

function assigningClassCompleted() {
  for (let i = 0; i < getListItem.length; i += 1) {
    getListItem[i].addEventListener('dblclick', completedTask);
  }
}

function createTask() {
  const itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  getList.appendChild(itemList);
  eraseInputInformation();
  assigningColor();
  assigningClassCompleted();
}

getAddButton.addEventListener('click', createTask);

function cleanList() {
  getList.innerHTML = '';
}

getCleanButton.addEventListener('click', cleanList);

function removeCompletedTask() {
  while (getCompletedTask.length > 0) {
    getCompletedTask[0].remove();
  }
}

getCleanCompletedTaskButton.addEventListener('click', removeCompletedTask);
