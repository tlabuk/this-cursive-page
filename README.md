# Portfolio Website

A modern, professional portfolio and CV website built with React and Vite. Features a distinctive rust/terracotta color scheme with geometric design elements.

## 🎨 Design

- **Color Palette**: Rust/terracotta (#B85C3E) with dark gradient backgrounds
- **Typography**: Space Grotesk (display) and Space Mono (body)
- **Layout**: Responsive grid system with geometric background elements
- **Styling**: CSS Modules with CSS custom properties for maintainability

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── PortfolioCard.jsx
│   │   ├── PortfolioCard.module.css
│   │   ├── ExperienceItem.jsx
│   │   ├── ExperienceItem.module.css
│   │   └── Icons.jsx
│   ├── pages/            # Page components
│   │   ├── Portfolio.jsx
│   │   ├── Portfolio.module.css
│   │   ├── CV.jsx
│   │   └── CV.module.css
│   ├── data/             # JSON data files
│   │   ├── personal.json
│   │   ├── portfolio.json
│   │   ├── experience.json
│   │   └── skills.json
│   ├── styles/           # Global styles
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📝 Customization

### Update Personal Information

Edit `src/data/personal.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "contact": {
    "email": "your@email.com",
    "phone": "+1234567890",
    "address": "Your Address"
  }
}
```

### Add Portfolio Items

Edit `src/data/portfolio.json`:
```json
{
  "portfolioItems": [
    {
      "id": 1,
      "title": "Project Title",
      "category": "Category",
      "description": "Description",
      "tags": ["Tag1", "Tag2"],
      "icon": "FileText",
      "link": "#"
    }
  ]
}
```

Available icons: `FileText`, `Code`, `BookOpen`, `Pen`

### Update Experience

Edit `src/data/experience.json` for work experience and education.

### Update Skills

Edit `src/data/skills.json` for technical skills, languages, awards, and conferences.

### Customize Colors

Edit CSS variables in `src/styles/variables.css`:
```css
:root {
  --color-primary: #B85C3E;
  --color-bg-dark: #1a1410;
  --color-text-light: #F5E6D3;
  /* ... */
}
```

## 🌐 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy (auto-detects Vite configuration)

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/portfolio-website/',
  // ...
})
```

4. Deploy:
```bash
npm run deploy
```

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **CSS Custom Properties** - Design tokens

## 📦 Data Management

All content is managed through JSON files in `src/data/`:

- `personal.json` - Name, contact info, tagline
- `portfolio.json` - Portfolio items
- `experience.json` - Work experience and education
- `skills.json` - Technical skills, languages, awards, conferences

This separation allows easy content updates without touching code.

## 🎯 Features

- **Responsive Design** - Works on all devices
- **Fast Performance** - Optimized with Vite
- **SEO Friendly** - Meta tags and semantic HTML
- **Modular CSS** - Scoped styles with CSS Modules
- **Easy Customization** - JSON-based content management
- **Modern Stack** - Latest React and build tools

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, reach out at tomek.labuk@gmail.com
