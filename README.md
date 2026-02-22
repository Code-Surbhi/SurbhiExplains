# surbhiexplains.com

> A personal engineering brand — designed from scratch, built in React, deployed on AWS.  
> Live at **[surbhiexplains.com](https://www.surbhiexplains.com)**

---

## About

I'm Surbhi — a cloud engineering student at Chitkara University, AWS certified twice over, and someone who stumbled into cloud through a lab session and never looked back.

I passed my first AWS certification before I felt ready. That changed everything.

This site is my public record of becoming a cloud engineer — the projects, the notes, the devlogs, and all the messy middle parts most people hide.

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI component framework |
| Vite | 5 | Build tool and dev server |
| React Router DOM | 6 | Client-side routing + 404 handling |
| JavaScript (ES6+) | — | Core language |
| CSS3 | — | All styling — no frameworks, no Tailwind |

### React APIs & Hooks Used

| Hook / API | Purpose |
|---|---|
| `useState` | Theme toggle, typing animation, filter state, copy button |
| `useEffect` | Scroll listeners, typing timer, theme persistence |
| `useRef` | IntersectionObserver scroll reveal |
| `IntersectionObserver` | Scroll reveal animations (custom `useScrollReveal` hook) |
| `localStorage` | Dark/light mode preference persistence |
| `navigator.clipboard` | Copy email to clipboard |

### Custom Hooks Built

| Hook | What It Does |
|---|---|
| `useScrollReveal` | Watches elements entering viewport, triggers fade-up animation |
| `useTheme` | Manages dark/light mode, persists to localStorage, toggles body class |

### AWS Infrastructure

| Service | Purpose |
|---|---|
| S3 | Static website hosting — stores built `dist/` files |
| CloudFront | CDN — global delivery, HTTPS termination, cache management |
| ACM (Certificate Manager) | Free SSL/TLS certificate for HTTPS — issued in us-east-1 |

### DNS & Domain

| Tool | Purpose |
|---|---|
| GoDaddy | Domain registrar — surbhiexplains.com |
| GoDaddy DNS | CNAME record pointing `www` → CloudFront distribution |
| GoDaddy Forwarding | Root domain (surbhiexplains.com) → www.surbhiexplains.com |

### CI/CD

| Tool | Purpose |
|---|---|
| GitHub Actions | Automated deployment pipeline on every `git push` |
| AWS CLI | S3 sync + CloudFront cache invalidation inside workflow |
| npm ci | Clean dependency install in CI environment |

### Dev Tools

| Tool | Purpose |
|---|---|
| Git | Version control |
| GitHub | Remote repository + Actions runner |
| VS Code | Code editor |
| Node.js | Local development runtime |
| npm | Package manager |

---

## Architecture

```
Developer Machine
    ↓  git push origin main
GitHub Repository
    ↓  triggers GitHub Actions workflow
GitHub Actions Runner
    ↓  npm ci
    ↓  npm run build  →  dist/
    ↓  aws s3 sync dist/ s3://surbhiexplains.com --delete
    ↓  aws cloudfront create-invalidation --paths "/*"
    ↓
AWS S3 Bucket  ←————————————  AWS CloudFront CDN
(static files)                 (HTTPS + global edge)
                                      ↓
                          surbhiexplains.com
                        (GoDaddy DNS → CloudFront)
```

**Cost:** $0/month on AWS free tier. Domain cost only.

---

## Design System

Built entirely with CSS custom properties — no design framework.

```css
/* Typography */
--font-display: 'Playfair Display', Georgia, serif;
--font-body:    'Inter', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', monospace;

/* Cream & Ink — Light Mode */
--bg-primary:    #FAFAF8;
--bg-secondary:  #F2F2EE;
--text-primary:  #111110;
--text-secondary:#666660;
--accent:        #7B68EE;
--accent-muted:  #C8C0F8;
--border:        #E0E0D8;

/* Dusty Rose Terminal — Dark Mode */
--bg-primary:    #110F0F;
--bg-secondary:  #1C1917;
--text-primary:  #FAF7F5;
--accent:        #D4877A;
--border:        #2C2826;
```

**Spacing:** Base-8 system — 4px to 128px via `--space-1` through `--space-9`  
**Transitions:** Three speeds — fast (150ms), normal (250ms), slow (400ms)

---

## Features Built From Scratch

| Feature | Implementation |
|---|---|
| Typing animation | `useState` + recursive `setTimeout` |
| Scroll reveal | Custom `useScrollReveal` hook with `IntersectionObserver` |
| Dark / light mode | `useTheme` hook + CSS variables + `localStorage` |
| Active navbar links | `scrollY` vs `offsetTop` comparison on scroll |
| Reading progress bar | `scrollY / (scrollHeight - innerHeight) * 100` |
| Back to top button | Fades in after 50% scroll, smooth scroll on click |
| Copy email button | `navigator.clipboard.writeText` + 2s timeout reset |
| 3D cert card flip | CSS `perspective` + `rotateY(180deg)` + `backface-visibility` |
| Category filtering | `useState` + `Array.filter` — no external library |
| 404 page | React Router `path="*"` catch-all route |
| Resume download | `<a>` tag with `target="_blank"` to `/resume/` |
| Hamburger menu | CSS transform on `burger-line` spans |
| CI/CD pipeline | GitHub Actions YAML workflow |
| Favicon | Custom SVG — `SE.` monogram with accent dot |
| OG meta tags | Open Graph + Twitter Card in `index.html` |

---

## Project Structure

```
surbhiexplains/
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
│   │   └── ReadingProgressBar/
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.js
└── package.json
```

---

## Running Locally

```bash
git clone https://github.com/Code-Surbhi/surbhiexplains.git
cd surbhiexplains
npm install
npm run dev
# open http://localhost:5173
```

---

## Deployment

Fully automated — every `git push` to `main` triggers deployment.

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

| Certification | Code | Status | Date |
|---|---|---|---|
| AWS Certified Cloud Practitioner | CLF-C02 | ✅ Earned | Aug 2025 |
| AWS Certified AI Practitioner | AIF-C01 | ✅ Earned | Jan 2026 |
| AWS Solutions Architect Associate | SAA-C03 | ◌ Pursuing | 2026 |

---

## Find Me

| Platform | Link |
|---|---|
| 🌐 Website | [surbhiexplains.com](https://www.surbhiexplains.com) |
| 💻 GitHub | [@Code-Surbhi](https://github.com/Code-Surbhi) |
| 📺 YouTube | [@SurbhiExplains](https://www.youtube.com/@SurbhiExplains) |
| 💼 LinkedIn | [surbhi-singh](https://www.linkedin.com/in/surbhi-singh-472596281) |
| ✍️ Substack | [@surbhiexplains](https://substack.com/@surbhiexplains) |
| 🐦 X / Twitter | [@surbhiexplains](https://x.com/surbhiexplains) |
| 💡 LeetCode | [@surbhi_code](https://leetcode.com/u/surbhi_code/) |

---

<p align="center">
  Designed and built by Surbhi Singh · 2026<br/>
  <a href="https://www.surbhiexplains.com">surbhiexplains.com</a>
</p>