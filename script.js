// EXercicio 5

let criaBotao = document.createElement('button');
criaBotao.type = 'button';
criaBotao.id = 'criar-tarefa';
criaBotao.innerHTML = 'Adiconar';
criaBotao.value = '#texto-tarefa';
document.body.appendChild(criaBotao);

let botaoAddTarefa = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');

// criando lista
botaoAddTarefa.addEventListener('click', function(){
    let criaItem = document.createElement('li');
    lista.appendChild(criaItem);
    criaItem.innerText = input.value;
    input.value = ''
});




