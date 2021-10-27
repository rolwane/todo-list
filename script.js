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

document.querySelector('#criar-tarefa').addEventListener('click', addTask);
lista.addEventListener('click', selectTask);
lista.addEventListener('dblclick', taskDone);
document.querySelector('#apaga-tudo').addEventListener('click', clearAll);
document.querySelector('#remover-finalizados').addEventListener('click', clearCompleted);
document.querySelector('#salvar-tarefas').addEventListener('click', saveTasks);
