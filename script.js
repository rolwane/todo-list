// minha OL
const lista = document.querySelector('#lista-tarefas');

function loadTasks() {
  if (!localStorage.items) {
    localStorage.items = '[]';
  }
  const items = JSON.parse(localStorage.items);
  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.content;
    li.className = item.classes;
    lista.appendChild(li);
  });
}

loadTasks();

function addTask() {
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  lista.appendChild(li);
  input.value = '';
}

function selectTask(e) {
  if (e.target.id !== 'lista-tarefas') {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
}

function taskDone(e) {
  if (e.target.id !== 'lista-tarefas') {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  }
}

function clearAll() {
  lista.innerHTML = '';
}

function clearCompleted() {
  const completeds = document.querySelectorAll('.completed');
  completeds.forEach((completed) => {
    lista.removeChild(completed);
  });
}

function saveTasks() {
  const lis = document.querySelectorAll('li');
  const arrLis = [];
  for (let i = 0; i < lis.length; i += 1) {
    const obj = { content: '', classes: '' };
    obj.content = lis[i].innerText;
    obj.classes = lis[i].className;
    arrLis.push(obj);
  }
  localStorage.items = JSON.stringify(arrLis);
}

function moveUp() {
  const liSelected = document.querySelector('.selected');
  if (liSelected !== null) {
    const previouSibling = liSelected.previousElementSibling;
    if (previouSibling !== null) {
      liSelected.insertAdjacentElement('afterEnd', previouSibling); 
    }
  }  
}

function moveDown() {
  const liSelected = document.querySelector('.selected');
  if (liSelected !== null) {
    const nextSibling = liSelected.nextElementSibling;
    if (nextSibling !== null) {
      nextSibling.insertAdjacentElement('afterEnd', liSelected);
    }
  }
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    lista.removeChild(selected); 
  }
}

document.querySelector('#criar-tarefa').addEventListener('click', addTask);
lista.addEventListener('click', selectTask);
lista.addEventListener('dblclick', taskDone);
document.querySelector('#apaga-tudo').addEventListener('click', clearAll);
document.querySelector('#remover-finalizados').addEventListener('click', clearCompleted);
document.querySelector('#salvar-tarefas').addEventListener('click', saveTasks);
document.querySelector('#mover-cima').addEventListener('click', moveUp);
document.querySelector('#mover-baixo').addEventListener('click', moveDown);
document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);
