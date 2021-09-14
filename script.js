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
function colorirTarefa() {
 listaTarefas.addEventListener("click", function(event){
    let colori = event.target;
    let lista = document.querySelector(".tarefa-colorida");
    if (lista !== null){
     lista.classList.remove("tarefa-colorida");
    }
     colori.classList.add("tarefa-colorida"); 
  })
} 

// desafio 9
function riscarItem() {
  listaTarefas.addEventListener("dblclick", function(event) {
    let liRiscada = event.target;
    if (liRiscada.tagName === "LI"){ 
      liRiscada.classList.toggle("completed");
    }
  })  
}

function limparLista() {
  let botaoApagarTudo = document.getElementById("apaga-tudo");
  botaoApagarTudo.addEventListener=("click", function(){
  document.appendChild.remove(listaTarefas);
  })
}
 

adicionarTarefa();
colorirTarefa();
riscarItem ();
limparLista ();
