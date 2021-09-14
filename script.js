const getAddButton = document.getElementById('criar-tarefa');
const getList = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');
const getListItem = document.getElementsByTagName('li');
const getCleanButton = document.getElementById('apaga-tudo');
const getCompletedTask = document.getElementsByClassName('completed');
const getCleanCompletedTaskButton = document.getElementById('remover-finalizados');
const getSaveButtom = document.getElementById('salvar-tarefas');
const getDelSelectButtom = document.getElementById('remover-selecionado');
const getSelectedItem = document.getElementsByClassName('selected');
const getMovUpButtom = document.getElementById('mover-cima');
const getMovDownButtom = document.getElementById('mover-baixo');

function eraseInputInformation() {
  getInput.value = '';
}

function changeColorOfSelectedTask(ev) {
  for (let i = 0; i < getListItem.length; i += 1) {
    getListItem[i].classList.remove('selected');
  }
  ev.target.classList.add('selected');
}

function takingSelectedTask() {
  let position;
  for (let i = 0; i < getListItem.length; i += 1) {
    if (getListItem[i].classList.contains('selected') === true) {
      position = i;
    }
  }
  return position;
}

function movingUp() {
  const position = takingSelectedTask();
  if (getSelectedItem.length > 0 && getListItem[position - 1] != null) {
    const beforeElemText = getListItem[position - 1].innerHTML;
    const beforeElemClass = getListItem[position - 1].className;
    const selectedElemText = getListItem[position].innerHTML;
    const selectedElemclass = getListItem[position].className;
    getListItem[position].innerHTML = beforeElemText;
    getListItem[position].className = beforeElemClass;
    getListItem[position - 1].innerHTML = selectedElemText;
    getListItem[position - 1].className = selectedElemclass;
  }
}

function movingDown() {
  const position = takingSelectedTask();
  if (getSelectedItem.length > 0 && getListItem[position + 1] != null) {
    const beforeElemText = getListItem[position + 1].innerHTML;
    const beforeElemClass = getListItem[position + 1].className;
    const selectedElemText = getListItem[position].innerHTML;
    const selectedElemclass = getListItem[position].className;
    getListItem[position].innerHTML = beforeElemText;
    getListItem[position].className = beforeElemClass;
    getListItem[position + 1].innerHTML = selectedElemText;
    getListItem[position + 1].className = selectedElemclass;
  }
}

getMovUpButtom.addEventListener('click', movingUp);

getMovDownButtom.addEventListener('click', movingDown);

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

// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
function removeCompletedTask() {
  while (getCompletedTask.length > 0) {
    getCompletedTask[0].remove();
  }
}

getCleanCompletedTaskButton.addEventListener('click', removeCompletedTask);

function removeSelectedTask() {
  getSelectedItem[0].remove();
}

getDelSelectButtom.addEventListener('click', removeSelectedTask);

function saveContent() {
  const tasksInAArray = [];
  const classTaskInAArray = [];
  for (let i = 0; i < getListItem.length; i += 1) {
    tasksInAArray.push(getListItem[i].innerText);
    classTaskInAArray.push(getListItem[i].className);
  }
  localStorage.setItem('tasks', JSON.stringify(tasksInAArray));
  localStorage.setItem('classTask', JSON.stringify(classTaskInAArray));
}

getSaveButtom.addEventListener('click', saveContent);

function createListAfterReopenPage() {
  const tasksList = JSON.parse(localStorage.getItem('tasks'));
  const classesList = JSON.parse(localStorage.getItem('classTask'));
  if (tasksList !== null) {
    for (let i = 0; i < tasksList.length; i += 1) {
      const itemList = document.createElement('li');
      itemList.innerText = tasksList[i];
      itemList.className = classesList[i];
      getList.appendChild(itemList);
      eraseInputInformation();
      assigningColor();
      assigningClassCompleted();
    }
  }
}

window.onload = function onload() {
  createListAfterReopenPage();
};
