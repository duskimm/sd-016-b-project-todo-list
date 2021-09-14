//criar botao com nome Adiciona tarefa

function criaBotao(){
    let container = document.getElementById('container')
    let botaoAdicionar = document.createElement('button');
    botaoAdicionar.innerText = 'Adicionar';
    botaoAdicionar.id = "criar-tarefa";
    container.appendChild(botaoAdicionar)
}
criaBotao();

//realizar o input de uma tarefa e ao clicar no botao a tarefa é adicionada na lista, e some do input

let botaoAdicionar = document.getElementById('criar-tarefa');

botaoAdicionar.addEventListener("click", adicionaTarefa)

function adicionaTarefa (){
    let tarefa = document.getElementById('texto-tarefa');
    let valorDoTexto = tarefa.value;
    let lista = document.getElementById('lista-tarefas');
    let linha = document.createElement('li');
    linha.className = "linha-de-tarefas"
    linha.innerText = valorDoTexto
    lista.appendChild(linha)

    let valorNulo = ''

    function limpaInput (){
        tarefa.value = valorNulo
    }
    limpaInput();
}

//quando uma tarefa for clickada receberá a com cinza

 let tarefas = document.querySelector("#lista-tarefas")

 tarefas.addEventListener("click", selecionaTarefa)

 function selecionaTarefa (event){
     let linhas = document.querySelectorAll(".linha-de-tarefas")
     for (let i=0; i < linhas.length; i+=1){
         linhas[i].classList.remove('selecionada')
     }
     event.target.classList.add("selecionada");
 }

//  let tarefas = document.querySelectorAll(".linha-de-tarefas")
//  for (let i=0; i<tarefas.length; i+=1){
//      tarefas[i].addEventListener("click", selecionaTarefa)
//  }

//  function selecionaTarefa (event){
//      for (let i=0; i<tarefas.length; i+=1){
//          tarefas[i].classList.remove('selecionada');
//          tarefas[i].classList.add('selecionada')
//      }
//  }
