const createTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementsByClassName('tarefa');
const cleanAll = document.getElementById('apaga-tudo');
const removeFinishedTask = document.getElementById('remover-finalizados');
const saveTaskButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');

function deselectAllTasks() {
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].classList.contains('selected') === true) {
      task[index].classList.toggle('selected');
    }
  }
}

function completeTask(listItem) {
  listItem.addEventListener('dblclick', () => {
    listItem.classList.toggle('completed');
  });
  return true;
}

function selectTask() {
  for (let index = 0; index < task.length; index += 1) {
    task[index].addEventListener('click', () => {
      deselectAllTasks();
      task[index].classList.toggle('selected');
    });
  }
}

function checkTask(newTask) {
  if (completeTask(newTask) !== true) {
    completeTask(newTask);
  }
}

function addTask() {
  createTask.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    newTask.classList.toggle('tarefa');
    taskList.appendChild(newTask);
    input.value = '';
    checkTask(newTask);
    selectTask();
  });
}

function cleanTasks() {
  cleanAll.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

function removeFinished() {
  const FinishedTaskList = document.getElementsByClassName('completed');
  removeFinishedTask.addEventListener('click', () => {
    for (let index = FinishedTaskList.length - 1; index >= 0; index -= 1) {
      taskList.removeChild(FinishedTaskList[index]);
    }
  });
}

function saveTaskList() {
  saveTaskButton.addEventListener('click', () => {
    if (taskList.children.length === 0) {
      localStorage.clear();
    }
    localStorage.clear();
    for (let index = 0; index < task.length; index += 1) {
      localStorage.setItem(`task${index}`, task[index].innerHTML);
      localStorage.setItem(`class${index}`, task[index].classList.value);
    }
  });
}
function checkTaskClasses(stylePath, tag) {
  const style = localStorage.getItem(stylePath);
  if (style.includes('tarefa') === true) {
    tag.classList.add('tarefa');
  }
  if (style.includes('completed') === true) {
    tag.classList.add('completed');
  }
  if (style.includes('selected') === true) {
    tag.classList.add('selected');
  }
}

function loadTaskList() {
  for (let index = 0; index < localStorage.length / 2; index += 1) {
    const tag = document.createElement('li');
    const text = localStorage.getItem(`task${index}`);
    tag.innerText = text;
    checkTaskClasses(`class${index}`, tag);
    taskList.appendChild(tag);
    checkTask(tag);
    selectTask();
  }
}

function moveUp() {
  moveUpButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask !== null) {
      const taskBefore = selectedTask.previousElementSibling;
      if (selectedTask.previousElementSibling !== null) {
        selectedTask.parentNode.insertBefore(selectedTask, taskBefore);
        selectTask();
      } else {
        alert('Chegou ao inicio da lista');
      }
    }
  });
}

function moveDown() {
  moveDownButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask !== null) {
      const taskAfter = selectedTask.nextElementSibling;
      if (selectedTask.nextElementSibling !== null) {
        const targetPosition = taskAfter.nextElementSibling;
        selectedTask.parentNode.insertBefore(selectedTask, targetPosition);
        selectTask();
      } else {
        alert('Chegou ao fim da lista');
      }
    }
  });
}

function removeSelected() {
  removeSelectedButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask !== null) {
      selectedTask.parentNode.removeChild(selectedTask);
    }
    selectTask();
  });
}

window.onload = () => {
  loadTaskList();
  addTask();
  cleanTasks();
  removeFinished();
  saveTaskList();
  moveUp();
  moveDown();
  removeSelected();
};
