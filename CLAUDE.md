# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a digital portfolio website showcasing interactive projects organized by categories. It's designed as a CV-style presentation for creative and technical work, built with vanilla HTML, CSS, and JavaScript.

## Technology Stack

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Client-side interactivity, filtering, and animations
- **No build tools**: Pure vanilla web technologies, no frameworks or dependencies

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and filtering
├── projects/           # Individual project HTML files
│   ├── Blooming.html
│   └── Defining Women_Beckman (1).html
├── CLAUDE.md          # This file
└── README.md          # Project documentation
```

## Development

### Running the Site

This is a static website with no dependencies or build process:

1. Open `index.html` directly in a browser, or
2. Use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```
3. Navigate to `http://localhost:8000`

### Making Changes

- **Adding Projects**: Edit `index.html` and add new `.project-card` elements with appropriate `data-category` attributes
- **Styling**: Modify `styles.css`. CSS variables are defined in `:root` for easy theming
- **Categories**: Add new filter buttons in HTML and update the category system in `script.js`
- **Colors/Theme**: Adjust CSS variables in `styles.css` at the `:root` selector

## Architecture & Features

### Project Filtering System

- Category-based filtering using `data-category` attributes
- Filter buttons trigger JavaScript functions that show/hide project cards
- Smooth fade-in/out animations when filtering
- "All Projects" shows everything; specific categories filter accordingly

### Category Types

Current categories include:
- `web-apps`: Web Applications
- `interactive`: Interactive Design
- `data-viz`: Data Visualization
- `games`: Games
- `tools`: Tools & Utilities

### Responsive Design

- Mobile-first approach with breakpoints at 768px and 480px
- Grid layout adjusts from multi-column to single column on mobile
- Navigation adapts to smaller screens
- Touch-friendly interactive elements

### JavaScript Features

- **Smooth scrolling** for navigation links
- **Category filtering** with fade animations
- **Active navigation** highlighting based on scroll position
- **Keyboard navigation** support for filter buttons (arrow keys, Enter, Space)
- **Dynamic navbar** shadow changes on scroll

### Design System - Digital Literacy Theme

- **CSS Variables** for consistent theming (colors, shadows, transitions, gradients)
- **Color Scheme**: Professional academic tech aesthetic
  - Deep blue primary (`#1e3a8a`)
  - Purple accent (`#7c3aed`)
  - Cyan highlight (`#06b6d4`)
  - Multi-color gradient: `linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #06b6d4 100%)`
- **Typography**: Inter font stack with refined letter-spacing for academic feel
- **Shadows**: Layered shadow system (sm, md, lg, xl) with enhanced opacity
- **Gradients**: Tech gradient used throughout hero, footer, buttons, and accents
- **Animations**: Fade-in, slide-up, enhanced hover effects with transforms

## Customization Guide

### Updating Personal Information

Edit `index.html`:
- Line 6: Update page title
- Lines 31-32: Hero section title and subtitle
- Line 43: About section content
- Lines 111-113: Contact section title and description

### Adding New Projects

1. Place project HTML file in `projects/` directory
2. Copy an existing `.project-card` block in `index.html` (around lines 66-103) and modify:
   - `data-category`: Must match a filter button's `data-category`
   - `.project-title`: Project name
   - `.project-description`: Brief description
   - `.tech-tag` elements: Technologies used
   - `.project-link` href: Path to project file (e.g., `projects/YourProject.html`)

### Changing Colors

Modify CSS variables in `styles.css` (lines 2-19):
```css
--primary-color: #1e3a8a;     /* Deep blue - main brand color */
--secondary-color: #7c3aed;   /* Purple - accent color */
--accent-color: #06b6d4;      /* Cyan - highlight color */
--text-dark: #0f172a;         /* Primary text */
--text-light: #475569;        /* Secondary text */
--tech-gradient: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #06b6d4 100%);
```

### Adding Categories

1. Add filter button in `index.html` in `.category-filter`
2. Set `data-category` attribute to your category slug
3. Add projects with matching `data-category` attributes
4. No JavaScript changes needed (filtering is dynamic)

## Current Projects

The portfolio currently showcases 3 projects:
- **Blooming** (Interactive Design) - `projects/Blooming.html`
- **Defining Women** (Games) - `projects/Defining Women_Beckman (1).html`
- **Poetry Book Tracker** (Tools & Utilities) - External link to https://emeryb101.github.io/Poetry-Book-Tracker-/

## Deployment

Deploy as a static site to:
- **GitHub Pages**: Push to main branch (currently deployed at https://emeryb101.github.io/portfolio/)
- **Netlify**: Drag and drop the folder or connect to repository
- **Vercel**: Import repository or use CLI
- **Any static host**: Upload all files including `projects/` folder

No build step required. All project HTML files must be included in deployment.
