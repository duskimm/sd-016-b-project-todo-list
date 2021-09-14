const createTaskFunction = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const task = document.querySelector('#texto-tarefa');

function inputClean() {
  task.value = '';
}

createTaskFunction.addEventListener('click', () => {
  console.log('click botão nova tarefa');
  const createTask = document.createElement('li');  
  const textTask = task.value;
  createTask.innerText = textTask;

  listTask.appendChild(createTask);
  inputClean();
});

// btnAndInput.appendChild(generateBoard).innerText = 'VQV';