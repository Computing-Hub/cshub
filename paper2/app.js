/* ===================================================================
   Edexcel GCSE Paper 2 — Interactive Exam Practice
   app.js — CodeMirror editors, Pyodide runner, tabs, save/restore
   =================================================================== */

// ───── Starter Code (exact copies from Coding/ directory) ─────

const STARTER_CODE = {
  Q1: `# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
cost2Courses = 15.00              Cost of meals
cost3Courses = 20.00
cost Drinks = 2.00

num2Courses = 0                 # Number of meals
num3Courses = 0
0 = numDrinks

total = 0.0                     # Total cost of all food and drink

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# Get the inputs from the user
num2Courses = int (input ("How many 2-course dinners? "))
num3Courses = int (input ("How many 3-course dinners? "))
numDrinks = int (input ("How many drinks? "))

# Check if everyone has a drink
if (numDrinks != (num2Courses + num3Courses)):
    print ("Meals and drinks don't match")
else:
    # Calculate the total cost of all meals and drinks
    total = "num2Courses" * cost2Courses
    total = total + num3Courses * cost33Courses
    total = total + numDrinks * costDrinks

    # Check if user gets a discount and apply it
    if (num2Courses - num3Courses > 8):     # Get 15% discount
        total = 0.85 + total
    elif (num3Courses > 4):                 # Get 10% discount
        total = 0.90 * total
    elif (num2Courses > 2):                 # Get 5% discount
        total = 0.95 * tatol

print ("Total is:", total)
`,

  Q2: `# -------------------------------------------------------------------
# Import libraries
# -------------------------------------------------------------------
# =====> Add a line to import the time library


# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
WAIT_TIME = 1.5

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
# =====> Add a line to create a variable named countDown and
#        set it to 0


# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# =====> Complete the line to take the input from the user and
#        convert it to an integer
countDown =

# =====> Complete the line to ensure the number inputted is valid
#        Use two relational operators and one logical operator
if ((countDown        10)         (countDown         0)):

    # =====> Complete the condition to ensure the loop
    #        stops when it reaches 0
    while (           ):

        # =====> Add a line to display countDown for the user


        # =====> Complete the line to call a function in the time library
        #        to pause the program for WAIT_TIME
        time.

        # =====> Complete the line to reduce countDown by 1
        countDown =

    # =====> Add a line to display "Ignition - lift off!" for the user

`,

  Q3: `# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------


# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------


# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

        print ("String must be three or more characters long")
            total = total + asciiValue
        # Check if divisible by 4, 5, or neither
        if (total % FOUR == 0):
            inString = inString + str (ZERO)
    if (len (inString) >= THREE):
ZERO = 0
THREE = 3
        else:
inString = ""
        for character in inString:
total = 0
            inString = inString + str (FIVE)
        total = 0                       # Reset each pass
        elif (total % FIVE == 0):
asciiValue = 0

FOUR = 4
    else:
FIVE = 5
while (inString != ""):
        print (total, inString)
            asciiValue = ord(character)

    inString = input ("Enter a string (blank to exit): ")
# Set up the input loop
inString = input ("Enter a string (blank to exit): ")
            inString = inString + str (FOUR)`,

  Q4: `# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
OUT_FILE = "Q04_OUTPUT.TXT"
COMMA = ","
LF = "\\n"

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
outString = ""
maxNum = 0
num = 0
row = 0
column = 0

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# =====> Open the output file for writing


maxNum = int (input ("Enter a number: "))   # Get the number
for row in range (1, maxNum + 1):           # Going down the table
    outString = ""

    for column in range (1, maxNum + 1):    # Going across the table
        # =====> Calculate the new value

        # =====> Add a comma to all except last column

        # =====> Add a line feed to the last column

    # =====> Write the row to the file

# =====> Close the file
`,

  Q5: `# -------------------------------------------------------------------
# Import libraries
# -------------------------------------------------------------------
# =====> Import the required libraries
# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
WIDTH = 800
HEIGHT = 600
# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
myColours = ["peru", "olive", "gold"]
xPos = -120     # Location of circle 1, turtle pointing east
yPos = -195
# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------
turtle.mode ("standard")    # Turtle points to the east
                            # Angles are counterclockwise
screen = turtle.Screen ()
screen.setup (WIDTH, HEIGHT)
turtle.screensize (WIDTH, HEIGHT)
# -------------------------------------------------------------------
# =====> Prepare the turtle, including speed
# =====> Draw Line A and Line B
# =====> Draw Line C and Line D
# =====> Draw nine coloured circles
# -------------------------------------------------------------------
turtle.done ()
`,

  Q6: `# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
MIN_KEY_LENGTH = 3      # A00
MAX_SIGNAL = 5.0        # Max five
MIN_SIGNAL = 1.0        # Min 1

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
theRecords = [["7JA3B1", 3.41], ["A7B", 2.33], ["Y8R4K", 2.78],
              ["O9N1K0", 5.0], ["A1&2X3", 1.25],
              ["A12B3", 2.47], ["B1P6Y7", -1.23], ["F8D7L5", 5.17],
              ["AB23A5", 2.47], ["X0B9A9", 0], ["Q6B7T3", 0.5],
              ["A15B6C2", 2.56], ["A12340", 2.5], ["P3Y1M4V7", 4.35],
              ["J1H0Q1", 1.0], ["X", 2.3], ["W64T18B1", 1.51],
              ["A00", 1.99], ["A3B1C14", 4.59]
             ]

# -------------------------------------------------------------------
# Subprograms
# -------------------------------------------------------------------

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

`
};

