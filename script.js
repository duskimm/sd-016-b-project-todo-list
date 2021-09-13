let lista = document.querySelector('#Lista-tarefas');
let item = document.getElementById('texto-tarefa');
let createButton = document.getElementById('criar-tarefa')
let items = document.getElementsByClassName('list-itens')
let clear = document.getElementById('apaga-tudo')
let getCompletedButton = document.getElementById('remover-finalizados')
function selectItem(event) {
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function createTask(){
  let Li_item = document.createElement('li')
  itemValue = item.value
  Li_item.innerText = itemValue
  Li_item.classList.add('list-itens')
  lista.appendChild(Li_item)
  item.value = '';
  Li_item.addEventListener('click',selectItem)
}

createButton.addEventListener('click', createTask)



// metodo toggle https://www.horadecodar.com.br/2020/10/08/detectar-se-um-elemento-contem-uma-classe-com-javascript/
function completedItem(event){
  event.target.classList.toggle('completed')
  }
lista.addEventListener('dblclick',completedItem)


function removeAll(){
    while (lista.firstChild) {
    lista.removeChild(lista.lastChild);
  }
}
clear.addEventListener('click',removeAll);

function removeCompleted(){
  let getCompleted = document.getElementsByClassName('completed')
 while (getCompleted.length > 0) {
   lista.removeChild(getCompleted[0])
 }
}
getCompletedButton.addEventListener('click', removeCompleted)