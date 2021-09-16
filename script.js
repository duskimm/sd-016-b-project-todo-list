let tarefa = document.getElementById("texto-tarefa");
let botao = document.getElementById("criar-tarefa");
let salvando = [];
let contador = 0;

botao.onclick = function(){
let criarLista = tarefa.value;
let ordenada = document.getElementById("lista-tarefas");
let lista = document.createElement("li");
lista.setAttribute("id",contador);
lista.setAttribute("class","list");
contador+=1;
lista.innerText = criarLista;
salvando.push(criarLista)
ordenada.append(lista);
tarefa.value = ""; 
}
function selecionadora(){
  let adicionarClasse = document.getElementsByClassName("list")
  for(let i=0; i<salvando.length; i+=1){
    adicionarClasse[i].addEventListener("click",pintar);
  }
}
function pintar(event){
    let cinza = event.target.classList;
    cinza.toggle()
  }
  selecionadora()