// functions for working with elements

function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function toggleClass(element, alternateClass) {
  element.classList.toggle(alternateClass);
}

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

function removeOfHtml(fatherElement, sonElement) {
  fatherElement.removeChild(sonElement);
}

function addMultiplesListeners(arr, eventName, listener) {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
}

function addMultiplesEventsAndListeners(arr, eventsName, listener) {
  const events = eventsName.split(' ');

  arr.forEach((element) => {
    events.forEach((event) => {
      element.addEventListener(event, listener, false);
    });
  });
}

// global variables

const user = {
  msg: '',
};

const tasksArray = [];

const taskInput = getOne('#texto-tarefa'),
      taskList = getOne('#lista-tarefas'),
      buttonAdd = getOne('#criar-tarefa'),
      buttonReset = getOne('#apaga-tudo'),
      buttonDone = getOne('#remover-finalizados'),
      buttonRemoveSelected = getOne('#remover-selecionado'),
      buttonSave = getOne('#salvar-tarefa'),
      buttonMoveUp = getOne('#mover-cima'),
      buttonMoveDown = getOne('#mover-baixo');

// functions for the project

function getTask() {
  taskInput.addEventListener('keyup', (event) => {
    user.msg = event.target.value;
  });
}

function createTaskItem() {
  const newTaskItem = createElement('li');
  addClass(newTaskItem, 'task-item');
  newTaskItem.innerHTML = user.msg;
  tasksArray.push(newTaskItem);
}

function renderTaskItems() {
  tasksArray.forEach((task) => {
    plugHtml(taskList, task);
  });
}

function deleteDoneTasks() {
  const doneTasks = getAll('.completed');

  doneTasks.forEach((task) => {
    for (let i in tasksArray) {
      let del = tasksArray.indexOf(task);
      tasksArray.splice(del, del + 1);
      task.remove();
    }
  });
}

function resetSelection() {
  const listItems = getAll('.task-item');

  listItems.forEach((item) => {
    removeClass(item, 'selected');
  });
}

function changeSelection(event) {
  resetSelection();
  addClass(event.target, 'selected');
}

function changeDone(event) {
  toggleClass(event.target, 'completed');
}

function controlSelection(event) {
  if (event.type === 'dblclick') {
    changeDone(event);
  } else if (event.type === 'click') {
    changeSelection(event);
  }
}

function selectAllTasks() {
  const taskItems = getAll('.task-item');

  addMultiplesEventsAndListeners(taskItems, 'click dblclick', controlSelection);
}

function deleteAllTasks() {
  for (let i in tasksArray) {
    removeOfHtml(taskList, tasksArray[i]);
  }
  tasksArray.splice(0, tasksArray.length);
}

// botões para cima e para baixo, para mover o item selecionado

function moveUp() {
  const selected = attSelectTask();
  const selectedIndex = tasksArray.indexOf(selected);
  
  if (tasksArray[selectedIndex - 1]) {
    const tempStr1 = {
      value: tasksArray[selectedIndex].innerText,
      classes: tasksArray[selectedIndex].className,
    }
    const tempStr2 = {
      value: tasksArray[selectedIndex - 1].innerText,
      classes: tasksArray[selectedIndex - 1].className,
    }

    tasksArray[selectedIndex].innerText = tempStr2.value;
    tasksArray[selectedIndex - 1].innerText = tempStr1.value;
    tasksArray[selectedIndex].className = tempStr2.classes;
    tasksArray[selectedIndex - 1].className = tempStr1.classes;
  }
}

function moveDown() {
  const selected = attSelectTask();
  const selectedIndex = tasksArray.indexOf(selected);
  
  if (tasksArray[selectedIndex + 1] && selected) {
    const tempStr1 = {
      value: tasksArray[selectedIndex].innerText,
      classes: tasksArray[selectedIndex].className,
    }
    const tempStr2 = {
      value: tasksArray[selectedIndex + 1].innerText,
      classes: tasksArray[selectedIndex + 1].className,
    }

    tasksArray[selectedIndex].innerText = tempStr2.value;
    tasksArray[selectedIndex + 1].innerText = tempStr1.value;
    tasksArray[selectedIndex].className = tempStr2.classes;
    tasksArray[selectedIndex + 1].className = tempStr1.classes;
  }
}

function attSelectTask() {
  return getOne('.selected');
}

function deleteSelectedTask() {
  const selected = attSelectTask();
  let del = tasksArray.indexOf(selected);
  tasksArray.splice(del, del + 1);
  selected.remove();
}

function listenListItem() {
  const listItems = getAll('.task-item');

  addMultiplesListeners(listItems, 'click', attSelectTask);
}

function allButtons() {
  const buttons = getAll('button');

  addMultiplesListeners(buttons, 'click', (event) => {
    switch(event.target.id) {
      case('criar-tarefa'):
        taskInput.value = '';
        createTaskItem();
        renderTaskItems();
        selectAllTasks();
        listenListItem();
        break
      case('apaga-tudo'):
        deleteAllTasks();
        renderTaskItems();
        break
      case('remover-finalizados'):
        deleteDoneTasks();
        break
      case('remover-selecionado'):
        deleteSelectedTask();
        break
      case('mover-cima'):
        moveUp();
        break
      case('mover-baixo'):
        moveDown();
        break
      default:
        console.log('default');
    }
  });
}

window.onload = () => {
  getTask();
  allButtons();
};
