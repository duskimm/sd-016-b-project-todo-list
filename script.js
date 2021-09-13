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

  // adiciona o evento de selecionar e marcar como completo
  CapturandoLI.addEventListener('click', selecionando);
  CapturandoLI.addEventListener('dblclick', completo);

  // adicionei o Li criado com a tarefa e a classe
  listaDeTarefas.appendChild(CapturandoLI);

  // apaga o campo de digitação
  novaTarefa.value = '';

  // seleciona o item criando a classe selecionado
  let tarefa = document.querySelector('.tarefa');
  
  function selecionando (event){
    // remove a seleção dos outros itens 
    let todasTarefas = document.getElementsByClassName('tarefa');

    for (let i = 0; i < todasTarefas.length; i += 1){
      todasTarefas[i].classList.remove('selecionado');
    }

    // seleciona
    let evento = event.target;
    evento.classList.add('selecionado');
  }

  // marcar como completo
  function completo (event){
    let evento2 = event.target;

    // varifica todas as classes que tem na tarefa clicada
    let vericaClasse = evento2.classList;
    let classe1 = vericaClasse[0];
    let classe2 = vericaClasse[1];
    let classe3 = vericaClasse[2];
    let classe4 = vericaClasse[3];

      // removendo a classe
      if (classe1 == 'completed' || classe2 == 'completed' || classe3 == 'completed' || classe4 == 'completed') {
      evento2.classList.remove('completed');
      } else {
      // adicionando a classe
      evento2.classList.add('completed');
      }
  }
  
}

