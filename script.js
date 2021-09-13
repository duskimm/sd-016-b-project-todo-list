// Requisito 5 e 6 - Texto do input é limpo após ser inserido e o item é adicionado ao final da lista
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

// Requisito 7 e 8 - Mudar o background color do elemento da lista ao clicar no mesmo
let alvo = '';

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
    alvo = event.target;
    alvo.id = 'selected';
  });
}
selectedTask();