// ───── Question metadata ─────

const QUESTIONS = {
  Q1: { marks: 9,  type: 'Bug Fixing',       file: 'Q01', canRun: true,  needsInput: true  },
  Q2: { marks: 10, type: 'Code Completion',   file: 'Q02', canRun: true,  needsInput: true  },
  Q3: { marks: 15, type: 'Code Reordering',   file: 'Q03', canRun: true,  needsInput: true  },
  Q4: { marks: 11, type: 'Code Completion',   file: 'Q04', canRun: true,  needsInput: true  },
  Q5: { marks: 15, type: 'Code Completion',   file: 'Q05', canRun: true,  needsInput: false },
  Q6: { marks: 15, type: 'Write from Scratch',file: 'Q06', canRun: true,  needsInput: false },
};

// ───── State ─────

const editors = {};
let activeTab = 'Q1';
let pyodide = null;
let pyodideReady = false;
let isRunning = false;
let autoSaveTimer = null;

// ───── Initialisation ─────

document.addEventListener('DOMContentLoaded', () => {
  initEditors();
  initTabs();
  initButtons();
  restoreFromStorage();
  startAutoSave();
  loadPyodide_();
});

// ───── CodeMirror Editors ─────

function initEditors() {
  for (const qId of Object.keys(QUESTIONS)) {
    const textarea = document.getElementById(`editor-${qId}`);
    if (!textarea) continue;

    const saved = localStorage.getItem(`edexcel-p2-${qId}`);
    const initialCode = saved || STARTER_CODE[qId];

    const cm = CodeMirror.fromTextArea(textarea, {
      mode: 'python',
      theme: 'dracula',
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      matchBrackets: true,
      autoCloseBrackets: true,
      lineWrapping: false,
      viewportMargin: Infinity,
    });
    cm.setValue(initialCode);
    editors[qId] = cm;
  }
  // Refresh active editor after a tick
  setTimeout(() => {
    if (editors[activeTab]) editors[activeTab].refresh();
  }, 50);
}

// ───── Tabs ─────

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(tabId) {
  // Save current before switching
  saveToStorage();

  // Deactivate all
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  // Activate new
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`panel-${tabId}`).classList.add('active');

  activeTab = tabId;

  // Refresh CodeMirror (it needs this after becoming visible)
  setTimeout(() => {
    if (editors[tabId]) editors[tabId].refresh();
  }, 10);
}

// ───── Buttons ─────

