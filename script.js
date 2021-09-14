/* eslint-disable max-lines-per-function */
window.onload = function () {

  function cleanInput() {
    document.getElementById('texto-tarefa').value = '';
  }

  function valueInput() {
    let recoveryValueInput = document.getElementById('texto-tarefa').value;
    let recoveryOl = document.getElementById('lista-tarefas');
    let listItem = document.createElement('li');
    let text = document.createTextNode(recoveryValueInput);
    listItem.appendChild(text);
    recoveryOl.appendChild(listItem);
    cleanInput();
  }

  function clickButton() { 
    const recoveryButton = document.getElementById('criar-tarefa');
    recoveryButton.addEventListener('click', valueInput);
  }
  
  clickButton();

}