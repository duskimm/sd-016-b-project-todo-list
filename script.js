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