function initButtons() {
  for (const qId of Object.keys(QUESTIONS)) {
    const q = QUESTIONS[qId];

    // Run button
    const runBtn = document.getElementById(`btn-run-${qId}`);
    if (runBtn) {
      if (!q.canRun) {
        runBtn.disabled = true;
        runBtn.title = 'Turtle graphics cannot run in the browser';
      } else {
        runBtn.addEventListener('click', () => runCode(qId));
      }
    }

    // Reset button
    const resetBtn = document.getElementById(`btn-reset-${qId}`);
    if (resetBtn) {
      resetBtn.addEventListener('click', () => resetCode(qId));
    }

    // Download button
    const dlBtn = document.getElementById(`btn-dl-${qId}`);
    if (dlBtn) {
      dlBtn.addEventListener('click', () => downloadCode(qId));
    }

    // Clear output
    const clearBtn = document.getElementById(`btn-clear-${qId}`);
    if (clearBtn) {
      clearBtn.addEventListener('click', () => clearOutput(qId));
    }

    // Show Answer button
    const ansBtn = document.getElementById(`btn-answer-${qId}`);
    if (ansBtn) {
      ansBtn.addEventListener('click', () => toggleModelAnswer(qId));
    }
  }
}

// ───── Toggle Model Answer ─────

function toggleModelAnswer(qId) {
  const panel = document.getElementById(`model-answer-${qId}`);
  const btn = document.getElementById(`btn-answer-${qId}`);
  const codePre = document.getElementById(`model-code-${qId}`);

  if (!panel || !btn) return;

  const isShowing = panel.classList.contains('show');

  if (isShowing) {
    panel.classList.remove('show');
    btn.textContent = 'Show Answer';
    btn.classList.remove('active');
  } else {
    // Populate the model answer code if not yet done
    if (codePre && !codePre.textContent && MODEL_ANSWERS[qId]) {
      codePre.textContent = MODEL_ANSWERS[qId];
    }
    panel.classList.add('show');
    btn.textContent = 'Hide Answer';
    btn.classList.add('active');
  }
}

// ───── Run Code ─────

async function runCode(qId) {
  if (!pyodideReady || isRunning) return;

  const code = editors[qId].getValue();
  const outputBody = document.getElementById(`output-${qId}`);
  const runBtn = document.getElementById(`btn-run-${qId}`);

  // Clear previous output
  outputBody.innerHTML = '';
  isRunning = true;
  runBtn.disabled = true;
  runBtn.textContent = 'Running...';

  // Hide file output panel if Q4
  if (qId === 'Q4') {
    const fp = document.getElementById('file-output-Q4');
    if (fp) fp.style.display = 'none';
  }

  try {
    // Set up stdout/stderr capture
    pyodide.runPython(`
import sys
import io
_stdout_capture = io.StringIO()
_stderr_capture = io.StringIO()
sys.stdout = _stdout_capture
sys.stderr = _stderr_capture
`);

    // For Q2: mock time.sleep as a no-op
    pyodide.runPython(`
import time as _real_time
class _MockTime:
    def __getattr__(self, name):
        if name == 'sleep':
            return lambda x: None
        return getattr(_real_time, name)
import sys
sys.modules['time'] = _MockTime()
`);

    // Handle input() — use prompt() for interactive input
    pyodide.runPython(`
import builtins as _builtins
from js import prompt as _js_prompt

def _custom_input(p=""):
    result = _js_prompt(str(p))
    if result is None:
        raise KeyboardInterrupt("Input cancelled by user")
    # Echo the prompt and the response to stdout
    sys.stdout.write(str(p) + result + "\\n")
    return result

_builtins.input = _custom_input
`);

    // For Q5: inject mock turtle module and prepare canvas
    if (qId === 'Q5') {
      const canvas = document.getElementById('turtle-canvas-Q5');
      const tPanel = document.getElementById('turtle-panel-Q5');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      if (tPanel) tPanel.style.display = 'block';
      pyodide.FS.writeFile('/home/pyodide/turtle.py', MOCK_TURTLE_SRC);
      pyodide.runPython(`
import sys
if 'turtle' in sys.modules:
    del sys.modules['turtle']
`);
    }

    // Run the student code
    pyodide.runPython(code);

    // Capture output
    const stdout = pyodide.runPython('_stdout_capture.getvalue()');
    const stderr = pyodide.runPython('_stderr_capture.getvalue()');

    if (stdout) {
      const span = document.createElement('span');
      span.className = 'stdout';
      span.textContent = stdout;
      outputBody.appendChild(span);
    }
    if (stderr) {
      const span = document.createElement('span');
      span.className = 'stderr';
      span.textContent = stderr;
      outputBody.appendChild(span);
    }
    if (!stdout && !stderr) {
      const span = document.createElement('span');
      span.className = 'info';
      span.textContent = '(Program finished with no output)';
      outputBody.appendChild(span);
    }

    // Q4: Check for file output
    if (qId === 'Q4') {
      try {
        const fileContent = pyodide.runPython(`
try:
    with open("Q04_OUTPUT.TXT", "r") as _f:
        _f.read()
except:
    ""
`);
        if (fileContent) {
          const fp = document.getElementById('file-output-Q4');
          const fb = document.getElementById('file-body-Q4');
          if (fp && fb) {
            fb.textContent = fileContent;
            fp.style.display = 'block';
          }
        }
      } catch (e) {
        // File may not exist — that's fine
      }
    }

  } catch (err) {
    // Get any partial stdout before the error
    let partialOut = '';
    try {
      partialOut = pyodide.runPython('_stdout_capture.getvalue()');
    } catch (_) {}

    if (partialOut) {
      const span = document.createElement('span');
      span.className = 'stdout';
      span.textContent = partialOut;
      outputBody.appendChild(span);
    }

    const span = document.createElement('span');
    span.className = 'stderr';
    // Clean up the error message for readability
    let msg = err.message || String(err);
    // Try to extract just the Python traceback
    const tbMatch = msg.match(/Traceback[\s\S]*/);
    if (tbMatch) msg = tbMatch[0];
    span.textContent = msg;
    outputBody.appendChild(span);

  } finally {
    // Restore real modules
    pyodide.runPython(`
import sys
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
try:
    sys.modules['time'] = _real_time
except:
    pass
`);
    isRunning = false;
    runBtn.disabled = false;
    runBtn.textContent = 'Run';

    // Scroll output to bottom
    outputBody.scrollTop = outputBody.scrollHeight;
  }
}

