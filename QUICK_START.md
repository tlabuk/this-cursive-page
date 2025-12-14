# Quick Start Guide

## What You Have

A complete, production-ready React portfolio website with:
- ✅ Proper React + Vite setup
- ✅ Component-based architecture
- ✅ CSS Modules for styling
- ✅ JSON-based data management
- ✅ React Router for navigation
- ✅ Responsive design
- ✅ Ready for GitHub and deployment

## Instant Setup (3 commands)

```bash
cd portfolio-website
npm install
npm run dev
```

That's it! Your site opens at `http://localhost:3000`

## File Organization

### Data Files (Easy Updates)
All content in `src/data/*.json`:
- `personal.json` → Your name, contact, tagline
- `portfolio.json` → Portfolio cards
- `experience.json` → Jobs & education
- `skills.json` → Skills, languages, awards

**Just edit JSON files to update content - no coding needed!**

### Components (Reusable)
- `Header.jsx` → Site header with nav
- `Footer.jsx` → Footer with CTA
- `PortfolioCard.jsx` → Portfolio item cards
- `ExperienceItem.jsx` → Job/education entries
- `Icons.jsx` → SVG icon library

### Pages
- `Portfolio.jsx` → Landing page
- `CV.jsx` → Full CV page

### Styles
- `variables.css` → Design tokens (colors, spacing, fonts)
- `global.css` → Global styles
- `*.module.css` → Component-specific styles

## Customization Priority

### 1. Update Your Info (5 min)
```bash
src/data/personal.json
```

### 2. Add Your Projects (10 min)
```bash
src/data/portfolio.json
```

### 3. Update Experience (15 min)
```bash
src/data/experience.json
src/data/skills.json
```

### 4. Customize Colors (Optional)
```bash
src/styles/variables.css
```

## Deploy to GitHub Pages

```bash
# 1. Create GitHub repo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
"deploy": "vite build && gh-pages -d dist"

# 4. Update vite.config.js base:
base: '/portfolio/'

# 5. Deploy!
npm run deploy
```

Visit: `https://yourusername.github.io/portfolio/`

## Deploy to Netlify (Easiest)

1. Push code to GitHub
2. Go to netlify.com
3. "New site from Git"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

## Key Features

### CSS Variables
All colors/spacing in one place:
```css
--color-primary: #B85C3E;
--spacing-lg: 2rem;
```
Change once, updates everywhere!

### CSS Modules
Scoped styling - no conflicts:
```jsx
import styles from './Component.module.css';
<div className={styles.card}>
```

### Data-Driven
Update JSON → See changes:
```json
{
  "title": "New Project"
}
```
No code editing needed!

### Routing
Clean URLs:
- `/` → Portfolio
- `/cv` → CV page

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Build issues?**
```bash
rm -rf node_modules
npm install
```

**Deploy not working?**
Check `vite.config.js` base path matches repo name

## Project Structure Visual

```
portfolio-website/
│
├── 📄 Configuration
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── 📁 src/
│   ├── 🎨 styles/          (Design system)
│   │   ├── variables.css   (Colors, spacing, fonts)
│   │   └── global.css      (Base styles)
│   │
│   ├── 📊 data/            (Content - EDIT THESE)
│   │   ├── personal.json
│   │   ├── portfolio.json
│   │   ├── experience.json
│   │   └── skills.json
│   │
│   ├── 🧩 components/      (Reusable pieces)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PortfolioCard.jsx
│   │   └── Icons.jsx
│   │
│   ├── 📄 pages/           (Full pages)
│   │   ├── Portfolio.jsx
│   │   └── CV.jsx
│   │
│   ├── App.jsx             (Router setup)
│   └── main.jsx            (Entry point)
│
└── 📁 dist/                (Built site - auto-generated)
```

## Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Edit `src/data/personal.json` with your info
3. ✅ Update portfolio items in `src/data/portfolio.json`
4. ✅ Add your experience to `src/data/experience.json`
5. ✅ Customize colors in `src/styles/variables.css` (optional)
6. ✅ Push to GitHub
7. ✅ Deploy to Netlify or GitHub Pages

## Support

Questions? Check:
- Main README.md for detailed docs
- Comments in code files
- Vite docs: vitejs.dev
- React docs: react.dev

Happy coding! 🚀
