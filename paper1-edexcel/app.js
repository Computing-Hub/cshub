/* ================================================================
   Edexcel 1CP2/01 June 2023 — Interactive Revision App
   ================================================================ */

// ── Question Data ──────────────────────────────────────────────
const questions = [

  // ============================================================
  // QUESTION 1: Computers (15 marks)
  // ============================================================
  {
    id: 'q1', number: '1', title: 'Computers', totalMarks: 15,
    intro: 'The CPU contains a number of components.',
    subs: [
      {
        id: 'q1ai', label: '(a)(i)', marks: 3, type: 'matching',
        text: 'Complete the table with the correct bus for each role.',
        matchItems: [
          { role: 'Carries a read signal to main memory', answer: 'Control' },
          { role: 'Carries the memory location of a piece of data', answer: 'Address' },
          { role: 'Carries an instruction from main memory to the CPU', answer: 'Data' }
        ],
        bankOptions: ['Control', 'Address', 'Data']
      },
      {
        id: 'q1aii', label: '(a)(ii)', marks: 1, type: 'mcq',
        text: 'Identify the component inside the CPU that stores data.',
        options: [
          { text: 'Arithmetic logic unit', correct: false },
          { text: 'Clock', correct: false },
          { text: 'Main memory', correct: false },
          { text: 'Register', correct: true }
        ]
      },
      {
        id: 'q1bi', label: '(b)(i)', marks: 1, type: 'short-answer',
        text: 'Algorithms can be written in a high-level language.<br>State what high-level code is translated to.',
        answers: ['machine code', 'binary', 'object code', 'executable', 'executable code', 'an executable']
      },
      {
        id: 'q1bii', label: '(b)(ii)', marks: 2, type: 'multi-short-answer',
        text: 'State <strong>two</strong> methods of source code translation.',
        count: 2,
        answers: [
          ['compiler', 'compilation', 'compile', 'compiling'],
          ['interpreter', 'interpretation', 'interpret', 'interpreting'],
          ['assembler', 'assemble', 'assembling', 'assembly']
        ]
      },
      {
        id: 'q1c', label: '(c)', marks: 1, type: 'mcq',
        text: 'Identify the feature of an optical disc that allows data to be read.',
        options: [
          { text: 'It is magnetic', correct: false },
          { text: 'It is portable', correct: false },
          { text: 'It is reflective', correct: true },
          { text: 'It is volatile', correct: false }
        ]
      },
      {
        id: 'q1d', label: '(d)', marks: 1, type: 'short-answer',
        text: 'Define the term \'embedded system\'.',
        answers: ['forms part of another device', 'part of another system', 'performs a single task', 'performs a dedicated task', 'performs a specific task', 'dedicated/specific task within a larger system'],
        modelAnswer: 'An embedded system forms part of another device/system and performs a single/dedicated/specific task.'
      },
      {
        id: 'q1e', label: '(e)', marks: 2, type: 'open-text',
        text: 'A code review is carried out by a programmer or an automated system. Both methods cost money.<br>Complete the table with <strong>one other disadvantage</strong> for each method.',
        rows: [
          { label: 'By a programmer', modelAnswer: 'Adds additional/significant time to the development cycle / Introduces human error / Requires an extra person/resource' },
          { label: 'By an automated system', modelAnswer: 'May not identify all issues (that it is not programmed to find) / May only find well known problems' }
        ]
      },
      {
        id: 'q1f', label: '(f)', marks: 1, type: 'mcq',
        text: 'Identify the purpose of defragmentation software.',
        options: [
          { text: 'Compressing data', correct: false },
          { text: 'Encrypting data', correct: false },
          { text: 'Organising data', correct: true },
          { text: 'Protecting data', correct: false }
        ]
      },
      {
        id: 'q1gi', label: '(g)(i)', marks: 2, type: 'open-text-single',
        text: 'One function of an operating system is to manage processes.<br>Describe <strong>one</strong> way the operating system makes sure each process can use the CPU.',
        modelAnswer: 'A scheduler/scheduling algorithm controls processes (1). Each process gets a time slice/small amount of CPU time (1). Processes are held in a data structure / Each process may be held in order/priority / Incomplete processes go to the back of the queue (1).'
      },
      {
        id: 'q1gii', label: '(g)(ii)', marks: 1, type: 'short-answer',
        text: 'Give <strong>one other</strong> function of an operating system.',
        answers: ['file management', 'peripheral management', 'user management', 'user interface', 'memory management', 'security', 'managing files', 'managing peripherals', 'managing users', 'managing memory']
      }
    ]
  },

  // ============================================================
  // QUESTION 2: Networks (12 marks)
  // ============================================================
  {
    id: 'q2', number: '2', title: 'Networks', totalMarks: 12,
    intro: '',
    subs: [
      {
        id: 'q2a', label: '(a)', marks: 2, type: 'parsons-vertical',
        text: 'Complete the diagram of the 4-layer TCP/IP model. The <strong>Internet</strong> and <strong>Link</strong> layers are given.',
        correctOrder: ['Application', 'Transport', 'Internet', 'Link'],
        givenPositions: { 2: 'Internet', 3: 'Link' },
        bankItems: ['Application', 'Transport']
      },
      {
        id: 'q2b', label: '(b)', marks: 1, type: 'short-answer',
        text: 'Name the network topology that uses terminators to absorb signals.',
        answers: ['bus', 'bus topology', 'bus network']
      },
      {
        id: 'q2c', label: '(c)', marks: 1, type: 'mcq',
        text: 'Identify the reason computers are connected in a network.',
        options: [
          { text: 'To improve encryption', correct: false },
          { text: 'To prevent hacking', correct: false },
          { text: 'To reduce latency', correct: false },
          { text: 'To share peripherals', correct: true }
        ]
      },
      {
        id: 'q2d', label: '(d)', marks: 1, type: 'short-answer',
        text: 'State the network protocol used to request a webpage.',
        answers: ['http', 'https', 'hypertext transfer protocol', 'hypertext transfer protocol secure', 'HTTP', 'HTTPS']
      },
      {
        id: 'q2e', label: '(e)', marks: 2, type: 'open-text-single',
        text: 'Explain <strong>one</strong> benefit to a user of using IMAP to access emails.',
        modelAnswer: 'Emails can be accessed from multiple devices (1) because IMAP does not remove/delete emails from the server (1). OR Emails can be accessed through a browser (1) because IMAP doesn\'t need a client application to download messages (1).'
      },
      {
        id: 'q2f', label: '(f)', marks: 2, type: 'open-text-single',
        text: 'A factory has two file servers installed in an office. A closed-circuit television system monitors the factory.<br>Explain <strong>one other</strong> method of physical security that could be used to protect the servers.',
        modelAnswer: 'Locks / biometric / magnetic card scanners / security personnel on the office door (1) to prevent unauthorised access (1). OR Movement sensors (1) to activate an alarm / a light (1). OR Security lights / alarms (1) so intruders would be scared off / identified (1).'
      },
      {
        id: 'q2g', label: '(g)', marks: 1, type: 'short-answer',
        text: 'Network speed is the current rate of data transmission, measured in bits per second.<br>Define the term \'bandwidth\'.',
        answers: ['maximum volume of data', 'maximum amount of data', 'full capacity of data', 'maximum data that can be transmitted'],
        modelAnswer: 'The maximum volume/amount of data that can be transmitted in one second/unit of time. (Must refer to capacity/maximum, not current speed.)'
      },
      {
        id: 'q2h', label: '(h)', marks: 2, type: 'open-text-single',
        text: 'High-speed fibre-optic cables form the internet backbone. Routers connect other networks to this backbone.<br>Describe how a router enables data to arrive at its destination.',
        modelAnswer: 'Reads the destination/recipient\'s IP address in each packet (1). Uses a routing table (1). Sends the data packet to the next router (1). Uses the fastest/least congested route/pathway (1). Keeps track / informs other routers of traffic conditions (1). (Award up to 2 marks.)'
      }
    ]
  },

  // ============================================================
  // QUESTION 3: Issues and Impact (9 marks)
  // ============================================================
  {
    id: 'q3', number: '3', title: 'Issues and Impact', totalMarks: 9,
    intro: '',
    subs: [
      {
        id: 'q3a', label: '(a)', marks: 2, type: 'open-text-single',
        text: 'Computer worms are a type of malware.<br>Describe <strong>one</strong> way that a worm can move from machine to machine.',
        modelAnswer: 'Worms make copies of themselves (1) and send them to everyone in the computer\'s email contacts list / send them via previous connections used by the computer (1). OR Worms can spread through emails (1) and do not need a user to unknowingly distribute/execute them (1). OR Worms self-replicate (1) and spread without the need for a host file (1).'
      },
      {
        id: 'q3b', label: '(b)', marks: 1, type: 'short-answer',
        text: 'The source code of a software application is automatically copyrighted.<br>State <strong>one other</strong> method of intellectual property protection to control who can use a software application.',
        answers: ['licensing', 'licence', 'license', 'patent', 'trademark']
      },
      {
        id: 'q3c', label: '(c)', marks: 2, type: 'open-text-single',
        text: 'Computer programs control some aeroplane landings.<br>Explain <strong>one</strong> reason computers are <strong>not</strong> capable of safely controlling all aeroplane landings.',
        modelAnswer: 'The landing program may crash / display incorrect data / not deal with extreme scenarios (weather/wind/animal/visual/emergency) (1) because the system could be out of date / have errors / bugs / not been tested enough / the scenario is beyond the range of what it has been programmed to respond to (1). OR A computer\'s input may be wrong/compromised (1) because of a sensor/hardware/mechanical error (1). OR A computer cannot make moral/ethical judgements (1) because it is only capable of following instructions (1).'
      },
      {
        id: 'q3d', label: '(d)', marks: 2, type: 'open-text-single',
        text: 'Large amounts of water are used to manufacture computer chips.<br>Describe <strong>one</strong> way this impacts the environment.',
        modelAnswer: 'The land/rivers/seas will be polluted (1) if contaminated/uncleaned waste water is released (1). OR Homes/businesses/agriculture/wildlife/people may not have enough water (1) if too much is taken from the rivers/reservoirs (1). OR Water is polluted/contaminated during the manufacturing process (1) and could pose a health risk (1).'
      },
      {
        id: 'q3e', label: '(e)', marks: 2, type: 'open-text',
        text: 'There are ethical and legal issues with the collection and use of personal data.<br>Complete the table with the ethical or legal issue for each situation. One row has been completed for you.',
        rows: [
          { label: 'A teacher uses another teacher\'s login to change student grades', modelAnswer: 'Misuse / Hacking / Unauthorised access/changing/modification' },
          { label: 'A school displays closed-circuit television (CCTV) screens in a public area', modelAnswer: 'Privacy / Consent/Permission / Data Protection / GDPR' }
        ]
      }
    ]
  },

  // ============================================================
  // QUESTION 4: Computational Thinking (20 marks)
  // ============================================================
  {
    id: 'q4', number: '4', title: 'Computational Thinking', totalMarks: 20,
    intro: '',
    subs: [
      {
        id: 'q4a', label: '(a)', marks: 2, type: 'open-text-single',
        text: 'Programmers use trace tables with algorithms.<br>Explain the purpose of a trace table.',
        modelAnswer: 'It helps the programmer visualise the steps in a program / find errors/bugs / check the algorithm gives the correct output (1) because they can see the value a variable holds at a given point in an algorithm (1).'
      },
      {
        id: 'q4b', label: '(b)', marks: 2, type: 'open-text-single',
        text: 'Algorithms use arrays and records to hold data.<br>Describe a record.',
        modelAnswer: 'A list / data structure / collection of elements/fields/values (1) where each element/field/value may be a different data type / is related to the others (1).'
      },
      {
        id: 'q4c', label: '(c)', marks: 4, type: 'parsons-flowchart',
        text: 'An algorithm allows users to enter a whole number. The number can be positive or negative. The purpose of the algorithm is to report whether the number is even or odd. The modulus function returns the remainder after division.<br><br>The flowchart uses these symbols: <strong>Terminator</strong> (rounded), <strong>Process</strong> (rectangle), <strong>Decision</strong> (diamond), <strong>Input/Output</strong> (parallelogram).<br><br>Arrange the flowchart steps in the correct order.',
        correctOrder: [
          'Start',
          'Get number (Input)',
          'Is number modulo 2 equal to 0? (Decision)',
          'Yes → Display "Even" (Output)',
          'No → Display "Odd" (Output)',
          'Stop'
        ],
        modelAnswer: 'Start → Input: Get number → Decision: Is number MOD 2 == 0? → Yes: Display "Even" / No: Display "Odd" → Stop. Award marks for: Input symbol to get number (1), Decision symbol with two arrows labelled yes and no (1), Correct relational test matching output messages (1), Accurately connected (1).'
      },
      {
        id: 'q4d', label: '(d)', marks: 4, type: 'open-text-single',
        text: 'A linear search algorithm can be used on both a sorted and an unsorted array.<br>Describe how a linear search algorithm operates on an <strong>unsorted</strong> array.',
        modelAnswer: 'Start at the first position / Iterate/Traverse through the array (1). Compare the item with the target (1). Stop when the target is matched (1). Or stop when the end of the list is reached and the item is not matched (1).'
      },
      {
        id: 'q4e', label: '(e)', marks: 2, type: 'truth-table',
        text: 'Algorithms control physical devices using logical operators.<br>A security system turns on a floodlight when the sunlight falls below a certain level (S) and a movement sensor is activated (M).<br>Complete the truth table.',
        headers: ['S', 'M', 'S AND M'],
        rows: [
          { given: [null, null], answer: ['0', '0', '0'] },
          { given: [null, null], answer: ['0', '1', '0'] },
          { given: [null, null], answer: ['1', '0', '0'] },
          { given: [null, null], answer: ['1', '1', '1'] }
        ]
      },
      {
        id: 'q4f', label: '(f)', marks: 6, type: 'open-text-single',
        text: 'A group of students are working together on a single maze game. The arrow keys control the character. When the character reaches the end of the maze without touching a wall, a happy sound is played. The game also displays a score.<br><br>Discuss the use of decomposition and abstraction in developing this game.<br>Your answer should include:<ul><li>a definition of each term</li><li>the benefits each brings to the group of students</li><li>an example of where each could appear in the program code</li></ul>',
        modelAnswer: '<strong>Decomposition</strong> is breaking down into smaller parts. Problems, solutions, and algorithms can be decomposed.<br><strong>Abstraction</strong> is the process of removing or hiding unnecessary detail.<br><br><strong>Benefits:</strong> It is usually easier to solve several smaller problems (such as checking if touching a wall, or updating the score) than to solve one big problem (such as making a game). Different parts can be shared between class members to speed up development. Once all pieces are working correctly, smaller solutions can be combined with fewer errors. Individual parts can be ignored by groups working on other parts.<br><br><strong>In program code:</strong> Different blocks of code logic show decomposition (e.g. moving character and updating score). Subprograms are decompositions because they are blocks of code separated from the main program. Abstraction is used each time a subprogram is called. Subprograms are abstractions because their names hide how they work internally.'
      }
    ]
  },

  // ============================================================
  // QUESTION 5: Data (19 marks)
  // ============================================================
  {
    id: 'q5', number: '5', title: 'Data', totalMarks: 19,
    intro: '',
    subs: [
      {
        id: 'q5a', label: '(a)', marks: 2, type: 'open-text-single',
        text: 'Describe <strong>one</strong> effect of using lossy compression to reduce the size of a file.',
        modelAnswer: 'Removed data cannot be restored / means that the original file/information cannot be fully recreated/represented (1). When data is removed, humans may perceive/interpret the image/sound/text/information differently (1).'
      },
      {
        id: 'q5b', label: '(b)', marks: 2, type: 'open-text-single',
        text: 'Here is an original image (with black, white, and grey pixels). There is one bit available to represent each pixel.<br>Explain <strong>one</strong> reason why the image cannot be accurately represented using one bit for each pixel.',
        modelAnswer: 'One bit can only have two values (1), so can only represent black and white (1). The three colours in this image cannot be represented (1) because one bit can only have two values (1).'
      },
      {
        id: 'q5c', label: '(c)', marks: 2, type: 'open-text-single',
        text: 'Shifts are performed on binary patterns.<br>A <strong>logical</strong> shift right is performed on a pattern.<br>An <strong>arithmetic</strong> shift right is performed on the same original pattern.<br>Describe the reason the results will be different.',
        modelAnswer: 'An arithmetic shift fills from the left with a copy of the most-significant bit (MSB) (1), whereas a logical shift fills from the left with a 0 (1). An arithmetic shift keeps the MSB the same (1) whereas a logical shift always fills the MSB bit with a 0 (1).'
      },
      {
        id: 'q5di', label: '(d)(i)', marks: 1, type: 'short-answer',
        text: 'Binary, denary and hexadecimal patterns represent numbers.<br>Convert the binary pattern 0100 0010 to denary.',
        answers: ['66']
      },
      {
        id: 'q5dii', label: '(d)(ii)', marks: 2, type: 'short-answer',
        text: 'Convert the binary pattern 0101 1011 to hexadecimal.',
        answers: ['5B', '5b']
      },
      {
        id: 'q5ei', label: '(e)(i)', marks: 1, type: 'short-answer',
        text: 'Data storage is measured in bits and bytes.<br>State the number of unique values that can be represented with 6 bits.',
        answers: ['64', '2^6', '2**6']
      },
      {
        id: 'q5eii', label: '(e)(ii)', marks: 3, type: 'open-text-single',
        text: 'A file format uses a 100 x 600 table of 32-bit integers.<br>The file uses 1 kibibyte of additional data.<br>Construct an expression to show the number of <strong>bytes</strong> of storage needed to store the file.',
        modelAnswer: 'Award marks for: Size of 100 x 600 (1). x 32 in numerator and 8 in the denominator (1). + 1024 applied to whole expression (1).<br><br>Full expression: (100 x 600 x 32) / 8 + 1024 = 241024 bytes.'
      },
      {
        id: 'q5f', label: '(f)', marks: 6, type: 'open-text-single',
        text: 'An analogue sound is represented in digital form. The sound is one second long and is sampled at 10 Hz. The digital representation has a bit depth of 5 and is stored in two\'s complement.<br><br><strong>Sound data:</strong><br><code>00000 11111 11111 11111 11111</code><br><code>00000 00000 00001 00001 00001</code><br><br>Draw a graph to represent the data sampled. You must include: labels for the x and y axes, values for the x and y axes, each sample plotted as an X, and samples joined up to show the digital form.',
        modelAnswer: 'x-axis labelled correctly as time/seconds (1). y-axis labelled correctly as amplitude/value/sample (1). Value labels on x-axis as 0 and 1 (1). Value labels on y-axis as -1 and 1 (1). All 10 values plotted to correct points (1). Points joined to form a square wave (1).<br><br>The data in two\'s complement: 00000=0, 11111=-1, 11111=-1, 11111=-1, 11111=-1, 00000=0, 00000=0, 00001=+1, 00001=+1, 00001=+1.'
      }
    ]
  }
];

