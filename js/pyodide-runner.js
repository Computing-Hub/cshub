/**
 * Pyodide Runner - Client-side Python execution for the learning platform.
 * Loads Pyodide and wires up Run/Copy/Reset buttons on code blocks.
 */

(function () {
  "use strict";

  const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/";
  let pyodide = null;
  let pyodideReady = false;

  // --- Loading Banner ---
  function createLoadingBanner() {
    const banner = document.createElement("div");
    banner.className = "loading-banner";
    banner.id = "loading-banner";
    banner.setAttribute("role", "status");
    banner.setAttribute("aria-live", "polite");
    banner.textContent = "Loading Python environment...";
    document.body.prepend(banner);
    return banner;
  }

  function hideLoadingBanner() {
    const banner = document.getElementById("loading-banner");
    if (banner) {
      banner.textContent = "Python is ready!";
      setTimeout(function () {
        banner.classList.add("hidden");
      }, 1500);
    }
  }

  // --- Load Pyodide ---
  async function loadPyodideEnvironment() {
    createLoadingBanner();

    try {
      pyodide = await loadPyodide({
        indexURL: PYODIDE_CDN,
      });
      pyodideReady = true;
      hideLoadingBanner();
      enableAllRunButtons();
    } catch (err) {
      const banner = document.getElementById("loading-banner");
      if (banner) {
        banner.textContent =
          "Failed to load Python. Please refresh the page.";
        banner.style.background = "#dc3545";
      }
      console.error("Pyodide load error:", err);
    }
  }

  // --- Enable run buttons once Pyodide is ready ---
  function enableAllRunButtons() {
    document.querySelectorAll(".run-button").forEach(function (btn) {
      btn.disabled = false;
    });
  }

  // --- Run Python code ---
  async function runCode(codeBlock) {
    if (!pyodideReady) return;

    const codeEl = codeBlock.querySelector("code");
    const outputBox = codeBlock.querySelector(".output-box");
    if (!codeEl || !outputBox) return;

    // Get text content - handle contenteditable
    const code = codeEl.innerText || codeEl.textContent;

    outputBox.textContent = "Running...";
    outputBox.className = "output-box";

    try {
      // Redirect stdout/stderr and override input() to use browser prompt
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()

# Override input() to use JavaScript prompt()
import js
def _browser_input(prompt_text=""):
    result = js.prompt(str(prompt_text))
    if result is None:
        raise EOFError("User cancelled input")
    # Echo the prompt and response to stdout so students see it
    print(str(prompt_text) + result)
    return result

import builtins
builtins.input = _browser_input
`);

      await pyodide.runPythonAsync(code);

      const stdout = pyodide.runPython("sys.stdout.getvalue()");
      const stderr = pyodide.runPython("sys.stderr.getvalue()");

      // Reset stdout/stderr
      pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

      if (stderr) {
        outputBox.textContent = stderr;
        outputBox.className = "output-box error";
      } else if (stdout) {
        outputBox.textContent = stdout;
        outputBox.className = "output-box";
      } else {
        outputBox.textContent = "(no output)";
        outputBox.className = "output-box empty";
      }
    } catch (err) {
      // Reset stdout/stderr on error
      try {
        pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);
      } catch (_) {}

      let message = err.message || String(err);
      // Clean up the error message for students
      const lines = message.split("\n");
      const lastLine = lines[lines.length - 1] || message;
      outputBox.textContent = lastLine;
      outputBox.className = "output-box error";
    }
  }

  // --- Copy code to clipboard ---
  function copyCode(codeBlock) {
    const codeEl = codeBlock.querySelector("code");
    if (!codeEl) return;

    const text = codeEl.innerText || codeEl.textContent;
    navigator.clipboard
      .writeText(text)
      .then(function () {
        const btn = codeBlock.querySelector(".copy-button");
        if (btn) {
          const original = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(function () {
            btn.textContent = original;
          }, 1500);
        }
      })
      .catch(function () {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      });
  }

  // --- Reset code to original ---
  function resetCode(codeBlock) {
    const codeEl = codeBlock.querySelector("code");
    const outputBox = codeBlock.querySelector(".output-box");
    if (!codeEl) return;

    const original = codeBlock.getAttribute("data-original");
    if (original) {
      codeEl.textContent = original;
    }
    if (outputBox) {
      outputBox.textContent = '(click "Run Code" to see output)';
      outputBox.className = "output-box empty";
    }
  }

  // --- Hint toggle ---
  function setupHints() {
    document.querySelectorAll(".hint-title").forEach(function (title) {
      title.setAttribute("role", "button");
      title.setAttribute("tabindex", "0");
      title.setAttribute("aria-expanded", "false");

      function toggleHint() {
        const content = title.nextElementSibling;
        if (content && content.classList.contains("hint-content")) {
          const isVisible = content.classList.contains("visible");
          content.classList.toggle("visible");
          title.setAttribute("aria-expanded", String(!isVisible));
        }
      }

      title.addEventListener("click", toggleHint);
      title.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleHint();
        }
      });
    });
  }

  // --- Wire up code blocks ---
  function setupCodeBlocks() {
    document.querySelectorAll(".code-block").forEach(function (block) {
      const codeEl = block.querySelector("code");

      // Store original code for reset
      if (codeEl) {
        block.setAttribute(
          "data-original",
          codeEl.innerText || codeEl.textContent
        );
      }

      // Run button
      const runBtn = block.querySelector(".run-button");
      if (runBtn) {
        runBtn.disabled = !pyodideReady;
        runBtn.addEventListener("click", function () {
          runCode(block);
        });
      }

      // Copy button
      const copyBtn = block.querySelector(".copy-button");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          copyCode(block);
        });
      }

      // Reset button
      const resetBtn = block.querySelector(".reset-button");
      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          resetCode(block);
        });
      }
    });
  }

  // --- Initialise ---
  function init() {
    setupCodeBlocks();
    setupHints();
    loadPyodideEnvironment();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
