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
button01.id = 'criar-tarefa';
button01.innerText = 'Criar Tarefa';
document.body.append(button01);

function addList() {
  let txtVal = document.getElementById('texto-tarefa').value;
  let listNode = document.getElementById('lista-tarefas');
  
  if(txtVal.length > 0) {

    let liNode = document.createElement('li');
    // liNode.classList.add('selected');
    // liNode.classList.add('completed');

    let txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    this.onclick = document.getElementById('texto-tarefa').value = ''; // APAGANDO

  } else {

    alert('Digite algo no campo vazio.');
  }
}
button01.addEventListener('click', addList)


// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

// Obrigado Ellen

let clickSelecting = document.getElementById('lista-tarefas')

function selectingItem(event) {
  let lista = document.getElementsByClassName('selected')
  
  for( let index = 0; index < lista.length; index += 1){
    lista[index].style.backgroundColor = "transparent"
    lista[index].classList.remove('selected');
  
  }
  event.target.classList.add('selected')
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

clickSelecting.addEventListener('click', selectingItem);


// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
//Pontos importantes sobre este requisito:
// * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".
// * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

// let clickLine = document.getElementById('lista-tarefas')

function markLine() {
  let lista2 = document.querySelectorAll('ol');
  
  for(let index = 0; index < lista2.length; index += 1){

    lista2[index].addEventListener('dblclick', (event) => {
      if(event.target.classList.contains('completed')) {
        event.target.style.textDecoration = 'none';
        event.target.classList.remove('completed')
      } else {
        event.target.style.textDecoration = 'line-through';
        event.target.classList.add('completed');
      }
    });
  }
}
markLine()


// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

const buttonErase = document.createElement('button');
buttonErase.id = 'apaga-tudo';
buttonErase.innerText = 'Apagar';
document.body.append(buttonErase);

function EraseAll() {
  let erase = document.getElementsByTagName('ol')
  for(let index = 0; index < erase.length; index += 1) {
    erase[index].addEventListener('click', () => {
      erase[index].remove.appendChild('li')
    })
  }
  
}















// function selectingItem() {
//   let lista = document.querySelectorAll('ol');
  
//   for(let index = 0; index < lista.length; index += 1){

//     lista[index].addEventListener('click', (event) => {
//       if(event.target.classList.contains('selected')) {
//         event.target.style.backgroundColor = 'transparent';
//         event.target.classList.remove('selected')
//       } else {
//         event.target.classList.add('selected')
//         event.target.style.backgroundColor = 'rgb(128,128,128)';
//       }
//     });
//   }
// }
// selectingItem()


// tracando e trocando posições

// let clickLine = document.getElementById('lista-tarefas')

// function markLine(event) {
//   let lista2 = document.getElementsByClassName('selected')
  
//   for( let index = 0; index < lista2.length; index += 1){
//     lista2[index].style.textDecoration = 'none';
//     lista2[index].classList.remove('completed')
//   }
//   event.target.style.textDecoration = 'line-through';
//   event.target.classList.add('completed')
// }

// clickSelecting.addEventListener('dblclick', markLine );