// ── State ──────────────────────────────────────────────────────
const state = {};
let totalScored = 0;

// ── Initialisation ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderQuestions();
  updateTotalScore();
});

// ── Render Navigation ──────────────────────────────────────────
function renderNav() {
  const nav = document.getElementById('nav-strip');
  questions.forEach(q => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = `nav-${q.id}`;
    btn.textContent = `Q${q.number} (${q.totalMarks})`;
    btn.addEventListener('click', () => {
      document.getElementById(q.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    nav.appendChild(btn);
  });
}

// ── Render Questions ───────────────────────────────────────────
function renderQuestions() {
  const main = document.getElementById('main');
  questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'q-card open';
    card.id = q.id;

    card.innerHTML = `
      <div class="q-header" onclick="this.parentElement.classList.toggle('open')">
        <div class="q-number" id="num-${q.id}">${q.number}</div>
        <div class="q-title">${q.title}</div>
        <div class="q-marks">${q.totalMarks} marks</div>
        <div class="q-chevron">&#9662;</div>
      </div>
      <div class="q-body">
        ${q.intro ? `<div class="q-text">${q.intro}</div>` : ''}
        <div id="subs-${q.id}"></div>
      </div>
    `;
    main.appendChild(card);

    const subsContainer = card.querySelector(`#subs-${q.id}`);
    q.subs.forEach(sub => {
      const subDiv = document.createElement('div');
      subDiv.className = 'sub-q';
      subDiv.id = sub.id;
      subDiv.innerHTML = `
        <div class="sub-q-label">${sub.label} <span style="font-weight:400;color:#999">[${sub.marks} mark${sub.marks > 1 ? 's' : ''}]</span></div>
        <div class="sub-q-text">${sub.text}</div>
        <div id="widget-${sub.id}"></div>
      `;
      subsContainer.appendChild(subDiv);
      renderWidget(sub);
    });
  });
}

