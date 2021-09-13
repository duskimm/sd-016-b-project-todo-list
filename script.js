let novaTarefa = document.querySelector('input');
let botao = document.getElementById('criar-tarefa');
let listaDeTarefas = document.getElementById('lista-tarefas');

botao.addEventListener('click', demostrar);

function demostrar (){
  let RecuperandoNovaTarefa = novaTarefa.value;

  // criando o Li da lista - Coloquei a casse tarefa - adicionei a nova tarefa
  CapturandoLI = document.createElement('li');
  CapturandoLI.classList.add('tarefa');
  CapturandoLI.innerText = RecuperandoNovaTarefa;

  // adicionei o Li criado com a tarefa e a classe
  listaDeTarefas.appendChild(CapturandoLI);

  // apaga o campo de digitação
  novaTarefa.value = '';
}