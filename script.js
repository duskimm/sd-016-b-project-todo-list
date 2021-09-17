let tarefaEscrita = document.querySelector('#texto-tarefa')
let listaTarefa = document.querySelector('#lista-tarefas')

function adicionaTarefa () {
    let criarTarefa = document.createElement('li')
    criarTarefa.addEventListener('click', colorGrey)

    criarTarefa.innerText = tarefaEscrita.value
    criarTarefa.classList = ('tarefa')
    listaTarefa.appendChild(criarTarefa)
    tarefaEscrita.value = ''    
}

let botaoAdicionar = document.querySelector('#criar-tarefa')
botaoAdicionar.addEventListener('click', adicionaTarefa) 

function colorGrey(event) {
    let tarefas = document.getElementsByClassName('tarefa')
    for (let index = 0; index < tarefas.length; index += 1) {
        if (tarefas[index].style.backgroundColor = 'rgb(128,128,128)') {
            tarefas[index].style.backgroundColor = 'white';
        }
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)'
    }

listaTarefa.addEventListener('dblclick', linhaCortada)

function linhaCortada(event) {
    if (event.target.classList.contains ('completed')){
        event.target.classList.remove ('completed')
    } else {
        event.target.classList.add ('completed')
    }
}

let buttonApagaTudo = document.getElementById('apaga-tudo')
buttonApagaTudo.addEventListener('click', apagaTudo)

function apagaTudo (){
    listaTarefa.innerHTML = '';
}

let tarefasCompletadas = document.getElementsByClassName('completed')
let buttonCompletados = document.getElementById('remover-finalizados')
buttonCompletados.addEventListener('click', tarefaCompletada)

function tarefaCompletada () {
    for (index = tarefasCompletadas.length - 1; index >= 0; index -= 1){
        listaTarefa.removeChild(tarefasCompletadas[index])
    }

}



