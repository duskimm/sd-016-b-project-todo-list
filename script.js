// desafio 5
let listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa() {
  let botaoAdicionarNovaTarefa = document.getElementById("criar-tarefa");
  botaoAdicionarNovaTarefa.addEventListener("click", function(){
    let tarefa = document.getElementById ("texto-tarefa");
    let novaTarefa = document.createElement("li");
      listaTarefas.appendChild(novaTarefa);
      novaTarefa.innerText = tarefa.value;
      tarefa.value = "";   
    })
}

// desafio 7
function colorirTarefa () {
  listaTarefas.addEventListener("click", function(event){
    let colori = event.target;
    if (colori.tagName === "LI"){
      colori.style.backgroundColor="rgb(128, 128, 128)" 
    }
  })
}

// desafio 9
function riscarItem () {
  listaTarefas.addEventListener("dblclick", function(event) {
    let liRiscada = document.querySelectorAll("li");
    if (event.terget.tagname === "LI"){ 
      event.target.classList.toggle("completed");
    }
  })  
}

function limparLista () {
}

adicionarTarefa();
colorirTarefa();
riscarItem ();
limparLista ();