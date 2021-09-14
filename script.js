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
// function listaBackground(event){
//     if(event.target.classList.contains('item-lista')) {
//         let li = event.target;
//         li.classList.add('cinza');
//         li.style.backgroundColor = 'rgb(128, 128, 128)';
//     } 
// }
// document.addEventListener('click', listaBackground);


// Exercicio 8: seleciona só um
    
function selecionaItem(event) {
    let classCinza = document.querySelector('cinza');
    
    // let fundo = window.getComputedStyle(classCinza, null).getPropertyValue('background-color');
    
    if(classCinza === null) {
        event.target.classList.add('cinza');
        // event.target.style.backgroundColor = 'red';
        
    } else {
        classCinza.classList.remove('cinza');
        
        event.target.classList.add('cinza');
        // event.target.style.backgroundColor = 'red';
    }

}
lista.addEventListener('click', selecionaItem);


// Exercicio 9: risca tarefa com dois clicks

let riscado = document.getElementsByClassName('completed');
// let estilo = window.getComputedStyle(riscado, null).getPropertyValue('text-decoration');

function clicks(event) {
    if(event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}
lista.addEventListener('dblclick', clicks);