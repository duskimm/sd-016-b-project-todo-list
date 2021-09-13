// variaveis e constantes globais utilizadas em funcoes
let toDoList = document.querySelector('#lista-tarefas');  // ol
let createNewItemList = document.getElementById('criar-tarefa'); //button

// funcao que insere o elemento il na ol atraves do input pelo usuario
function insertElementIL() {
  let newItem = document.getElementById('texto-tarefa').value; //valor do input
  const createItem = document.createElement('li'); // criando elemento il 
  createItem.innerHTML = newItem;  // coloca conteudo do input no elemento il
  toDoList.appendChild(createItem); // coloca a il dentro do ol como filho
  const input = document.getElementById('texto-tarefa'); // pega o input
  input.value = '';  // coloca valor vazio no input
  createItem.style.display = 'block';   // colocar as il em lista 
}

createNewItemList.addEventListener('click',insertElementIL); // se clicar no botao executa a funcao inserir elemento

