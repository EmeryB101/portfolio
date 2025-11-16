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
- **Intersection Observer** for scroll-based animations
- **Active navigation** highlighting based on scroll position
- **Keyboard navigation** support for accessibility
- **Debounced scroll handlers** for performance

### Design System

- **CSS Variables** for consistent theming (colors, shadows, transitions)
- **Color Scheme**: Blue primary (`#2563eb`), green secondary (`#10b981`)
- **Typography**: System font stack for optimal performance
- **Shadows**: Layered shadow system (sm, md, lg, xl)
- **Animations**: Fade-in, slide-up, and hover effects

## Customization Guide

### Updating Personal Information

Edit `index.html`:
- Line 13: Update portfolio title
- Lines 28-30: Hero section text
- Lines 41-42: About section content
- Lines 264-266: Contact links (email, GitHub, LinkedIn)

### Adding New Projects

Copy an existing `.project-card` block in `index.html` and modify:
- `data-category`: Must match a filter button's `data-category`
- `.project-title`: Project name
- `.project-description`: Brief description
- `.tech-tag` elements: Technologies used
- `.project-link` hrefs: Demo and source code links

### Changing Colors

Modify CSS variables in `styles.css` (lines 2-13):
```css
--primary-color: #2563eb;     /* Main brand color */
--secondary-color: #10b981;   /* Accent color */
--text-dark: #1f2937;         /* Primary text */
--text-light: #6b7280;        /* Secondary text */
```

### Adding Categories

1. Add filter button in `index.html` in `.category-filter`
2. Set `data-category` attribute to your category slug
3. Add projects with matching `data-category` attributes
4. No JavaScript changes needed (filtering is dynamic)

## Deployment

Deploy as a static site to:
- **GitHub Pages**: Push to `gh-pages` branch or use main branch with docs folder
- **Netlify**: Drag and drop the folder or connect to repository
- **Vercel**: Import repository or use CLI
- **Any static host**: Upload `index.html`, `styles.css`, and `script.js`

No build step required.
