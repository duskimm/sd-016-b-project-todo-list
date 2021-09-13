function criarNovaTarefa() {
    const criarTarefa = document.getElementById('criar-tarefa');
    criarTarefa.addEventListener('click', function() {
        const textoTarefa = document.getElementById('texto-tarefa');
        const itemDaLista = document.createElement('li');
        const listaTarefas = document.getElementById('lista-tarefas');
        itemDaLista.innerHTML = textoTarefa.value; 
        textoTarefa.value = '';
        listaTarefas.appendChild(itemDaLista);
    });
}
criarNovaTarefa();