// Requisito 5 e 6
function addTask() {
  let taskList = document.getElementById('lista-tarefas');
  let newTask = document.createElement('li');
  let taskContent = document.getElementById('texto-tarefa').value;

  taskList.appendChild(newTask);
  newTask.innerText = taskContent;
  document.getElementById('texto-tarefa').value = null;
}

document.getElementById('criar-tarefa').addEventListener('click', addTask);

// Requisito 7 e 8

// 
function clearList(){
  let currentList = document.querySelectorAll('li')
  for (let i in currentList) {
      currentList[i].remove()
  }
}
document.getElementById('apaga-tudo').addEventListener('click', clearList);