// ── Render Widget ──────────────────────────────────────────────
function renderWidget(sub) {
  const container = document.getElementById(`widget-${sub.id}`);
  switch (sub.type) {
    case 'mcq': renderMCQ(container, sub); break;
    case 'short-answer': renderShortAnswer(container, sub); break;
    case 'multi-short-answer': renderMultiShortAnswer(container, sub); break;
    case 'matching': renderMatching(container, sub); break;
    case 'open-text': renderOpenText(container, sub); break;
    case 'open-text-single': renderOpenTextSingle(container, sub); break;
    case 'truth-table': renderTruthTable(container, sub); break;
    case 'parsons-vertical': renderParsonsVertical(container, sub); break;
    case 'parsons-flowchart': renderParsonsFlowchart(container, sub); break;
    default: break;
  }
}

// ── MCQ ────────────────────────────────────────────────────────
function renderMCQ(container, sub) {
  state[sub.id] = { selected: -1, checked: false, score: 0 };
  let html = '<div class="mcq-options">';
  sub.options.forEach((opt, i) => {
    html += `<div class="mcq-option" id="${sub.id}-opt-${i}" onclick="selectMCQ('${sub.id}', ${i})">
      <div class="radio"></div><span>${opt.text}</span>
    </div>`;
  });
  html += '</div>';
  html += `<div class="btn-row">
    <button class="btn btn-check" id="btn-check-${sub.id}" onclick="checkMCQ('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetMCQ('${sub.id}')">Reset</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  container.innerHTML = html;
}

function selectMCQ(id, idx) {
  if (state[id].checked) return;
  state[id].selected = idx;
  const sub = findSub(id);
  sub.options.forEach((_, i) => {
    const el = document.getElementById(`${id}-opt-${i}`);
    el.classList.toggle('selected', i === idx);
  });
}

function checkMCQ(id) {
  const s = state[id];
  if (s.checked || s.selected === -1) return;
  s.checked = true;
  const sub = findSub(id);
  const correct = sub.options[s.selected].correct;
  s.score = correct ? sub.marks : 0;

  sub.options.forEach((opt, i) => {
    const el = document.getElementById(`${id}-opt-${i}`);
    if (i === s.selected) el.classList.add(correct ? 'correct' : 'wrong');
    if (opt.correct && !correct) el.classList.add('correct');
  });

  showFeedback(id, s.score, sub.marks);
  updateTotalScore();
}

function resetMCQ(id) {
  const sub = findSub(id);
  state[id] = { selected: -1, checked: false, score: 0 };
  sub.options.forEach((_, i) => {
    const el = document.getElementById(`${id}-opt-${i}`);
    el.className = 'mcq-option';
  });
  hideFeedback(id);
  updateTotalScore();
}

// ── Short Answer ───────────────────────────────────────────────
function renderShortAnswer(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = `<input type="text" class="answer-input" id="input-${sub.id}" placeholder="Type your answer...">`;
  html += `<div class="btn-row">
    <button class="btn btn-check" onclick="checkShortAnswer('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetShortAnswer('${sub.id}')">Reset</button>
    <button class="btn btn-show" onclick="showAnswer('${sub.id}')">Show Answer</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;
}

