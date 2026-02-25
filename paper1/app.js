/* ================================================================
   OCR J277/01 June 2023 — Parsons Puzzle Revision App
   ================================================================ */

// ── Question Data ──────────────────────────────────────────────
const questions = [

  // ============================================================
  // QUESTION 1: Binary & Data Representation (11 marks)
  // ============================================================
  {
    id: 'q1', number: '1', title: 'Binary & Data Representation', totalMarks: 11,
    intro: 'Computers represent data in binary form.',
    subs: [
      {
        id: 'q1a', label: '(a)', marks: 1, type: 'mcq',
        text: 'Tick <strong>one</strong> box to identify the statement about binary that is true.',
        options: [
          { text: 'Binary digits can only be the values 0, 1 and 2', correct: false },
          { text: 'The left-most bit of a binary integer has the smallest value', correct: false },
          { text: 'Binary is used because computers are made of switches that can only be on or off', correct: true },
          { text: 'The smallest whole number that can be stored in 8 bits is the number 1', correct: false }
        ]
      },
      {
        id: 'q1b', label: '(b)', marks: 4, type: 'table-input',
        text: 'Complete the table by writing the missing denary, 8-bit binary or hexadecimal values.',
        rows: [
          { denary: '', binary: '00000111', hex: '7', missing: 'denary', answer: '7' },
          { denary: '49', binary: '', hex: '31', missing: 'binary', answer: '00110001' },
          { denary: '', binary: '01100110', hex: '66', missing: 'denary', answer: '102' },
          { denary: '244', binary: '11110100', hex: '', missing: 'hex', answer: 'F4' }
        ]
      },
      {
        id: 'q1c', label: '(c)', marks: 1, type: 'mcq',
        text: 'Tick <strong>one</strong> box to identify the largest file size.',
        options: [
          { text: '2,000,000 bytes', correct: false },
          { text: '2300 KB', correct: false },
          { text: '200 MB', correct: true },
          { text: '0.1 GB', correct: false }
        ]
      },
      {
        id: 'q1d', label: '(d)', marks: 1, type: 'mcq-multi', maxSelect: 2,
        text: 'Tick <strong>two</strong> boxes to identify the two file sizes that are equal to each other.',
        options: [
          { text: '4,500,000 bytes', correct: true },
          { text: '450 KB', correct: false },
          { text: '4.5 MB', correct: true },
          { text: '0.45 GB', correct: false }
        ]
      },
      {
        id: 'q1e', label: '(e)', marks: 2, type: 'binary-addition',
        text: 'Complete the binary addition by adding these two 8-bit binary numbers. Show your working.',
        num1: '01110001',
        num2: '10011110',
        answer: '00001111',
        carries: '11110000'
      },
      {
        id: 'q1f', label: '(f)', marks: 2, type: 'parsons',
        text: 'Identify the binary shift that has been applied to the 8-bit binary number <strong>10110000</strong> to get the result <strong>10000000</strong>.',
        blocks: [
          { text: 'Left shift', correct: true, order: 0 },
          { text: '3 places', correct: true, order: 1 },
          { text: 'Right shift', correct: false },
          { text: '1 place', correct: false },
          { text: '2 places', correct: false },
          { text: '4 places', correct: false }
        ],
        horizontal: true
      }
    ]
  },

  // ============================================================
  // QUESTION 2: Networks & Protocols (18 marks)
  // ============================================================
  {
    id: 'q2', number: '2', title: 'Networks & Protocols', totalMarks: 18,
    intro: 'A student is performing a range of actions on the internet using their computer.',
    subs: [
      {
        id: 'q2ai', label: '(a)(i)', marks: 4, type: 'matching',
        text: 'Complete the table by identifying the most appropriate protocol for each task. Drag protocols to the correct rows.',
        tasks: [
          { task: 'Requesting to view a news webpage from a web server', answer: ['HTTP', 'HTTPS'] },
          { task: 'Entering a username and password to access their bank account', answer: ['HTTPS'] },
          { task: 'Downloading a text document from a web server', answer: ['FTP', 'HTTP', 'HTTPS'] },
          { task: 'Checking for new emails in their inbox', answer: ['IMAP', 'POP'] }
        ],
        pool: ['HTTP', 'HTTPS', 'FTP', 'IMAP', 'POP', 'SMTP', 'TCP']
      },
      {
        id: 'q2aii', label: '(a)(ii)', marks: 2, type: 'parsons',
        text: 'Give <strong>two</strong> reasons why protocols have layers.',
        blocks: [
          { text: 'Each layer is independent', correct: true, order: 0 },
          { text: 'so one layer can be changed', correct: true, order: 1 },
          { text: 'without affecting the others.', correct: true, order: 2 },
          { text: 'Developers can specialise', correct: true, order: 3 },
          { text: 'on individual layers.', correct: true, order: 4 },
          { text: 'All layers must be updated together', correct: false },
          { text: 'Layers prevent communication', correct: false },
          { text: 'Each layer depends on all others', correct: false }
        ]
      },
      {
        id: 'q2bi', label: '(b)(i)', marks: 1, type: 'parsons',
        text: 'One characteristic of a LAN is that they are set up over a small geographical area. Give <strong>one</strong> other characteristic of a LAN.',
        blocks: [
          { text: 'Uses dedicated/own', correct: true, order: 0 },
          { text: 'hardware and infrastructure.', correct: true, order: 1 },
          { text: 'Covers a wide area', correct: false },
          { text: 'Uses public internet lines', correct: false },
          { text: 'Always connects wirelessly', correct: false }
        ]
      },
      {
        id: 'q2bii', label: '(b)(ii)', marks: 4, type: 'parsons',
        text: 'Describe the benefits of the student changing their home LAN to include wireless connections.',
        blocks: [
          { text: 'Allows more devices to connect,', correct: true, order: 0 },
          { text: 'e.g. phones and tablets.', correct: true, order: 1 },
          { text: 'Devices can move around freely', correct: true, order: 2 },
          { text: 'and connect from anywhere in the house.', correct: true, order: 3 },
          { text: 'No additional wires are needed,', correct: true, order: 4 },
          { text: 'reducing trip hazards and damage.', correct: true, order: 5 },
          { text: 'Easier and cheaper to set up', correct: true, order: 6 },
          { text: 'new device connections.', correct: true, order: 7 },
          { text: 'All devices must stay in one room', correct: false },
          { text: 'Wireless uses more electricity', correct: false },
          { text: 'Wired is always the better option', correct: false }
        ]
      },
      {
        id: 'q2biii', label: '(b)(iii)', marks: 2, type: 'parsons',
        text: 'State <strong>two</strong> drawbacks of changing their home LAN to include wireless connections.',
        blocks: [
          { text: 'Prone to interference', correct: true, order: 0 },
          { text: 'which can disrupt the signal.', correct: true, order: 1 },
          { text: 'Slower rate of transmission', correct: true, order: 2 },
          { text: 'compared to wired connections.', correct: true, order: 3 },
          { text: 'Wireless has unlimited range', correct: false },
          { text: 'Wireless is always faster', correct: false },
          { text: 'No security risks at all', correct: false }
        ]
      }
    ]
  },

  // ============================================================
  // QUESTION 3: Data Representation — Characters, Images, Compression (20 marks)
  // ============================================================
  {
    id: 'q3', number: '3', title: 'Characters, Images & Compression', totalMarks: 20,
    intro: 'Binary numbers can represent different forms of data.',
    subs: [
      {
        id: 'q3a', label: '(a)', marks: 5, type: 'fill-blank',
        text: 'Complete the description of how computers represent characters in binary using the given list of terms. Not all terms will be used.',
        template: 'A character set stores {0} of the characters that the computer can represent. Each character is given a {1} binary code. Lower-case and upper-case letters in a character set are given {2} binary codes. One example of a character set is ASCII. This character set uses {3} bits for each character. If the code value for the character \'F\' is 70 then the code value for the character \'L\' is {4}.',
        blanks: [
          { answer: ['all'] },
          { answer: ['unique', 'different'] },
          { answer: ['unique', 'different', 'similar'] },
          { answer: ['8'] },
          { answer: ['76'] }
        ],
        wordBank: ['2', '4', '8', '9', '16', '32', '256', '71', '72', '74', '76', '78', '80', '81', 'all', 'different', 'identical', 'one', 'repeated', 'similar', 'some', 'unique']
      },
      {
        id: 'q3bi', label: '(b)(i)', marks: 1, type: 'parsons',
        text: 'State what is meant by <strong>metadata</strong> in an image file.',
        blocks: [
          { text: 'Data about', correct: true, order: 0 },
          { text: 'the data / image / file.', correct: true, order: 1 },
          { text: 'The actual pixel colours', correct: false },
          { text: 'The binary code itself', correct: false },
          { text: 'A type of compression', correct: false }
        ]
      },
      {
        id: 'q3bii', label: '(b)(ii)', marks: 2, type: 'pixel-grid',
        text: 'The binary data stored for the image is given below. The image is 3 pixels wide by 4 pixels high. Colour depth is 4 bits. Click each cell to cycle through colours until you match the correct colour.',
        width: 3, height: 4,
        colours: { '0000': 'red', '0010': 'green', '1000': 'blue', '0110': 'purple' },
        binaryData: '000000000110100000101000011001100110000000101000',
        answer: [
          ['red','red','purple'],
          ['blue','green','blue'],
          ['purple','purple','purple'],
          ['red','green','blue']
        ]
      },
      {
        id: 'q3biii', label: '(b)(iii)', marks: 1, type: 'input',
        text: 'A colour depth of 4 is used. State the maximum number of different colours that can be represented in 4 bits.',
        answer: '16',
        placeholder: 'Enter a number...'
      },
      {
        id: 'q3biv', label: '(b)(iv)', marks: 2, type: 'parsons',
        text: 'The colour depth is increased to 2 bytes. State <strong>two</strong> effects that this change can have on the image.',
        blocks: [
          { text: 'The quality of the image', correct: true, order: 0 },
          { text: 'can be improved.', correct: true, order: 1 },
          { text: 'The file size will increase', correct: true, order: 2 },
          { text: 'as more data is stored per pixel.', correct: true, order: 3 },
          { text: 'The file size will decrease', correct: false },
          { text: 'The image will have fewer colours', correct: false },
          { text: 'The resolution will change', correct: false }
        ]
      },
      {
        id: 'q3ci', label: '(c)(i)', marks: 3, type: 'parsons',
        text: 'Identify the most suitable type of compression for the <strong>text</strong> document. Justify your choice.',
        blocks: [
          { text: 'Lossless compression.', correct: true, order: 0 },
          { text: 'No data is removed', correct: true, order: 1 },
          { text: 'so the file can be fully', correct: true, order: 2 },
          { text: 'reconstructed back to the original.', correct: true, order: 3 },
          { text: 'Text files need all data to work —', correct: true, order: 4 },
          { text: 'any lost characters would', correct: true, order: 5 },
          { text: 'change the meaning of the text.', correct: true, order: 6 },
          { text: 'Lossy compression.', correct: false },
          { text: 'Some data can be safely removed', correct: false },
          { text: 'without anyone noticing.', correct: false }
        ]
      },
      {
        id: 'q3cii', label: '(c)(ii)', marks: 3, type: 'parsons',
        text: 'Identify the most suitable type of compression for the <strong>image</strong> file. Justify your choice.',
        blocks: [
          { text: 'Lossy compression.', correct: true, order: 0 },
          { text: 'It will reduce the file size', correct: true, order: 1 },
          { text: 'more significantly than lossless.', correct: true, order: 2 },
          { text: 'The image may only lose', correct: true, order: 3 },
          { text: 'some quality that is unlikely', correct: true, order: 4 },
          { text: 'to be noticed by the user.', correct: true, order: 5 },
          { text: 'Lossless compression.', correct: false },
          { text: 'No data can ever be removed', correct: false },
          { text: 'All pixels must stay identical.', correct: false }
        ]
      }
    ]
  },

  // ============================================================
  // QUESTION 4: Security (7 marks)
  // ============================================================
  {
    id: 'q4', number: '4', title: 'Security Threats & Prevention', totalMarks: 7,
    intro: '',
    subs: [
      {
        id: 'q4a', label: '(a)', marks: 4, type: 'grid-checkbox',
        text: 'Tick <strong>one or more</strong> boxes on each row to identify all of the methods that can help to prevent each threat.',
        rows: ['Spyware', 'Brute-force attack', 'Data interception', 'SQL injection'],
        cols: ['Anti-malware', 'Penetration testing', 'Encryption', 'Firewall'],
        answers: {
          'Spyware': { 'Anti-malware': true, 'Firewall': true },
          'Brute-force attack': { 'Penetration testing': true, 'Firewall': true },
          'Data interception': { 'Encryption': true },
          'SQL injection': { 'Penetration testing': true, 'Firewall': true }
        }
      },
      {
        id: 'q4b', label: '(b)', marks: 3, type: 'parsons',
        text: 'Name <strong>and</strong> describe <strong>one</strong> threat to a computer system that is not given in question 4(a).',
        blocks: [
          { text: 'Phishing.', correct: true, order: 0 },
          { text: 'Fake emails are sent to a person', correct: true, order: 1 },
          { text: 'that appear to come from', correct: true, order: 2 },
          { text: 'a legitimate / trusted source.', correct: true, order: 3 },
          { text: 'The user clicks a link and', correct: true, order: 4 },
          { text: 'gives away their personal data.', correct: true, order: 5 },
          { text: 'A firewall blocks all emails', correct: false },
          { text: 'The computer speeds up', correct: false },
          { text: 'Files are downloaded faster', correct: false }
        ]
      }
    ]
  },

  // ============================================================
  // QUESTION 5: Systems, Storage & Software (22 marks)
  // ============================================================
  {
    id: 'q5', number: '5', title: 'Storage, Software & Client-Server', totalMarks: 22,
    intro: 'An artist has a computer that they use to create images. Their computer has both hardware and software.',
    subs: [
      {
        id: 'q5ai', label: '(a)(i)', marks: 2, type: 'parsons',
        text: 'Explain why a computer needs both primary <strong>and</strong> secondary storage.',
        blocks: [
          { text: 'Primary storage is needed to store', correct: true, order: 0 },
          { text: 'data/instructions that the processor', correct: true, order: 1 },
          { text: 'currently needs to access.', correct: true, order: 2 },
          { text: 'Secondary storage is needed to store', correct: true, order: 3 },
          { text: 'data permanently / long-term', correct: true, order: 4 },
          { text: 'when the power is turned off.', correct: true, order: 5 },
          { text: 'Primary storage is permanent', correct: false },
          { text: 'Secondary is faster than RAM', correct: false },
          { text: 'Both store data temporarily', correct: false }
        ]
      },
      {
        id: 'q5aii', label: '(a)(ii)', marks: 2, type: 'parsons',
        text: 'Give <strong>one</strong> example of a secondary storage device that the artist\'s computer will have <strong>and</strong> an example of the data that will be stored on it.',
        blocks: [
          { text: 'Hard drive / SSD.', correct: true, order: 0 },
          { text: 'Stores the artist\'s image files,', correct: true, order: 1 },
          { text: 'documents and software.', correct: true, order: 2 },
          { text: 'RAM.', correct: false },
          { text: 'Cache memory.', correct: false },
          { text: 'Stores data only while powered on.', correct: false }
        ]
      },
      {
        id: 'q5aiii', label: '(a)(iii)', marks: 4, type: 'true-false',
        text: 'The computer has Virtual Memory (VM). Tick the <strong>True</strong> column for correct statements. Re-write any incorrect statement to make it true.',
        statements: [
          {
            text: 'A section of primary storage is partitioned to act as virtual memory',
            isTrue: false,
            correction: 'A section of secondary storage is partitioned to act as virtual memory'
          },
          {
            text: 'Data from ROM is transferred into VM',
            isTrue: false,
            correction: 'Data from RAM is transferred into VM'
          },
          {
            text: 'VM is needed when RAM is full, or nearly full',
            isTrue: true,
            correction: ''
          },
          {
            text: 'Data from VM is transferred back to secondary storage when needed',
            isTrue: false,
            correction: 'Data from VM is transferred back to RAM when needed'
          }
        ]
      },
      {
        id: 'q5b', label: '(b)', marks: 1, type: 'parsons',
        text: 'State the need for utility software in a computer.',
        blocks: [
          { text: 'To perform housekeeping actions', correct: true, order: 0 },
          { text: 'that help maintain the computer', correct: true, order: 1 },
          { text: 'and keep it running efficiently.', correct: true, order: 2 },
          { text: 'To play games', correct: false },
          { text: 'To browse the internet', correct: false }
        ]
      },
      {
        id: 'q5ci', label: '(c)(i)', marks: 3, type: 'parsons',
        text: 'The artist uploads images to be displayed on a website. This is a client-server relationship. Identify the computer acting as the <strong>client</strong> and justify your choice.',
        blocks: [
          { text: 'The artist\'s computer is the client.', correct: true, order: 0 },
          { text: 'It sends a request', correct: true, order: 1 },
          { text: 'to the web server', correct: true, order: 2 },
          { text: 'to upload/store the image files.', correct: true, order: 3 },
          { text: 'It does not store data', correct: true, order: 4 },
          { text: 'for others to access.', correct: true, order: 5 },
          { text: 'The web server is the client.', correct: false },
          { text: 'It processes all incoming requests.', correct: false },
          { text: 'It hosts the website permanently.', correct: false }
        ]
      },
      {
        id: 'q5cii', label: '(c)(ii)', marks: 3, type: 'parsons',
        text: 'Identify the computer that is acting as the <strong>server</strong> in this scenario <strong>and</strong> justify your choice.',
        blocks: [
          { text: 'The web server', correct: true, order: 0 },
          { text: 'is acting as the server.', correct: true, order: 1 },
          { text: 'The images are stored on', correct: true, order: 2 },
          { text: 'and hosted by the web server.', correct: true, order: 3 },
          { text: 'It receives and processes', correct: true, order: 4 },
          { text: 'the upload request from the artist.', correct: true, order: 5 },
          { text: 'The artist\'s computer is the server.', correct: false },
          { text: 'It only sends data, never receives.', correct: false },
          { text: 'It has no storage capability.', correct: false }
        ]
      },
      {
        id: 'q5di', label: '(d)(i)', marks: 4, type: 'parsons',
        text: 'Describe <strong>two</strong> benefits to the artist and programmer of releasing the software as proprietary.',
        blocks: [
          { text: 'The authors can earn money', correct: true, order: 0 },
          { text: 'by selling the software for a fee.', correct: true, order: 1 },
          { text: 'No-one can see the source code,', correct: true, order: 2 },
          { text: 'so users cannot edit or change', correct: true, order: 3 },
          { text: 'the software.', correct: true, order: 4 },
          { text: 'It cannot be copied or resold,', correct: true, order: 5 },
          { text: 'giving more control over', correct: true, order: 6 },
          { text: 'their intellectual property.', correct: true, order: 7 },
          { text: 'Anyone can view the source code', correct: false },
          { text: 'Users can modify it freely', correct: false },
          { text: 'It must be given away for free', correct: false }
        ]
      },
      {
        id: 'q5dii', label: '(d)(ii)', marks: 2, type: 'parsons',
        text: 'Describe <strong>one</strong> benefit to the <strong>users</strong> of releasing the software as open source.',
        blocks: [
          { text: 'Users can view and edit', correct: true, order: 0 },
          { text: 'the source code', correct: true, order: 1 },
          { text: 'to tailor / improve the software', correct: true, order: 2 },
          { text: 'to do what they need.', correct: true, order: 3 },
          { text: 'Users cannot see the code', correct: false },
          { text: 'The software costs a lot', correct: false },
          { text: 'No-one can redistribute it', correct: false }
        ]
      }
    ]
  },

  // ============================================================
  // QUESTION 6: Ethics / Privacy / Legal — Extended Response (8 marks)
  // ============================================================
  {
    id: 'q6', number: '6*', title: 'Ethics, Privacy & Legal Issues (Extended)', totalMarks: 8,
    intro: 'A shopping centre has a security system that includes CCTV cameras. The security system is being upgraded to include the use of facial recognition to identify, track and record individuals throughout the shopping centre.',
    subs: [
      {
        id: 'q6_ethical', label: 'Ethical Issues', marks: 0, type: 'parsons',
        text: 'Build the <strong>ethical issues</strong> part of your answer by selecting and ordering the correct blocks.',
        blocks: [
          { text: 'Facial recognition can help identify', correct: true, order: 0 },
          { text: 'known shoplifters and criminals,', correct: true, order: 1 },
          { text: 'making the centre safer for everyone.', correct: true, order: 2 },
          { text: 'However, people may feel uncomfortable', correct: true, order: 3 },
          { text: 'being constantly monitored and identified.', correct: true, order: 4 },
          { text: 'The technology could be biased', correct: true, order: 5 },
          { text: 'and discriminate against certain groups.', correct: true, order: 6 },
          { text: 'Everyone enjoys being watched', correct: false },
          { text: 'Cameras are too expensive to use', correct: false }
        ]
      },
      {
        id: 'q6_privacy', label: 'Privacy Issues', marks: 0, type: 'parsons',
        text: 'Build the <strong>privacy issues</strong> part of your answer.',
        blocks: [
          { text: 'Personal biometric data is collected', correct: true, order: 0 },
          { text: 'without individuals\' explicit consent.', correct: true, order: 1 },
          { text: 'People\'s movements are tracked', correct: true, order: 2 },
          { text: 'throughout the shopping centre.', correct: true, order: 3 },
          { text: 'Shoppers cannot easily opt out', correct: true, order: 4 },
          { text: 'of being recorded and identified.', correct: true, order: 5 },
          { text: 'Privacy is not important in public', correct: false },
          { text: 'Biometric data is harmless', correct: false }
        ]
      },
      {
        id: 'q6_legal', label: 'Legal Issues', marks: 8, type: 'parsons',
        text: 'Build the <strong>legal issues</strong> part of your answer. <em>(All 8 marks for Q6 are awarded here based on your overall response quality.)</em>',
        blocks: [
          { text: 'The Data Protection Act must be followed', correct: true, order: 0 },
          { text: 'or the company could be fined.', correct: true, order: 1 },
          { text: 'Customers must be informed', correct: true, order: 2 },
          { text: 'that the system is in use.', correct: true, order: 3 },
          { text: 'Data must be stored securely', correct: true, order: 4 },
          { text: 'and only kept for a specified period.', correct: true, order: 5 },
          { text: 'There are no laws about surveillance', correct: false },
          { text: 'Companies can keep data forever', correct: false }
        ]
      }
    ]
  },

  // ============================================================
  // QUESTION 7: Embedded Systems (3 marks)
  // ============================================================
  {
    id: 'q7', number: '7', title: 'Embedded Systems', totalMarks: 3,
    intro: 'A car comes with many embedded systems, for example parking sensors.',
    subs: [
      {
        id: 'q7a', label: '', marks: 3, type: 'parsons',
        text: 'Identify <strong>one</strong> other embedded system that could be found in a car and explain why this is an embedded system.',
        blocks: [
          { text: 'Anti-lock braking system (ABS)', correct: true, order: 0 },
          { text: 'is an embedded system.', correct: true, order: 1 },
          { text: 'It is designed for a single', correct: true, order: 2 },
          { text: 'specific purpose.', correct: true, order: 3 },
          { text: 'It has its own dedicated processor', correct: true, order: 4 },
          { text: 'built into the car.', correct: true, order: 5 },
          { text: 'A laptop is an embedded system', correct: false },
          { text: 'It can run any software', correct: false },
          { text: 'The user can reprogram it easily', correct: false }
        ]
      }
    ]
  }
];

