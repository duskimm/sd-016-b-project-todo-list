const tasksList = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
const removeButton = document.getElementById('apaga-tudo');
const inputt = document.getElementById('texto-tarefa');
const tasks = document.getElementsByClassName('tasks');
const finishedButton = document.getElementById('remover-finalizados');
const rmSelectBt = document.getElementById('remover-selecionado');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');
const saveButton = document.getElementById('salvar-tarefas');

addButton.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  const text = inputt.value;
  elementLi.className = 'tasks';
  tasksList.appendChild(elementLi);
  elementLi.innerText = text;
  inputt.value = '';
});

inputt.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    const elementLi = document.createElement('li');
    const text = inputt.value;
    elementLi.className = 'tasks';
    tasksList.appendChild(elementLi);
    elementLi.innerText = text;
    inputt.value = '';
  }
});

tasksList.addEventListener('click', (event) => {
  const eventt = event.target;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
    tasks[i].style.backgroundColor = '';
  }
  eventt.classList.add('selected');
  eventt.style.backgroundColor = 'rgb(128, 128, 128)';
});

tasksList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

removeButton.addEventListener('click', () => {
  for (let i = 0; i < tasks.length; i = 0) {
    tasksList.removeChild(tasks[i]);
  }
  // Créditos ao Léo.
});

finishedButton.addEventListener('click', () => {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
  // Créditos ao Gabriel Rodrigues Leite.
});

rmSelectBt.addEventListener('click', () => {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      tasks[i].remove();
      break;
    }
  }
  // Créditos ao Lucas Araújo.
});

up.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const prevSibling = selected.previousElementSibling;
    if (prevSibling !== null) {
      selected.parentNode.insertBefore(selected, prevSibling);
    }
  }
});

// Créditos: https://www.javascripttutorial.net/javascript-dom/javascript-siblings/

down.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) { // Créditos ao Gabriel Rodrigues Leite.
    const nextSibling = selected.nextElementSibling;
    if (nextSibling !== null) {
      selected.parentNode.insertBefore(nextSibling, selected);
    }
  }
});

// Créditos:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://projects.raspberrypi.org/en/projects/cd-intermediate-javascript-sushi/6

saveButton.addEventListener('click', () => {
  const toDos = [];
  for (let i = 0; i < tasksList.children.length; i += 1) {
    const toDo = tasksList.children.item(i);

    const toDoInfo = {
      task: toDo.innerText,
      class: toDo.classList,
    };
    toDos.push(toDoInfo);
  }
  localStorage.setItem('toDos', JSON.stringify(toDos));
});

function loadList(text, classs) {
  const elementLi = document.createElement('li');
  elementLi.innerText = text;
  elementLi.className = classs;
  tasksList.appendChild(elementLi);
}

window.onload = () => {
  if (localStorage.getItem('toDos') !== null) {
    const toDos = JSON.parse(localStorage.getItem('toDos'));

    for (let a = 0; a < toDos.length; a += 1) {
      const toDo = toDos[a];

      console.log(toDo.class);
      const classe = [];
      for (const i of Object.values(toDo.class)) {
        classe.push(i);
      }
      loadList(toDo.task, classe.join(' '));
    }
  }
};
