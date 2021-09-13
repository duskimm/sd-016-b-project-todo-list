const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');
const getOrderlist = document.getElementById('lista-tarefas');
const getItemList = document.getElementsByClassName('itemList');
const getDeleteButton = document.getElementById('apaga-tudo');
const getCompletedButton = document.getElementById('remover-finalizados');
// Adicinar valores a lista 
getButton.addEventListener('click', function () {
  const criali = document.createElement('li');
  criali.innerHTML = getInput.value;
  criali.className = 'itemList';
  getOrderlist.appendChild(criali);
  getInput.value = '';
});

getOrderlist.addEventListener('click', function(event) {
  for (let i = 0; i < getItemList.length; i += 1) {
    getItemList[i].style.backgroundColor = 'white';
  };
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

getOrderlist.addEventListener('dblclick', function(event) {
  // evento.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
  event.target.classList.toggle('completed'); // toggle usado para add e remover a classe retirado do site https://www.w3schools.com/howto/howto_js_toggle_class.asp
});
// Botão apagar tudo
function deleteList(n) {
  for (let i = 0; i < n; i += 1) {
    getOrderlist.removeChild(getOrderlist.firstElementChild);
  }
};
getDeleteButton.addEventListener('click', function (){
deleteList(getItemList.length);
});
// apagar selecionados
getCompletedButton.addEventListener('click', function (){
  const getComplete = document.getElementsByClassName('completed');
  function retirar () {
    for (let i = getComplete.length -1; i >= 0; i -= 1){ // Retirado a ideia de fazer um loop inverso do site https://stackoverflow.com/questions/40114681/remove-all-elements-in-the-html-collection
      getComplete[i].remove();
    }
  }
retirar();
});