// ── State ──────────────────────────────────────────────────────
const state = {
  scores: {},        // { subId: marks }
  checked: {},       // { subId: true }
  sortables: {},     // SortableJS instances
  totalPossible: 0
};

// ── Initialise ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  state.totalPossible = questions.reduce((s, q) => s + q.totalMarks, 0);
  document.getElementById('total-possible').textContent = state.totalPossible;
  renderNav();
  renderQuestions();
});

// ── Navigation ─────────────────────────────────────────────────
function renderNav() {
  const nav = document.getElementById('nav-strip');
  nav.innerHTML = questions.map(q =>
    `<button class="nav-btn" id="nav-${q.id}" onclick="scrollToQ('${q.id}')">Q${q.number}</button>`
  ).join('');
}

function scrollToQ(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Render All Questions ───────────────────────────────────────
function renderQuestions() {
  const main = document.getElementById('main');
  main.innerHTML = questions.map(q => renderQuestionCard(q)).join('');
  // Init Sortable instances after DOM is ready
  questions.forEach(q => q.subs.forEach(s => {
    if (s.type === 'parsons') initParsons(s);
    if (s.type === 'matching') initMatching(s);
  }));
}

function renderQuestionCard(q) {
  const subsHtml = q.subs.map(s => renderSub(s)).join('');
  return `
    <div class="q-card" id="${q.id}">
      <div class="q-header" onclick="toggleCard('${q.id}')">
        <div class="q-number" id="qnum-${q.id}">Q${q.number}</div>
        <div class="q-title">${q.title}</div>
        <div class="q-marks">${q.totalMarks} marks</div>
        <div class="q-chevron">&#9660;</div>
      </div>
      <div class="q-body">
        ${q.intro ? `<p class="q-text">${q.intro}</p>` : ''}
        ${subsHtml}
      </div>
    </div>`;
}

function toggleCard(id) {
  document.getElementById(id).classList.toggle('open');
}

// ── Render Sub-question by Type ────────────────────────────────
function renderSub(s) {
  let inner = '';
  switch (s.type) {
    case 'mcq': inner = renderMCQ(s); break;
    case 'mcq-multi': inner = renderMCQMulti(s); break;
    case 'parsons': inner = renderParsons(s); break;
    case 'matching': inner = renderMatching(s); break;
    case 'fill-blank': inner = renderFillBlank(s); break;
    case 'table-input': inner = renderTableInput(s); break;
    case 'grid-checkbox': inner = renderGridCheckbox(s); break;
    case 'pixel-grid': inner = renderPixelGrid(s); break;
    case 'input': inner = renderInput(s); break;
    case 'binary-addition': inner = renderBinaryAddition(s); break;
    case 'true-false': inner = renderTrueFalse(s); break;
  }
  return `
    <div class="sub-q" id="${s.id}">
      ${s.label ? `<div class="sub-q-label">${s.label} [${s.marks} mark${s.marks !== 1 ? 's' : ''}]</div>` : ''}
      <div class="sub-q-text">${s.text}</div>
      ${inner}
      <div class="btn-row">
        <button class="btn btn-check" onclick="checkAnswer('${s.id}')">Check Answer</button>
        <button class="btn btn-reset" onclick="resetAnswer('${s.id}')">Reset</button>
      </div>
      <div class="feedback" id="fb-${s.id}"></div>
    </div>`;
}

// ── MCQ (single) ───────────────────────────────────────────────
function renderMCQ(s) {
  return `<div class="mcq-options" id="opts-${s.id}">` +
    s.options.map((o, i) =>
      `<div class="mcq-option" data-idx="${i}" onclick="selectMCQ('${s.id}', ${i})">
        <div class="radio"></div><span>${o.text}</span>
      </div>`
    ).join('') + '</div>';
}

function selectMCQ(id, idx) {
  if (state.checked[id]) return;
  const container = document.getElementById('opts-' + id);
  container.querySelectorAll('.mcq-option').forEach(el => el.classList.remove('selected'));
  container.querySelector(`[data-idx="${idx}"]`).classList.add('selected');
}

// ── MCQ (multi) ────────────────────────────────────────────────
function renderMCQMulti(s) {
  return `<div class="mcq-options" id="opts-${s.id}">` +
    s.options.map((o, i) =>
      `<div class="mcq-option" data-idx="${i}" onclick="toggleMCQMulti('${s.id}', ${i}, ${s.maxSelect})">
        <div class="checkbox"></div><span>${o.text}</span>
      </div>`
    ).join('') + '</div>';
}

function toggleMCQMulti(id, idx, max) {
  if (state.checked[id]) return;
  const el = document.querySelector(`#opts-${id} [data-idx="${idx}"]`);
  const selected = document.querySelectorAll(`#opts-${id} .selected`);
  if (el.classList.contains('selected')) {
    el.classList.remove('selected');
  } else if (selected.length < max) {
    el.classList.add('selected');
  }
}

// ── Parsons Puzzle ─────────────────────────────────────────────
function renderParsons(s) {
  const shuffled = [...s.blocks].sort(() => Math.random() - 0.5);
  const dir = s.horizontal ? 'horizontal' : '';
  return `
    <div class="parsons-container">
      <div class="parsons-label">Available Blocks</div>
      <div class="block-bank" id="bank-${s.id}">
        ${shuffled.map((b, i) =>
          `<div class="block" data-text="${esc(b.text)}" data-correct="${b.correct}" data-order="${b.order ?? -1}">
            <span class="grip">\u2630</span>${esc(b.text)}
          </div>`
        ).join('')}
      </div>
      <div class="parsons-label">Your Answer (drag blocks here)</div>
      <div class="drop-zone ${dir}" id="drop-${s.id}">
        <div class="drop-zone-placeholder">Drag blocks here to build your answer...</div>
      </div>
    </div>`;
}

function initParsons(s) {
  const bank = document.getElementById('bank-' + s.id);
  const drop = document.getElementById('drop-' + s.id);
  if (!bank || !drop) return;

  const opts = {
    group: 'parsons-' + s.id,
    animation: 200,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onAdd: function() { removePlaceholder(drop); },
    onRemove: function() { addPlaceholderIfEmpty(drop); }
  };

  state.sortables[s.id + '-bank'] = Sortable.create(bank, { ...opts, sort: false });
  state.sortables[s.id + '-drop'] = Sortable.create(drop, opts);
}

function removePlaceholder(drop) {
  const ph = drop.querySelector('.drop-zone-placeholder');
  if (ph) ph.remove();
}

function addPlaceholderIfEmpty(drop) {
  if (drop.querySelectorAll('.block').length === 0 && !drop.querySelector('.drop-zone-placeholder')) {
    drop.insertAdjacentHTML('beforeend', '<div class="drop-zone-placeholder">Drag blocks here to build your answer...</div>');
  }
}

// ── Matching ───────────────────────────────────────────────────
function renderMatching(s) {
  const shuffledPool = [...s.pool].sort(() => Math.random() - 0.5);
  return `
    <div class="parsons-label">Protocol Bank (drag to table)</div>
    <div class="match-bank" id="mbank-${s.id}">
      ${shuffledPool.map(p =>
        `<div class="block" data-protocol="${esc(p)}"><span class="grip">\u2630</span>${esc(p)}</div>`
      ).join('')}
    </div>
    <table class="match-table">
      <tr><th>Task</th><th>Protocol</th></tr>
      ${s.tasks.map((t, i) =>
        `<tr><td>${t.task}</td><td><div class="match-drop-cell" id="mcell-${s.id}-${i}"></div></td></tr>`
      ).join('')}
    </table>`;
}

function initMatching(s) {
  const bank = document.getElementById('mbank-' + s.id);
  if (!bank) return;
  const group = 'match-' + s.id;
  state.sortables[s.id + '-mbank'] = Sortable.create(bank, {
    group, animation: 200, sort: false,
    ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen'
  });
  s.tasks.forEach((t, i) => {
    const cell = document.getElementById(`mcell-${s.id}-${i}`);
    state.sortables[`${s.id}-mcell-${i}`] = Sortable.create(cell, {
      group, animation: 200,
      ghostClass: 'sortable-ghost',
      onAdd: function(evt) {
        // Only allow one block per cell
        const blocks = cell.querySelectorAll('.block');
        if (blocks.length > 1) {
          bank.appendChild(blocks[0]); // move old one back
        }
        cell.classList.add('has-block');
      },
      onRemove: function() {
        if (cell.querySelectorAll('.block').length === 0) cell.classList.remove('has-block');
      }
    });
  });
}

// ── Fill-in-Blank ──────────────────────────────────────────────
function renderFillBlank(s) {
  const parts = s.template.split(/\{(\d+)\}/);
  let html = '<div class="fill-text">';
  parts.forEach((p, i) => {
    if (i % 2 === 0) {
      html += p;
    } else {
      html += `<span class="fill-blank" id="blank-${s.id}-${p}" data-idx="${p}" onclick="fillBlankClick('${s.id}', ${p})">&nbsp;</span>`;
    }
  });
  html += '</div>';

  const shuffled = [...s.wordBank].sort(() => Math.random() - 0.5);
  html += `<div class="parsons-label" style="margin-top:1rem">Word Bank (click a blank, then click a word)</div>`;
  html += `<div class="word-bank" id="wbank-${s.id}" onclick="handleWordBankClick(event, '${s.id}')">` +
    shuffled.map(w =>
      `<div class="word-block" data-word="${esc(w)}">${esc(w)}</div>`
    ).join('') + '</div>';

  return html;
}

let activeFillBlank = null;

function fillBlankClick(subId, blankIdx) {
  if (state.checked[subId]) return;
  // Remove highlight from all blanks in this sub
  document.querySelectorAll(`#${subId} .fill-blank`).forEach(b => b.style.outline = '');
  const blank = document.getElementById(`blank-${subId}-${blankIdx}`);
  blank.style.outline = '2px solid var(--primary)';
  activeFillBlank = { subId, blankIdx };

  // If blank already has a word, return it to bank
  const current = blank.dataset.currentWord;
  if (current) {
    const bankWord = document.querySelector(`#wbank-${subId} [data-word="${current}"]`);
    if (bankWord) bankWord.classList.remove('used');
    blank.textContent = '\u00a0';
    blank.classList.remove('has-word');
    delete blank.dataset.currentWord;
  }
}

function handleWordBankClick(event, subId) {
  const wordEl = event.target.closest('.word-block');
  if (!wordEl || wordEl.classList.contains('used')) return;
  pickWord(subId, wordEl.dataset.word);
}

function pickWord(subId, word) {
  if (state.checked[subId]) return;
  if (!activeFillBlank || activeFillBlank.subId !== subId) return;
  const blank = document.getElementById(`blank-${subId}-${activeFillBlank.blankIdx}`);
  const bankWord = document.querySelector(`#wbank-${subId} [data-word="${word}"]`);

  // Return old word if any
  const old = blank.dataset.currentWord;
  if (old) {
    const oldEl = document.querySelector(`#wbank-${subId} [data-word="${old}"]`);
    if (oldEl) oldEl.classList.remove('used');
  }

  blank.textContent = word;
  blank.classList.add('has-word');
  blank.dataset.currentWord = word;
  if (bankWord) bankWord.classList.add('used');
  blank.style.outline = '';
  activeFillBlank = null;
}

// ── Table Input ────────────────────────────────────────────────
function renderTableInput(s) {
  let html = '<table class="data-table"><tr><th>Denary</th><th>8-bit Binary</th><th>Hexadecimal</th></tr>';
  s.rows.forEach((r, i) => {
    html += '<tr>';
    html += `<td>${r.missing === 'denary' ? `<input class="cell-input" id="cell-${s.id}-${i}" placeholder="?">` : r.denary}</td>`;
    html += `<td>${r.missing === 'binary' ? `<input class="cell-input" id="cell-${s.id}-${i}" placeholder="?" maxlength="8">` : r.binary}</td>`;
    html += `<td>${r.missing === 'hex' ? `<input class="cell-input" id="cell-${s.id}-${i}" placeholder="?" maxlength="4">` : r.hex}</td>`;
    html += '</tr>';
  });
  html += '</table>';
  return html;
}

// ── Grid Checkbox ──────────────────────────────────────────────
function renderGridCheckbox(s) {
  let html = '<table class="grid-table"><tr><th>Threat</th>';
  s.cols.forEach(c => { html += `<th>${c}</th>`; });
  html += '</tr>';
  s.rows.forEach((r, ri) => {
    html += `<tr><td>${r}</td>`;
    s.cols.forEach((c, ci) => {
      html += `<td><div class="grid-check" id="gc-${s.id}-${ri}-${ci}" onclick="toggleGridCheck('${s.id}',${ri},${ci})"></div></td>`;
    });
    html += '</tr>';
  });
  html += '</table>';
  return html;
}

function toggleGridCheck(id, ri, ci) {
  if (state.checked[id]) return;
  const el = document.getElementById(`gc-${id}-${ri}-${ci}`);
  el.classList.toggle('checked');
  el.textContent = el.classList.contains('checked') ? '\u2713' : '';
}

// ── Pixel Grid ─────────────────────────────────────────────────
function renderPixelGrid(s) {
  const colourOrder = ['empty', 'red', 'green', 'blue', 'purple'];
  let html = `
    <div class="pixel-grid-container">
      <div class="binary-display">${s.binaryData.match(/.{4}/g).join(' ')}</div>
      <div class="colour-legend">
        <div class="colour-swatch"><div class="swatch" style="background:#ef5350"></div>Red = 0000</div>
        <div class="colour-swatch"><div class="swatch" style="background:#66bb6a"></div>Green = 0010</div>
        <div class="colour-swatch"><div class="swatch" style="background:#42a5f5"></div>Blue = 1000</div>
        <div class="colour-swatch"><div class="swatch" style="background:#ab47bc"></div>Purple = 0110</div>
      </div>
      <div class="pixel-grid" style="grid-template-columns: repeat(${s.width}, 80px)">`;
  for (let r = 0; r < s.height; r++) {
    for (let c = 0; c < s.width; c++) {
      html += `<div class="pixel-cell empty" id="px-${s.id}-${r}-${c}"
                data-colour="empty" data-row="${r}" data-col="${c}"
                onclick="cyclePixel('${s.id}',${r},${c})">click</div>`;
    }
  }
  html += '</div></div>';
  return html;
}

function cyclePixel(id, r, c) {
  if (state.checked[id]) return;
  const el = document.getElementById(`px-${id}-${r}-${c}`);
  const order = ['empty', 'red', 'green', 'blue', 'purple'];
  const current = el.dataset.colour;
  const next = order[(order.indexOf(current) + 1) % order.length];
  el.className = 'pixel-cell ' + next;
  el.dataset.colour = next;
  el.textContent = next === 'empty' ? 'click' : next;
}

// ── Simple Input ───────────────────────────────────────────────
function renderInput(s) {
  return `<input class="answer-input" id="inp-${s.id}" placeholder="${s.placeholder || 'Type your answer...'}" autocomplete="off">`;
}

// ── Binary Addition ────────────────────────────────────────────
function renderBinaryAddition(s) {
  return `
    <div style="font-family: 'Courier New', monospace; font-size: 1rem; line-height: 2;">
      <div class="binary-row"><span style="width:30px;display:inline-block"></span><span style="letter-spacing:6px; font-weight:700">${s.num1}</span></div>
      <div class="binary-row"><span style="width:14px;display:inline-block">+</span><span style="letter-spacing:6px; font-weight:700">${s.num2}</span></div>
      <hr style="border:1px solid #333; width:200px; margin: .25rem 0">
      <div class="binary-row">
        <span style="width:30px;display:inline-block"></span>
        <div class="binary-input-group">
          ${Array(8).fill(0).map((_, i) =>
            `<input class="binary-bit" id="bit-${s.id}-${i}" maxlength="1" oninput="moveBit('${s.id}',${i})">`
          ).join('')}
        </div>
      </div>
    </div>`;
}

function moveBit(id, i) {
  const el = document.getElementById(`bit-${id}-${i}`);
  el.value = el.value.replace(/[^01]/g, '');
  if (el.value && i < 7) {
    document.getElementById(`bit-${id}-${i + 1}`)?.focus();
  }
}

// ── True/False Table ───────────────────────────────────────────
function renderTrueFalse(s) {
  let html = `<table class="tf-table">
    <tr><th style="width:35%">Statement</th><th style="width:10%">True</th><th style="width:55%">False — rewrite to make it true</th></tr>`;
  s.statements.forEach((st, i) => {
    html += `<tr>
      <td>${st.text}</td>
      <td style="text-align:center"><div class="tf-tick" id="tf-${s.id}-${i}" onclick="toggleTF('${s.id}',${i})"></div></td>
      <td><textarea class="tf-input" id="tfi-${s.id}-${i}" placeholder="Rewrite the statement here if false..."  rows="2"></textarea></td>
    </tr>`;
  });
  html += '</table>';
  return html;
}

function toggleTF(id, i) {
  if (state.checked[id]) return;
  const el = document.getElementById(`tf-${id}-${i}`);
  el.classList.toggle('ticked');
  el.textContent = el.classList.contains('ticked') ? '\u2713' : '';
}

// ── Check Answer ───────────────────────────────────────────────
function checkAnswer(subId) {
  if (state.checked[subId]) return;
  const sub = findSub(subId);
  if (!sub) return;

  let marks = 0;
  switch (sub.type) {
    case 'mcq': marks = checkMCQ(sub); break;
    case 'mcq-multi': marks = checkMCQMulti(sub); break;
    case 'parsons': marks = checkParsons(sub); break;
    case 'matching': marks = checkMatching(sub); break;
    case 'fill-blank': marks = checkFillBlank(sub); break;
    case 'table-input': marks = checkTableInput(sub); break;
    case 'grid-checkbox': marks = checkGridCheckbox(sub); break;
    case 'pixel-grid': marks = checkPixelGrid(sub); break;
    case 'input': marks = checkInput(sub); break;
    case 'binary-addition': marks = checkBinaryAddition(sub); break;
    case 'true-false': marks = checkTrueFalse(sub); break;
  }

  state.scores[subId] = marks;
  state.checked[subId] = true;
  showFeedback(subId, marks, sub.marks);
  updateTotalScore();
}

function resetAnswer(subId) {
  const sub = findSub(subId);
  if (!sub) return;
  delete state.scores[subId];
  delete state.checked[subId];

  // Hide feedback
  const fb = document.getElementById('fb-' + subId);
  fb.className = 'feedback';
  fb.textContent = '';

  // Re-render the sub-question
  const container = document.getElementById(subId);
  if (!container) return;

  // Full re-render of this sub
  container.outerHTML = renderSub(sub);

  // Re-init if parsons or matching
  if (sub.type === 'parsons') initParsons(sub);
  if (sub.type === 'matching') initMatching(sub);

  updateTotalScore();
}

// ── Check Functions ────────────────────────────────────────────
function checkMCQ(s) {
  const container = document.getElementById('opts-' + s.id);
  const selected = container.querySelector('.selected');
  let marks = 0;
  container.querySelectorAll('.mcq-option').forEach((el, i) => {
    if (s.options[i].correct) {
      el.classList.add('correct');
      if (el.classList.contains('selected')) marks = s.marks;
    } else if (el.classList.contains('selected')) {
      el.classList.add('wrong');
    }
  });
  return marks;
}

function checkMCQMulti(s) {
  const container = document.getElementById('opts-' + s.id);
  let allCorrect = true;
  container.querySelectorAll('.mcq-option').forEach((el, i) => {
    const isSelected = el.classList.contains('selected');
    if (s.options[i].correct) {
      el.classList.add('correct');
      if (!isSelected) allCorrect = false;
    } else if (isSelected) {
      el.classList.add('wrong');
      allCorrect = false;
    }
  });
  return allCorrect ? s.marks : 0;
}

function checkParsons(s) {
  const drop = document.getElementById('drop-' + s.id);
  const blocks = drop.querySelectorAll('.block');
  const correctBlocks = s.blocks.filter(b => b.correct).sort((a, b) => a.order - b.order);
  let marks = 0;
  const total = correctBlocks.length;

  // Mark blocks in the bank as distractors if wrong
  const bank = document.getElementById('bank-' + s.id);
  bank.querySelectorAll('.block').forEach(b => {
    if (b.dataset.correct === 'false') b.classList.add('distractor-marked');
  });

  let correctCount = 0;
  blocks.forEach((b, i) => {
    if (b.dataset.correct === 'true' && i < total && b.dataset.text === correctBlocks[i].text) {
      b.classList.add('correct-block');
      correctCount++;
    } else if (b.dataset.correct === 'false') {
      b.classList.add('wrong-block');
    } else if (b.dataset.correct === 'true') {
      // Correct block but wrong position — partial
      b.classList.add('correct-block');
      b.style.opacity = '0.7';
      correctCount += 0.5;
    }
  });

  // Also check: are there correct blocks left in the bank?
  bank.querySelectorAll('.block').forEach(b => {
    if (b.dataset.correct === 'true') b.style.outline = '2px dashed var(--error)';
  });

  // Calculate marks proportionally
  const ratio = correctCount / total;
  marks = Math.round(ratio * s.marks);
  return marks;
}

function checkMatching(s) {
  let marks = 0;
  s.tasks.forEach((t, i) => {
    const cell = document.getElementById(`mcell-${s.id}-${i}`);
    const block = cell.querySelector('.block');
    if (block) {
      const protocol = block.dataset.protocol;
      if (t.answer.includes(protocol)) {
        block.classList.add('correct-block');
        marks++;
      } else {
        block.classList.add('wrong-block');
      }
    }
  });
  return Math.min(marks, s.marks);
}

function checkFillBlank(s) {
  let marks = 0;
  s.blanks.forEach((b, i) => {
    const el = document.getElementById(`blank-${s.id}-${i}`);
    const word = (el.dataset.currentWord || '').toLowerCase().trim();
    const correct = b.answer.map(a => a.toLowerCase());
    if (correct.includes(word)) {
      el.classList.add('correct-blank');
      marks++;
    } else {
      el.classList.add('wrong-blank');
    }
  });
  return Math.min(marks, s.marks);
}

function checkTableInput(s) {
  let marks = 0;
  s.rows.forEach((r, i) => {
    const inp = document.getElementById(`cell-${s.id}-${i}`);
    if (!inp) return;
    const val = inp.value.trim().toUpperCase();
    if (val === r.answer.toUpperCase()) {
      inp.classList.add('correct-input');
      marks++;
    } else {
      inp.classList.add('wrong-input');
      inp.value = inp.value + '  \u2192 ' + r.answer;
    }
  });
  return Math.min(marks, s.marks);
}

function checkGridCheckbox(s) {
  let marks = 0;
  s.rows.forEach((r, ri) => {
    let rowCorrect = true;
    s.cols.forEach((c, ci) => {
      const el = document.getElementById(`gc-${s.id}-${ri}-${ci}`);
      const isChecked = el.classList.contains('checked');
      const shouldBe = !!(s.answers[r] && s.answers[r][c]);
      if (isChecked && shouldBe) {
        el.classList.add('correct-check');
      } else if (isChecked && !shouldBe) {
        el.classList.add('wrong-check');
        rowCorrect = false;
      } else if (!isChecked && shouldBe) {
        el.style.border = '2px dashed var(--success)';
        el.textContent = '\u2713';
        el.style.color = 'var(--success)';
        rowCorrect = false;
      }
    });
    if (rowCorrect) marks++;
  });
  return Math.min(marks, s.marks);
}

function checkPixelGrid(s) {
  let marks = 0;
  let total = s.width * s.height;
  let correct = 0;
  for (let r = 0; r < s.height; r++) {
    for (let c = 0; c < s.width; c++) {
      const el = document.getElementById(`px-${s.id}-${r}-${c}`);
      const expected = s.answer[r][c];
      if (el.dataset.colour === expected) {
        el.classList.add('correct-cell');
        correct++;
      } else {
        el.classList.add('wrong-cell');
        el.textContent = expected;
      }
    }
  }
  // 1 mark for first row, 1 mark for rest
  let firstRowCorrect = true;
  for (let c = 0; c < s.width; c++) {
    if (document.getElementById(`px-${s.id}-0-${c}`).dataset.colour !== s.answer[0][c]) firstRowCorrect = false;
  }
  let restCorrect = true;
  for (let r = 1; r < s.height; r++) {
    for (let c = 0; c < s.width; c++) {
      if (document.getElementById(`px-${s.id}-${r}-${c}`).dataset.colour !== s.answer[r][c]) restCorrect = false;
    }
  }
  if (firstRowCorrect) marks++;
  if (restCorrect) marks++;
  return Math.min(marks, s.marks);
}

function checkInput(s) {
  const inp = document.getElementById('inp-' + s.id);
  const val = inp.value.trim();
  if (val === s.answer) {
    inp.classList.add('correct-input');
    return s.marks;
  } else {
    inp.classList.add('wrong-input');
    inp.value = val + '  \u2192 ' + s.answer;
    return 0;
  }
}

function checkBinaryAddition(s) {
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += document.getElementById(`bit-${s.id}-${i}`).value || '_';
  }
  let marks = 0;
  if (result === s.answer) {
    marks++;
    for (let i = 0; i < 8; i++) {
      document.getElementById(`bit-${s.id}-${i}`).style.borderColor = 'var(--success)';
      document.getElementById(`bit-${s.id}-${i}`).style.background = 'var(--correct-bg)';
    }
  } else {
    for (let i = 0; i < 8; i++) {
      const el = document.getElementById(`bit-${s.id}-${i}`);
      if (el.value === s.answer[i]) {
        el.style.borderColor = 'var(--success)';
        el.style.background = 'var(--correct-bg)';
      } else {
        el.style.borderColor = 'var(--error)';
        el.style.background = 'var(--wrong-bg)';
        el.value = s.answer[i];
      }
    }
  }
  // Award 1 mark for attempt with some correct working even if answer wrong
  // Full 2 marks for correct answer
  if (result === s.answer) marks = 2;
  else {
    let correctBits = 0;
    for (let i = 0; i < 8; i++) {
      if (result[i] === s.answer[i]) correctBits++;
    }
    if (correctBits >= 4) marks = 1;
  }
  return Math.min(marks, s.marks);
}

