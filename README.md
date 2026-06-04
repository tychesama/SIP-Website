# Seniors' Integration Program Website

A cinematic single-page website for a Seniors' Integration Program (SIP) presentation/reflection project. The site is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, with a no-scroll interactive layout designed around four reflective chapters.

## Project status

Status: **completed / presentation-ready**

This repository is kept as the final website archive for the SIP project. It includes the source code, visual assets, interactive sections, and deployment-ready Next.js setup.

---

## Overview

The website opens with a centered 2x2 interactive landing grid. Each tile represents one chapter of the SIP reflection. Selecting a tile transitions into an in-place full-screen section with animated motion, image collages, and written content.

Main sections:

1. **Journey Map** — a reflection on growth through college years and training experiences.
2. **Conversion Story** — a personal story about change, uncertainty, AI, career discernment, and growth.
3. **Passion Plan** — mission statement, prayer for the future self, and 10–20 year career/life plan.
4. **About Me** — personal identity, values, and reflections from school and life experience.

---

## Features

- Full-screen no-scroll presentation layout
- Centered 2x2 landing grid
- Animated tile interactions
- In-place sliding section transitions
- Chapter-based reflective content
- Image collage backgrounds
- Optimized local image usage through Next.js `Image`
- Dark cinematic visual style
- Responsive sizing for different screens
- Custom favicon/logo setup
- TypeScript-based React components

---

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ESLint

---

## Repository structure

```text
SIP-Website/
  src/
    app/
      favicon.ico
      globals.css
      layout.tsx
      page.tsx
  public/
    Dice-Logo.svg
    images/
      journey-map.png
      logo.png
      portrait.png
      class-1.jpg
      class-2.jpg
      class-3.jpg
      school-1.jpg
      school-2.jpg
      school-3.jpg
      img (...).jpg
  package.json
  next.config.ts
  tsconfig.json
  eslint.config.mjs
  postcss.config.mjs
```

---

## Main files

| File | Purpose |
| --- | --- |
| `src/app/page.tsx` | Main interactive website, sections, animations, landing grid, and collage layout |
| `src/app/layout.tsx` | App metadata, font setup, favicon configuration, and root layout |
| `src/app/globals.css` | Global Tailwind import, theme colors, full-screen behavior, and selection styling |
| `public/images/` | Website photos, logo, portrait, school/class images, and journey map asset |
| `package.json` | Project scripts and dependencies |

---

## Installation

Install dependencies from the project root:

```bash
npm install
```

---

## Development

Start the local development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

If port 3000 is already in use, Next.js may offer another local port.

---

## Build

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

---

## Quality check

Run ESLint:

```bash
npm run lint
```

---

## Design notes

- The site intentionally uses `h-screen` and hidden body overflow for a presentation-style no-scroll experience.
- Navigation happens by clicking the four main tiles, then using the **Back** button inside each section.
- The landing page uses a 2x2 visual grid with a circular center logo link.
- The chapter sections use Framer Motion for smooth slide transitions.
- The image-heavy design is meant for a polished reflective presentation rather than a traditional long webpage.

---

## Deployment

This project can be deployed on platforms that support Next.js, such as Vercel.

General deployment flow:

1. Push the repository to GitHub.
2. Import it into Vercel or another Next.js-compatible host.
3. Use the default install/build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: handled by Next.js

---

## Summary

SIP Website is a completed interactive reflection website that presents a Senior Integration Program journey through four animated chapters: Journey Map, Conversion Story, Passion Plan, and About Me.
