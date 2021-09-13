const divBody = document.querySelector('body');
const creatHeader = document.createElement('header');
const creatTitle = document.createElement('h1');
creatTitle.innerHTML = 'Minha Lista de Tarefas'
divBody.appendChild(creatHeader)
creatHeader.appendChild(creatTitle)
const listaTarefas = JSON.parse(localStorage.getItem('list_tarefas'))

function paragraph(params) {
    const creatParagraph = document.createElement('p')
    const creatSection = document.createElement('section')
    divBody.appendChild(creatSection)
    creatSection.appendChild(creatParagraph)
    creatParagraph.innerHTML = params
    creatParagraph.id = 'funcionamento'
}
paragraph('Clique duas vezes em um item para marcá-lo como completo')
const creatSectionButtons = document.createElement('section')
divBody.appendChild(creatSectionButtons)

function inputList() {
    const creatDivInput = document.createElement('div')
    const creatInput = document.createElement('input')
    creatInput.id = 'texto-tarefa'
    divBody.appendChild(creatDivInput)
    creatDivInput.appendChild(creatInput)
}
inputList()

function List() {
    const creatTodoList = document.createElement('ol')
    const creatMain = document.createElement('main')
    creatTodoList.id = 'lista-tarefas'
    divBody.appendChild(creatMain)
    creatMain.appendChild(creatTodoList)

}
List()

function buttons(id, nome) {
    const creatButtons = document.createElement('button')
    creatSectionButtons.id = "buttons"
    creatButtons.id = id
    creatButtons.innerHTML = nome
    creatSectionButtons.appendChild(creatButtons)

}
buttons('criar-tarefa', 'add')

function creatItemList() {
    const catchimput = document.querySelector('#texto-tarefa')
    const catchList = document.querySelector('#lista-tarefas')
    const catchButton = document.querySelector('#criar-tarefa')
    catchButton.addEventListener('click', () => {
        let creatLi = document.createElement('li')
        creatLi.classList.add('item')
        catchList.appendChild(creatLi)
        let imputValue = catchimput.value
        creatLi.innerHTML = imputValue
        catchimput.value = ''
        listaTarefas.push(imputValue)
    })
    saveList()
}
creatItemList()

function selectLi() {
    const catchOl = document.querySelector('#lista-tarefas')
    catchOl.addEventListener('click', (event) => {
        removeSelect()
        event.target.classList.add('selected')

    })
}
selectLi()

function removeSelect() {
    const catchLi = document.querySelectorAll('.item')
    for (let index = 0; index < catchLi.length; index += 1) {
        catchLi[index].classList.remove('selected');
    }
}
function completedLi() {
    const catchOl = document.querySelector('#lista-tarefas')
    catchOl.addEventListener('dblclick', (event) => {
        if (event.target.classList == 'item' || event.target.classList == 'item selected') {
            event.target.classList.add('completed')
        }
        else {
            event.target.classList.remove('completed')
        }
    })

}
completedLi()

buttons('apaga-tudo', 'apagar')
/* para remover de forma dinamica, usei essa dica https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript */
function buttonRemove() {
    const catchOl = document.querySelector('#lista-tarefas')
    const catchButtonRemove = document.querySelector('#apaga-tudo')
    catchButtonRemove.addEventListener('click',() =>{
       catchOl.innerHTML = ''
    })
    saveList()
}
buttonRemove()

buttons('remover-finalizados', 'apagar finalizados')
/* essa função while eu peguei com base no repositorio do gabriel rodrigues https://github.com/tryber/sd-016-b-project-todo-list/pull/78/commits/81c677b62f4d88614106cd4f367d971583029898 */
function buttonRemoveCompleted() {
    const catchButtonRemoveCompleted = document.querySelector('#remover-finalizados')
    catchButtonRemoveCompleted.addEventListener('click',() =>{
        while (document.querySelector('.completed')) {
            document.querySelector('.completed').remove();
          }
    }) 
    saveList()
}
buttonRemoveCompleted()

buttons('salvar-tarefas', 'Salvar Tarefas')

function saveList() {
localStorage.setItem("list_tarefas",JSON.stringify(listaTarefas))
    
}