function adicionarTarefa () {
  let botaoAdicionarNovaTarefa = document.getElementById("criar-tarefa");
  let listaTarefas = document.getElementById("lista-tarefas");
  
  botaoAdicionarNovaTarefa.addEventListener("click", function(){
    let tarefa = document.getElementById ("texto-tarefa");
    let novaTarefa = document.createElement("li");
      listaTarefas.appendChild(novaTarefa);
      novaTarefa.innerText = tarefa.value;
      tarefa.value = "";   
    })
}

function colorirTarefa () {
  listaTarefas.addEventListener("click", function(event){
    let colori = event.target;
    if (target.tagName === "li"){
      target.style.backgroundcolor = "rgb(128, 128, 128)" 
    }
  })
}

function limparLista () {

}


adicionarTarefa();
colorirTarefa
limparLista ();