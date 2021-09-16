/* eslint-disable max-lines-per-function */
window.onload = function () {

  // Limpa o valor do input
  function cleanInput() {
    document.getElementById('texto-tarefa').value = '';
  }

  //Recupera o valor do input 
  function valueInput() {
    let recoveryValueInput = document.getElementById('texto-tarefa');
    let recoveryOl = document.getElementById('lista-tarefas');
    let listItem = document.createElement('li');
    listItem.className = 'tarefa';
    listItem.innerText = recoveryValueInput.value;
    listItem.addEventListener('click', itemSelected);
    listItem.addEventListener('dblclick',itemCompleted);
    recoveryOl.appendChild(listItem);
    cleanInput();
  }

  // Click no butão 
  function clickButton() { 
    const recoveryButton = document.getElementById('criar-tarefa');
    recoveryButton.addEventListener('click', valueInput);
  }

  // Acrescenta e retira  a classe selected das tarefas
  function itemSelected (event) {
    let tarefas = document.getElementsByClassName('tarefa');
    for(let index = 0; index < tarefas.length; index += 1){
      let tasks = tarefas[index];
      tasks.classList.remove('selected');
    }
    event.target.classList.add('selected');
 }

// Acrescenta e retira a classe completed as tarefas
 function itemCompleted (event) {
  let tarefas = event.target;
  if(tarefas.classList.contains('completed')){
    tarefas.classList.remove('completed');
  }else {
    event.target.classList.add('completed');
} 
}
// Retirar o line-trough

  
  clickButton();
}