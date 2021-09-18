window.onload = function() {

function apagaTudo() {
    let List = document.getElementById('tarefas')
    if(List.parentNode){
        List.parentNode.removeChild(List)
    }
}    

function btnApagaTudo() {
    let btnApagaTudo = document.getElementById('apaga-tudo')
    btnApagaTudo.addEventListener('click',apagaTudo)
}

btnApagaTudo()


function adicionaTarefa() {
    let input = document.getElementById('texto-tarefa')
    let listaTarefas = document.getElementById('lista-tarefas')
    let criaTarefa = document.createElement('li')
    criaTarefa.innerHTML = input.value + '<br>'
    criaTarefa.className = "colorTarefa"
    criaTarefa.addEventListener('dblclick', function(event){
        if(event.target.classList.contains('completed')){
            event.target.classList.remove('completed')
         }else{
            event.target.classList.add('completed') 
         }
    })
    criaTarefa.addEventListener('click',function(event) {
        let itensList = document.getElementsByClassName('colorTarefa')
        let selectedClass = document.getElementsByClassName('selected')
        if(selectedClass.length == 0){
           event.target.classList.add('selected')
        }else{
           for(let i = 0; i < itensList.length; i++ ) {
             itensList[i].classList.remove('selected')
           } 
              event.target.classList.add('selected') 
        }
    })
    listaTarefas.appendChild(criaTarefa)
    input.value = ''
}

function listaTarefas(){    
    let btnTarefa = document.getElementById('criar-tarefa')
    btnTarefa.addEventListener('click',adicionaTarefa)  
}
    listaTarefas()
}