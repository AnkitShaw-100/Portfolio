# Portfolio - Next.js Portfolio Website

A modern, animated portfolio website built with Next.js, React, TypeScript, and Tailwind CSS featuring smooth animations with GSAP.

##  Quick Start

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation & Running

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands
```bash
npm run build    # Production build
npm start        # Run production server
npm run lint     # ESLint checks
```

##  Features

### Page Sections
- **Banner**: Hero section with introduction, call-to-action buttons (Contact & Resume download)
- **About Me**: Developer background and expertise overview
- **Skills**: Tech stack and proficiencies showcase
- **Projects**: Portfolio of completed projects with details
- **Footer**: Navigation and contact links

### Components
- **ArrowAnimation**: Animated arrow element
- **Button**: Reusable button component (primary/secondary variants)
- **CustomCursor**: Custom cursor styling
- **Navbar**: Navigation header
- **ParticleBackground**: Animated particle effects
- **Preloader**: Loading animation
- **ScrollProgressIndicator**: Scroll progress bar
- **SectionTitle**: Styled section headers
- **TransitionLink**: Smooth page transitions
- **StickyEmail**: Fixed email contact sidebar

### Animations & Effects
- GSAP-powered scroll-triggered animations
- Smooth page transitions
- Particle background effects
- Staggered element animations
- Scroll progress tracking

##  Project Structure
```
├── app/                    # Next.js app directory
│   ├── _components/       # Page section components
│   ├── projects/          # Project detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── lib/                   # Utilities and data
├── public/                # Static assets (Resume.pdf, logos)
└── types/                 # TypeScript type definitions
```

##  Tech Stack
- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **UI Components**: React 19 (RC)
- **Icons**: Lucide React

## Notes
- Uses `--legacy-peer-deps` for npm install due to React 19 RC peer dependency conflicts
- Resume PDF is served from `/public/Resume.pdf`
- Email configuration available in `lib/data.ts`

## 📄 License
Private project
