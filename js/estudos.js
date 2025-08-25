
import { STORAGE_KEYS, getItem, setItem } from './storage.js';

const THEMES = [
  {
    id: 'direcao-defensiva',
    titulo: 'Direção Defensiva',
    html: `
      <h3>Direção Defensiva</h3>
      <p>Condução preventiva para evitar acidentes, mesmo em condições adversas.</p>
      <ul>
        <li>Distância de segurança</li>
        <li>Velocidade adequada ao clima</li>
        <li>Antecipação de riscos</li>
      </ul>
    `
  },
  {
    id: 'primeiros-socorros',
    titulo: 'Primeiros Socorros',
    html: `
      <h3>Primeiros Socorros</h3>
      <p>Medidas iniciais até a chegada de assistência especializada.</p>
      <ul>
        <li>Acionar emergência (192/193)</li>
        <li>Controlar sangramento com compressão</li>
        <li>Não remover capacete de motociclista</li>
      </ul>
    `
  },
  {
    id: 'legislacao',
    titulo: 'Legislação de Trânsito',
    html: `
      <h3>Legislação de Trânsito</h3>
      <p>Noções do CTB, sinalização, regras de circulação e conduta.</p>
      <ul>
        <li>Preferência em cruzamentos</li>
        <li>Uso obrigatório do cinto</li>
        <li>Infrações e penalidades</li>
      </ul>
    `
  },
  {
    id: 'infracoes',
    titulo: 'Infrações e Penalidades',
    html: `
      <h3>Infrações e Penalidades</h3>
      <p>Classificações, multas, pontos e medidas administrativas.</p>
      <ul>
        <li>Leve, média, grave e gravíssima</li>
        <li>Suspensão e cassação</li>
        <li>Recursos e prazos</li>
      </ul>
    `
  },
  {
    id: 'meio-ambiente',
    titulo: 'Meio Ambiente e Cidadania',
    html: `
      <h3>Meio Ambiente e Cidadania</h3>
      <p>Condução consciente, redução de poluentes e respeito ao espaço público.</p>
      <ul>
        <li>Manutenção do veículo</li>
        <li>Direção econômica</li>
        <li>Transporte sustentável</li>
      </ul>
    `
  }
];

const tabsEl = document.getElementById('abas');
const contentEl = document.getElementById('conteudo');
const noteInput = document.getElementById('texto-anotacao');
const addBtn = document.getElementById('adicionar-anotacao');
const clearBtn = document.getElementById('limpar-anotacao');
const listEl = document.getElementById('lista-tarefa');

let current = THEMES[0].id;
let todos = [];

function renderTabs() {
  tabsEl.innerHTML = '';
  THEMES.forEach(t => {
    const b = document.createElement('button');
    b.textContent = t.titulo;
    b.className = t.id === current ? 'active' : '';
    b.addEventListener('click', () => switchTheme(t.id));
    tabsEl.appendChild(b);
  });
}

function switchTheme(id) {
  current = id;
  renderTabs();
  const theme = THEMES.find(t => t.id === id);
  contentEl.innerHTML = theme.html;
  loadTodos();
  renderTodos();
}

function storageKeyFor(id) {
  return STORAGE_KEYS.NOTES_PREFIX + id;
}

function loadTodos() {
  try {
    const raw = getItem(storageKeyFor(current), '[]');
    todos = JSON.parse(raw);
    if (!Array.isArray(todos)) todos = [];
  } catch {
    todos = [];
  }
}

function saveTodos() {
  setItem(storageKeyFor(current), JSON.stringify(todos));
}

function renderTodos() {
  listEl.innerHTML = '';
  todos.forEach((it, idx) => {
    const li = document.createElement('li');
    li.className = 'item-tarefa' + (it.feito ? ' feito' : '');

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !!it.feito;
    cb.addEventListener('change', () => {
      todos[idx].feito = cb.checked;
      saveTodos();
      renderTodos();
    });

    const span = document.createElement('span');
    span.textContent = it.text;

    const del = document.createElement('button');
    del.className = 'botao perigo';
    del.textContent = 'Remover';
    del.addEventListener('click', () => {
      todos.splice(idx, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(cb);
    li.appendChild(span);
    li.appendChild(del);
    listEl.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  const txt = (noteInput.value || '').trim();
  if (!txt) return;
  todos.push({ text: txt, feito: false });
  noteInput.value = '';
  saveTodos();
  renderTodos();
});

noteInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

clearBtn.addEventListener('click', () => {
  if (confirm('Tem certeza que deseja limpar todas as anotações deste tema?')) {
    todos = [];
    saveTodos();
    renderTodos();
  }
});


renderTabs();
switchTheme(current);