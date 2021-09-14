const btnTarefa = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');









// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado 
// ao final da lista e o texto do input deve ser limpo

function addTarefa() {
  let criaLi = document.createElement('li'); // CRIA A LI DENTRO DO #LISTA-TAREFAS
  listaDeTarefas.appendChild(criaLi); //FAZ O LI FICAR COMO FILHO DA OL
  criaLi.innerText = textoTarefa.value // o texto da LI recebe o valor do INPUT
  textoTarefa.value = ""; // reseta o valor do input
}
btnTarefa.addEventListener('click', addTarefa) // O EVENTO PRECISA SER NO BOTAO

//7 
// 
rgb(128,128,128)