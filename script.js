firsTime = true;

//adiciona uma nova tarefa e limpa campo de input
function tarefaCreator () {
  let entrada = document.querySelector('#texto-tarefa').value;
  if(entrada == ""){
    alert("Adicione um texto para o item");
  }else{
    let list = document.createElement("li");
    let listIl = document.querySelector('#lista-tarefas');
    listIl.appendChild(list);
    listIl.lastChild.addEventListener('click', selectItem);
    list.innerText = entrada;
    document.querySelector('#texto-tarefa').value = "";
  }
}

function selectItem(event) {
  if(firsTime == false){
    document.querySelector('.selected').classList.remove('selected');
  }
  firsTime = false
  event.target.classList.add('selected');
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