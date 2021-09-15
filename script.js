const btnTarefa = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');









// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado 
// ao final da lista e o texto do input deve ser limpo

function addTarefa() {
    let criaLi = document.createElement('li'); // CRIA A LI DENTRO DO #LISTA-TAREFAS
    listaDeTarefas.appendChild(criaLi); //FAZ O LI FICAR COMO FILHO DA OL
    criaLi.className = 'listagem';
    criaLi.innerText = textoTarefa.value // o texto da LI recebe o valor do INPUT
    textoTarefa.value = ""; // reseta o valor do input
    
}
btnTarefa.addEventListener('click', addTarefa) // O EVENTO PRECISA SER NO BOTAO

//7 e 8
// alterar a cor de fundo para cinza ao click na lista de item rgb(128,128,128)

function alteraCorfundo(event) {
    let classeListagem = document.querySelectorAll('.listagem'); // resgata a LI que recebe a classe listagem
    for (let index = 0; index < classeListagem.length; index+= 1) {
        classeListagem[index].style.background = 'white';
    }
    event.target.style.background = 'gray';
}
listaDeTarefas.addEventListener('click',alteraCorfundo);

// 9 Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. 
// Deve ser possível desfazer essa ação clicando novamente duas vezes no item

function taskCompleted (event){
    if (event.target.className === 'completed listagem') { // COMPARAÇÃO
        event.target.className = 'listagem' // ATRIBUIÇÃO
    } else {
        event.target.className = 'completed listagem'
    }
}
listaDeTarefas.addEventListener('dblclick',taskCompleted)

