# surbhiexplains.com

> A personal engineering brand — designed from scratch, built in React, deployed on AWS.  
> Live at **[surbhiexplains.com](https://www.surbhiexplains.com)**

---

## About

I'm Surbhi - a cloud engineering student at Chitkara University, AWS certified twice over, and someone who stumbled into cloud through a lab session and never looked back.

I passed my first AWS certification before I felt ready. That changed everything.

This site is my public record of becoming a cloud engineer - the projects, the notes, the devlogs, and all the messy middle parts most people hide.

---

## What This Site Is

Not a template. Not a theme. Every pixel was a decision.

Built with a custom design system — **Cream & Ink** — crafted from scratch with CSS variables, a base-8 spacing system, and a deliberate type hierarchy. Two themes : light and dark , that feel like the same room with the lights turned up or down.

| Section            | What's Inside                                         |
| ------------------ | ----------------------------------------------------- |
| **Hero**           | Typing animation, dot grid, three CTAs                |
| **About**          | My actual story — honest and personal                 |
| **Experience**     | Quark Software internship · GDG Cloud team            |
| **Education**      | BE Computer Science · Chitkara University · CGPA 9.06 |
| **Projects**       | What I've built and shipped                           |
| **Certifications** | AWS badges with 3D flip cards                         |
| **Devlog**         | Building in public — filtered by category             |
| **Notes**          | Study notes with PDF downloads — filtered by category |
| **Contact**        | All my links, copy-to-clipboard email                 |

---

## Tech Stack

### Frontend

| Technology               | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| React 18                 | UI component framework                   |
| Vite 5                   | Build tool and dev server                |
| React Router DOM 6       | Client-side routing + 404 handling       |
| JavaScript ES6+          | Core language                            |
| CSS3 (custom properties) | All styling — no frameworks, no Tailwind |

### Fonts

| Font             | Use                                    |
| ---------------- | -------------------------------------- |
| Playfair Display | Headings and display text              |
| Inter            | Body text                              |
| JetBrains Mono   | Labels, tags, code, monospace elements |

### React Hooks & Browser APIs

| Hook / API             | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `useState`             | Theme toggle, typing animation, filter state, copy button, menu state |
| `useEffect`            | Scroll listeners, typing timer, theme persistence, terminal loop      |
| `useRef`               | IntersectionObserver anchor for scroll reveal                         |
| `IntersectionObserver` | Scroll reveal animations                                              |
| `localStorage`         | Dark/light mode preference persistence                                |
| `navigator.clipboard`  | Copy email to clipboard                                               |
| `window.scrollY`       | Active navbar highlight, back to top visibility, progress bar         |

### Custom Hooks

| Hook              | What It Does                                                          |
| ----------------- | --------------------------------------------------------------------- |
| `useScrollReveal` | Watches elements entering viewport, triggers fade-up animation once   |
| `useTheme`        | Manages dark/light mode, persists to localStorage, toggles body class |

### AWS Infrastructure

| Service    | Purpose                                                       |
| ---------- | ------------------------------------------------------------- |
| S3         | Static website hosting — stores built `dist/` files           |
| CloudFront | CDN — global delivery, HTTPS, cache management                |
| ACM        | Free SSL/TLS certificate — issued in us-east-1                |
| IAM        | `github-actions-deploy` user with S3 + CloudFront permissions |

### DNS & Domain

| Tool               | Purpose                                    |
| ------------------ | ------------------------------------------ |
| GoDaddy            | Domain registrar — surbhiexplains.com      |
| GoDaddy DNS        | CNAME `www` → CloudFront distribution      |
| GoDaddy Forwarding | Root domain → www.surbhiexplains.com (301) |

### CI/CD

| Tool           | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| GitHub Actions | Automated pipeline — triggers on every `git push` to main |
| AWS CLI        | S3 sync + CloudFront invalidation inside workflow         |
| npm ci         | Clean dependency install in CI environment                |
| YAML           | Workflow configuration                                    |

### Dev Tools

| Tool       | Purpose                      |
| ---------- | ---------------------------- |
| Git        | Version control              |
| GitHub     | Remote repo + Actions runner |
| VS Code    | Code editor                  |
| Node.js 20 | Local development runtime    |
| npm        | Package manager              |

---

## Architecture

```
Developer Machine
    ↓  git push origin main
GitHub Repository
    ↓  triggers GitHub Actions workflow
GitHub Actions Runner (ubuntu-latest)
    ↓  npm ci
    ↓  npm run build  →  dist/
    ↓  aws s3 sync dist/ s3://surbhiexplains.com --delete
    ↓  aws cloudfront create-invalidation --paths "/*"
    ↓
AWS S3 Bucket  ←————————  AWS CloudFront CDN
(static files)              (HTTPS + global edge cache)
                                    ↓
                        surbhiexplains.com
                      (GoDaddy DNS → CloudFront)
```

**Cost:** $0/month on AWS free tier. Domain cost only.  
**Deploy time:** Under 30 seconds from `git push` to live.

---

## Design System

```css
/* Typography */
--font-display: "Playfair Display", Georgia, serif;
--font-body: "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", monospace;

/* Cream & Ink — Light Mode */
--bg-primary: #fafaf8;
--bg-secondary: #f2f2ee;
--text-primary: #111110;
--text-secondary: #666660;
--accent: #7b68ee;
--accent-muted: #c8c0f8;
--border: #e0e0d8;

/* Deep Charcoal — Dark Mode */
--bg-primary: #1c1b1f;
--bg-secondary: #242229;
--text-primary: #f0eef8;
--text-secondary: #a09cb0;
--accent: #9080f5;
--accent-muted: #3d3666;
--border: #2e2b38;
```

**Spacing:** Base-8 system — `--space-1` (4px) through `--space-9` (128px)  
**Transitions:** Fast (150ms) · Normal (250ms) · Slow (400ms)

---

## Features Built From Scratch

| Feature                      | Implementation                                                        |
| ---------------------------- | --------------------------------------------------------------------- |
| Typing animation             | `useState` + recursive `setTimeout` — types one character at a time   |
| Buttons fade in after typing | CSS `opacity` transition triggered when typing completes              |
| Scroll reveal                | `useScrollReveal` hook with `IntersectionObserver` — fires once       |
| Dark / light mode            | `useTheme` hook + CSS variables on `body.dark` + `localStorage`       |
| Pill toggle button           | Custom CSS sliding dot — no library                                   |
| Active navbar links          | `scrollY` vs section `offsetTop` comparison on scroll event           |
| Reading progress bar         | `scrollY / (scrollHeight - innerHeight) * 100`                        |
| Back to top button           | Fades in after 50% scroll, smooth scroll on click                     |
| Copy email button            | `navigator.clipboard.writeText` + 2s timeout state reset              |
| 3D cert card flip            | CSS `perspective` + `rotateY(180deg)` + `backface-visibility: hidden` |
| Category filtering — Notes   | `useState` + `Array.filter` — categories auto-generated from data     |
| Category filtering — Devlog  | Same pattern — featured card only shows in All view                   |
| Custom 404 page              | React Router `path="*"` catch-all route                               |
| Hamburger menu               | CSS `transform` animation on three `burger-line` spans                |
| CI/CD pipeline               | GitHub Actions YAML — build, S3 sync, CloudFront invalidation         |
| Custom favicon               | SVG monogram `SE.` with accent purple dot                             |
| SEO meta tags                | Open Graph + Twitter Card in `index.html`                             |
| Resume download              | `<a>` with `target="_blank"` pointing to `/resume/`                   |

---

## Project Structure

```
surbhiexplains/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD pipeline
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── resume/
│   │   └── surbhi-singh-resume.pdf
│   ├── badges/
│   │   ├── aws-ccp.png
│   │   └── aws-ai.png
│   └── notes/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Education/
│   │   ├── Projects/
│   │   ├── Certifications/
│   │   ├── Devlog/
│   │   ├── Notes/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── ThemeToggle/
│   │   ├── BackToTop/
│   │   ├── ReadingProgressBar/
│   │   └── NotFound/
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               ← full design system
├── index.html                  ← SEO meta tags + favicon
├── vite.config.js
└── package.json
```

---

## Running Locally

```bash
git clone https://github.com/Code-Surbhi/SurbhiExplains.git
cd SurbhiExplains
npm install
npm run dev
# open http://localhost:5173
```

---

## Deployment

Every `git push` to `main` auto-deploys via GitHub Actions.

```bash
# Manual deploy if needed
npm run build
aws s3 sync dist/ s3://surbhiexplains.com --delete \
  --cache-control "max-age=31536000,public" --exclude "index.html"
aws s3 cp dist/index.html s3://surbhiexplains.com/index.html \
  --cache-control "no-cache,no-store,must-revalidate"
aws cloudfront create-invalidation \
  --distribution-id YOUR_ID --paths "/*"
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

| Platform       | Link                                                               |
| -------------- | ------------------------------------------------------------------ |
| 🌐 Website     | [surbhiexplains.com](https://www.surbhiexplains.com)               |
| 💻 GitHub      | [@Code-Surbhi](https://github.com/Code-Surbhi)                     |
| 📺 YouTube     | [@SurbhiExplains](https://www.youtube.com/@SurbhiExplains)         |
| 💼 LinkedIn    | [surbhi-singh](https://www.linkedin.com/in/surbhi-singh-472596281) |
| ✍️ Substack    | [@surbhiexplains](https://substack.com/@surbhiexplains)            |
| 🐦 X / Twitter | [@surbhiexplains](https://x.com/surbhiexplains)                    |
| 💡 LeetCode    | [@surbhi_code](https://leetcode.com/u/surbhi_code/)                |

---

<p align="center">
  Designed and built by Surbhi Singh · 2026<br/>
  <a href="https://www.surbhiexplains.com">surbhiexplains.com</a>
</p>
