/* ao clicar nesse botão, um novo item deverá ser criado ao final da lista
 e o texto do input deve ser limpo

No campo de input será digitado o texto de uma tarefa qualquer e,
 em seguida, clicar-se-á no botão de criar tarefa. Será verificado que,
  após o clique, o texto digitado aparece na lista e desaparece do input.

A adição de elementos na lista será feita algumas vezes, e será checado
 se todos os itens criados permanecem na lista na medida em que novos 
 são adicionados. */
// variaveis e constantes globais utilizadas em funcoes
let toDoList = document.querySelector('#lista-tarefas');  // ol
let createNewItemList = document.getElementById('criar-tarefa'); //button

// funcao que insere o elemento il na ol atraves do input pelo usuario
function insertElementIL() {
  let newItem = document.getElementById('texto-tarefa').value; //valor do input
  const createItem = document.createElement('il'); // criando il filho 
  createItem.innerText = newItem;
  toDoList.appendChild(createItem);
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}
insertElementIL();
createNewItemList.addEventListener('click',insertElementIL);