function checkShortAnswer(id) {
  const s = state[id];
  if (s.checked) return;
  s.checked = true;
  const sub = findSub(id);
  const input = document.getElementById(`input-${id}`);
  const val = input.value.trim().toLowerCase();
  const correct = sub.answers.some(a => val.includes(a.toLowerCase()));
  s.score = correct ? sub.marks : 0;
  input.classList.add(correct ? 'correct-input' : 'wrong-input');
  input.readOnly = true;
  showFeedback(id, s.score, sub.marks);
  if (!correct) showAnswer(id);
  updateTotalScore();
}

function resetShortAnswer(id) {
  state[id] = { checked: false, score: 0 };
  const input = document.getElementById(`input-${id}`);
  input.value = '';
  input.className = 'answer-input';
  input.readOnly = false;
  hideFeedback(id);
  hideModelAnswer(id);
  updateTotalScore();
}

function showAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  const text = sub.modelAnswer || `Accepted answers: ${sub.answers.join(', ')}`;
  ma.innerHTML = `<strong>Answer:</strong> ${text}`;
  ma.classList.add('show');
}

// ── Multi Short Answer ─────────────────────────────────────────
function renderMultiShortAnswer(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = '';
  for (let i = 0; i < sub.count; i++) {
    html += `<div style="margin-bottom:.5rem"><label style="font-size:.82rem;color:#666">${i + 1}.</label>
    <input type="text" class="answer-input" id="input-${sub.id}-${i}" placeholder="Answer ${i + 1}..." style="margin-top:.2rem"></div>`;
  }
  html += `<div class="btn-row">
    <button class="btn btn-check" onclick="checkMultiShort('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetMultiShort('${sub.id}')">Reset</button>
    <button class="btn btn-show" onclick="showMultiShortAnswer('${sub.id}')">Show Answer</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;
}

function checkMultiShort(id) {
  const s = state[id];
  if (s.checked) return;
  s.checked = true;
  const sub = findSub(id);
  let score = 0;
  const usedAnswerGroups = new Set();

  for (let i = 0; i < sub.count; i++) {
    const input = document.getElementById(`input-${id}-${i}`);
    const val = input.value.trim().toLowerCase();
    let matched = false;
    sub.answers.forEach((group, gi) => {
      if (!usedAnswerGroups.has(gi) && group.some(a => val.includes(a.toLowerCase()))) {
        matched = true;
        usedAnswerGroups.add(gi);
      }
    });
    if (matched) { score++; input.classList.add('correct-input'); }
    else { input.classList.add('wrong-input'); }
    input.readOnly = true;
  }

  s.score = score;
  showFeedback(id, score, sub.marks);
  if (score < sub.marks) showMultiShortAnswer(id);
  updateTotalScore();
}

function resetMultiShort(id) {
  const sub = findSub(id);
  state[id] = { checked: false, score: 0 };
  for (let i = 0; i < sub.count; i++) {
    const input = document.getElementById(`input-${id}-${i}`);
    input.value = '';
    input.className = 'answer-input';
    input.readOnly = false;
  }
  hideFeedback(id);
  hideModelAnswer(id);
  updateTotalScore();
}

function showMultiShortAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  const answers = sub.answers.map(g => g[0]).join(', ');
  ma.innerHTML = `<strong>Accepted answers (any ${sub.count}):</strong> ${answers}`;
  ma.classList.add('show');
}

// ── Matching (Bus/Role table) ──────────────────────────────────
function renderMatching(container, sub) {
  state[sub.id] = { checked: false, score: 0, values: {} };
  let html = '<div class="match-bank" id="bank-' + sub.id + '">';
  // Shuffle bank
  const shuffled = [...sub.bankOptions].sort(() => Math.random() - 0.5);
  shuffled.forEach(opt => {
    html += `<div class="block" draggable="true" data-value="${opt}"><span class="grip">&#9776;</span> ${opt}</div>`;
  });
  html += '</div>';
  html += '<table class="data-table"><thead><tr><th>Bus</th><th>Role</th></tr></thead><tbody>';
  sub.matchItems.forEach((item, i) => {
    html += `<tr><td><div class="match-drop-cell" id="drop-${sub.id}-${i}" data-index="${i}"></div></td><td>${item.role}</td></tr>`;
  });
  html += '</tbody></table>';
  html += `<div class="btn-row">
    <button class="btn btn-check" onclick="checkMatching('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetMatching('${sub.id}')">Reset</button>
    <button class="btn btn-show" onclick="showMatchingAnswer('${sub.id}')">Show Answer</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;

  // Setup drag and drop
  setupMatchingDnD(sub);
}

function setupMatchingDnD(sub) {
  const bank = document.getElementById(`bank-${sub.id}`);
  const blocks = bank.querySelectorAll('.block');

  blocks.forEach(block => {
    block.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', block.dataset.value);
      e.dataTransfer.setData('source', block.parentElement.id);
      block.style.opacity = '0.4';
    });
    block.addEventListener('dragend', () => { block.style.opacity = '1'; });
  });

  sub.matchItems.forEach((_, i) => {
    const drop = document.getElementById(`drop-${sub.id}-${i}`);
    drop.addEventListener('dragover', e => { e.preventDefault(); drop.style.background = '#fff3e0'; });
    drop.addEventListener('dragleave', () => { drop.style.background = ''; });
    drop.addEventListener('drop', e => {
      e.preventDefault();
      drop.style.background = '';
      const val = e.dataTransfer.getData('text/plain');
      const sourceId = e.dataTransfer.getData('source');

      // If drop cell already has a block, move it back to bank
      if (drop.querySelector('.block')) {
        const existing = drop.querySelector('.block');
        bank.appendChild(existing);
        setupBlockDrag(existing, sub);
      }

      // Find the dragged block
      const source = document.getElementById(sourceId);
      const draggedBlock = source.querySelector(`.block[data-value="${val}"]`);
      if (draggedBlock) {
        drop.appendChild(draggedBlock);
        drop.classList.add('has-block');
        state[sub.id].values[i] = val;
      }
    });
  });
}

function setupBlockDrag(block, sub) {
  block.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', block.dataset.value);
    e.dataTransfer.setData('source', block.parentElement.id);
    block.style.opacity = '0.4';
  });
  block.addEventListener('dragend', () => { block.style.opacity = '1'; });
}

function checkMatching(id) {
  const s = state[id];
  if (s.checked) return;
  s.checked = true;
  const sub = findSub(id);
  let score = 0;
  sub.matchItems.forEach((item, i) => {
    const drop = document.getElementById(`drop-${id}-${i}`);
    const block = drop.querySelector('.block');
    if (block) {
      if (block.dataset.value === item.answer) {
        block.classList.add('correct-block');
        score++;
      } else {
        block.classList.add('wrong-block');
      }
    }
  });
  s.score = score;
  showFeedback(id, score, sub.marks);
  if (score < sub.marks) showMatchingAnswer(id);
  updateTotalScore();
}

function resetMatching(id) {
  state[id] = { checked: false, score: 0, values: {} };
  const sub = findSub(id);
  const container = document.getElementById(`widget-${id}`);
  renderMatching(container, sub);
  updateTotalScore();
}

function showMatchingAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  let html = '<strong>Answers:</strong><ul>';
  sub.matchItems.forEach(item => {
    html += `<li><strong>${item.answer}</strong> bus → ${item.role}</li>`;
  });
  html += '</ul>';
  ma.innerHTML = html;
  ma.classList.add('show');
}

// ── Open Text (table with model answers) ───────────────────────
function renderOpenText(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = '<table class="data-table"><tbody>';
  sub.rows.forEach((row, i) => {
    html += `<tr><td style="text-align:left;font-weight:500;width:40%">${row.label}</td>
    <td><textarea class="answer-textarea" id="input-${sub.id}-${i}" placeholder="Type your answer..."></textarea></td></tr>`;
  });
  html += '</tbody></table>';
  html += `<div class="btn-row">
    <button class="btn btn-show" onclick="showOpenTextAnswer('${sub.id}')">Show Model Answer</button>
    <button class="btn btn-check" onclick="selfMarkOpenText('${sub.id}', true)">I got it right</button>
    <button class="btn btn-reset" onclick="selfMarkOpenText('${sub.id}', false)">I need to review</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;
}

function showOpenTextAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  let html = '<strong>Model Answers:</strong><ul>';
  sub.rows.forEach(row => {
    html += `<li><strong>${row.label}:</strong> ${row.modelAnswer}</li>`;
  });
  html += '</ul>';
  ma.innerHTML = html;
  ma.classList.add('show');
}

function selfMarkOpenText(id, correct) {
  const sub = findSub(id);
  const s = state[id];
  s.score = correct ? sub.marks : 0;
  s.checked = true;
  showFeedback(id, s.score, sub.marks);
  if (!correct) showOpenTextAnswer(id);
  updateTotalScore();
}

// ── Open Text Single ───────────────────────────────────────────
function renderOpenTextSingle(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = `<textarea class="answer-textarea" id="input-${sub.id}" placeholder="Type your answer..."></textarea>`;
  html += `<div class="btn-row">
    <button class="btn btn-show" onclick="showOpenTextSingleAnswer('${sub.id}')">Show Model Answer</button>
    <button class="btn btn-check" onclick="selfMarkSingle('${sub.id}', true)">I got it right</button>
    <button class="btn btn-reset" onclick="selfMarkSingle('${sub.id}', false)">I need to review</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;
}

function showOpenTextSingleAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  ma.innerHTML = `<strong>Model Answer:</strong><br>${sub.modelAnswer}`;
  ma.classList.add('show');
}

function selfMarkSingle(id, correct) {
  const sub = findSub(id);
  const s = state[id];
  s.score = correct ? sub.marks : 0;
  s.checked = true;
  showFeedback(id, s.score, sub.marks);
  if (!correct) showOpenTextSingleAnswer(id);
  updateTotalScore();
}

// ── Truth Table ────────────────────────────────────────────────
function renderTruthTable(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = '<table class="truth-table"><thead><tr>';
  sub.headers.forEach(h => { html += `<th>${h}</th>`; });
  html += '</tr></thead><tbody>';
  sub.rows.forEach((row, ri) => {
    html += '<tr>';
    row.answer.forEach((val, ci) => {
      html += `<td><input type="text" class="cell-input" id="tt-${sub.id}-${ri}-${ci}" maxlength="5" placeholder="?"></td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  html += `<div class="btn-row">
    <button class="btn btn-check" onclick="checkTruthTable('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetTruthTable('${sub.id}')">Reset</button>
    <button class="btn btn-show" onclick="showTruthTableAnswer('${sub.id}')">Show Answer</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;
}

function checkTruthTable(id) {
  const s = state[id];
  if (s.checked) return;
  s.checked = true;
  const sub = findSub(id);

  // Check all S and M columns are correct (1 mark) and all S AND M correct (1 mark)
  let smCorrect = true;
  let andCorrect = true;

  sub.rows.forEach((row, ri) => {
    row.answer.forEach((val, ci) => {
      const input = document.getElementById(`tt-${id}-${ri}-${ci}`);
      const userVal = input.value.trim();
      const isCorrect = userVal === val || userVal.toLowerCase() === val.toLowerCase();
      input.classList.add(isCorrect ? 'correct-input' : 'wrong-input');
      input.readOnly = true;

      if (!isCorrect) {
        if (ci < 2) smCorrect = false;
        else andCorrect = false;
      }
    });
  });

  s.score = (smCorrect ? 1 : 0) + (andCorrect ? 1 : 0);
  showFeedback(id, s.score, sub.marks);
  if (s.score < sub.marks) showTruthTableAnswer(id);
  updateTotalScore();
}

function resetTruthTable(id) {
  state[id] = { checked: false, score: 0 };
  const sub = findSub(id);
  sub.rows.forEach((row, ri) => {
    row.answer.forEach((_, ci) => {
      const input = document.getElementById(`tt-${id}-${ri}-${ci}`);
      input.value = '';
      input.className = 'cell-input';
      input.readOnly = false;
    });
  });
  hideFeedback(id);
  hideModelAnswer(id);
  updateTotalScore();
}

function showTruthTableAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  let html = '<strong>Answer:</strong><br><table class="truth-table" style="margin-top:.5rem"><thead><tr>';
  sub.headers.forEach(h => { html += `<th>${h}</th>`; });
  html += '</tr></thead><tbody>';
  sub.rows.forEach(row => {
    html += '<tr>';
    row.answer.forEach(val => { html += `<td>${val}</td>`; });
    html += '</tr>';
  });
  html += '</tbody></table>';
  ma.innerHTML = html;
  ma.classList.add('show');
}

// ── Parsons Vertical (TCP/IP model) ────────────────────────────
function renderParsonsVertical(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = '<div class="parsons-container">';
  html += '<div class="parsons-label">Drag layers to the correct position:</div>';
  html += '<div class="block-bank" id="bank-' + sub.id + '">';
  const shuffled = [...sub.bankItems].sort(() => Math.random() - 0.5);
  shuffled.forEach(item => {
    html += `<div class="block" data-value="${item}"><span class="grip">&#9776;</span> ${item}</div>`;
  });
  html += '</div>';

  html += '<div style="display:flex;flex-direction:column;gap:.3rem;align-items:center;margin-top:.5rem">';
  sub.correctOrder.forEach((layer, i) => {
    if (sub.givenPositions && sub.givenPositions[i] !== undefined) {
      html += `<div style="padding:.5rem 2rem;background:#e8eaf6;border:2px solid var(--primary);border-radius:6px;font-weight:600;text-align:center;min-width:200px">${sub.givenPositions[i]}</div>`;
    } else {
      html += `<div class="drop-zone horizontal" id="drop-${sub.id}-${i}" data-index="${i}" style="min-width:200px;min-height:40px;justify-content:center"></div>`;
    }
    if (i < sub.correctOrder.length - 1) {
      html += '<div style="text-align:center;color:#999;font-size:1.2rem">&#8595;</div>';
    }
  });
  html += '</div></div>';

  html += `<div class="btn-row">
    <button class="btn btn-check" onclick="checkParsonsV('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetParsonsV('${sub.id}')">Reset</button>
    <button class="btn btn-show" onclick="showParsonsVAnswer('${sub.id}')">Show Answer</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;

  // Setup Sortable for bank and drop zones
  const bank = document.getElementById(`bank-${sub.id}`);
  const group = `parsons-${sub.id}`;
  new Sortable(bank, { group, animation: 150 });
  sub.correctOrder.forEach((_, i) => {
    if (!sub.givenPositions || sub.givenPositions[i] === undefined) {
      const drop = document.getElementById(`drop-${sub.id}-${i}`);
      if (drop) new Sortable(drop, { group, animation: 150, maxItems: 1 });
    }
  });
}

function checkParsonsV(id) {
  const s = state[id];
  if (s.checked) return;
  s.checked = true;
  const sub = findSub(id);
  let score = 0;

  sub.correctOrder.forEach((layer, i) => {
    if (sub.givenPositions && sub.givenPositions[i] !== undefined) return;
    const drop = document.getElementById(`drop-${id}-${i}`);
    const block = drop.querySelector('.block');
    if (block && block.dataset.value === layer) {
      block.classList.add('correct-block');
      score++;
    } else if (block) {
      block.classList.add('wrong-block');
    }
  });

  s.score = score;
  showFeedback(id, score, sub.marks);
  if (score < sub.marks) showParsonsVAnswer(id);
  updateTotalScore();
}

function resetParsonsV(id) {
  state[id] = { checked: false, score: 0 };
  const sub = findSub(id);
  const container = document.getElementById(`widget-${id}`);
  renderParsonsVertical(container, sub);
  updateTotalScore();
}

function showParsonsVAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  ma.innerHTML = `<strong>Correct order (top to bottom):</strong> ${sub.correctOrder.join(' → ')}`;
  ma.classList.add('show');
}

// ── Parsons Flowchart ──────────────────────────────────────────
function renderParsonsFlowchart(container, sub) {
  state[sub.id] = { checked: false, score: 0 };
  let html = '<div class="parsons-container">';
  html += '<div class="parsons-label">Arrange the flowchart steps in the correct order:</div>';
  html += '<div class="block-bank" id="bank-' + sub.id + '">';
  const shuffled = [...sub.correctOrder].sort(() => Math.random() - 0.5);
  shuffled.forEach(item => {
    html += `<div class="block" data-value="${item}"><span class="grip">&#9776;</span> ${item}</div>`;
  });
  html += '</div>';
  html += '<div class="parsons-label" style="margin-top:.5rem">Your answer (drag here in order):</div>';
  html += `<div class="drop-zone" id="drop-${sub.id}" style="min-height:120px"></div>`;
  html += '</div>';
  html += `<div class="btn-row">
    <button class="btn btn-check" onclick="checkParsonsFlow('${sub.id}')">Check</button>
    <button class="btn btn-reset" onclick="resetParsonsFlow('${sub.id}')">Reset</button>
    <button class="btn btn-show" onclick="showParsonsFlowAnswer('${sub.id}')">Show Answer</button>
  </div>`;
  html += `<div class="feedback" id="fb-${sub.id}"></div>`;
  html += `<div class="model-answer" id="ma-${sub.id}"></div>`;
  container.innerHTML = html;

  const bank = document.getElementById(`bank-${sub.id}`);
  const drop = document.getElementById(`drop-${sub.id}`);
  const group = `flow-${sub.id}`;
  new Sortable(bank, { group, animation: 150 });
  new Sortable(drop, { group, animation: 150 });
}

