# Velora Motion Studio

A motion-first digital studio website starter built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The project demonstrates cinematic presentation, responsive layouts, reusable UI components, and purposeful interaction design.

## Highlights

- Responsive home, about, services, projects, project-detail, contact, and not-found pages
- Reusable navigation, footer, project cards, visual components, and reveal effects
- Framer Motion interactions and Lucide iconography
- Dark visual system with ambient gradients and glass surfaces
- App Router architecture with TypeScript

## Technology

- Next.js 16 (App Router)
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion 11
- Lucide React

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Install and run

```bash
git clone https://github.com/rajahaider50/velora-motion-studio.git
cd velora-motion-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |

## Project structure

```text
app/
  about/                 About page
  contact/               Contact page and demo form
  projects/               Project listing and detail routes
  services/               Services page
  globals.css             Global styles and design tokens
  layout.tsx              Root layout, metadata, shared chrome
  page.tsx                Home page
components/
  CursorGlow.tsx          Ambient pointer effect
  Footer.tsx              Shared site footer
  MagneticButton.tsx      Interactive call-to-action
  Navbar.tsx              Responsive site navigation
  ProjectCard.tsx         Reusable portfolio card
  Reveal.tsx              Scroll-reveal wrapper
  Visual.tsx              Hero visual composition
```

## Deployment

This repository is connected to Vercel. Pushes to the production branch trigger a production deployment; pull requests and other branches can be used for previews.

## Contact form note

The contact form currently demonstrates client-side validation and a success state only. It does **not** send or store submissions. Connect a trusted email provider or server-side API before relying on it for real inquiries.

## Accessibility and motion

Review keyboard focus, contrast, responsive behavior, and reduced-motion preferences before adapting this starter for a production brand. Keep animation purposeful and avoid motion that blocks access to content.
