function header() {
  let body = document.querySelector('body')
  let header = document.createElement('header')
  header.innerText = 'Minha Lista de Tarefas'
  body.appendChild(header)
}
header() 

function paragrafo() {
  let header = document.querySelector('header')
  let p = document.createElement('p')
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
  p.id = 'funcionamento'
  header.appendChild(p)
}
paragrafo()

function input() {
  let body = document.querySelector('body')
  let input = document.createElement('input')
  input.id = 'texto-tarefa'
  body.appendChild(input)
}
input()

function listaDeTarefas() {
  let body = document.querySelector('body')
  let listaDeTarefas = document.createElement('ol')
  listaDeTarefas.id = 'lista-tarefas'
  body.appendChild(listaDeTarefas)
}
listaDeTarefas() 

function button() {
  let body = document.querySelector('body')
  let buttom = document.createElement('button')
  buttom.id = 'criar-tarefa'
  body.appendChild(buttom)
  
}
button()

document.getElementById('criar-tarefa').addEventListener("click", function() {
  let ol = document.getElementById('lista-tarefas')
  let input = document.getElementById("texto-tarefa").value;
  
  let li = document.createElement('li')
  li.innerText = input
  ol.appendChild(li)
  
 
  document.getElementById("texto-tarefa").value = '';
 
})
  

document.getElementById('lista-tarefas').addEventListener('click', function(event){   

  let listArray = document.querySelectorAll("li");

  if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
                              
    }
    for(let i = 0; i < listArray.length; i++){
        if(listArray[i] !== event.target){
            listArray[i].style.backgroundColor = 'white';
            
        }
    }
    
})   

let botaoRemoverTudo = document.getElementById("apaga-tudo");

    botaoRemoverTudo.addEventListener("click", function(){
      document.getElementById('lista-tarefas').innerHTML="";
    })