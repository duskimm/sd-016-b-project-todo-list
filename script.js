const elementList = document.getElementById('lista-tarefas');
const elementInput = document.querySelector('input');
const elementButton = document.querySelector('button');
const elementItemList = document.getElementsByClassName('itemList');

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
  const textTask = elementInput.value;
  tasks.push(textTask);
  elementInput.value = '';
  createToDoList();
}

elementButton.addEventListener('click', addTask);

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