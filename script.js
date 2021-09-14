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
addElementToDOM(header, paragraph);

const input = creatElementHTML('input');
setId(input, 'texto-tarefa');
input.type = 'text';
addElementToDOM(main, input);

const button = creatElementHTML('button');
setId(button, 'criar-tarefa');
setInnerText(button, 'Criar');
addElementToDOM(main, button);

const taskList = creatElementHTML('ol');
setId(taskList, 'lista-tarefas');
addElementToDOM(main, taskList);

let tasks = [];

function changeSelectedTask(selectedTask, newTask) {
  const backgroundColor = 'gray-background';
  if (selectedTask !== newTask) {
    selectedTask.classList.remove(backgroundColor);
    newTask.classList.add(backgroundColor);
  }
}

function changeTaskBackgroundColor() {
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', (event) => {
      const selectedTask = document.querySelector('.gray-background');
      // Quando nenhuma tarefa foi selecionada ainda, o conteúdo de selectedTask é null, então eu apenas atribuo a classe gray-background ao elemento que disparou esse evento. Caso contrário, eu retiro gray-background da tarefa atual selecionada e atribuo ela ao elemento que disparou o evento.
      if (selectedTask !== null) {
        changeSelectedTask(selectedTask, event.target);
      } else {
        event.target.classList.add('gray-background');
      }
    });
  }
}

function createTask() {
  if (input.value !== '') {
    const task = creatElementHTML('li');
    setClass(task, 'task');
    setInnerText(task, input.value);
    addElementToDOM(taskList, task);
    input.value = '';
  } else {
    alert('Ops! Você ainda não inseriu a tarefa.');
  }
  tasks = document.getElementsByClassName('task');
  changeTaskBackgroundColor();
}

button.addEventListener('click', createTask);
