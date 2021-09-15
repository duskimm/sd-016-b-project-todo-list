function creatElementHTML(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function addElementToDOM(parent, element) {
  parent.appendChild(element);
}

function setId(elementName, idName) {
  const element = elementName;
  element.id = idName;
}

function setClass(elementName, className) {
  const element = elementName;
  element.classList.add(className);
}

function setInnerText(elementName, text) {
  const element = elementName;
  element.innerText = text;
}

const header = document.querySelector('header');

const main = document.querySelector('main');

const title = creatElementHTML('h1');
setInnerText(title, 'Minha Lista de Tarefas');
addElementToDOM(header, title);

const paragraph = creatElementHTML('p');
setId(paragraph, 'funcionamento');
setInnerText(paragraph, 'Clique duas vezes em um item para marcá-lo como completo');
addElementToDOM(main, paragraph);

const input = creatElementHTML('input');
setId(input, 'texto-tarefa');
input.type = 'text';
addElementToDOM(main, input);

const createButton = creatElementHTML('button');
setId(createButton, 'criar-tarefa');
setInnerText(createButton, 'Criar');
addElementToDOM(main, createButton);

const taskList = creatElementHTML('ol');
setId(taskList, 'lista-tarefas');
addElementToDOM(main, taskList);

function changeSelectedTask(selectedTask, newTask) {
  const backgroundColor = 'gray-background';
  if (selectedTask !== newTask) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre os métodos 'add' e 'remove'
    selectedTask.classList.remove(backgroundColor);
    newTask.classList.add(backgroundColor);
  }
}

function changeTaskBackgroundColor(task) {
  task.addEventListener('click', (event) => {
    const selectedTask = document.querySelector('.gray-background');
    // Quando nenhuma tarefa foi selecionada ainda, o conteúdo de selectedTask é null, então eu apenas atribuo a classe gray-background ao elemento que disparou esse evento. Caso contrário, eu retiro gray-background da tarefa atual selecionada e atribuo ela ao elemento que disparou o evento.
    if (selectedTask !== null) {
      changeSelectedTask(selectedTask, event.target);
    } else {
      // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre o método 'add'
      event.target.classList.add('gray-background');
    }
  });
}

function markAsCompleted(task) {
  task.addEventListener('dblclick', (event) => {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre o método 'toggle'
    event.target.classList.toggle('completed');
  });
}

function createTask() {
  if (input.value !== '') {
    const task = creatElementHTML('li');
    setClass(task, 'task');
    setInnerText(task, input.value);
    addElementToDOM(taskList, task);
    input.value = '';
    changeTaskBackgroundColor(task);
    markAsCompleted(task);
  } else {
    alert('Ops! Você ainda não inseriu a tarefa.');
  }
}

createButton.addEventListener('click', createTask);

const clearButton = creatElementHTML('button');
setId(clearButton, 'apaga-tudo');
setInnerText(clearButton, 'Apagar lista');
addElementToDOM(main, clearButton);

clearButton.addEventListener('click', () => {
  // ref: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ - pesquisei sobre como remover todos os filhos de um nó
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

const removeTasksButton = creatElementHTML('button');
setId(removeTasksButton, 'remover-finalizados');
setInnerText(removeTasksButton, 'Remover tarefa');
addElementToDOM(main, removeTasksButton);

removeTasksButton.addEventListener('click', () => {
  // ref: https://stackoverflow.com/questions/37311003/how-to-remove-an-item-from-htmlcollection - pesquisei sobre como remover todos os elementos com uma característica específica de uma HTML Collection
  const { children } = taskList;
  for (let index = (children.length - 1); index >= 0; index -= 1) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre o método 'contains'
    if (children[index].classList.contains('completed')) {
      taskList.removeChild(children[index]);
    }
  }
});
