function adicionarTarefa () {
  let botaoAdicionarNovaTarefa = document.getElementById("criar-tarefa");
  let listaTarefas = document.getElementById("lista-tarefas");
  let novaTarefa = document.createElement("li");
  let tarefa = document.getElementById ("texto-tarefa").value;
    botaoAdicionarNovaTarefa.addEventListener("click", function(){
      listaTarefas.appendChild(novaTarefa);
      novaTarefa.innerText = tarefa;
      document.getElementById ("texto-tarefa").value = null;
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