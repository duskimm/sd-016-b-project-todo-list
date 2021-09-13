const txtInput = document.querySelector('input#texto-tarefa');
const addBtn = document.querySelector('button#criar-tarefa');
const toDoList = document.querySelector('ol#lista-tarefas');

function addTask() {
  addBtn.addEventListener('click', () => {
    if (txtInput.value !== '') {
      const listElement = document.createElement('li');
      listElement.innerHTML = txtInput.value;
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
    event.target.classList.toggle('selected');
  });
}

selectTask();
