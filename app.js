const STORAGE_KEY = 'in-permit-study-v1';

const quizQuestions = [
  {
    section: 'signs', label: 'SIGN SHAPE',
    question: 'A circular traffic sign most commonly warns you about what?',
    options: ['A railroad crossing ahead', 'A school zone', 'A no-passing zone', 'A construction detour'],
    answer: 0,
    explanation: 'Indiana uses circular traffic signs to alert drivers to upcoming railroad crossings.'
  },
  {
    section: 'signs', label: 'SIGN SHAPE',
    question: 'What does the eight-sided shape of a traffic sign tell you?',
    options: ['Yield', 'Stop', 'Railroad crossing', 'General warning'],
    answer: 1,
    explanation: 'An eight-sided (octagonal) sign is the stop-sign shape.'
  },
  {
    section: 'signs', label: 'SIGN SHAPE',
    question: 'A pennant-shaped sign placed on the left side of a two-way road warns of:',
    options: ['A school crossing', 'A no-passing zone', 'A divided highway', 'A sharp curve'],
    answer: 1,
    explanation: 'Pennant-shaped signs warn drivers not to pass other vehicles on the left.'
  },
  {
    section: 'signs', label: 'SIGN COLOR',
    question: 'An orange traffic sign is most closely associated with:',
    options: ['Recreation and cultural sites', 'Temporary traffic conditions and road work', 'Permitted movements and directions', 'Motorist services'],
    answer: 1,
    explanation: 'Orange signs warn about temporary traffic conditions, commonly construction and maintenance.'
  },
  {
    section: 'signs', label: 'SIGN COLOR',
    question: 'Which sign color is commonly used for road services and information?',
    options: ['Blue', 'Brown', 'Red', 'Orange'],
    answer: 0,
    explanation: 'Blue signs commonly provide road-service and motorist information.'
  },
  {
    section: 'signs', label: 'SIGN SHAPE',
    question: 'A five-sided sign warns that you are entering an area associated with:',
    options: ['Railroad tracks', 'A school and children crossing', 'A no-passing zone', 'A work zone'],
    answer: 1,
    explanation: 'Five-sided signs identify school areas where children may be crossing.'
  },
  {
    section: 'signs', label: 'SIGN SHAPE',
    question: 'A diamond-shaped traffic sign should make you expect:',
    options: ['An upcoming road condition or hazard', 'A mandatory stop', 'A railroad crossing only', 'A parking regulation only'],
    answer: 0,
    explanation: 'Diamond-shaped signs warn about upcoming road conditions and hazards.'
  },
  {
    section: 'signs', label: 'SIGN COLOR',
    question: 'A brown traffic sign generally points you toward:',
    options: ['Emergency regulations', 'Recreational or cultural sites', 'Construction activity', 'School zones'],
    answer: 1,
    explanation: 'Brown signs indicate nearby recreational and cultural-interest sites.'
  },
  {
    section: 'rules', label: 'SPEED LIMITS',
    question: 'Unless a lower limit is posted, what is the maximum for a passenger vehicle on a rural Indiana interstate?',
    options: ['55 mph', '60 mph', '65 mph', '70 mph'],
    answer: 3,
    explanation: 'The Indiana Driver’s Manual lists 70 mph as the rural-interstate maximum for passenger vehicles, or the posted limit.'
  },
  {
    section: 'rules', label: 'SPEED LIMITS',
    question: 'Unless otherwise posted, what maximum does the Indiana manual list for a rural state divided highway?',
    options: ['50 mph', '55 mph', '60 mph', '70 mph'],
    answer: 2,
    explanation: 'The manual lists 60 mph for a rural state divided highway, unless a lower posted limit applies.'
  },
  {
    section: 'rules', label: 'SPEED LIMITS',
    question: 'In most urban residential areas, the maximum listed in the Indiana manual is:',
    options: ['20 mph', '25 mph', '30 mph', '35 mph'],
    answer: 2,
    explanation: 'Most urban residential areas are listed at 30 mph or the posted limit.'
  },
  {
    section: 'rules', label: 'FOLLOWING DISTANCE',
    question: 'A good normal following-distance rule is to stay at least how far behind the vehicle ahead?',
    options: ['1 second', '2–3 seconds', '5–6 seconds at all times', 'One car length'],
    answer: 1,
    explanation: 'The Indiana manual recommends a normal following gap of at least two to three seconds.'
  },
  {
    section: 'rules', label: 'SCHOOL BUS',
    question: 'You approach a stopped school bus with flashing red lights and its stop arm extended. What should you do?',
    options: ['Slow down and pass carefully', 'Stop as required and remain stopped until it is safe and lawful to proceed', 'Honk before passing', 'Stop only if children are visible'],
    answer: 1,
    explanation: 'Drivers must stop when approaching a school bus displaying flashing red lights with the stop arm extended, subject to the divided-road exception.'
  },
  {
    section: 'rules', label: 'SCHOOL BUS',
    question: 'You are traveling opposite a stopped school bus on a roadway divided by a barrier or unimproved median. The bus has red lights flashing and its stop arm out. Indiana guidance says you:',
    options: ['Must always stop', 'Are required to stop only if traveling in the same direction as the bus', 'May pass only at 10 mph', 'Must stop only when children are visible'],
    answer: 1,
    explanation: 'On a roadway divided by a barrier or unimproved median, the stop requirement applies to traffic traveling in the same direction as the school bus.'
  },
  {
    section: 'rules', label: 'PARKING',
    question: 'How close may you legally park to a fire hydrant under the common restriction listed in the Indiana manual?',
    options: ['Not within 5 feet', 'Not within 10 feet', 'Not within 15 feet', 'Not within 25 feet'],
    answer: 2,
    explanation: 'Parking within 15 feet of a fire hydrant is prohibited.'
  },
  {
    section: 'rules', label: 'BICYCLES',
    question: 'When safely passing a bicyclist, the Indiana manual says drivers should allow at least:',
    options: ['1 foot', '2 feet', '3 feet', '6 feet'],
    answer: 2,
    explanation: 'Drivers may pass when safe and should leave a minimum of three feet beside the bicyclist.'
  },
  {
    section: 'rules', label: 'DISABLED VEHICLES',
    question: 'If you cannot move over for a disabled stationary vehicle displaying flashing hazard lights, what does the Indiana manual instruct?',
    options: ['Maintain the posted speed', 'Reduce speed to 10 mph below the posted limit and proceed cautiously', 'Stop in your lane', 'Drive on the shoulder'],
    answer: 1,
    explanation: 'If a lane change is not possible, reduce speed to 10 mph below the posted limit and proceed with caution.'
  },
  {
    section: 'rules', label: 'RAILROAD CROSSINGS',
    question: 'How close to a railroad crossing does the Indiana manual prohibit passing another vehicle?',
    options: ['Within 25 feet', 'Within 50 feet', 'Within 75 feet', 'Within 100 feet'],
    answer: 3,
    explanation: 'Do not pass another vehicle within 100 feet of a railroad crossing.'
  },
  {
    section: 'rules', label: 'REVERSING',
    question: 'Which reversing technique does the Indiana manual specifically warn against?',
    options: ['Turning your body to look through the back window', 'Going slowly', 'Using only the rearview mirror', 'Checking for pedestrians'],
    answer: 2,
    explanation: 'The manual says never to use only the rearview mirror when reversing.'
  },
  {
    section: 'rules', label: 'KNOWLEDGE EXAM',
    question: 'If you fail the Indiana knowledge exam, when may you attempt it again?',
    options: ['Immediately', 'After 24 clock-hours', 'The next business day', 'After seven days'],
    answer: 2,
    explanation: 'Indiana BMV guidance states that you must wait until the next business day after a failed knowledge exam.'
  }
];

