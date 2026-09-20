# Chef Quest — Prototype

A click-through prototype of Chef Quest, a meal-planning app that helps people
find allergy-safe recipes, plan meals around what's already in their kitchen,
and compare grocery prices. Built for a Year 9 business studies project.

## How to open it

No install or build step needed — it's plain HTML/CSS/JS.

1. Double-click `index.html` (or right-click → Open with → your browser).
2. That's it. Everything runs in the browser, no server required.

To edit it, open the folder in any code editor (VS Code, etc.) and edit
`styles.css` for design or `script.js` for behaviour — refresh the browser
tab to see changes.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | Page structure — the sidebar, topbar, and all six screens |
| `styles.css` | All visual design — colours, fonts, spacing |
| `script.js` | All interactivity — navigation, the recipe database, filters, price comparison, meal plan, profile |
| `AGENTS.md` | Notes for an AI coding assistant (like Codex or Claude Code) picking this project up — read this before making changes with an AI tool |

## Features in this prototype

- **Dashboard** — recent recipes, grocery deals
- **Saved Recipes** — a small recipe database with working filters (dairy-free, nut-free, gluten-free, under 30 min, vegetarian) and a live search bar
- **Cupboard Scanner** — clearly marked **"Coming soon"**. Real ingredient recognition from a photo needs a camera + an image-recognition API, which is out of scope for a static prototype. The screen still shows, step by step, what it *will* do once that's built
- **Weekly Meal Plan** — 7 days, each with a "Swap meal" button and allergy filters that dim out unsafe days
- **Recipe Detail** — every recipe has real ingredients, method steps, dietary-swap tips, and a price comparison panel. Ticking "already have this" removes it from the total cost live
- **Profile** — edit your name and allergies; saving updates the filters on Saved Recipes and Meal Plan to match

## Honest limitations (worth saying in the pitch)

- **Pricing is realistic demo data, not live.** A real version would need a
  deal with Woolworths/Coles/IGA or a grocery price-comparison data provider,
  since none of them offer a public live pricing API.
- **The scanner is a preview, not real image recognition.** It's built and
  labelled as a roadmap feature — a real version needs a camera input and an
  image-recognition model (see `AGENTS.md` for options).
- **Nothing is saved between sessions** — refreshing the page resets
  everything, since there's no backend or login system yet.

These are good, honest talking points for a business pitch: they show you've
thought about what's realistic for a prototype versus a shipped product.
