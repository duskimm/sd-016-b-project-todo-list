// EXercicio 5
// cria botao
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
    criaItem.className = 'item-lista'
    lista.appendChild(criaItem);
    criaItem.innerText = input.value;
    input.value = ''
});

// Exercico 7: mudar background quando clica
function listaBackground(event){
    if(event.target.classList.contains('item-lista')) {
        let li = event.target;
        li.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}
document.addEventListener('click', listaBackground);




