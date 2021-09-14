// META PESSOAL:
// CRIAR TODO HTML NO JS
// TALVEZ MANIPULAR O CSS PELO JS TBM (O menino está ousado!!! kkkkkkk)


// 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag

const header = document.createElement('header');
document.body.append(header);

const headH1 = document.createElement('h1');
headH1.id = 'title';
headH1.append('Minha Lista de Tarefas');
header.append(headH1);


// 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

const headPara = document.createElement('p')
headPara.id = 'funcionamento';
headPara.append('Clique duas vezes em um item para marcá-lo como completo');
header.append(headPara);


// // 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

const input01 = document.createElement('input');
input01.type = 'text';
input01.id = 'texto-tarefa';
document.body.append(input01);


//  4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

const ordList = document.createElement('ol');
ordList.id = 'lista-tarefas';
document.body.append(ordList);


// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// 6 - Ordene os itens da lista de tarefas por ordem de criação

const button01 = document.createElement('button');
button01.setAttribute('onclick', 'addLi()');
button01.id = 'criar-tarefa';
button01.innerText = 'Cria Tarefa';
document.body.append(button01);

function addLi() {

  let txtVal = document.getElementById('texto-tarefa').value;

  if( txtVal.length > 0) {

    let listNode = document.getElementById('lista-tarefas');
    let liNode = document.createElement('li');
    let itemList = document.createElement('a');
    let txtNode = document.createTextNode(txtVal);
  
    itemList.appendChild(txtNode);
    listNode.appendChild(liNode);
    liNode.append(itemList);
    
    this.onclick = document.getElementById('texto-tarefa').value = ''; // APAGANDO
  }
}


// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

// course 5.3 part 2

const firstLi = document.getElementById('lista-tarefas');

function selectingItem(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

firstLi.addEventListener('click', selectingItem);




// function unselectingItem(event) {

//   event.target.style = 'none';
// }
// firstLi.addEventListener('click', unselectingItem);

