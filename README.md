# surbhiexplains.com

> A personal engineering brand — designed from scratch, built in React, deployed on AWS.  
> Live at **[surbhiexplains.com](https://www.surbhiexplains.com)**

---

## Who I Am

I'm Surbhi — a cloud engineering student at Chitkara University, AWS certified twice over, and someone who stumbled into cloud through a lab session and never looked back.

I passed my first AWS certification before I felt ready. That changed everything.

This site is my public record of becoming a cloud engineer — the projects, the notes, the devlogs, and all the messy middle parts most people hide.

---

## What This Site Is

Not a template. Not a theme. Every pixel was a decision.

Built with a custom design system — **Cream & Ink** — crafted from scratch with CSS variables, a base-8 spacing system, and a deliberate type hierarchy using Playfair Display, Inter, and JetBrains Mono.

| Section            | What's Inside                                         |
| ------------------ | ----------------------------------------------------- |
| **Hero**           | Typing animation, dot grid, three CTAs                |
| **About**          | My actual story — honest, personal                    |
| **Experience**     | Quark Software internship · GDG Cloud team            |
| **Education**      | BE Computer Science · Chitkara University · CGPA 9.06 |
| **Projects**       | What I've built and shipped                           |
| **Certifications** | AWS badges with 3D flip cards                         |
| **Devlog**         | Building in public — filtered by category             |
| **Notes**          | Study notes with PDF downloads — filtered by category |
| **Contact**        | All my links, copy-to-clipboard email                 |

---

## Tech Stack

```
Frontend        React 18 + Vite
Styling         Custom CSS — no frameworks, no Tailwind
Hosting         AWS S3 (static) + CloudFront (CDN)
SSL             AWS Certificate Manager
DNS             GoDaddy → CloudFront
CI/CD           GitHub Actions — auto deploys on git push
```

---

## Architecture

```
GitHub Push
    ↓
GitHub Actions
    ↓ npm run build
    ↓ aws s3 sync dist/
    ↓ cloudfront invalidation
    ↓
CloudFront CDN  ←→  AWS S3
    ↓
surbhiexplains.com  (via GoDaddy DNS)
```

Zero servers. Zero databases. Zero monthly cost on AWS free tier.

---

## Features Built From Scratch

- 🎨 Custom design system with CSS variables — theme switchable
- 🌙 Dark / Light mode toggle with `localStorage` persistence
- ✍️ Typing animation in hero — one character at a time
- 👁️ Scroll reveal animations using `IntersectionObserver`
- 📍 Active navbar highlighting — updates as you scroll
- 📊 Reading progress bar — thin accent line at top
- ↑ Back to top button — fades in after 50% scroll
- 📋 Copy email to clipboard button
- 🔄 3D flip certification cards — badge image on reverse
- 🗂️ Category filtering in Notes and Devlog
- 📄 Resume download button
- 🚫 Custom 404 page with React Router
- 📱 Fully responsive — mobile menu with hamburger animation
- 🔍 SEO meta tags + Open Graph for LinkedIn/Twitter previews
- ⚡ GitHub Actions CI/CD — one push deploys everything

---

## Design System

```css
/* Cream & Ink — Light Mode */
--bg-primary: #fafaf8;
--text-primary: #111110;
--accent: #7b68ee;

/* Dusty Rose Terminal — Dark Mode */
--bg-primary: #110f0f;
--text-primary: #faf7f5;
--accent: #d4877a;
```

**Fonts:** Playfair Display · Inter · JetBrains Mono  
**Spacing:** Base-8 system (4px → 128px)  
**Philosophy:** One accent color. Intentional restraint. Nothing decorative that isn't necessary.

---

## Running Locally

```bash
git clone https://github.com/Code-Surbhi/surbhiexplains.git
cd surbhiexplains
npm install
npm run dev
```

Open `http://localhost:5173`

---

## Deployment

Deployments are fully automated via GitHub Actions.

Every `git push` to `main`:

1. Installs dependencies
2. Runs `npm run build`
3. Syncs `dist/` to S3 with proper cache headers
4. Invalidates CloudFront cache

Manual deploy if needed:

```bash
npm run build
aws s3 sync dist/ s3://surbhiexplains.com --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## Certifications

| Certification                     | Code    | Status     | Date     |
| --------------------------------- | ------- | ---------- | -------- |
| AWS Certified Cloud Practitioner  | CLF-C02 | ✅ Earned  | Aug 2025 |
| AWS Certified AI Practitioner     | AIF-C01 | ✅ Earned  | Jan 2026 |
| AWS Solutions Architect Associate | SAA-C03 | ◌ Pursuing | 2026     |

---

## Find Me

| Platform    | Link                                                               |
| ----------- | ------------------------------------------------------------------ |
| 🌐 Website  | [surbhiexplains.com](https://www.surbhiexplains.com)               |
| 💻 GitHub   | [@Code-Surbhi](https://github.com/Code-Surbhi)                     |
| 📺 YouTube  | [@SurbhiExplains](https://www.youtube.com/@SurbhiExplains)         |
| 💼 LinkedIn | [surbhi-singh](https://www.linkedin.com/in/surbhi-singh-472596281) |
| ✍️ Substack | [@surbhiexplains](https://substack.com/@surbhiexplains)            |
| 🐦 X        | [@surbhiexplains](https://x.com/surbhiexplains)                    |

---

<p align="center">
  Designed and built by Surbhi Singh · 2026
  <br />
  <a href="https://www.surbhiexplains.com">surbhiexplains.com</a>
</p>
