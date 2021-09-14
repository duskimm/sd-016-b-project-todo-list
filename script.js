const body = document.getElementsByTagName('body')[0];

function addMain() {
  const newMain = document.createElement('main');
  newMain.id = 'main';
  body.appendChild(newMain);
}
addMain();
const main = document.getElementById('main');

function addHeader() {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = '<h1>Minha Lista de Tarefas</h1>';
  main.appendChild(newHeader);
}
addHeader();

function addFuncionamento() {
  const newParagraph = document.createElement('p');
  newParagraph.id = 'funcionamento';
  newParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  main.appendChild(newParagraph);
}
addFuncionamento();

function addInput() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';

  main.appendChild(newInput);
}
addInput();

function addOrdenedList() {
  const newOrdenedList = document.createElement('ol');
  newOrdenedList.id = 'lista-tarefas';

  main.appendChild(newOrdenedList);
}
addOrdenedList();

function addCreateBtn() {
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerText = 'Adicionar Tarefa';

  main.appendChild(newButton);
}
addCreateBtn();

function newTask() {
  const createButton = document.getElementById('criar-tarefa');
  const task = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  createButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = task.value;
    list.appendChild(newTask);
    task.value = '';

    newTask.addEventListener('click', (event) => {
      for (const element of list.children) {
        if (element.classList.contains('selected')) {
          element.classList.remove('selected');
        } else {
          if (element === event.target) {
            element.classList.add('selected');
          }
        }
      }
    });

    newTask.addEventListener('dblclick', (event) => {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  });
}
newTask();

function newClearBtn() {
  const clearBtn = document.createElement('button');
  clearBtn.id = 'apaga-tudo';
  clearBtn.innerText = 'Apagar Tarefas';

  main.appendChild(clearBtn);

  clearBtn.addEventListener('click', () => {
    const list = document.getElementById('lista-tarefas');
    list.innerHTML = '';
    sessionStorage.clear();
  });
}
newClearBtn();

function newCompletedBtn() {
  const completedBtn = document.createElement('button');
  completedBtn.id = 'remover-finalizados';
  completedBtn.innerText = 'Remover Finalizadas';

  main.appendChild(completedBtn);

  completedBtn.addEventListener('click', () => {
    const taskList = document.getElementById('lista-tarefas');
    const completedList = document.querySelectorAll('.completed');

    for (let i = completedList.length - 1; i >= 0; i -= 1) {
      taskList.removeChild(completedList[i]);
    }
  });
}
newCompletedBtn();

function newSaveBtn() {
  const newBtn = document.createElement('button');
  newBtn.id = 'salvar-tarefas';
  newBtn.innerText = 'Salvar Tarefas';

  main.appendChild(newBtn);

  newBtn.addEventListener('click', () => {
    const tasks = document.getElementById('lista-tarefas');
    let tasksToSave = tasks.innerHTML;
    sessionStorage.setItem('tasks', JSON.stringify(tasksToSave));
  });
}
newSaveBtn();

window.onload = savedTasks;
function savedTasks() {
  if (sessionStorage.getItem('tasks')) {
    let loadTasks = JSON.parse(sessionStorage.getItem('tasks'));
    const tasksList = document.getElementById('lista-tarefas');
    tasksList.innerHTML = loadTasks;
  }
}
