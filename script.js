let novaTarefa = document.querySelector('input');
let botao = document.getElementById('criar-tarefa');
let listaDeTarefas = document.getElementById('lista-tarefas');
// let

botao.addEventListener('click', botaoNovaTarefa);

function botaoNovaTarefa (){
  let RecuperandoNovaTarefa = novaTarefa.value;

  // criando o Li da lista - Coloquei a casse tarefa - adicionei a nova tarefa
  CapturandoLI = document.createElement('li');
  CapturandoLI.classList.add('tarefa');
  CapturandoLI.innerText = RecuperandoNovaTarefa;

  // adiciona o evento de clique quando cria o botão
  CapturandoLI.addEventListener('click', selecionando);

  // adicionei o Li criado com a tarefa e a classe
  listaDeTarefas.appendChild(CapturandoLI);

  // apaga o campo de digitação
  novaTarefa.value = '';

  // seleciona o item criando a classe selecionado
  let tarefa = document.querySelector('.tarefa');
  
  function selecionando (event){
  let evento = event.target;
  evento.classList.add('selecionado');
  }
}

