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

## Contact form email setup

The contact form uses the [Web3Forms API](https://docs.web3forms.com/getting-started/api-reference), which can deliver submissions to an email inbox without requiring a custom sender domain or a server-side email account. The provider's free plan currently includes up to **250 submissions per month**. A hidden honeypot helps filter automated submissions.

1. Create a free form at [web3forms.com](https://web3forms.com/). Enter the inbox where inquiries should arrive and verify that address; Web3Forms emails its form Access Key to that inbox.
2. In Vercel → Velora project → Settings → Environment Variables, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with that Access Key for Production (and Preview if needed).
3. Redeploy the project so Next.js includes the key in the public form bundle.

Web3Forms explicitly designs this Access Key for client-side use, so it is **public**, not a private Resend API secret. Do not reuse or publish a full-access Resend key. `.env.example` shows the local variable name. Until the Access Key is configured, the form displays an activation error instead of falsely claiming that an email was sent.

## Accessibility and motion

Review keyboard focus, contrast, responsive behavior, and reduced-motion preferences before adapting this starter for a production brand. Keep animation purposeful and avoid motion that blocks access to content.
