# Moch Rozi Rizky Priyanto — Portfolio

Neo-Brutalist portfolio website built with **Next.js 14 + TypeScript**.

## Color Palette
| Color  | Hex     | Usage              |
|--------|---------|--------------------|
| Cyan   | #7DFAFF | Cards, accents     |
| Blue   | #3300FF | Primary, hero name |
| Yellow | #FFEC00 | Nav, backgrounds   |
| Orange | #FF4910 | Ticker, badges     |
| Teal   | #1BEDCA | Status, periods    |
| Pink   | #FF01F6 | Labels, badges     |

## Project Structure
```
/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (cursor + reveal logic)
│   └── globals.css      # CSS variables, animations, utilities
└── components/
    ├── Nav.tsx           # Fixed navigation bar
    ├── Hero.tsx          # Hero section with stats card
    ├── Ticker.tsx        # Scrolling skills ticker
    ├── About.tsx         # About + contact info
    ├── Experience.tsx    # Timeline experience cards
    ├── Skills.tsx        # Skills grid cards
    ├── Contact.tsx       # Contact section
    ├── Footer.tsx        # Footer
    └── index.tsx         # All component implementations
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deploy to Vercel

```bash
npx vercel
```

## Features
- ✅ Neo-Brutalist design with bold borders and hard shadows
- ✅ Custom cursor with follower animation
- ✅ Scroll-reveal animations
- ✅ Auto-scrolling skills ticker
- ✅ Floating animated badges
- ✅ Responsive layout
- ✅ CSS Grid background pattern
- ✅ Interactive hover states on all cards
