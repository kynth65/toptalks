# TopTalks Design System

This document outlines the complete design system for the TopTalks project, including colors, typography, spacing, components, and animations.

---

## Color Palette

### Primary Colors
| Color Name | Hex Value | CSS Variable | Usage |
|------------|-----------|--------------|-------|
| Coral | `#F7A8A0` | `--color-coral` | Primary brand color, CTAs, highlights |
| Sage | `#DCE5A1` | `--color-sage` | Accent color |
| Butter | `#F8F3A6` | `--color-butter` | Accent color, highlights |
| Sky | `#C6D6F2` | `--color-sky` | Accent color, backgrounds |
| Mint | `#C7EEEA` | `--color-mint` | Accent color, highlights |

### Neutral Colors
| Color Name | Hex Value | CSS Variable | Usage |
|------------|-----------|--------------|-------|
| Cream | `#FDFBF8` | `--color-cream` | Background, light surfaces |
| Navy | `#1A1D26` | `--color-navy` | Primary text, headings |
| Gray | `#555555` | `--color-gray` | Secondary text, descriptions |

### Tailwind Classes
- `bg-coral` / `text-coral` / `border-coral`
- `bg-sage` / `text-sage`
- `bg-butter` / `text-butter`
- `bg-sky` / `text-sky`
- `bg-mint` / `text-mint`
- `bg-cream` / `text-cream`
- `bg-navy` / `text-navy`
- `bg-gray` / `text-gray`

---

## Typography

### Font Family
```css
font-family: 'Inter', 'Nunito', ui-sans-serif, system-ui, sans-serif;
```

### Type Scale
| Element | Size (Tailwind) | Size (rem/px) | Line Height | Weight |
|---------|----------------|---------------|-------------|--------|
| Display | `text-7xl` | 4.5rem / 72px | tight | bold |
| H1 | `text-6xl` | 3.75rem / 60px | tight | bold |
| H2 | `text-5xl` | 3rem / 48px | tight | bold |
| H3 | `text-3xl` | 1.875rem / 30px | normal | bold |
| H4 | `text-2xl` | 1.5rem / 24px | normal | bold |
| Large Body | `text-xl` | 1.25rem / 20px | relaxed | normal |
| Body | `text-lg` | 1.125rem / 18px | relaxed | normal |
| Body Default | `text-base` | 1rem / 16px | normal | normal |
| Small | `text-sm` | 0.875rem / 14px | normal | medium |

### Font Weights
- `font-bold`: 700 (headings, emphasis)
- `font-semibold`: 600 (subheadings, card titles)
- `font-medium`: 500 (buttons, navigation)
- `font-normal`: 400 (body text)

---

## Spacing & Layout

### Border Radius
| Name | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| XL | `1.5rem` / `24px` | `--radius-xl` | Cards, buttons, all rounded elements |

### Tailwind Classes
- `rounded-[1.5rem]` or `rounded-xl` - Standard border radius for components

### Container Widths
- `max-w-7xl` - Main content container (1280px)
- Responsive padding: `px-4 sm:px-6 lg:px-8`

### Grid Layouts
- 2-column: `grid grid-cols-2 gap-4 sm:gap-6`
- Responsive 2-column: `grid lg:grid-cols-2 gap-12`
- Auto-fit cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

---

## Components

### Button

#### Variants
**Primary Button**
```tsx
<Button variant="primary">Text</Button>
```
- Background: `bg-coral`
- Text: `text-white`
- Hover: `hover:shadow-lg hover:scale-105`
- Transition: `transition-all duration-300`

**Outline Button**
```tsx
<Button variant="outline">Text</Button>
```
- Border: `border-2 border-coral`
- Text: `text-coral`
- Hover: `hover:bg-coral hover:text-white`

#### Sizes
- **Small**: `px-4 py-2 text-sm`
- **Medium** (default): `px-6 py-3 text-base`
- **Large**: `px-8 py-4 text-lg`

#### Base Styles
- Border radius: `rounded-[1.5rem]`
- Font weight: `font-medium`
- Transition: `transition-all duration-300`
- Hover effect: `hover:scale-105`

---

### Navbar

#### Structure
- Position: `fixed top-0 left-0 right-0`
- Background: `bg-cream/95 backdrop-blur-sm`
- Z-index: `z-50`
- Shadow: `shadow-sm`
- Height: `h-20`

#### Logo
- Font size: `text-2xl md:text-3xl`
- Font weight: `font-bold`
- Color: `text-navy`
- Decorative dots: mint and coral circles (`w-2 h-2 rounded-full`)

#### Navigation Links
- Color: `text-gray`
- Hover: `hover:text-navy`
- Transition: `transition-colors duration-200`
- Font: `text-sm font-medium`
- Desktop spacing: `space-x-8`
- Mobile spacing: `space-y-4`

#### Mobile Menu
- Hidden on desktop: `lg:hidden`
- Animation: `animate-fade-in`
- Button size: `p-2`
- Icon size: `h-6 w-6`

---

### Cards (TutorCard)

#### Structure
- Border radius: `rounded-[1.5rem]`
- Aspect ratio: `aspect-square`
- Shadow: `shadow-lg`
- Hover shadow: `hover:shadow-xl`
- Hover scale: `hover:scale-105`
- Transition: `transition-all duration-300`
- Cursor: `cursor-pointer`

#### Background Colors
Cards use primary accent colors:
- `bg-coral`
- `bg-mint`
- `bg-butter`
- `bg-sky`
- `bg-sage`

#### Content
- Padding: `p-4`
- Layout: `flex items-end justify-center`
- Name text: `text-navy font-semibold text-sm`
- Avatar: `w-32 h-32 rounded-full bg-white/30`

---

### Hero Section

