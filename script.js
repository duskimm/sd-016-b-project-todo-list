const txtInput = document.querySelector('input#texto-tarefa');
const addBtn = document.querySelector('button#criar-tarefa');
const toDoList = document.querySelector('ol#lista-tarefas');

function addTask() {
  addBtn.addEventListener('click', () => {
    if (txtInput.value !== '') {
      const listElement = document.createElement('li');
      listElement.innerHTML = txtInput.value;
      listElement.classList.add('task');
      toDoList.appendChild(listElement);
      txtInput.value = '';
      txtInput.focus();
    } else {
      alert('Please enter a valid task');
    }
  });
}

addTask();

function selectTask() {
  toDoList.addEventListener('click', (event) => {
    const taskSelected = document.querySelectorAll('.selected');
    for (let i = 0; i < taskSelected.length; i++) {
      taskSelected[i].classList.remove('selected');
    }
    event.target.classList.toggle('selected');
  });
}

selectTask();

function taskDone() {
  toDoList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('task')) {
      event.target.classList.toggle('completed');
      event.target.classList.toggle('selected');
    }
  });
}

taskDone();

function eraseAll() {
  const eraseBtn = document.querySelector('button#apaga-tudo');
  eraseBtn.addEventListener('click', () => {
    toDoList.innerHTML = '';
  });
}

eraseAll();

function eraseDone() {
  const eraseBtn = document.querySelector('button#remover-finalizados');
  const taskDoneList = document.querySelectorAll('.completed');
  eraseBtn.addEventListener('click', () => {
    console.log(taskDoneList);
  });
}

eraseDone();
