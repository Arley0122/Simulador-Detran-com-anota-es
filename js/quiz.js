
import { ExamTimer } from './timer.js';

const QUESTIONS = [
  {
    "enunciado": "Ao dirigir sob chuva intensa, o condutor deve:",
    "opcoes": [
      "Usar farol alto",
      "Aumentar a velocidade",
      "Reduzir a velocidade e aumentar a distância",
      "Frenar bruscamente em curvas"
    ],
    "correta": 2
  },
  {
    "enunciado": "Em caso de sangramento intenso em um acidente, a primeira medida é:",
    "opcoes": [
      "Aplicar torniquete",
      "Comprimir o local com pano limpo",
      "Dar água ao acidentado",
      "Remover o capacete da vítima"
    ],
    "correta": 1
  },
  {
    "enunciado": "É permitido estacionar:",
    "opcoes": [
      "Em esquinas",
      "Sobre faixas de pedestres",
      "Em guia com faixa amarela contínua",
      "Em vaga para idoso com credencial"
    ],
    "correta": 3
  },
  {
    "enunciado": "O cinto de segurança deve ser utilizado:",
    "opcoes": [
      "Apenas em rodovias",
      "Somente no banco da frente",
      "Por todos os ocupantes",
      "Só por iniciantes"
    ],
    "correta": 2
  },
  {
    "enunciado": "Ao sinal amarelo do semáforo o condutor deve:",
    "opcoes": [
      "Acelerar para passar",
      "Parar o veículo, se possível com segurança",
      "Ignorar e seguir",
      "Buzinar e seguir"
    ],
    "correta": 1
  },
  {
    "enunciado": "Hidratação e descanso do condutor são exemplos de:",
    "opcoes": [
      "Direção ofensiva",
      "Direção defensiva",
      "Conservação de via",
      "Sinalização vertical"
    ],
    "correta": 1
  },
  {
    "enunciado": "Ao aquaplanar, deve-se:",
    "opcoes": [
      "Frear forte",
      "Girar o volante rapidamente",
      "Tirar o pé do acelerador e manter direção",
      "Acelerar mais"
    ],
    "correta": 2
  },
  {
    "enunciado": "A ultrapassagem em faixas contínuas:",
    "opcoes": [
      "É permitida",
      "É infração gravíssima",
      "É infração leve",
      "Depende da velocidade"
    ],
    "correta": 1
  },
  {
    "enunciado": "Velocidade máxima é definida por:",
    "opcoes": [
      "Sinalização e características da via",
      "Modelo do veículo",
      "Vontade do condutor",
      "Condição climática apenas"
    ],
    "correta": 0
  },
  {
    "enunciado": "Uso do celular ao volante:",
    "opcoes": [
      "Permitido com uma mão",
      "Permitido parado no semáforo",
      "É infração gravíssima",
      "Permitido com volume baixo"
    ],
    "correta": 2
  },
  {
    "enunciado": "Em colisão com motociclista, a conduta é:",
    "opcoes": [
      "Retirar o capacete",
      "Movimentar a vítima",
      "Acionar emergência e sinalizar local",
      "Dar algo para beber"
    ],
    "correta": 2
  },
  {
    "enunciado": "O triângulo de sinalização em rodovia deve ser posicionado a:",
    "opcoes": [
      "5 m",
      "30 m",
      "50 m",
      "100 m"
    ],
    "correta": 2
  },
  {
    "enunciado": "Farol baixo aceso é obrigatório:",
    "opcoes": [
      "Apenas de dia",
      "Apenas à noite",
      "Em túneis e à noite, e conforme legislação vigente",
      "Nunca"
    ],
    "correta": 2
  },
  {
    "enunciado": "Estacionar em vaga de deficiente sem credencial:",
    "opcoes": [
      "Permitido por 10 min",
      "Infraçao média",
      "Infração gravíssima com medida administrativa",
      "Apenas advertência"
    ],
    "correta": 2
  },
  {
    "enunciado": "Condição mecânica do veículo influencia:",
    "opcoes": [
      "Apenas conforto",
      "Consumo e segurança",
      "Somente estética",
      "Apenas potência"
    ],
    "correta": 1
  },
  {
    "enunciado": "Pressão correta dos pneus:",
    "opcoes": [
      "Aumentar sempre",
      "Reduzir para maciez",
      "Seguir manual do veículo",
      "Indiferente"
    ],
    "correta": 2
  },
  {
    "enunciado": "Ao ver pedestre na faixa:",
    "opcoes": [
      "Buzinar",
      "Acelerar",
      "Dar preferência e parar",
      "Desviar pela calçada"
    ],
    "correta": 2
  },
  {
    "enunciado": "Dirigir sob efeito de álcool:",
    "opcoes": [
      "Permitido até certo limite",
      "Permitido com refeição",
      "É infração gravíssima e crime em certos casos",
      "Permitido com carona"
    ],
    "correta": 2
  },
  {
    "enunciado": "O cinto de segurança reduz:",
    "opcoes": [
      "Consumo",
      "Risco de ferimentos graves",
      "Ruído interno",
      "Desgaste de pneus"
    ],
    "correta": 1
  },
  {
    "enunciado": "Sinalização de regulamentação tem como cor padrão:",
    "opcoes": [
      "Azul",
      "Verde",
      "Vermelho/branco (bordas e símbolos)",
      "Marrom"
    ],
    "correta": 2
  },
  {
    "enunciado": "Em pane no veículo em via urbana:",
    "opcoes": [
      "Parar em qualquer lugar",
      "Sinalizar e remover para local seguro",
      "Aguardar sem sinalizar",
      "Abandonar o veículo"
    ],
    "correta": 1
  },
  {
    "enunciado": "Conduzir sem CNH:",
    "opcoes": [
      "Permitido com adulto",
      "Infração gravíssima",
      "Infração leve",
      "Permitido em rua calma"
    ],
    "correta": 1
  },
  {
    "enunciado": "O ABS auxilia a:",
    "opcoes": [
      "Aumentar consumo",
      "Evitar travamento das rodas",
      "Diminuir aderência",
      "Virar mais fechado"
    ],
    "correta": 1
  },
  {
    "enunciado": "Meio ambiente: dirigir de forma econômica inclui:",
    "opcoes": [
      "Acelerações bruscas",
      "Manutenção em dia e acelerações suaves",
      "Pneus murchos",
      "Peso extra desnecessário"
    ],
    "correta": 1
  },
  {
    "enunciado": "Checar pontos cegos:",
    "opcoes": [
      "Desnecessário",
      "Somente em rodovias",
      "É essencial ao mudar de faixa",
      "Somente à noite"
    ],
    "correta": 2
  },
  {
    "enunciado": "Ultrapassagem pela direita:",
    "opcoes": [
      "É regra geral",
      "Nunca ocorre",
      "Só quando o veículo à frente sinaliza à esquerda e a via permite",
      "Sempre proibida"
    ],
    "correta": 2
  },
  {
    "enunciado": "Prioridade em cruzamento sem sinalização:",
    "opcoes": [
      "Quem chegar primeiro",
      "Veículo maior",
      "Veículo da direita tem preferência",
      "Veículo mais rápido"
    ],
    "correta": 2
  },
  {
    "enunciado": "Em caso de incêndio inicial no veículo:",
    "opcoes": [
      "Abrir capô totalmente",
      "Usar extintor direcionado à base do fogo se houver segurança",
      "Jogar água no painel",
      "Ignorar e seguir"
    ],
    "correta": 1
  },
  {
    "enunciado": "Crianças até 10 anos:",
    "opcoes": [
      "Podem ir no banco dianteiro",
      "Devem ir no banco traseiro com dispositivo adequado",
      "Sem cinto atrás",
      "No colo com cinto do adulto"
    ],
    "correta": 1
  },
  {
    "enunciado": "Em derrapagem:",
    "opcoes": [
      "Frear bruscamente",
      "Girar volante para o lado oposto",
      "Tirar o pé do acelerador e direcionar para onde deseja ir",
      "Acelerar mais"
    ],
    "correta": 2
  }
];

