const createTaskFunction = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');
let clickSelected = '';

// Limpa o input após ser preenchido

function inputClean() {
  taskText.value = '';
}

// Cria o evento do botão de pegar a tarefa do input

createTaskFunction.addEventListener('click', () => {
  console.log('click botão nova tarefa');
  const createTask = document.createElement('li');
  const task = taskText.value;
  createTask.innerText = task;

  listTask.appendChild(createTask);

  inputClean();
});

// Após o click analisa se elemento contém ou não o id 'selected' e o exclue se houver. Cria o evento na variável e coloca o id selected no item da lista selecionado

function clickTask() {
  listTask.addEventListener('click', (event) => {
    const elementList = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < elementList.length; index += 1) {
      if (elementList[index].id === 'selected' || elementList[index].id === '') {
        elementList[index].id = '';
      }
    }
    clickSelected = event.target;
    clickSelected.id = 'selected';
  });
}

clickTask();
