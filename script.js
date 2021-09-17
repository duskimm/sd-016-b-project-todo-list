window.onload = function() {
 
function listaTarefas(){
    let btnTarefa = document.getElementById('criar-tarefa')
    btnTarefa.addEventListener('click',function() {
        let input = document.getElementById('texto-tarefa')
        let listaTarefas = document.querySelector('.conteiner-tarefas #lista-tarefas')
        let criaTarefa = document.createElement('li')
        criaTarefa.innerHTML = input.value + '<br>'
        listaTarefas.appendChild(criaTarefa)
        input.value = ''
    
    })

    
}
    listaTarefas()
}