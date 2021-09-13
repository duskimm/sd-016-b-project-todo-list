const btnTarefa = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');









// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado 
// ao final da lista e o texto do input deve ser limpo

function addTarefa(){
    let ondeTextoFica = document.createElement('ol');
    let incluirTexto = document.addEventListener('click',textoTarefa.value);
    ondeTextoFica.appendChild(incluirTexto)
    
}