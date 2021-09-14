// Requisito 5 e 6
function addTask() {
  let taskList = document.getElementById('lista-tarefas');
  let newTask = document.createElement('li');
  let taskContent = document.getElementById('texto-tarefa').value;
  newTask.addEventListener('click', highlight);
  newTask.addEventListener('dblclick', lineThrough);

  taskList.appendChild(newTask);
  newTask.innerText = taskContent;
  document.getElementById('texto-tarefa').value = null;
}

document.getElementById('criar-tarefa').addEventListener('click', addTask);

// Requisito 7 e 8

function highlight() {
  let currentTasks = document.getElementsByClassName('highlighted');
  for (let i = 0; i < currentTasks.length; i += 1) {
    currentTasks[i].classList.remove('highlighted');
  }

  this.classList.add('highlighted');
}

// Requisito 9
function lineThrough() {
  this.classList.toggle('completed');
}

// Requisito 10
let clearBtn = document.getElementById('apaga-tudo');
function clearList() {
  let currentList = document.querySelectorAll('li');
  for (let i = 0; i < currentList.length; i++) {
     currentList[i].remove();
  
  }
}

clearBtn.addEventListener('click', clearList);

// Requisito 11

function removeCompleted() {
    let completedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < completedTasks.length; i++) {
        completedTasks[i].remove()
    }
}
document.getElementById('remover-finalizados').addEventListener('click', removeCompleted)

// Requisito 12

function saveList() {
    
}
document.getElementById('salvar-tarefas').addEventListener('click', saveList)