const els = {
  timer: document.getElementById('cronometro'),
  progress: document.getElementById('progreco'),
  qArea: document.getElementById('area-questao'),
  prev: document.getElementById('anterior'),
  next: document.getElementById('proximo'),
  finish: document.getElementById('finalizar'),
  resultCard: document.getElementById('cartao-resultado'),
  resultText: document.getElementById('texto-resultado'),
  restart: document.getElementById('refazer')
};


const initialState = {
  idx: 0,
  answers: Array(QUESTIONS.length).fill(null),
  finished: false
};

let state = JSON.parse(JSON.stringify(initialState));

function renderQuestion() {
  if (state.finished) return;
  const q = QUESTIONS[state.idx];
  els.progress.textContent = `Questão ${state.idx + 1} de ${QUESTIONS.length}`;

  const opcaosHtml = q.opcoes.map((txt, i) => {
    const checked = state.answers[state.idx] === i ? 'checked' : '';
    const letter = String.fromCharCode(65 + i);
    return `
      <label class="opcao">
        <input type="radio" name="opt" value="${i}" ${checked}>
        <strong>${letter})</strong>&nbsp;${txt}
      </label>
    `;
  }).join('');

  els.qArea.innerHTML = `
    <h3>${q.enunciado}</h3>
    <div class="opcaos">${opcaosHtml}</div>
  `;

  els.qArea.querySelectorAll('input[name="opt"]').forEach(r => {
    r.addEventListener('change', (e) => {
      state.answers[state.idx] = Number(e.target.value);
    });
  });
}

function showResult() {
  const acertos = state.answers.reduce((acc, ans, i) => acc + (ans === QUESTIONS[i].correta ? 1 : 0), 0);
  els.resultText.textContent = `Você acertou ${acertos} de ${QUESTIONS.length} questões.`;
  els.resultCard.classList.remove('escondido');
}

function finishQuiz() {
  state.finished = true;
  showResult();
}

function next() {
  if (state.idx < QUESTIONS.length - 1) {
    state.idx++;
    renderQuestion();
  }
}

function prev() {
  if (state.idx > 0) {
    state.idx--;
    renderQuestion();
  }
}

function restartAll() {
  state = JSON.parse(JSON.stringify(initialState));
  timer.reset();
  els.resultCard.classList.add('escondido');
  renderQuestion();
}


const timer = new ExamTimer(els.timer, 45 * 60, { persist: false });
timer.onFinish = () => { finishQuiz(); };


els.next.addEventListener('click', next);
els.prev.addEventListener('click', prev);
els.finish.addEventListener('click', finishQuiz);
els.restart.addEventListener('click', restartAll);


renderQuestion();