# Buğra Yanılmaz's Portfolio

A personal portfolio website showcasing my software projects, professional experience, education, and travel photography.

## Features

- About page with experience, education, and contact links.
- Project showcase with descriptions, technologies, and live demos.
- Career and education timeline.
- Travel photo timeline.
- Responsive layout with sidebar navigation and mobile menu.

## Tech Stack

React 18, React Router 7, React Icons, and CSS. Development and builds use Create React App (`react-scripts`).

## Run Locally

Requires Node.js 20 or later and npm. The repository's `.nvmrc` specifies Node 18, but React Router requires Node 20+.

```bash
git clone https://github.com/bugrayanlmz/bugrayanlmz_portfolio.git
cd bugrayanlmz_portfolio
npm install
npm start
```

Open [localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

Static files are generated in `build/`. When deploying, configure a fallback to `index.html` for client-side routes. A Netlify redirect rule is included in [public/_redirects](public/_redirects).

## Customize

Update page content in [src/components](src/components), social links in [Sidebar.js](src/components/Sidebar.js), and styles in [src/App.css](src/App.css). Store images in `public/images/`.
