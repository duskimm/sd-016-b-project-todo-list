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
  let currentTasks = document.getElementsByTagName('li');
  for (let i = 0; i < currentTasks.length; i += 1) {
    if (currentTasks[i] === 'rgb(128, 128, 128)') {
      currentTasks[i].style.backgroundColor = 'white';
    }  
  }
  this.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log(this)
}

// Requisito 9
function lineThrough() {
  this.classList.add('.completed');
}

// Requisito 10
function clearList() {
  let currentList = document.querySelectorAll('li');
  for (let i in currentList) {
      currentList[i].remove()
  }
}
document.getElementById('apaga-tudo').addEventListener('click', clearList);

// Requisito 12

function saveList() {
    
}
document.getElementById('salvar-tarefas').addEventListener('click', saveList)