function checkTrueFalse(s) {
  let marks = 0;
  s.statements.forEach((st, i) => {
    const tick = document.getElementById(`tf-${s.id}-${i}`);
    const input = document.getElementById(`tfi-${s.id}-${i}`);
    const ticked = tick.classList.contains('ticked');

    if (st.isTrue && ticked) {
      tick.style.background = 'var(--success)';
      tick.style.borderColor = 'var(--success)';
      marks++;
    } else if (!st.isTrue && !ticked) {
      // Check the correction text
      const correction = input.value.trim().toLowerCase();
      const expected = st.correction.toLowerCase();
      // Check if key words are present
      const keyWords = getKeyWords(st, expected);
      const hasKey = keyWords.some(kw => correction.includes(kw));
      if (hasKey && correction.length > 10) {
        input.style.borderColor = 'var(--success)';
        input.style.background = 'var(--correct-bg)';
        marks++;
      } else {
        input.style.borderColor = 'var(--error)';
        input.style.background = 'var(--wrong-bg)';
        input.value += '\n\u2192 ' + st.correction;
      }
    } else if (st.isTrue && !ticked) {
      tick.style.background = '#fff';
      tick.style.borderColor = 'var(--error)';
      tick.textContent = '\u2713';
      tick.style.color = 'var(--success)';
    } else {
      // Ticked but should be false
      tick.style.background = 'var(--error)';
      tick.style.borderColor = 'var(--error)';
      input.value = '\u2192 ' + st.correction;
      input.style.borderColor = 'var(--error)';
    }
  });
  return Math.min(marks, s.marks);
}