function checkParsonsFlow(id) {
  const s = state[id];
  if (s.checked) return;
  s.checked = true;
  const sub = findSub(id);
  const drop = document.getElementById(`drop-${id}`);
  const blocks = drop.querySelectorAll('.block');
  let score = 0;

  blocks.forEach((block, i) => {
    if (i < sub.correctOrder.length && block.dataset.value === sub.correctOrder[i]) {
      block.classList.add('correct-block');
      score++;
    } else {
      block.classList.add('wrong-block');
    }
  });

  // Scale score to marks
  const pct = blocks.length > 0 ? score / sub.correctOrder.length : 0;
  s.score = Math.round(pct * sub.marks);
  showFeedback(id, s.score, sub.marks);
  showParsonsFlowAnswer(id);
  updateTotalScore();
}

function resetParsonsFlow(id) {
  state[id] = { checked: false, score: 0 };
  const sub = findSub(id);
  const container = document.getElementById(`widget-${id}`);
  renderParsonsFlowchart(container, sub);
  updateTotalScore();
}

function showParsonsFlowAnswer(id) {
  const sub = findSub(id);
  const ma = document.getElementById(`ma-${id}`);
  ma.innerHTML = `<strong>Model Answer:</strong><br>${sub.modelAnswer}`;
  ma.classList.add('show');
}

