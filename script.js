let novaTarefa = document.querySelector('input');
let botao = document.getElementById('criar-tarefa');
let listaDeTarefas = document.getElementById('lista-tarefas');
// let

botao.addEventListener('click', botaoNovaTarefa);

function botaoNovaTarefa (){
  let RecuperandoNovaTarefa = novaTarefa.value;

  // criando o Li da lista - Coloquei a classe tarefa - adicionei a nova tarefa
  CapturandoLI = document.createElement('li');
  CapturandoLI.classList.add('tarefa');
  CapturandoLI.innerText = RecuperandoNovaTarefa;

  // adiciona o evento de selecionar e marcar como completo
  CapturandoLI.addEventListener('click', selecionando);
  CapturandoLI.addEventListener('dblclick', completo);

    if (0 < RecuperandoNovaTarefa.length){
  // adicionei o Li criado com a tarefa e a classe
  listaDeTarefas.appendChild(CapturandoLI);
    }

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
    // tirei a ideia da lista de classes do site:
    // https://qastack.com.br/programming/5898656/check-if-an-element-contains-a-class-in-javascript
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


// Limpar a lista
let selecionandoOl = document.querySelector('ol');
let apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', apagar);

function apagar (){
  selecionandoOl.innerHTML = "";
}

// Limpar tarefas marcadas
let removerFinalizados = document.getElementById('remover-finalizados');
removerFinalizados.addEventListener('click', apagarMarcados);

function apagarMarcados (){
  let marcados = document.getElementsByClassName('completed');
  let quantidadeMarcados = marcados.length;
  
  for (let i = 0; i < quantidadeMarcados; i += 1){
    marcados[0].remove();

    // Remove aprendido / baseado no site:
    // https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
  }
}