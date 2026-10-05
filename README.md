# arjun-portfolio

Personal portfolio website for **Arjun S** — Full-Stack Software Engineer (MERN Stack).

Built with Next.js 14 App Router, Tailwind CSS, and zero external UI dependencies. Optimized for recruiter impact within 5–10 seconds of page load.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Syne (display) · JetBrains Mono · DM Sans
- **Animations**: CSS keyframes + IntersectionObserver
- **No environment variables required**

---

## 📁 Project Structure

```
arjun-portfolio/
├── app/
│   ├── globals.css       # Global styles, custom animations, font imports
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Main page assembly
├── components/
│   ├── Navbar.js         # Fixed nav with scroll effect + mobile menu
│   ├── Hero.js           # Animated hero with typewriter effect
│   ├── About.js          # About section with stats + status card
│   ├── Projects.js       # Featured projects + other builds
│   ├── Experience.js     # Timeline + education sidebar
│   ├── Skills.js         # Skill bars + tag cloud
│   ├── Contact.js        # Contact CTA with email copy
│   └── Footer.js         # Simple footer
├── package.json
├── next.config.js
├── tailwind.config.js
└── jsconfig.json
```

---

## 🛠️ Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/arjun-portfolio.git
cd arjun-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Personal info, bullets | `components/Experience.js` |
| Project details | `components/Projects.js` |
| Skill levels | `components/Skills.js` |
| Social links | `components/Hero.js`, `components/Contact.js` |
| Color palette | `tailwind.config.js` → `colors` |
| Fonts | `tailwind.config.js` → `fontFamily` + `app/globals.css` |

---

## 🎨 Design Decisions

- **Dark, structured aesthetic** inspired by developer tooling (GitHub, linear.app)
- **Green accent (`#4ade80`)** — signals growth, code, terminal energy
- **Syne display font** — distinctive, confident, not generic
- **IntersectionObserver** scroll reveals — smooth, no layout shifts
- **Typewriter hero** — immediately communicates technical identity
- **Skill bars animate on scroll** — engagement without gimmicks

---

## 📄 License

MIT — free to adapt for your own portfolio.
