var tasksList = document.getElementById('lista-tarefas');
var addButton = document.getElementById('criar-tarefa');
var removeButton = document.getElementById('apaga-tudo')
var inputt = document.getElementById('texto-tarefa');
var tasks = document.getElementsByClassName('tasks');
var li = document.getElementsByTagName('li')

addButton.addEventListener('click', function addTasksList(){
  var elementLi = document.createElement('li');
  let text = inputt.value;
  elementLi.className = 'tasks';
  tasksList.appendChild(elementLi);
  elementLi.innerText = text;
  inputt.value = '';
}) 

tasksList.addEventListener('click', function(event){
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})

tasksList.addEventListener('dblclick', function(event){
  event.target.classList.add('completed');
})

removeButton.addEventListener('click', function(){
  for (let i = 0; i < tasks.length; i = 0) {
    tasksList.removeChild(tasks[i]) 
  }
})

