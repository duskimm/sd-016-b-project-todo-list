// 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
const bodyElement = document.body;
function inputed() {
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

createButton.addEventListener('click', function () {
  if (inputTag.value.length > 0) {
    const newLiItem = document.createElement('li');

    newLiItem.innerText = inputTag.value;
    newLiItem.className = 'percorre-lista';
    createListOl.appendChild(newLiItem);
    inputTag.value = '';
  }
});

// 7 e 8 Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// pega as lis da lista ordenada.// Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo 
function adicionaCor() {
  const localizaOl = document.querySelectorAll('ol');
  for (let index = 0; index < localizaOl.length; index += 1) {
    localizaOl[index].addEventListener('click', function (event) {
      // o click passa primeiro por essa função que verifica se a classe existe e remove, removendo também a cor (de primeira não entra nessa condição, então entra no event.target que adiciona a cor e a classe. No segundo click em outro item da lista ele passa na condição do if, apagando a classe e removendo a cor que tinha sido adc no item anteriormente colorido. E assim continua.)
      tiraCoreClasse();
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      event.target.classList.add('selected');
    })
  }
}
adicionaCor();

function tiraCoreClasse() {
  const classList = document.querySelectorAll('.percorre-lista');
  for (let index = 0; index < classList.length; index += 1) {
    //contains verifica se contem a className do parametro que foi passado
    if (classList[index].classList.contains('selected')) {
      classList[index].classList.remove('selected')
      classList[index].style.backgroundColor = '';
    }
  }
}
// 9- Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
// Pontos importantes sobre este requisito:
// * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".
// * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
  function riscaEtiraORisco(){
const encontraOl = document.querySelectorAll('ol');
  for (let index = 0; index < encontraOl.length; index += 1) {
  encontraOl[index].addEventListener('dblclick', function(event){
    //contains verifica se contem a className do parametro que foi passado. Nesse caso se tiver a classe completed, ela é removida//essa classe contem no css a costumização de riscar.
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed')
    } else {
    event.target.classList.add('completed');
}});
}
}
riscaEtiraORisco ();

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
// O que será verificado:
// Será verificado que existe um elemento button com o id apaga-tudo
// Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia
const createButtonDelete = document.createElement('button');
createButtonDelete.id = 'apaga-tudo';
// deixando o botão legivel
createButtonDelete.innerText = 'Apaga tudo';
bodyElement.appendChild(createButtonDelete);

function apagaLista(){
const elementsLi = document.querySelectorAll('li');
for (let index = 0; index < elementsLi.length; index +=1){
elementsLi[index].remove();
}
}
const localizaButton = document.querySelector('#apaga-tudo');
localizaButton.addEventListener('click', apagaLista);

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
const localizaNewButton = document.getElementById('remover-finalizados');
function apagaFinalizados(){
 const elementoFinalizado = document.querySelectorAll('.completed');
 for(index=0; index < elementoFinalizado.length; index +=1){
   elementoFinalizado[index].remove();
}
}
localizaNewButton.addEventListener('click', apagaFinalizados);