// ───── Reset Code ─────

function resetCode(qId) {
  if (!confirm(`Reset Q${qId.slice(1)} to the original starter code?\n\nThis cannot be undone.`)) return;
  editors[qId].setValue(STARTER_CODE[qId]);
  clearOutput(qId);
  localStorage.removeItem(`edexcel-p2-${qId}`);
}

// ───── Download Code ─────

function downloadCode(qId) {
  const code = editors[qId].getValue();
  const filename = QUESTIONS[qId].file + 'FINISHED.py';
  const blob = new Blob([code], { type: 'text/x-python' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ───── Clear Output ─────

function clearOutput(qId) {
  const outputBody = document.getElementById(`output-${qId}`);
  if (outputBody) outputBody.innerHTML = '';
  if (qId === 'Q4') {
    const fp = document.getElementById('file-output-Q4');
    if (fp) fp.style.display = 'none';
  }
  if (qId === 'Q5') {
    const canvas = document.getElementById('turtle-canvas-Q5');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    const tPanel = document.getElementById('turtle-panel-Q5');
    if (tPanel) tPanel.style.display = 'none';
  }
}

// ───── LocalStorage ─────

function saveToStorage() {
  for (const qId of Object.keys(editors)) {
    const code = editors[qId].getValue();
    // Only save if different from starter
    if (code !== STARTER_CODE[qId]) {
      localStorage.setItem(`edexcel-p2-${qId}`, code);
    } else {
      localStorage.removeItem(`edexcel-p2-${qId}`);
    }
  }
}

function restoreFromStorage() {
  for (const qId of Object.keys(editors)) {
    const saved = localStorage.getItem(`edexcel-p2-${qId}`);
    if (saved) {
      editors[qId].setValue(saved);
    }
  }
}

function startAutoSave() {
  autoSaveTimer = setInterval(saveToStorage, 30000);
  // Also save on page unload
  window.addEventListener('beforeunload', saveToStorage);
}

// ───── Model Answers (from official mark scheme) ─────

const MODEL_ANSWERS = {
  Q1: `# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
cost2Courses = 15.00              # Cost of meals
cost3Courses = 20.00
costDrinks = 2.00

num2Courses = 0                 # Number of meals
num3Courses = 0
numDrinks = 0

total = 0.0                     # Total cost of all food and drink

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# Get the inputs from the user
num2Courses = int (input ("How many 2-course dinners? "))
num3Courses = int (input ("How many 3-course dinners? "))
numDrinks = int (input ("How many drinks? "))

# Check if everyone has a drink
if (numDrinks != (num2Courses + num3Courses)):
    print ("Meals and drinks don't match")
else:
    # Calculate the total cost of all meals and drinks
    total = num2Courses * cost2Courses
    total = total + num3Courses * cost3Courses
    total = total + numDrinks * costDrinks

    # Check if user gets a discount and apply it
    if (num2Courses + num3Courses > 8):     # Get 15% discount
        total = 0.85 * total
    elif (num3Courses > 4):                 # Get 10% discount
        total = 0.90 * total
    elif (num2Courses > 2):                 # Get 5% discount
        total = 0.95 * total

    print ("Total is:", total)
`,

  Q2: `# -------------------------------------------------------------------
# Import libraries
# -------------------------------------------------------------------
import time

# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
WAIT_TIME = 1.5

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
countDown = 0

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

countDown = int (input ("What is the countdown? "))

if ((countDown <= 10) and (countDown > 0)):

    while (countDown != 0):

        print (countDown)

        time.sleep (WAIT_TIME)

        countDown = countDown - 1

    print ("Ignition - lift off!")
`,

  Q3: `# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
ZERO = 0
THREE = 3
FOUR = 4
FIVE = 5

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
inString = ""
total = 0
asciiValue = 0

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# Set up the input loop
inString = input ("Enter a string (blank to exit): ")

while (inString != ""):
    if (len (inString) >= THREE):
        total = 0                       # Reset each pass
        for character in inString:
            asciiValue = ord(character)
            total = total + asciiValue

        # Check if divisible by 4, 5, or neither
        if (total % FOUR == 0):
            inString = inString + str (FOUR)
        elif (total % FIVE == 0):
            inString = inString + str (FIVE)
        else:
            inString = inString + str (ZERO)

        print (total, inString)
    else:
        print ("String must be three or more characters long")

    inString = input ("Enter a string (blank to exit): ")
`,

  Q4: `# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
OUT_FILE = "Q04_OUTPUT.TXT"
COMMA = ","
LF = "\\n"

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
outString = ""
maxNum = 0
num = 0
row = 0
column = 0

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# =====> Open the output file for writing
theFile = open (OUT_FILE, "w")

maxNum = int (input ("Enter a number: "))   # Get the number
for row in range (1, maxNum + 1):           # Going down the table
    outString = ""

    for column in range (1, maxNum + 1):    # Going across the table
        # =====> Calculate the new value
        num = row * column
        outString = outString + str (num)

        # =====> Add a comma to all except last column
        # =====> Add a line feed to the last column
        if (column < maxNum):
            outString = outString + COMMA
        else:
            outString = outString + LF

    # =====> Write the row to the file
    theFile.write (outString)

# =====> Close the file
theFile.close ()
`,

  Q5: `# -------------------------------------------------------------------
# Import libraries
# -------------------------------------------------------------------
import turtle
import random

# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
WIDTH = 800
HEIGHT = 600

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
myColours = ["peru", "olive", "gold"]
xPos = -120     # Location of circle 1, turtle pointing east
yPos = -195

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------
turtle.mode ("standard")    # Turtle points to the east
                            # Angles are counterclockwise
screen = turtle.Screen ()
screen.setup (WIDTH, HEIGHT)
turtle.screensize (WIDTH, HEIGHT)

# -------------------------------------------------------------------
# =====> Prepare the turtle, including speed
theTurtle = turtle.Turtle ()
theTurtle.speed (0)
theTurtle.penup ()

# =====> Draw Line A and Line B
theTurtle.pensize (3)
theTurtle.pencolor ("Black")
theTurtle.setposition (-200, 0)
theTurtle.setheading (0)
theTurtle.pendown ()
theTurtle.forward (400)
theTurtle.penup ()
theTurtle.setposition (0, 200)
theTurtle.setheading (270)
theTurtle.pendown ()
theTurtle.forward (400)
theTurtle.penup ()

# =====> Draw Line C and Line D
theTurtle.setposition (-200, -200)
theTurtle.setheading (45)
theTurtle.pendown ()
theTurtle.forward (566)
theTurtle.penup ()
theTurtle.setposition (200, -200)
theTurtle.setheading (135)
theTurtle.pendown ()
theTurtle.forward (566)
theTurtle.penup ()

# =====> Draw nine coloured circles
theTurtle.setheading (0)
for count in range (9):
    theTurtle.setposition (xPos, yPos)
    theTurtle.pendown ()
    theTurtle.pencolor (myColours[count % 3])
    theTurtle.pensize (random.randint (5, 10))
    theTurtle.circle (75)
    theTurtle.penup ()
    xPos = xPos + 30
    yPos = yPos + 30

# -------------------------------------------------------------------
turtle.done ()
`,

  Q6: `# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
MIN_KEY_LENGTH = 3      # A00
MAX_SIGNAL = 5.0        # Max five
MIN_SIGNAL = 1.0        # Min 1

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
theRecords = [["7JA3B1", 3.41], ["A7B", 2.33], ["Y8R4K", 2.78],
              ["O9N1K0", 5.0], ["A1&2X3", 1.25],
              ["A12B3", 2.47], ["B1P6Y7", -1.23], ["F8D7L5", 5.17],
              ["AB23A5", 2.47], ["X0B9A9", 0], ["Q6B7T3", 0.5],
              ["A15B6C2", 2.56], ["A12340", 2.5], ["P3Y1M4V7", 4.35],
              ["J1H0Q1", 1.0], ["X", 2.3], ["W64T18B1", 1.51],
              ["A00", 1.99], ["A3B1C14", 4.59]
             ]

# -------------------------------------------------------------------
# Subprograms
# -------------------------------------------------------------------
def isValidKey (key):
    # Check minimum length
    if len (key) < MIN_KEY_LENGTH:
        return False

    # Check all characters are alphanumeric
    if not key.isalnum ():
        return False

    # Check the last character is a digit
    if not key[-1].isdigit ():
        return False

    # Calculate the check digit
    digitTotal = 0
    for char in key[:-1]:
        if char.isdigit ():
            digitTotal = digitTotal + int (char)

    checkDigit = digitTotal % 10

    # Compare with last character
    if checkDigit != int (key[-1]):
        return False

    return True

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------
for record in theRecords:
    key = record[0]
    signal = record[1]

    # Check if the key is valid
    if not isValidKey (key):
        print ("Invalid key", record)

    # Check if the signal is valid
    if signal < MIN_SIGNAL or signal > MAX_SIGNAL:
        print ("Invalid signal", record)
`
};

// ───── Mock Turtle Module (for Q5 browser-based turtle graphics) ─────

const MOCK_TURTLE_SRC = `
"""Mock turtle module for Pyodide — draws on HTML5 Canvas."""
from js import document
import math

_canvas = None
_ctx = None
_width = 800
_height = 600

def _ensure_canvas():
    global _canvas, _ctx
    if _canvas is None:
        _canvas = document.getElementById('turtle-canvas-Q5')
    if _canvas and _ctx is None:
        _ctx = _canvas.getContext('2d')

def _to_canvas(x, y):
    return (x + _width / 2, _height / 2 - y)

class Screen:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if not self._initialized:
            _ensure_canvas()
            self._initialized = True

    def setup(self, width=None, height=None, startx=None, starty=None):
        global _width, _height
        if width is not None:
            _width = int(width)
        if height is not None:
            _height = int(height)
        if _canvas:
            _canvas.width = _width
            _canvas.height = _height
            _ctx.fillStyle = 'white'
            _ctx.fillRect(0, 0, _width, _height)

    def bgcolor(self, color=None):
        if color and _ctx:
            _ctx.fillStyle = str(color)
            _ctx.fillRect(0, 0, _width, _height)

    def title(self, t):
        pass

    def exitonclick(self):
        pass

    def mainloop(self):
        pass

class Turtle:
    def __init__(self):
        _ensure_canvas()
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._pen_down = True
        self._pen_color = 'black'
        self._pen_size = 1
        self._speed_val = 3

    def speed(self, s=None):
        if s is not None:
            self._speed_val = s
        return self._speed_val

    def forward(self, distance):
        rad = math.radians(self._heading)
        new_x = self._x + distance * math.cos(rad)
        new_y = self._y + distance * math.sin(rad)
        if self._pen_down and _ctx:
            cx1, cy1 = _to_canvas(self._x, self._y)
            cx2, cy2 = _to_canvas(new_x, new_y)
            _ctx.beginPath()
            _ctx.strokeStyle = self._pen_color
            _ctx.lineWidth = self._pen_size
            _ctx.lineCap = 'round'
            _ctx.moveTo(cx1, cy1)
            _ctx.lineTo(cx2, cy2)
            _ctx.stroke()
        self._x = new_x
        self._y = new_y
    fd = forward

    def backward(self, distance):
        self.forward(-distance)
    bk = backward
    back = backward

    def left(self, angle):
        self._heading += angle
    lt = left

    def right(self, angle):
        self._heading -= angle
    rt = right

    def penup(self):
        self._pen_down = False
    pu = penup
    up = penup

    def pendown(self):
        self._pen_down = True
    pd = pendown
    down = pendown

    def pencolor(self, *args):
        if args:
            self._pen_color = str(args[0])

    def pensize(self, width=None):
        if width is not None:
            self._pen_size = width
        return self._pen_size
    width = pensize

    def setposition(self, x, y=None):
        if y is None:
            x, y = x[0], x[1]
        if self._pen_down and _ctx:
            cx1, cy1 = _to_canvas(self._x, self._y)
            cx2, cy2 = _to_canvas(x, y)
            _ctx.beginPath()
            _ctx.strokeStyle = self._pen_color
            _ctx.lineWidth = self._pen_size
            _ctx.lineCap = 'round'
            _ctx.moveTo(cx1, cy1)
            _ctx.lineTo(cx2, cy2)
            _ctx.stroke()
        self._x = float(x)
        self._y = float(y)
    goto = setposition
    setpos = setposition

    def setheading(self, angle):
        self._heading = float(angle)
    seth = setheading

    def circle(self, radius, extent=360, steps=None):
        if steps is None:
            frac = abs(extent) / 360.0
            steps = 1 + int(min(11 + abs(radius) / 6.0, 59.0) * frac)
        w = 1.0 * extent / steps
        w2 = 0.5 * w
        l = 2.0 * radius * math.sin(math.radians(w2))
        if radius < 0:
            l, w, w2 = -l, -w, -w2
        self._heading += w2
        for _ in range(steps):
            self.forward(l)
            self._heading += w
        self._heading -= w2

    def hideturtle(self):
        pass
    ht = hideturtle

    def showturtle(self):
        pass
    st = showturtle

    def color(self, *args):
        if args:
            self._pen_color = str(args[0])

    def begin_fill(self):
        pass

    def end_fill(self):
        pass

    def dot(self, size=None, *color):
        pass

    def write(self, arg, move=False, align="left", font=("Arial", 8, "normal")):
        pass

    def clear(self):
        pass

    def home(self):
        self.setposition(0, 0)
        self.setheading(0)

    def xcor(self):
        return self._x

    def ycor(self):
        return self._y

    def heading(self):
        return self._heading

    def position(self):
        return (self._x, self._y)
    pos = position

# Module-level functions
def mode(m="standard"):
    pass

def screensize(canvwidth=None, canvheight=None, bg=None):
    global _width, _height
    if canvwidth is not None:
        _width = canvwidth
    if canvheight is not None:
        _height = canvheight

def done():
    pass

mainloop = done
bye = done
exitonclick = done
`;

// ───── Pyodide Loading ─────

async function loadPyodide_() {
  const statusEl = document.getElementById('pyodide-status');
  const statusText = document.getElementById('pyodide-status-text');
  const overlay = document.getElementById('loading-overlay');

  try {
    statusText.textContent = 'Loading Python...';
    pyodide = await loadPyodide();
    pyodideReady = true;

    statusEl.classList.add('ready');
    statusText.textContent = 'Python Ready';

    // Enable run buttons for all runnable questions
    for (const qId of Object.keys(QUESTIONS)) {
      if (QUESTIONS[qId].canRun) {
        const btn = document.getElementById(`btn-run-${qId}`);
        if (btn) btn.disabled = false;
      }
    }
  } catch (err) {
    statusEl.classList.add('error');
    statusText.textContent = 'Python failed to load';
    console.error('Pyodide load error:', err);
  }

  // Hide loading overlay
  if (overlay) {
    overlay.classList.add('hidden');
    setTimeout(() => overlay.remove(), 500);
  }
}
