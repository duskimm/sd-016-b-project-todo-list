// variaveis e constantes globais utilizadas em funcoes:
const toDoList = document.querySelector('#lista-tarefas'); // ol
const createNewItemList = document.getElementById('criar-tarefa'); // button
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
// NAO ESQUECER: nao esquecer de colocar fontes em cada parte da funcao e item pesquisado! colocar onde cada requisito foi executado
// A funcao abaixo risca o item da lista quando o item da lista é clicado duas vezes:
function checkItemList(erasy) {
  const itemcheck = erasy.target; // ao 'escutar' um duplo click...
  if (itemcheck.className === 'completed') { // remove class se ja estiver rabiscado
    itemcheck.removeAttribute('class');
  } else {
    itemcheck.classList.add('completed'); // coloca o atributo class completed
  }
}

// Adiciona o evento de double click nos elementos da lista:
function eventDoubleClickList() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    document.querySelectorAll('li')[i].addEventListener('dblclick', checkItemList);
  }
}

// funcao que muda a cor da li para cinza quando o evento click acontecer:
function ChangeBackGroundColor(newItem) {
  const itemColorGrey = newItem.target;
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].style.removeProperty('background-color');
  }
  itemColorGrey.style.backgroundColor = 'rgb(128, 128, 128)';
}

// funcao abaixo serve para ver quando a li for clicada e torna a cor cinza:
function eventClickList() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].addEventListener('click', ChangeBackGroundColor);
  }
}

// funcao que insere o elemento il na ol atraves do input pelo usuario:
function insertElementLI() {
  const newItem = document.getElementById('texto-tarefa').value; // valor do input
  const createItem = document.createElement('li'); // criando elemento li
  createItem.innerHTML = newItem; // coloca conteudo do input no elemento li
  toDoList.appendChild(createItem); // coloca a li dentro do ol como filho
  const input = document.getElementById('texto-tarefa'); // pega o input
  input.value = ''; // coloca valor vazio no input
  createItem.style.display = 'block'; // colocar as li em lista
  eventClickList(); // chama a funcao para ver o click da lista de li
  eventDoubleClickList(); // chama a funcao para ver dois clicks seguidos em um item da li
}
createNewItemList.addEventListener('click', insertElementLI); // se clicar no botao executa a funcao inserir elemento
// algoritmos:
function clearlist() {
// pega todas as li.  const listclear = document.getElementsByTagName('li')
// apaga todas as li filhos de ol.  for por todas as lis listclear[i].removechild(li) pesquisar
}

function removeFinished() {
//pega as lis com class completed. pegar itens com class .completed queryselectall e add array ...
//remover lis com class completed.   
}

document.getElementById('apaga-tudo').addEventListener('click', clearlist);
document.getElementById('remover-finalizados').addEventListener('click', removeFinished);