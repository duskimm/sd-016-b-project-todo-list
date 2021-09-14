const elementList = document.getElementById('lista-tarefas');
const elementInput = document.querySelector('input');
const elementButtonAdd = document.querySelector('button');
const elementItemList = document.getElementsByClassName('itemList');
const getListItem = document.getElementsByTagName('li')
const elementClear = document.getElementById('apaga-tudo')
const tasks = [];

// Função para criar elementos de lista
function createToDoList() {
  elementList.innerHTML = '';
  for (let item of tasks) {
    const elementTask = document.createElement('li');
    elementTask.classList.add('itemList')
    const textTask = document.createTextNode(item);

    elementTask.appendChild(textTask);
    elementList.appendChild(elementTask);
  }
}
createToDoList();

// Função para adicionar textos dos inputs à lista.
function addTask() {
  if (elementInput.value != ''){
    const textTask = elementInput.value;
    tasks.push(textTask);
    elementInput.value = '';
    createToDoList();
  }
}

elementButtonAdd.addEventListener('click', addTask);

// Função para aterar backgroundColor quando clicar no item da lista

function changeBackgroudColor (event) {
  if (event.target.classList.contains('itemList')){
    for (let i = 0; i < elementItemList.length; i += 1) {
      elementItemList[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}
document.addEventListener('click', changeBackgroudColor);


// Função para riscar item completado

function doubleClickTask(event) {
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed')
  } else {
    event.target.classList.add('completed')
  }
}

document.addEventListener('dblclick', doubleClickTask);

// função limpar tarefas

const clearTasks = (event) => {
  const todoList = document.getElementById ('lista-tarefas');
  while (todoList.firstChild){
    todoList.removeChild (todoList.lastChild);
  }
}

elementClear.addEventListener('click', clearTasks )