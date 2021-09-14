// variaveis e constantes globais utilizadas em funcoes
const toDoList = document.querySelector('#lista-tarefas'); // ol
let createNewItemList = document.getElementById('criar-tarefa'); // button

// funcao que insere o elemento il na ol atraves do input pelo usuario
function insertElementIL() {
  const newItem = document.getElementById('texto-tarefa').value; // valor do input
  const createItem = document.createElement('li'); // criando elemento li
  createItem.innerHTML = newItem; // coloca conteudo do input no elemento li
  toDoList.appendChild(createItem); // coloca a li dentro do ol como filho
  const input = document.getElementById('texto-tarefa'); // pega o input
  input.value = ''; // coloca valor vazio no input
  createItem.style.display = 'block'; // colocar as li em lista
  eventClickList(); // chama a funcao para ver o click da lista de li
}

createNewItemList.addEventListener('click', insertElementIL); // se clicar no botao executa a funcao inserir elemento
/* este esta dando erro e eu nao entendo o porq... tive q separar em 2 funcoes
function eventClickList(newItem) {
    for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
        const itemGrey = newItem.target;
      document.getElementsByTagName('li')[i].addEventListener('click', (event) => {
        for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
          document.getElementsByTagName('li')[i].style.removeProperty('background-color');
        }
        itemGrey.style.backgroundColor = 'grey';
    });
    }
}
eventClickList();
*/
// funcao que muda a cor da li para cinza quando for clicada 
function ChangeBackGroundColor(newItem) {
    const itemGrey = newItem.target;
    for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
      document.getElementsByTagName('li')[i].style.removeProperty('background-color');
    }
    itemGrey.style.backgroundColor = 'grey';
}
  
// funcao abaixo serve para ver quando a li for clicada e torna a cor cinza 
function eventClickList() {
    for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
      document.getElementsByTagName('li')[i].addEventListener('click', ChangeBackGroundColor) 
    }
}

