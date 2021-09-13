const getAddButton = document.getElementById('criar-tarefa');
const getList = document.getElementById('lista-tarefas');
const getInput = document.getElementById('texto-tarefa');

function eraseInputInformation() {
  getInput.value = '';
}

function createTask() {
  const itemList = document.createElement('li');
  itemList.innerText = getInput.value;
  getList.appendChild(itemList);
  eraseInputInformation();
}

getAddButton.addEventListener('click', createTask);