// ── Helpers ────────────────────────────────────────────────────
function findSub(id) {
  for (const q of questions) {
    for (const s of q.subs) {
      if (s.id === id) return s;
    }
  }
  return null;
}

function showFeedback(id, score, total) {
  const fb = document.getElementById(`fb-${id}`);
  if (!fb) return;
  if (score === total) {
    fb.className = 'feedback show success';
    fb.textContent = `Correct! ${score}/${total} mark${total > 1 ? 's' : ''}`;
  } else if (score > 0) {
    fb.className = 'feedback show partial';
    fb.textContent = `Partially correct: ${score}/${total} marks`;
  } else {
    fb.className = 'feedback show error';
    fb.textContent = `Not quite right. 0/${total} marks. See the model answer below.`;
  }
}

function hideFeedback(id) {
  const fb = document.getElementById(`fb-${id}`);
  if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
}

function hideModelAnswer(id) {
  const ma = document.getElementById(`ma-${id}`);
  if (ma) { ma.className = 'model-answer'; }
}

function updateTotalScore() {
  totalScored = 0;
  for (const id in state) {
    totalScored += state[id].score || 0;
  }
  document.getElementById('total-score').textContent = totalScored;
  const pct = (totalScored / 75) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // Update nav buttons
  questions.forEach(q => {
    let qScore = 0;
    q.subs.forEach(s => { qScore += (state[s.id] && state[s.id].score) || 0; });
    const btn = document.getElementById(`nav-${q.id}`);
    if (btn) btn.classList.toggle('done', qScore === q.totalMarks);
  });
}
