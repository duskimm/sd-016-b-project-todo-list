const getAddButton = document.getElementById('criar-tarefa');
const getList = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');
const getListItem = document.getElementsByTagName('li');

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
    ev.target.classList.remove('completed')
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
