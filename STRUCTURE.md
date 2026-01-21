# Portfolio Project - Structure Documentation

## 📁 Project Structure

This portfolio is built with **Next.js 16**, **React 19**, and **TypeScript**, using a feature-based architecture for better organization and maintainability.

### Directory Overview

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main portfolio page
│
├── features/              # Feature-based modules (slides & app launcher)
│   ├── intro/            # Introduction/landing slide
│   │   ├── intro-slide.tsx
│   │   └── index.ts
│   │
│   ├── projects/         # Projects showcase slide
│   │   ├── projects-slide.tsx
│   │   └── index.ts
│   │
│   ├── certificates/     # Certificates display slide
│   │   ├── certificates-slide.tsx
│   │   ├── data.ts       # Certificate data
│   │   └── index.ts
│   │
│   ├── contact/          # Contact information slide
│   │   ├── contact-slide.tsx
│   │   └── index.ts
│   │
│   └── app-launcher/     # GNOME-like app launcher feature
│       ├── app-launcher.tsx
│       ├── components/
│       │   ├── app-icon.tsx
│       │   └── terminal-app.tsx
│       └── index.ts
│
├── lib/                   # Shared utilities, hooks, types, and constants
│   ├── constants/        # Application constants
│   │   ├── slides.ts     # Slide configuration
│   │   ├── projects.ts   # Project data
│   │   └── index.ts
│   │
│   ├── hooks/            # Custom React hooks
│   │   ├── use-vertical-scroll.ts    # Overview effect hook
│   │   ├── use-slide-scroller.ts     # Slide navigation hook
│   │   └── index.ts
│   │
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts      # Shared types (Slide, Project, etc.)
│   │
│   └── utils/            # Utility functions
│       ├── math.ts       # Math utilities (clamp)
│       ├── scroll.ts     # Scroll utilities (smooth scroll, easing)
│       └── index.ts
│
├── ui/                    # Reusable UI components and effects
│   ├── components/       # UI components
│   │   ├── slide-dots.tsx          # Navigation dots
│   │   ├── slide-scroller.tsx      # Horizontal scroller
│   │   ├── scroll-indicator.tsx    # Scroll prompt
│   │   └── index.ts
│   │
│   └── effects/          # Visual effects
│       ├── background-effects.tsx  # Animated fog/gradients
│       ├── particles.tsx          # Star constellation effect
│       └── index.ts
│
├── public/               # Static assets
│
└── Configuration Files
    ├── tsconfig.json     # TypeScript configuration
    ├── next.config.ts    # Next.js configuration
    ├── tailwind.config.ts # Tailwind CSS configuration
    └── package.json      # Dependencies and scripts
```

## 🎯 Architecture Principles

### 1. **Feature-Based Organization**
Each major feature (slide or app) lives in its own directory under `features/`, containing all related components and logic.

### 2. **Separation of Concerns**
- **features/**: Business logic and feature-specific components
- **ui/**: Reusable, presentational components
- **lib/**: Shared utilities, hooks, and data

### 3. **Clear Dependencies**
```
features/ → depends on → ui/, lib/
ui/ → depends on → lib/
lib/ → no dependencies (pure utilities)
```

### 4. **Type Safety**
All shared types are centralized in `lib/types/` for consistency across the application.

## 🚀 Key Features

### Horizontal Slide Navigation
- Smooth scroll between sections with snap points
- Keyboard navigation (Arrow Left/Right)
- Active slide indicator dots
- Custom easing animations

### GNOME-Like Overview Effect
- Scroll down to activate overview mode
- Scales down content with smooth animation
- Shows app launcher dock
- Click anywhere to dismiss

### Visual Effects
- **Particles**: Twinkling star constellation with mouse interaction
- **Background Effects**: Animated gradient fog with parallax scrolling
- Theme-specific color schemes per slide

### App Launcher
- Modular app icons
- Terminal app with command history
- Placeholder apps (Calculator, Notes)
- Clean separation of concerns

## 📝 Import Conventions

### Path Aliases (tsconfig.json)
```typescript
@/lib/*         → lib/
@/features/*    → features/
@/ui/*          → ui/
@/app/*         → app/
```

### Import Examples
```typescript
// Utilities and hooks
import { clamp, smoothScrollTo } from '@/lib/utils';
import { useVerticalScroll, useSlideScroller } from '@/lib/hooks';

// Constants and types
import { SLIDES, PROJECTS } from '@/lib/constants';
import type { Slide, Project } from '@/lib/types';

// UI Components
import { SlideDots, BackgroundEffects } from '@/ui/components';
import { Particles } from '@/ui/effects';

// Features
import { IntroSlide } from '@/features/intro';
import { AppLauncher } from '@/features/app-launcher';
```

## 🛠️ Adding New Features

### Creating a New Slide
1. Create directory: `features/new-slide/`
2. Add component: `new-slide.tsx`
3. Add barrel export: `index.ts`
4. Register in `lib/constants/slides.ts`
5. Import in `app/page.tsx`

### Adding New UI Components
1. Add component in `ui/components/` or `ui/effects/`
2. Export from barrel file (`index.ts`)
3. Import using `@/ui/components` or `@/ui/effects`

### Adding Utilities
1. Add function in appropriate `lib/utils/` file
2. Export from `lib/utils/index.ts`
3. Import using `@/lib/utils`

## 📦 Benefits of This Structure

1. **Scalability**: Easy to add new slides or features
2. **Maintainability**: Clear separation makes changes predictable
3. **Readability**: Both humans and AI can navigate easily
4. **Testability**: Isolated features are easier to test
5. **Reusability**: UI components and utilities are easily shared
6. **Type Safety**: Centralized types prevent inconsistencies

## 🔄 Migration from Old Structure

Old structure had:
- All components in flat `components/` directory
- Slides in nested `components/slides/`
- Hooks in separate `hooks/` directory
- Mixed concerns and dependencies

New structure provides:
- Clear feature boundaries
- Logical grouping by domain
- Easier navigation and understanding
- Better scalability for future growth

---

**Last Updated**: January 2026
**Next.js Version**: 16.1.4
**React Version**: 19.2.3
