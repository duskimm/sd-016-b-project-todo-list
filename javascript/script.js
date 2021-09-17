let elis = [];
/**
 * PROTÓTIPOS DE FUNÇÃO;
 *
 ** Prototipo de Função; Pega e Retorna Valores; */
function getValue(element) {
  return element.value;
}

/** Prototipo de Função; Seleciona todos os elementos; */
 function getElements(element) {
  return document.querySelectorAll(element);
}

/**
 * Adiciona os valores na lista;
 */
function setList(value) {
  const element = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.innerHTML = value;
  element.appendChild(li);
}

/**
 * Executa funções assim que o DOM for carregado;
 */
window.onload = () =>  {
  /** 
   * Adiciona o valor do INPUT na lista; 
   */
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const text = document.getElementById('texto-tarefa');
    if (text.value !== '' && text.value !== ' ') {
      setList(text.value);
      text.value = '';
    }
  });

  /**
   * Adiciona o atributo selected quando o alvo for clicado;
   */
   document.getElementById('lista-tarefas').addEventListener('click', event => {
     /* Pega todos os elementos da lista; */
    const elements = document.getElementById('lista-tarefas').childNodes;
     /* Delegação de eventos; */
    const target = event.target;
    
    /* Verifica se o elemento ja possúi o atributo selected; */
    if (!target.hasAttribute('selected')) {
      /* Laço responsável por remover os atributos selected de todos os elementos da lista; */
      for (let value of elements) { // Percorre todos os elementos;
        if (value.tagName == 'LI') { // Verifica se o elemento é do tipo LI;
          value.removeAttribute('selected'); // Remove o atributo selected do elemento;
          value.removeAttribute('style');
        }
      }

      /* IF responsável por verificar se o elemento clicado é uma tag LI; */
      if (target.tagName == "LI" && target.nodeName == "LI") { // Verifica se o elemento clicado foi uma LI;
        event.target.setAttribute('selected', ''); // Adiciona o atributo selected ao elemento;
        event.target.style.background = "rgb(128, 128, 128)";
      }
    }
  });

  /**
   * Adiciona a classe completed quando o elemento for duplamente clicado;
   */
  document.getElementById('lista-tarefas').addEventListener('dblclick', event => {
    const target = event.target;
    if (target.tagName == 'LI' && target.nodeName == 'LI') {
      if (!target.classList.contains('completed')) {
        target.classList.add('completed');
      } else {
        target.classList.remove('completed');
      }
    }
  });

  /**
   * Remove o elemento selecionado da lista;
   */
  document.getElementById('remove-task').addEventListener('click', () => {
    /* Pega todos os elementos da lista; */
    const elements = document.getElementById('lista-tarefas').childNodes;
    for (let element of elements) {
        if (element.tagName === 'LI' && element.hasAttribute('selected')) {
          element.remove();
        }
    }
  });

  /** Prototipo de Função; Remove todos os elementos da lista; */
  document.getElementById('apaga-tudo').addEventListener('click', () => {
    const main = document.getElementById('lista-tarefas');
    for (let i = (main.childNodes.length - 1); i > 0; i--) {
      if (main.childNodes[i].tagName == 'LI' && main.childNodes[i].nodeName == 'LI') {
        main.childNodes[i].remove();
      }
    }
  });

  document.getElementById('remover-finalizados').addEventListener('click', () => {
    const main = document.getElementById('lista-tarefas');
    for (let i = (main.childNodes.length -1); i > 0; i--) {
      if (main.childNodes[i].tagName == 'LI' && main.childNodes[i].nodeName == 'LI' && main.childNodes[i].classList.contains('completed')) {
        main.childNodes[i].remove();

      }
    }
  });
}