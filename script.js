// 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
const bodyElement = document.body;
function inputed(){
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  bodyElement.appendChild(createInput);
}
inputed();

// 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
const createListOl = document.createElement('ol');
function list() {
  createListOl.id = 'lista-tarefas';
  bodyElement.appendChild(createListOl);
}
list();
// 5 e 6 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo e ordene os itens da lista de tarefas por ordem de criação

const createButton = document.createElement('button');
createButton.id = 'criar-tarefa';
// deixando o botão legivel
createButton.innerText = 'criar tarefas';
bodyElement.appendChild(createButton);
const inputTag = document.querySelector('#texto-tarefa');
  
createButton.addEventListener('click', function(){
  if (inputTag.value.length > 0){
    const newLiItem = document.createElement('li');
    
    newLiItem.innerText = inputTag.value;
    createListOl.appendChild(newLiItem);
    inputTag.value = '';
  }
});

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// pega as lis da lista ordenada 
createListOl.addEventListener('click', function(){
  for (let index = 0; index < createListOl.children.length; index += 1){
    createListOl.children[index].style.backgroundColor = 'rgb(128, 128, 128)';
  }
});
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
createListOl.addEventListener('click', function(){
  for (let index = 0; index < createListOl.children.length; index += 1){
    createListOl.children[index].style.backgroundColor = 'rgb(128, 128, 128)';
  
  }
  
});
createListOl.addEventListener('click', function(){
  for (let index = 0; index < createListOl.children.length; index += 1){
    createListOl.children[index].style.backgroundColor = 'white';
  
  }
  

