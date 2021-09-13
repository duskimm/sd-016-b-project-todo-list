//adiciona uma nova tarefa
function tarefaCreator () {
  let entrada = document.querySelector('#texto-tarefa').value;
  azul = entrada;
  if(azul == ""){
    alert("Adicione um texto para o item");
  }else{
    let list = document.createElement("li");
    document.querySelector('#lista-tarefas').appendChild(list);
    list.innerText = azul;
  }
}

//apaga toda lista
function clearAll() {
  let elemento = document.getElementById("lista-tarefas");
  while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
  }
  console.log('apaguei')
}

//remove o item marcado
function removeThis() {
  console.log('removi')
}

window.onload = function() {
  //cria os botoes especificos
  function CreatAllButton () {
    //botao para adicionar item
    let buttonAdd = document.querySelector('#criar-tarefa');
    buttonAdd.addEventListener('click', tarefaCreator);
    //cria o botao para limpar o board
    let buttonClean = document.querySelector('#apaga-tudo');
    buttonClean.addEventListener('click', clearAll);
    //cria botao para remover item marcado
    let buttonRemove = document.querySelector('#remover-finalizados');
    buttonRemove.addEventListener('click', removeThis);
  }
CreatAllButton();
}