const defaultState = {
  modules: [],
  signs: [],
  bestScore: null
};

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return { ...defaultState };
  }
}

let state = loadState();
let quizIndex = 0;
let quizAnswers = Array(quizQuestions.length).fill(null);
let quizLocked = Array(quizQuestions.length).fill(false);

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderProgress();
}

function renderProgress() {
  document.getElementById('moduleCount').textContent = `${state.modules.length} / 4`;
  document.getElementById('signProgress').textContent = `${state.signs.length} / 8`;
  document.getElementById('bestScore').textContent = state.bestScore == null ? '—' : `${state.bestScore}%`;

  const modulePct = state.modules.length / 4;
  const signPct = state.signs.length / 8;
  const quizPct = state.bestScore == null ? 0 : state.bestScore / 100;
  const overall = Math.round(((modulePct + signPct + quizPct) / 3) * 100);
  document.getElementById('overallBar').style.width = `${overall}%`;
}

function initModules() {
  document.querySelectorAll('.module-card').forEach(card => {
    const id = card.dataset.module;
    const button = card.querySelector('.module-toggle');
    const apply = () => {
      const reviewed = state.modules.includes(id);
      card.classList.toggle('reviewed', reviewed);
      button.textContent = reviewed ? 'Reviewed ✓' : 'Mark reviewed';
    };
    apply();
    button.addEventListener('click', () => {
      if (state.modules.includes(id)) state.modules = state.modules.filter(item => item !== id);
      else state.modules.push(id);
      saveState();
      apply();
    });
  });
}

function initSigns() {
  document.querySelectorAll('.sign-card').forEach(card => {
    const id = card.dataset.sign;
    if (state.signs.includes(id)) card.classList.add('revealed');
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
      if (card.classList.contains('revealed')) {
        if (!state.signs.includes(id)) state.signs.push(id);
      } else {
        state.signs = state.signs.filter(item => item !== id);
      }
      saveState();
    });
  });
}

