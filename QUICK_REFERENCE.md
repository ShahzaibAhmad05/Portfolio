# Quick Reference Card 📋

## 🗂️ Where to Find Things

| Looking for... | Check here... |
|---------------|---------------|
| **Slide components** | `features/[slide-name]/` |
| **Reusable UI** | `ui/components/` |
| **Visual effects** | `ui/effects/` |
| **Custom hooks** | `lib/hooks/` |
| **Utility functions** | `lib/utils/` |
| **Constants & data** | `lib/constants/` |
| **Type definitions** | `lib/types/` |
| **App launcher** | `features/app-launcher/` |

---

## 📦 Quick Imports

```typescript
// Utilities
import { clamp, smoothScrollTo } from '@/lib/utils';

// Hooks
import { useVerticalScroll, useSlideScroller } from '@/lib/hooks';

// Constants & Types
import { SLIDES, PROJECTS } from '@/lib/constants';
import type { Slide, Project } from '@/lib/types';

// UI Components
import { SlideDots, SlideScroller, ScrollIndicator } from '@/ui/components';

// Visual Effects
import { BackgroundEffects, Particles } from '@/ui/effects';

// Features (Slides)
import { IntroSlide } from '@/features/intro';
import { ProjectsSlide } from '@/features/projects';
import { CertificatesSlide } from '@/features/certificates';
import { ContactSlide } from '@/features/contact';

// Features (Other)
import { AppLauncher } from '@/features/app-launcher';
```

---

## 🎯 Common Tasks

### Add a New Slide
```bash
# 1. Create feature directory
mkdir features/new-slide

# 2. Create component
# features/new-slide/new-slide.tsx

# 3. Create barrel export
# features/new-slide/index.ts

# 4. Add to slides config
# lib/constants/slides.ts

# 5. Import in page
# app/page.tsx
```

### Add a New UI Component
```bash
# 1. Create component file
# ui/components/my-component.tsx

# 2. Export from barrel
# ui/components/index.ts
```

### Add a New Utility
```bash
# 1. Add to appropriate utils file
# lib/utils/[category].ts

# 2. Export from barrel
# lib/utils/index.ts
```

### Add a New Hook
```bash
# 1. Create hook file
# lib/hooks/use-my-hook.ts

# 2. Export from barrel
# lib/hooks/index.ts
```

---

## 🔧 Development Commands

```powershell
# Start dev server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

---

## 🎨 Project Colors

### Slide Themes
- **Intro**: Amber (`theme="amber"`)
- **Projects**: Teal (`theme="teal"`)
- **Certificates**: Violet (`theme="violet"`)
- **Contact**: Default (no theme)

### Color Scheme
- Background: `zinc-950` / `black`
- Text: `zinc-50` / `white`
- Borders: `zinc-700` / `zinc-800`
- Accents: Slide-specific colors

---

## 📐 Architecture Rules

### ✅ Allowed
```
features/ → ui/, lib/
ui/ → lib/
app/ → features/, ui/, lib/
```

### ❌ Not Allowed
```
lib/ → ui/, features/  (lib should be pure)
ui/ → features/  (no feature coupling)
features/[A] → features/[B]  (no cross-feature imports)
```

---

## 🗺️ Directory Tree (Simplified)

```
portfolio/
├── app/                    # Next.js App Router
├── features/               # Feature Modules
│   ├── intro/
│   ├── projects/
│   ├── certificates/
│   ├── contact/
│   └── app-launcher/
├── lib/                    # Shared Library
│   ├── constants/
│   ├── hooks/
│   ├── types/
│   └── utils/
└── ui/                     # UI Layer
    ├── components/
    └── effects/
```

---

## 🚀 File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `slide-dots.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `use-vertical-scroll.ts`)
- **Types**: `index.ts` in `lib/types/`
- **Constants**: `kebab-case.ts` (e.g., `slides.ts`)
- **Barrel Exports**: `index.ts`

---

## 📝 Code Style

### Component Structure
```typescript
/**
 * Brief description
 */

"use client";  // If client component

import { ... } from '@/lib/...';

interface MyComponentProps {
  // Props
}

export default function MyComponent({ ... }: MyComponentProps) {
  // Component logic
}
```

### Export Pattern
```typescript
// Component file: my-feature.tsx
export default function MyFeature() { }

// Barrel export: index.ts
export { default as MyFeature } from './my-feature';
```

---

## 🐛 Troubleshooting

### Import not found?
- ✅ Check path alias in `tsconfig.json`
- ✅ Verify file exists in correct location
- ✅ Check barrel export (`index.ts`)
- ✅ Restart TypeScript server

### Type errors?
- ✅ Import types from `@/lib/types`
- ✅ Check interface definitions
- ✅ Verify props are correctly typed

### Build errors?
- ✅ Run `npm run lint`
- ✅ Check for circular dependencies
- ✅ Verify all imports resolve

---

## 📚 Documentation Files

- `README.md` - Project overview
- `STRUCTURE.md` - Architecture documentation
- `STRUCTURE_VISUAL.md` - Visual diagrams
- `MIGRATION.md` - Migration guide
- `QUICK_REFERENCE.md` - This file

---

## 🎓 Learning Resources

### Next.js 16
- [App Router Documentation](https://nextjs.org/docs/app)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind v4](https://tailwindcss.com/docs/v4-beta)

---

**Print this card or keep it handy while working on the portfolio!** 🎯
