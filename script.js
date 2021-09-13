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
  elementList.classList.add('lista');
  listOrdenada.appendChild(elementList);
  elementList.innerText = text;
  inputT.value = '';
})

// 

let itemList = document.querySelector('#lista-tarefas');
itemList.addEventListener('click', function (event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})
