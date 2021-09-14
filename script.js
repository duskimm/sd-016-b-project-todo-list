const olId = '#lista-tarefas';

// Funcao para criar elementos fora do dom, recebe como parametros respectivamente o tipo do elemento, o texto, as classes, e o id, se passar '' como parametro ele nao adiciona o parametro em questao.
function newChild(type, text, classs, id) {
  const newChildItem = document.createElement(type);
  newChildItem.innerText = text;
  if (classs !== '') {
    newChildItem.className = classs;
  }
  if (id !== '') {
    newChildItem.id = id;
  }
  return newChildItem;
}

// Remove a class selected da todoList
function removeSelected(selectedTodo) {
  if (selectedTodo !== null) {
    selectedTodo.classList.remove('selected');
  }
}

// Remove todos os elementos filhos de um elemnto pelo id
function clearChilds(elementById) {
  const element = document.querySelector(elementById);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Remove todas os filhos de um elemento com a class especificada
function clearElementByClass(elementById, elementClass) {
  const element = document.querySelector(elementById);
  let elementChild = element.firstChild;
  while (elementChild) {
    if (elementChild.classList.contains(elementClass)) {
      elementChild.remove();
      elementChild = element.firstChild;
    } else {
      elementChild = elementChild.nextSibling;
    }
  }
}

// Evento de clicar no botao CREATE
document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const inputText = document.querySelector('#texto-tarefa');
  const todoList = document.querySelector(olId);
  if (inputText !== '') {
    todoList.append(newChild('li', inputText.value, 'todo', ''));
    inputText.value = '';
  }
});

// Evento de clicar no botao DELETE ALL
document.querySelector('#apaga-tudo').addEventListener('click', () => {
  clearChilds(olId);
});

// Evento de clicar no botao REMOVE ALL DONE
document.querySelector('#remover-finalizados').addEventListener('click', () => {
  clearElementByClass(olId, 'completed');
});

// Evento de clicar no botao SAVE TAKS
document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  const olList = document.getElementsByClassName('todo');
  localStorage.todoList = '';
  localStorage.todoClassList = '';
  for (let index = 0; index < olList.length; index += 1) {
    localStorage.todoList += `${olList[index].innerText}/`;
    localStorage.todoClassList += `${olList[index].classList}/`;
  }
});

// Conteudo adquirido na pagina https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
// Evento de clicar no botao UP
document.querySelector('#mover-cima').addEventListener('click', () => {
  const selectElmt = document.querySelector('.selected');
  if ((selectElmt !== null) && (selectElmt.previousElementSibling)) {
    selectElmt.parentNode.insertBefore(selectElmt, selectElmt.previousElementSibling);
  }
});

// Evento de clicar no botao DOWN
document.querySelector('#mover-baixo').addEventListener('click', () => {
  const selectedElement = document.querySelector('.selected');
  if ((selectedElement !== null) && (selectedElement.nextElementSibling)) {
    selectedElement.parentNode.insertBefore(selectedElement.nextElementSibling, selectedElement);
  }
});

// Evento de clicar no botao Remove selected
document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const selectedList = document.querySelector('.selected');
  if (selectedList !== null) {
    document.querySelector('.selected').remove();
  }
});

// Evento quando clica uma vez em um elemento da todoList
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo')) {
    removeSelected(document.querySelector('.selected'));
    event.target.classList.add('selected');
  }
});

// Evento quando clica duas vezes em um elemento da todoList
document.addEventListener('dblclick', (event) => {
  const todo = event.target;
  if (todo.classList.contains('todo')) {
    if (todo.classList.contains('completed')) {
      todo.classList.remove('completed');
    } else {
      todo.classList.add('completed');
    }
  }
});

// evento que acontece quando a pagina termina de carregar
window.onload = () => {
  const olElement = document.querySelector(olId);
  let liElements = localStorage.todoList;
  let liClassElements = localStorage.todoClassList;
  if (liElements !== undefined) {
    liElements = liElements.split('/');
    liClassElements = liClassElements.split('/');
    for (let index = 0; index < liElements.length - 1; index += 1) {
      olElement.append(newChild('li', liElements[index], liClassElements[index], ''));
    }
  }
};
