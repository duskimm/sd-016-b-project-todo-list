function header() {
  let body = document.querySelector('body')
  let header = document.createElement('header')
  header.innerText = 'Minha Lista de Tarefas'
  body.appendChild(header)
}
header() 

function paragrafo() {
  let header = document.querySelector('header')
  let p = document.createElement('p')
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
  p.id = 'funcionamento'
  header.appendChild(p)
}
paragrafo()

function input() {
  let body = document.querySelector('body')
  let input = document.createElement('input')
  input.id = 'texto-tarefa'
  body.appendChild(input)
}
input()

function listaDeTarefas() {
  let body = document.querySelector('body')
  let listaDeTarefas = document.createElement('ol')
  listaDeTarefas.id = 'lista-tarefas'
  body.appendChild(listaDeTarefas)
}
listaDeTarefas() 

function button() {
  let body = document.querySelector('body')
  let buttom = document.createElement('button')
  buttom.id = 'criar-tarefa'
  body.appendChild(buttom)
  
}
button()

document.getElementById('criar-tarefa').addEventListener("click", function() {
  let ol = document.getElementById('lista-tarefas')
  let input = document.getElementById("texto-tarefa").value;
  
  let li = document.createElement('li')
  li.id = 'lista'
  li.innerText = input
  ol.appendChild(li)
  
 
  document.getElementById("texto-tarefa").value = '';
 
})
  
  
  //   for (let i = 0; i < xyz.children.length; i += 1) {
  //    xyz.children[i].addEventListener('click', function(event) {
      
  //     if (xyz.children[i].style.backgroundColor === 'gray'){
  //       xyz.children[i].style.backgroundColor = 'white'
  //     }
  //     else if (xyz.children[i].style.backgroundColor === ''){
  //     event.xyz.children[i].style.backgroundColor = 'gray'
  //     }
      
  //   //   event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  //   // }
  //   })
  // }

  


document.getElementById('lista-tarefas').addEventListener('click', function(event){   
  let listArray = document.querySelectorAll("li");

  if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      // eventX = event.target;
                        
    }
    else{ 
        
    }
    for(let index1 = 0; index1 < listArray.length; index1++){
        if(listArray[index1] !== event.target){
            listArray[index1].style.backgroundColor = 'white';
            
        }
    }
    
})   



// quando o <li> receber o click, a primeira coisa que ele tem que fazer é percorrer todas as <li> criadas verificando se alguma delas tem o backgrond cinza. Se tiver, pintar de branco. Se não, não faz nada.
// 2. dai depois, ele vai pegar o evento.alvo e pintar o bg.
// são só esses comandos, mas a ordem deles importa