function renderQuiz() {
  const q = quizQuestions[quizIndex];
  document.getElementById('questionNumber').textContent = quizIndex + 1;
  document.getElementById('questionTotal').textContent = quizQuestions.length;
  document.getElementById('questionSection').textContent = q.section === 'signs' ? 'Signs' : 'Traffic rules';
  document.getElementById('questionLabel').textContent = q.label;
  document.getElementById('questionText').textContent = q.question;
  document.getElementById('answeredCount').textContent = quizAnswers.filter(a => a !== null).length;
  document.getElementById('quizProgressBar').style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;

  const answers = document.getElementById('answers');
  answers.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-option';
    btn.innerHTML = `<span class="letter">${letters[idx]}</span><span class="answer-text"></span>`;
    btn.querySelector('.answer-text').textContent = option;

    if (quizAnswers[quizIndex] === idx) btn.classList.add('selected');
    if (quizLocked[quizIndex]) {
      if (idx === q.answer) btn.classList.add('correct');
      if (quizAnswers[quizIndex] === idx && idx !== q.answer) btn.classList.add('incorrect');
    }

    btn.addEventListener('click', () => {
      if (quizLocked[quizIndex]) return;
      quizAnswers[quizIndex] = idx;
      quizLocked[quizIndex] = true;
      renderQuiz();
    });
    answers.appendChild(btn);
  });

  const explanation = document.getElementById('explanation');
  explanation.hidden = !quizLocked[quizIndex];
  explanation.textContent = quizLocked[quizIndex] ? q.explanation : '';

  document.getElementById('prevQuestion').disabled = quizIndex === 0;
  document.getElementById('nextQuestion').textContent = quizIndex === quizQuestions.length - 1 ? 'Finish test' : 'Next question';
}

function finishQuiz() {
  const allAnswered = quizAnswers.every(a => a !== null);
  if (!allAnswered) {
    const firstMissing = quizAnswers.findIndex(a => a === null);
    quizIndex = firstMissing;
    renderQuiz();
    document.getElementById('explanation').hidden = false;
    document.getElementById('explanation').textContent = 'Answer every question before finishing the test.';
    return;
  }

  const signs = quizQuestions.map((q, i) => ({ q, i })).filter(x => x.q.section === 'signs');
  const rules = quizQuestions.map((q, i) => ({ q, i })).filter(x => x.q.section === 'rules');
  const correctAll = quizQuestions.filter((q, i) => quizAnswers[i] === q.answer).length;
  const correctSigns = signs.filter(x => quizAnswers[x.i] === x.q.answer).length;
  const correctRules = rules.filter(x => quizAnswers[x.i] === x.q.answer).length;

  const overall = Math.round((correctAll / quizQuestions.length) * 100);
  const signPct = Math.round((correctSigns / signs.length) * 100);
  const rulesPct = Math.round((correctRules / rules.length) * 100);
  const passed = signPct >= 80 && rulesPct >= 80;

  state.bestScore = state.bestScore == null ? overall : Math.max(state.bestScore, overall);
  saveState();

  document.getElementById('quizView').hidden = true;
  document.getElementById('resultsView').hidden = false;
  document.getElementById('resultHeadline').textContent = passed ? 'Practice standard met.' : 'Review, then run it again.';
  document.getElementById('overallResult').textContent = `${overall}%`;
  document.getElementById('signResult').textContent = `${signPct}%`;
  document.getElementById('rulesResult').textContent = `${rulesPct}%`;
  document.getElementById('resultMessage').textContent = passed
    ? 'You reached at least 80% in both practice components. Keep reviewing weak spots so the answers remain automatic under test pressure.'
    : 'The Indiana knowledge exam requires 80% or higher on each component. Focus on whichever practice component fell below that mark, then retake the set.';
}

function restartQuiz() {
  quizIndex = 0;
  quizAnswers = Array(quizQuestions.length).fill(null);
  quizLocked = Array(quizQuestions.length).fill(false);
  document.getElementById('quizView').hidden = false;
  document.getElementById('resultsView').hidden = true;
  renderQuiz();
}

document.getElementById('prevQuestion').addEventListener('click', () => {
  if (quizIndex > 0) {
    quizIndex--;
    renderQuiz();
  }
});

document.getElementById('nextQuestion').addEventListener('click', () => {
  if (quizIndex === quizQuestions.length - 1) finishQuiz();
  else {
    quizIndex++;
    renderQuiz();
  }
});

document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
document.getElementById('retakeQuiz').addEventListener('click', restartQuiz);

document.getElementById('resetProgress').addEventListener('click', () => {
  const ok = window.confirm('Reset study progress and best practice score?');
  if (!ok) return;
  state = { ...defaultState, modules: [], signs: [] };
  localStorage.removeItem(STORAGE_KEY);
  document.querySelectorAll('.module-card').forEach(card => card.classList.remove('reviewed'));
  document.querySelectorAll('.module-toggle').forEach(btn => btn.textContent = 'Mark reviewed');
  document.querySelectorAll('.sign-card').forEach(card => card.classList.remove('revealed'));
  renderProgress();
});

initModules();
initSigns();
renderProgress();
renderQuiz();
