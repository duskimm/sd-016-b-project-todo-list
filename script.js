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
        li.classList.add('cinza');
        li.style.backgroundColor = 'rgb(128, 128, 128)';
    } 
}
document.addEventListener('click', listaBackground);


// Exercicio 8: seleciona só um
    
// let classeCinza = document.querySelector('.cinza');

// function marcaItem(event) {
//     if(classeCinza == null) {
//         event.target.classList.add('cinza');
//     } else {
//         classeCinza.classList.remove('cinza');
//         event.target.classList.add('cinza');
//     }
// }
// lista.addEventListener('click', marcaItem);

// Exercicio 9: risca tarefa com dois clicks
function clicks(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}
lista.addEventListener('dblclick', clicks);


// Exercicio 10: botão apaga todos os itens da lista
const botaoApagar = document.createElement('button');
botaoApagar.id = 'apaga-tudo';
botaoApagar.innerText = 'Apagar';
document.body.appendChild(botaoApagar);
const botaoApagaTudo = document.getElementById('apaga-tudo');

function apagarElementos() {
    const list = document.getElementById('lista-tarefas');
    list.innerHTML = '';
}
botaoApagaTudo.addEventListener('click', apagarElementos);


// Exercicio 11: botão apaga itens riscados
const botaoApagaFinalizados = document.createElement('button');
botaoApagaFinalizados.id = 'remover-finalizados';
botaoApagaFinalizados.innerText = 'Apagar itens finalizados';
document.body.appendChild(botaoApagaFinalizados);
const apagarFinalizados = document.getElementById('remover-finalizados');

function apagarItensFinalizados() {
    const itensLista = document.querySelectorAll('li');
    for (let index = 0; index < itensLista.length; index += 1) {
        if (itensLista[index].classList.contains('completed')) {
            itensLista[index].remove();
        }
    }
}
apagarFinalizados.addEventListener('click', apagarItensFinalizados);