function getKeyWords(st, expected) {
  // Extract distinguishing keywords from the correction
  if (expected.includes('secondary storage')) return ['secondary'];
  if (expected.includes('from ram')) return ['ram'];
  if (expected.includes('back to ram')) return ['ram'];
  return [expected.split(' ').slice(0, 3).join(' ')];
}

// ── Feedback & Score ───────────────────────────────────────────
function showFeedback(subId, marks, total) {
  const fb = document.getElementById('fb-' + subId);
  if (marks === total) {
    fb.className = 'feedback show success';
    fb.textContent = `\u2713 Perfect! ${marks}/${total} mark${total !== 1 ? 's' : ''}`;
  } else if (marks > 0) {
    fb.className = 'feedback show partial';
    fb.textContent = `\u25CB Partial: ${marks}/${total} mark${total !== 1 ? 's' : ''}. Review the highlighted blocks.`;
  } else {
    fb.className = 'feedback show error';
    fb.textContent = `\u2717 ${marks}/${total}. The correct answer is shown above.`;
  }
}

function updateTotalScore() {
  const total = Object.values(state.scores).reduce((a, b) => a + b, 0);
  document.getElementById('total-score').textContent = total;
  const pct = (total / state.totalPossible) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // Update nav buttons
  questions.forEach(q => {
    const allDone = q.subs.every(s => state.checked[s.id]);
    const btn = document.getElementById('nav-' + q.id);
    if (allDone && btn) btn.classList.add('done');
    else if (btn) btn.classList.remove('done');

    // Update question number circle
    const qnum = document.getElementById('qnum-' + q.id);
    if (allDone && qnum) qnum.classList.add('completed');
    else if (qnum) qnum.classList.remove('completed');
  });
}

// ── Utility ────────────────────────────────────────────────────
function findSub(subId) {
  for (const q of questions) {
    for (const s of q.subs) {
      if (s.id === subId) return s;
    }
  }
  return null;
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
