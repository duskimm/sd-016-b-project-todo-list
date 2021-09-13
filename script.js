// Requisitos 5 e 6 - Texto do input é limpo após ser inserido e o item é adicionado ao final da lista
const taskInput = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function liCreation() {
  const newElement = document.createElement('li');
  newElement.innerText = taskInput.value;
  return newElement;
}

function validation() {
  addButton.addEventListener('click', () => {
    if (taskInput.value === '') {
      alert('inválido!');
    } else {
      listaOrdenada.appendChild(liCreation());
      taskInput.value = '';
    }
  });
}
validation();

// Requisitos 7 e 8 - Mudar o background color do elemento da lista ao clicar no mesmo
function removeLastSelected() {
  const listElements = listaOrdenada.children;
  for (let i = 0; i < listElements.length; i += 1) {
    if (listElements[i].id === 'selected') {
      listElements[i].removeAttribute('id');
    }
  }
}

function selectedTask() {
  listaOrdenada.addEventListener('click', (event) => {
    removeLastSelected();
    const alvo = event.target;
    alvo.id = 'selected';
  });
}
selectedTask();

// Requisito 9 - Riscar elemento que seja clicado 2x, voltando ao normal caso clicado mais 2x
function completedTask() {
  listaOrdenada.addEventListener('dblclick', (event) => {
    const alvoCompleto = event.target;
    if (alvoCompleto.className === 'completed') {
      alvoCompleto.removeAttribute('class');
    } else {
      alvoCompleto.className = 'completed';
    }
  });
}
completedTask();

// Requisito 10 - Botão limpar tudo
const deleteAll = document.getElementById('apaga-tudo');
const childrenOfList = listaOrdenada.children;

function childCont() {
  return childrenOfList.length;
}

function wipeList() {
  deleteAll.addEventListener('click', () => {
    const childNum = childCont();
    for (let i = 0; i < childNum; i += 1) {
      listaOrdenada.removeChild(childrenOfList[0]);
    }
  });
}
wipeList();

// Requisito 11 - Botão remove finalizados
const elementsFinalizados = document.getElementsByClassName('completed');
const completedRemovButton = document.getElementById('remover-finalizados');

function removeCompleted() {
  completedRemovButton.addEventListener('click', () => {
    while (elementsFinalizados.length > 0) {
      listaOrdenada.removeChild(elementsFinalizados[0]);
    }
  });
}
removeCompleted();

// Requisito 12 - Guarda a lista em localStorage para a próxima vez que o site for aberto
const anteriorTask = [];
const anteriorTaskClass = [];
const saveTasksButton = document.getElementById('salvar-tarefas');

function savePreviousTasks() {
  saveTasksButton.addEventListener('click', () => {
    for (let i = 0; i < childrenOfList.length; i += 1) {
      anteriorTask.push(childrenOfList[i].innerText);
      anteriorTaskClass.push(childrenOfList[i].className);
    }
    localStorage.setItem('taskList', JSON.stringify(anteriorTask));
    localStorage.setItem('classList', JSON.stringify(anteriorTaskClass));
  });
}
savePreviousTasks();

function openPreviousTask() {
  const beforeTaskList = JSON.parse(localStorage.getItem('taskList'));
  const beforeClassList = JSON.parse(localStorage.getItem('classList'));
  if (beforeTaskList !== null) { // Procurei ajuda para chegar nessa lógica, acabei pegando como referência o exercicio 12 do amigo Gabriel FM Pinheiro https://github.com/tryber/sd-016-b-project-todo-list/blob/gabriel-todo-list-project/script.js
    for (let i = 0; i < beforeTaskList.length; i += 1) {
      const newLi = document.createElement('li');
      newLi.innerText = beforeTaskList[i];
      newLi.className = beforeClassList[i];
      listaOrdenada.appendChild(newLi);
    }
  }
}
openPreviousTask();
