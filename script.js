//  Adiciona tarefa e limpa input (requisitos 5 e 6)  //
const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function adicionar(){
  if(input.value !== ''){
  let lista = document.createElement('li');
  lista.innerText = input.value
  list.appendChild(lista);
  input.value = ''
  }
};

buttonAdd.addEventListener('click', adicionar)