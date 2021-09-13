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

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const inputText = document.querySelector('#texto-tarefa');
  const todoList = document.querySelector(olId);
  if (inputText !== '') {
    todoList.append(newChild('li', inputText.value, 'todo', ''));
    inputText.value = '';
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  clearChilds(olId);
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  clearElementByClass(olId, 'completed');
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo')) {
    removeSelected(document.querySelector('.selected'));
    event.target.classList.add('selected');
  }
});

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
