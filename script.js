const elementList = document.getElementById('lista-tarefas');
const elementInput = document.querySelector('input');
const elementButton = document.querySelector('button');

const tasks = [];

function createToDoList () {
  elementList.innerHTML = '';
  
  for (item of tasks) {
    const elementTask = document.createElement('li');
    const textTask = document.createTextNode(item);

    elementTask.appendChild(textTask);
    elementList.appendChild(elementTask);

  } 
};
createToDoList()

function addTask () {
  const textTask = elementInput.value;
  tasks.push(textTask);
  elementInput. value = ''
  createToDoList()
};

elementButton.addEventListener('click', addTask);