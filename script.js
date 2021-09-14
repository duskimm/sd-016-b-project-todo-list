const mainElement = document.querySelector('main');
const listOrdenada = document.createElement('ol');
const inputT = document.querySelector('#texto-tarefa');
listOrdenada.id = 'lista-tarefas';
mainElement.appendChild(listOrdenada);

// Requisito 5 funcionalidade do botão

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', function (){
  let text = inputT.value;
  let elementList = document.createElement('li');
  listOrdenada.appendChild(elementList);
  elementList.innerText = text;
  inputT.value = '';
})

let listaOrdenado = document.querySelector('#lista-tarefas');
listaOrdenado.addEventListener('click', function (event){
  let itemList = document.querySelectorAll('li')
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].style.backgroundColor = '';
    itemList[i].classList.remove('selected')
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
})



