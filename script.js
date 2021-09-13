function selectTask(event) {
  const lis = document.getElementsByTagName('li');
  const task = event.target;
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].classList.remove('selected');
  }
  task.classList.add('selected');
}

function completeTask(event) {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function clearCompleted() {
  const finishedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < finishedTasks.length; i += 1) {
    finishedTasks[i].parentElement.removeChild(finishedTasks[i]);
  }
}

function addTask(list) {
  const input = document.querySelector('#texto-tarefa');
  const task = document.createElement('li');
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completeTask);
  task.innerText = input.value;
  input.value = '';
  list.appendChild(task);
}

window.onload = () => {
  const list = document.querySelector('#lista-tarefas');
  const createTaskBtn = document.querySelector('#criar-tarefa');
  const clearBtn = document.querySelector('#apaga-tudo');
  const clearCompletedBtn = document.querySelector('#remover-finalizados');

  createTaskBtn.addEventListener('click', () => {
    addTask(list);
  });
  clearBtn.addEventListener('click', () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
  clearCompletedBtn.addEventListener('click', clearCompleted);
};
