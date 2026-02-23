# 🚀 Jeremy Heissenberger - Developer Portfolio

Ein modernes, lightning-fast Single Page Application (SPA) Portfolio, gebaut mit Angular 17+ und Tailwind CSS. Dieses Portfolio präsentiert meine Projekte, Skills und Kontaktinformationen in einem eleganten Tech-Design mit Neon-Effekten und Glassmorphism.

## ✨ Features

- **Terminal-Style Hero Section** mit animiertem Typewriter-Effekt
- **Glassmorphism Design** mit Neon-Glow-Effekten
- **Responsive Layout** - Optimiert für alle Geräte
- **Dark Mode Aesthetic** - Modernes Developer-Design
- **Smooth Animations** - Interaktive Hover-Effekte und Übergänge
- **CV Downloads** - Mehrere Versionen (Österreich, DACH, International)

## 🛠️ Tech Stack

### Frontend
- **Angular 17+** - Standalone Components (keine NgModules)
- **TypeScript** - Type-safe Development
- **Tailwind CSS** - Utility-first CSS Framework
- **SCSS** - Styling Preprocessor
- **RxJS** - Reactive Programming

### Build Tools
- **Angular CLI** - Development & Build Tooling
- **PostCSS** - CSS Processing
- **Autoprefixer** - Browser Compatibility

## 📦 Installation

### Voraussetzungen
- Node.js (v18 oder höher)
- npm oder yarn

### Setup

```bash
# Repository klonen
git clone https://github.com/Jerenic/Jerenic.git
cd Jerenic

# Dependencies installieren
npm install

# Development Server starten
npm start

# App öffnen im Browser
# http://localhost:4200
```

### Build für Production

```bash
# Production Build erstellen
npm run build

# Build-Output befindet sich in dist/jerenic/
```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── components/
│   │   ├── hero/          # Terminal-Style Hero Section
│   │   ├── about/          # Über mich Section mit Profilbild
│   │   ├── projects/      # Projekt-Grid mit Glassmorphism Cards
│   │   ├── skills/         # Tech Stack Kategorien
│   │   └── footer/         # Contact Section mit CV Downloads
│   ├── app.component.*     # Root Component
│   ├── app.config.ts       # App Configuration
│   └── app.routes.ts       # Routing Configuration
├── assets/
│   ├── images/             # Bilder (Profilbild, etc.)
│   └── *.pdf              # CV Downloads
├── styles.scss             # Global Styles (Tailwind Directives)
└── index.html              # Entry Point
```

## 🎨 Design Features

### Hero Section
- Animierter Typewriter-Effekt für den Namen
- Terminal-Fenster-Design mit macOS-ähnlichen Buttons
- Animierte Gradient-Orbs im Hintergrund
- Grid-Pattern mit Radial-Mask

### Project Cards
- Glassmorphism-Effekt mit `backdrop-blur`
- Neon-Glow Borders auf Hover
- Farbcodierte Kategorien (Cyan, Purple, Pink)
- Responsive Grid-Layout

### Skills Section
- Kategorisiert in Backend, Frontend, DevOps & Tools
- Neon-Tags mit Glow-Effekt
- Terminal-Style Headers

### Contact Section
- Call-to-Action Buttons mit Shimmer-Effekt
- Mehrere CV-Download-Optionen
- Email und GitHub Links

## 🚀 Deployment

Das Projekt kann auf verschiedenen Plattformen deployed werden:

- **Vercel** - Empfohlen für Angular Apps
- **Netlify** - Einfaches Deployment
- **GitHub Pages** - Mit Angular CLI Build
- **Firebase Hosting** - Google Cloud Integration

### Vercel Deployment

```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

## 📝 Verfügbare Scripts

- `npm start` - Startet den Development Server
- `npm run build` - Erstellt einen Production Build
- `npm run watch` - Build im Watch-Mode

## 📧 Kontakt

- **Email:** jeremy.heissenberger@gmail.com
- **GitHub:** [@Jerenic](https://github.com/Jerenic)
- **Portfolio:** [Live Demo](#) *(Link nach Deployment)*

## 📄 Lizenz

Dieses Projekt ist mein persönliches Portfolio. Alle Rechte vorbehalten.

---

**Built with ❤️ using Angular 17 & Tailwind CSS**
