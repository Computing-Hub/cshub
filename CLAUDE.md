# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive GCSE Computer Science learning platform for Haute Vallée School. Students run Python code directly in the browser via Pyodide (WebAssembly). Hosted on GitHub Pages at `hvgcsecs.cshub.org.je`.

## Tech Stack

- **Pure static site** — no build tools, bundlers, or package managers
- HTML5, vanilla JavaScript, CSS3
- **Pyodide v0.24.0** (CDN) for in-browser Python execution
- SortableJS v1.15.0 for drag-and-drop (Parsons Puzzles in `paper1/`, `paper1-edexcel/`, and `activities/algorithms-cards.html`)
- CodeMirror for code editors in exam paper apps (`paper1/`, `paper1-edexcel/`, `paper2/`)
- Google Fonts: Inter, JetBrains Mono

## Development

No build step. Serve locally:

```
python -m http.server 8000
```

No tests, linter, or CI pipeline. Deployed via GitHub Pages with custom domain (CNAME file).

## Architecture

### Content Directories

| Directory | Purpose |
|-----------|---------|
| `chapters/` | 11 Python programming chapters (sequential curriculum) |
| `theory/` | 27 GCSE theory topics (no Pyodide — pure HTML/CSS/JS) |
| `activities/` | 38+ interactive browser activities (sorting visualizers, CPU simulators, quizzes) |
| `paper1/` | OCR J277/01 Parsons Puzzle exam prep |
| `paper1-edexcel/` | Edexcel 1CP2/01 interactive revision |
| `paper2/` | Edexcel 1CP2/02 exam practice with Python starter code in `paper2/Coding/` |

### Key Files

- `index.html` — Main landing page with sidebar navigation and content cards
- `CHAPTER_TEMPLATE.html` — Template for new chapter pages
- `js/pyodide-runner.js` — Shared Pyodide loader with Run/Copy/Reset button wiring (used by all chapters)
- `css/style.css` — Main stylesheet with CSS custom properties for theming
- `paper1/app.js`, `paper1-edexcel/app.js`, `paper2/app.js` — Self-contained exam app logic with their own `styles.css`

### Pyodide Integration

All `chapters/` pages use the shared `js/pyodide-runner.js`. The exam paper apps (`paper1/`, `paper1-edexcel/`, `paper2/`) have their own Pyodide integration in their respective `app.js`. Theory pages and most activities do not use Pyodide.

### Content Page Structure

Chapters follow a 5-section pedagogy pattern:
1. **The Idea** (`section.idea`) — Hook and learning objectives
2. **Explore** (`section.explore`) — Code examples with Run buttons
3. **Understand** (`section.understand`) — Detailed explanations
4. **Practice** (`section.practice`) — Exercises with difficulty levels
5. **Reflect** (`section.reflect`) — Quizzes and self-assessment

### Code Execution Block Pattern

All runnable Python examples use this HTML structure:
```html
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">Python Code</span>
    <div>
      <button class="copy-button">Copy Code</button>
      <button class="run-button">Run Code</button>
    </div>
  </div>
  <pre><code contenteditable="true">print("Hello")</code></pre>
  <div class="output-box empty">(click "Run Code" to see output)</div>
</div>
```

The `<code>` element uses `contenteditable="true"` so students can modify code before running. Python `input()` is overridden to use `window.prompt()`.

`pyodide-runner.js` also wires up Reset buttons (restores code from `data-original` attribute) and a hint toggle system (`.hint` → `.hint-content` visibility on click/keyboard).

### Index Page Navigation

`index.html` uses collapsible sidebar navigation groups. Each group follows this pattern:
```html
<div class="nav-group open">
  <div class="nav-group-title">Category Name <span class="nav-chevron"></span></div>
  <ul class="nav-group-links">
    <li><a href="path/to/page.html">Page Title</a></li>
  </ul>
</div>
```
When adding new content, add entries to both the sidebar nav and the corresponding content card grid in the main content area.

### Callout Box Classes

Use these within chapter/theory content for pedagogical emphasis:
- `.key-concept` — Important definitions or rules
- `.warning` — Common mistakes or misconceptions
- `.try-this` — Suggested code modifications for students
- `.did-you-know` — Fun facts or extensions
- `.exam-tip` — Exam-specific advice
- `.case-study` — Real-world applications
- `.comment-first-box`, `.predict-box` — Metacognitive exercises

### Exam Paper Question Types

The exam app `questions` arrays use these `type` values in sub-questions:
- `mcq`, `mcq-multi` — Single/multiple choice
- `short-answer`, `open-text`, `multi-short-answer` — Text input
- `parsons` — Drag-to-order code blocks (uses SortableJS)
- `matching` — Match items to options
- `table-input` — Table completion
- `binary-addition` — Binary arithmetic

Paper 2 (`paper2/app.js`) is distinct: it uses CodeMirror 5 (Dracula theme) + Pyodide for interactive code editing, with starter Python files in `paper2/Coding/Q01.py`–`Q06.py` and auto-save to localStorage.

## Design Conventions

- **Accessibility-first**: WCAG 2.1 AA compliant, ADHD/Dyslexia-friendly (Inter font, high contrast, clear hierarchy)
- CSS custom properties in `:root` of `css/style.css` control theming — section colors (`--color-idea`, `--color-explore`, etc.), difficulty levels, code block colors, spacing, typography
- Difficulty badges: green (Level 1), orange (Level 2), pink (Level 3)
- All pages link back to `index.html` via header navigation
- Exam paper apps (`paper1/`, `paper1-edexcel/`, `paper2/`) have their own independent `styles.css` — they don't use the main stylesheet
- Responsive breakpoints: 900px (sidebar collapses), 600px (reduced padding), 400px (single-column)
- `@media (prefers-reduced-motion: reduce)` disables all animations

## Adding New Content

1. **Chapters**: Copy `CHAPTER_TEMPLATE.html` to `chapters/`, follow the 5-section structure, include `<script src="../js/pyodide-runner.js"></script>` and the Pyodide CDN script tag
2. **Theory pages**: Standalone HTML in `theory/`, no Pyodide needed, link `../css/style.css`
3. **Activities**: Standalone HTML files in `activities/`, each contains its own JS logic inline
4. Add a navigation card to `index.html` (both in the sidebar nav and the main content grid)
