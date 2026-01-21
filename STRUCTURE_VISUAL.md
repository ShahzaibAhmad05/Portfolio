# Portfolio Project - Visual Structure

```
portfolio/
│
├── 📱 app/                          # Next.js App Router
│   ├── globals.css                  # Global styles, animations, keyframes
│   ├── layout.tsx                   # Root layout with metadata
│   └── page.tsx                     # ⭐ Main entry point - orchestrates all features
│
├── 🎯 features/                     # Feature Modules (Domain-Driven)
│   │
│   ├── 📝 intro/                    # Landing/Introduction Feature
│   │   ├── intro-slide.tsx          # Typing animation, profile, CTA buttons
│   │   └── index.ts                 # Public exports
│   │
│   ├── 💻 projects/                 # Projects Showcase Feature
│   │   ├── projects-slide.tsx       # 3D card effect, project gallery
│   │   └── index.ts                 # Public exports
│   │
│   ├── 🎓 certificates/             # Certifications Feature
│   │   ├── certificates-slide.tsx   # Infinite scrolling belt animation
│   │   ├── data.ts                  # Certificate list data
│   │   └── index.ts                 # Public exports
│   │
│   ├── 📧 contact/                  # Contact Information Feature
│   │   ├── contact-slide.tsx        # Email & social links
│   │   └── index.ts                 # Public exports
│   │
│   └── 🚀 app-launcher/             # GNOME-like App Launcher Feature
│       ├── app-launcher.tsx         # Main launcher component
│       ├── components/
│       │   ├── app-icon.tsx         # Reusable dock icon
│       │   └── terminal-app.tsx     # Terminal modal window
│       └── index.ts                 # Public exports
│
├── 📚 lib/                          # Shared Library Code
│   │
│   ├── 🔢 constants/                # Application Constants
│   │   ├── slides.ts                # SLIDES configuration array
│   │   ├── projects.ts              # PROJECTS data array
│   │   └── index.ts                 # Barrel exports
│   │
│   ├── 🪝 hooks/                    # Custom React Hooks
│   │   ├── use-vertical-scroll.ts   # Scroll-down overview activation
│   │   ├── use-slide-scroller.ts    # Horizontal slide navigation
│   │   └── index.ts                 # Barrel exports
│   │
│   ├── 📐 types/                    # TypeScript Definitions
│   │   └── index.ts                 # Slide, Project, Certificate types
│   │
│   └── 🛠️ utils/                    # Utility Functions
│       ├── math.ts                  # clamp()
│       ├── scroll.ts                # smoothScrollTo(), easeOutExpo()
│       └── index.ts                 # Barrel exports
│
├── 🎨 ui/                           # UI Components & Effects
│   │
│   ├── components/                  # Reusable UI Components
│   │   ├── slide-dots.tsx           # Navigation dot indicators
│   │   ├── slide-scroller.tsx       # Horizontal scroll container
│   │   ├── scroll-indicator.tsx     # Animated scroll prompt
│   │   └── index.ts                 # Barrel exports
│   │
│   └── effects/                     # Visual Effects
│       ├── background-effects.tsx   # Animated fog/gradients
│       ├── particles.tsx            # Star constellation canvas
│       └── index.ts                 # Barrel exports
│
├── 📦 public/                       # Static Assets
│   └── (images, fonts, etc.)
│
├── 📋 Configuration Files
│   ├── tsconfig.json                # TypeScript config with path aliases
│   ├── next.config.ts               # Next.js configuration
│   ├── tailwind.config.ts           # Tailwind CSS config
│   ├── postcss.config.mjs           # PostCSS configuration
│   ├── eslint.config.mjs            # ESLint rules
│   ├── package.json                 # Dependencies & scripts
│   ├── README.md                    # Project overview
│   └── STRUCTURE.md                 # This documentation
│
└── 📂 (Legacy - Deprecated)
    ├── components/                  # ❌ Old flat structure
    └── hooks/                       # ❌ Moved to lib/hooks/
```

---

## 🎯 Dependency Graph

```
┌─────────────────────────────────────────────────────────────┐
│                        app/page.tsx                         │
│                     (Main Orchestrator)                     │
└────────────────────────────┬────────────────────────────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
        ┌───────▼────────┐       ┌───────▼────────┐
        │   features/    │       │    ui/         │
        │   (Slides &    │       │  (Components   │
        │   Launcher)    │       │   & Effects)   │
        └───────┬────────┘       └───────┬────────┘
                │                        │
                └──────────┬─────────────┘
                           │
                   ┌───────▼────────┐
                   │     lib/       │
                   │  (Utils, Hooks,│
                   │  Types, Data)  │
                   └────────────────┘
```

### Dependency Rules

- ✅ **features/** → can import from **ui/**, **lib/**
- ✅ **ui/** → can import from **lib/**
- ✅ **lib/** → no imports (pure utilities)
- ❌ **lib/** → CANNOT import from **ui/** or **features/**
- ❌ **ui/** → CANNOT import from **features/**

---

## 🔑 Key Components

| Component | Location | Purpose |
|-----------|----------|---------|
| **Home Page** | `app/page.tsx` | Main entry, orchestrates slides & launcher |
| **IntroSlide** | `features/intro/` | Landing page with typing animation |
| **ProjectsSlide** | `features/projects/` | 3D card showcase |
| **CertificatesSlide** | `features/certificates/` | Infinite scrolling belt |
| **ContactSlide** | `features/contact/` | Contact info & social links |
| **AppLauncher** | `features/app-launcher/` | GNOME-style app dock |
| **Particles** | `ui/effects/` | Star constellation canvas |
| **BackgroundEffects** | `ui/effects/` | Animated fog gradients |
| **SlideDots** | `ui/components/` | Navigation indicators |
| **SlideScroller** | `ui/components/` | Horizontal scroll container |

---

## 📊 File Count by Category

```
Features (Slides & Launcher): 12 files
UI (Components & Effects):     7 files
Lib (Utils, Hooks, Types):     10 files
Configuration:                 8 files
Documentation:                 2 files
─────────────────────────────────────
Total:                         39 files
```

---

## 🎨 Import Path Aliases

| Alias | Maps To | Example |
|-------|---------|---------|
| `@/lib/*` | `lib/*` | `import { clamp } from '@/lib/utils'` |
| `@/features/*` | `features/*` | `import { IntroSlide } from '@/features/intro'` |
| `@/ui/*` | `ui/*` | `import { Particles } from '@/ui/effects'` |
| `@/app/*` | `app/*` | `import './globals.css'` |

---

## 🚀 Benefits Summary

### For Humans 👨‍💻
- ✅ Clear, predictable file locations
- ✅ Easy to find related code
- ✅ Self-documenting structure
- ✅ Reduces cognitive load

### For AI 🤖
- ✅ Semantic grouping aids understanding
- ✅ Clear boundaries for context
- ✅ Predictable import patterns
- ✅ Easy to generate new features

### For Collaboration 🤝
- ✅ Onboarding is faster
- ✅ Less merge conflicts
- ✅ Clear ownership boundaries
- ✅ Scalable team structure

---

**Legend:**
- 📱 = Next.js App
- 🎯 = Features (Domain Logic)
- 📚 = Library (Shared Code)
- 🎨 = UI (Presentation)
- 🔢 = Data & Constants
- 🪝 = React Hooks
- 📐 = TypeScript Types
- 🛠️ = Utilities
