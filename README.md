# Mo'men Lotfy — DevOps Portfolio (React)

A modern, animated, fully-responsive portfolio built with **React 18**, **CSS Modules**, and **react-icons**.

---

## ✨ Features

- 🌓 **Dark / Light mode** toggle (persisted in localStorage)
- 📊 **Scroll progress bar** at the top of the page
- 🎞️ **Scroll-reveal animations** — elements fade + slide in as they enter the viewport
- 🃏 **Project cards** with scale + shadow on hover
- 🔔 **Skill icons** with gentle shake animation on hover
- 🌊 **Animated gradient background** (floating blobs)
- ⌨️ **Typewriter effect** cycling through job titles
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🧩 **Component-based** — Header, Hero, About, Skills, Services, Projects, Contact, Footer

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Install & Run

```bash
# 1. Navigate into the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app opens at **http://localhost:3000** with hot-reload enabled.

### Build for Production

```bash
npm run build
```

Output goes to `build/` — ready to deploy on Netlify, Vercel, or any static host.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
└── src/
    ├── index.js              ← Entry point
    ├── App.js                ← Root: theme, scroll progress, layout
    ├── hooks/
    │   └── useScrollReveal.js  ← IntersectionObserver hook
    ├── styles/
    │   └── global.css        ← CSS variables, resets, animations
    └── components/
        ├── Header.jsx / .module.css
        ├── Hero.jsx   / .module.css
        ├── About.jsx  / .module.css
        ├── Skills.jsx / .module.css
        ├── Services.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Contact.jsx  / .module.css
        └── Footer.jsx   / .module.css
```

---

## 🎨 Customisation

| What | Where |
|------|-------|
| Colour palette | `src/styles/global.css` → `:root` and `[data-theme='dark']` |
| Your name & bio | `src/components/Hero.jsx`, `About.jsx` |
| Skills list | `src/components/Skills.jsx` → `SKILLS` array |
| Services | `src/components/Services.jsx` → `SERVICES` array |
| Projects | `src/components/Projects.jsx` → `PROJECTS` array |
| Social links | `src/components/Footer.jsx`, `Contact.jsx` |
| Profile photo | Replace the SVG placeholder in `Hero.jsx` with an `<img>` tag |

---

## 🛠 Tech Stack

- **React 18** — functional components + hooks
- **CSS Modules** — scoped, collision-free styles
- **react-icons** — icon library (Feather icon set)
- **IntersectionObserver API** — custom `useScrollReveal` hook
- **CSS custom properties** — theme tokens for light/dark mode
- **Google Fonts** — DM Serif Display + DM Sans

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "react-icons": "^5.0.1"
}
```

No extra animation libraries needed — all motion is pure CSS + hooks.
