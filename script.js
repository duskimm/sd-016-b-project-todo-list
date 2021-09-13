var tasksList = document.getElementById('lista-tarefas');
var addButton = document.getElementById('criar-tarefa');
var inputt = document.getElementById('texto-tarefa');

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
addButton.addEventListener('click', function addTasksList(){
  var elementLi = document.createElement('li');
  let text = inputt.value;
  tasksList.appendChild(elementLi);
  elementLi.innerText = text;
  inputt.value = '';
}) 

tasksList.addEventListener('click', function(event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
})