#### Structure
- Min height: `min-h-screen`
- Padding top: `pt-32` (to clear fixed navbar)
- Padding bottom: `pb-20`
- Padding horizontal: `px-4 sm:px-6 lg:px-8`
- Overflow: `overflow-hidden` (for blob animations)

#### Layout
- Grid: `grid lg:grid-cols-2 gap-12 items-center`
- Max width: `max-w-7xl mx-auto`

#### Text Content
- Welcome text: `text-gray text-lg font-medium`
- Main heading: `text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight`
- Subtitle: `text-xl text-gray`
- Body: `text-lg text-gray`
- Animation: `animate-fade-in-up`

#### Background Blobs
- Position: `absolute inset-0 -z-10`
- Colors: coral, mint, butter, sky with `/20` opacity
- Sizes: Various (w-48 to w-72)
- Effect: `blur-3xl`
- Animation: `animate-blob` with delays

---

## Animations

### Keyframe Animations

#### Blob Animation
```css
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```
- Duration: 7s
- Iteration: infinite
- Usage: Background decorative blobs

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
- Duration: 0.8s
- Easing: ease-out

#### Fade In Up
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
- Duration: 0.8s
- Easing: ease-out
- Usage: Hero text content

#### Fade In Right
```css
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
```
- Duration: 0.8s
- Easing: ease-out
- Usage: Hero card grid

### Animation Classes
- `.animate-blob` - Floating blob effect
- `.animate-fade-in` - Simple fade in
- `.animate-fade-in-up` - Fade in with upward motion
- `.animate-fade-in-right` - Fade in with right motion

### Animation Delays
- `.animation-delay-2000` - 2s delay
- `.animation-delay-4000` - 4s delay
- `.animation-delay-6000` - 6s delay

### Transition Classes
- `transition-all duration-300` - General transitions
- `transition-colors duration-200` - Color transitions
- `hover:scale-105` - Hover scale effect

---

## Effects & Utilities

### Shadows
- `shadow-sm` - Subtle shadow for navbar
- `shadow-lg` - Card default shadow
- `shadow-xl` - Card hover shadow

### Backdrop Effects
- `backdrop-blur-sm` - Navbar glass effect

### Opacity Modifiers
- `/95` - Navbar background (95% opacity)
- `/30` - Avatar placeholder background
- `/20` - Background blob colors

### Blur
- `blur-3xl` - Background blobs

---

## Responsive Breakpoints

### Tailwind Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Common Responsive Patterns

#### Typography
- Headings: `text-5xl md:text-6xl lg:text-7xl`
- Logo: `text-2xl md:text-3xl`

#### Layout
- Desktop navigation: `hidden lg:flex`
- Mobile menu: `lg:hidden`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

#### Spacing
- Padding: `px-4 sm:px-6 lg:px-8`
- Gaps: `gap-4 sm:gap-6`

---

## Design Principles

### Visual Style
- Soft, friendly, and approachable
- Playful use of pastel accent colors
- Clean and modern with generous whitespace
- Rounded corners throughout (1.5rem)

### Interaction Design
- Smooth transitions (200-300ms)
- Hover states with scale effects (105%)
- Progressive enhancement with animations
- Mobile-first responsive approach

### Accessibility
- High contrast text (navy on cream)
- Minimum touch target size: 44px
- Semantic HTML structure
- Keyboard navigation support
- Smooth scroll behavior: `scroll-behavior: smooth`

### Motion
- Entrance animations for content
- Ambient motion with floating blobs
- Subtle hover interactions
- No motion for reduced-motion preference

---

## Usage Guidelines

### Color Usage
1. **Coral** is the primary action color - use for CTAs and important interactive elements
2. **Navy** for all primary text content
3. **Gray** for secondary text and descriptions
4. **Cream** as the main background color
5. Accent colors (sage, butter, sky, mint) for cards, highlights, and decorative elements

### Typography Hierarchy
1. Use bold navy headings for maximum impact
2. Keep body text in gray for better readability
3. Maintain consistent spacing between text elements
4. Use font-medium for interactive elements like buttons and links

### Component Consistency
1. Always use 1.5rem border radius for rounded elements
2. Apply hover effects consistently (scale-105 + shadow changes)
3. Use transition-all duration-300 for smooth interactions
4. Maintain max-w-7xl for content containers

### Responsive Design
1. Design mobile-first, enhance for larger screens
2. Use consistent padding: px-4 sm:px-6 lg:px-8
3. Hide/show navigation appropriately (lg:hidden / hidden lg:flex)
4. Scale typography responsively (especially headings)

---

## File References

### Configuration
- **CSS Variables**: `Frontend/src/index.css`
- **Global Styles**: `Frontend/src/index.css`
- **App Styles**: `Frontend/src/App.css`

### Components
- **Button**: `Frontend/src/components/common/Button.tsx`
- **Navbar**: `Frontend/src/components/common/Navbar.tsx`
- **TutorCard**: `Frontend/src/components/landing/TutorCard.tsx`
- **Hero**: `Frontend/src/components/landing/Hero.tsx`

### Pages
- **Landing Page**: `Frontend/src/pages/LandingPage.tsx`

---

## Quick Reference

### Most Common Classes
```
// Containers
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// Rounded corners
rounded-[1.5rem]

// Primary button
bg-coral text-white rounded-[1.5rem] px-6 py-3 font-medium
hover:shadow-lg hover:scale-105 transition-all duration-300

// Card
rounded-[1.5rem] shadow-lg hover:shadow-xl hover:scale-105
transition-all duration-300 cursor-pointer

// Heading
text-navy font-bold text-5xl md:text-6xl lg:text-7xl

// Body text
text-gray text-lg

// Background
bg-cream
```

---

Last updated: 2025-11-12
