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
  Q5: { marks: 15, type: 'Code Completion',   file: 'Q05', canRun: false, needsInput: false },
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

    // Enable run buttons (except Q5)
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
