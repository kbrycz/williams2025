# Williams 2025 — Campaign Website Template

A modern, responsive campaign website template built with React, Vite, and Tailwind CSS. Created by [Win Advocacy](https://winadvocacy.com) — we build political websites that win.

## Quick Start

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
```

## Customization

This template is designed to be easily re-skinned for any candidate.

### 1. Candidate Data (`src/config/siteData.js`)

All candidate-specific content — name, slogans, bio, plan details, contact info — lives in one file. Update it to swap in a new candidate.

### 2. Images (`src/assets/`)

Replace these images with your candidate's assets:

| File | Purpose |
|------|---------|
| `hero-bg.png` | Hero section background |
| `logo-white.png` | Logo (transparent navbar) |
| `logo-color.png` | Logo (white navbar) |
| `candidate-portrait.png` | Main candidate photo |
| `video-thumbnail.png` | Video section / track record image |
| `about-intro.png` | About page intro & checklist image |
| `plan-intro.png` | Plan page intro image |
| `plan-cta.png` | Plan page call-to-action image |

### 3. Colors (`src/config/colors.js`)

Update the color palette to match the campaign's brand. Colors are automatically available as Tailwind classes (e.g., `bg-primary-500`, `text-secondary-400`).

### 4. Meta / SEO (`index.html`)

Update the `<title>`, Open Graph tags, and favicon files in `src/assets/favicon/`.

## Tech Stack

- **React 19** + React Router
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **Motion** for animations

---

Built with care by [Win Advocacy](https://winadvocacy.com)
