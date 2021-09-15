function adicionaTarefa () {
    let tarefaEscrita = document.querySelector('#texto-tarefa')
    let listaTarefa = document.querySelector('#lista-tarefas')
    let criarTarefa = document.createElement('li')

    criarTarefa.innerText = tarefaEscrita.value
    listaTarefa.appendChild(criarTarefa)
    tarefaEscrita.value = ''    
}

let botaoAdicionar = document.querySelector('#criar-tarefa')
botaoAdicionar.onclick = adicionaTarefa