# Azukios Portfolio Website - Design Document

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend framework |
| **shadcn/ui** | UI component library |
| **Vite** | Build tool & dev server |

---

## 1. Overview

### 1.1 Website Purpose
A professional artist portfolio website for Azukios (Ki), showcasing original artwork across multiple styles and mediums. The website serves as a digital gallery and professional presence for potential clients, galleries, and collaborators.

### 1.2 Target Audience
- Art collectors and buyers
- Gallery curators and exhibition organizers
- Creative industry professionals
- Fellow artists and collaborators
- Design students and enthusiasts

### 1.3 Design Philosophy
The website design reflects Azukios's artistic identity: **dreamlike, emotional, and elegant**. The visual language draws from the artist's signature style of hazy, soft color palettes and ethereal compositions.

**Core Design Principles:**

1. **Minimalism** - Clean layouts with generous whitespace allow artwork to be the focal point
2. **Elegance** - Sophisticated typography and refined visual elements convey professionalism
3. **Warmth** - Soft, warm color tones create an inviting atmosphere that complements the art
4. **Fluidity** - Smooth transitions and subtle animations echo the dreamlike quality of the artwork
5. **Clarity** - Intuitive navigation ensures visitors can easily explore different art styles

### 1.4 Brand Identity
- **Artist Name**: Azukios (Ki)
- **Logo**: Handwritten signature (Azukios-Signature.PNG) - elegant calligraphic style
- **Profile Image**: Watercolor rose painting (Azukios-ProfilePicture-rose.jpeg)
- **Tagline/Identity**: London-based artist specializing in emotional and dreamlike visual narratives

### 1.5 Website Structure
```
Home Page
├── Hero section with rotating artwork showcase
├── Signature logo
└── Navigation to other pages

Art Page
├── Style selector (5 categories)
│   ├── Affection
│   ├── Gentle
│   ├── Lucid-dream
│   ├── Royal
│   └── Seasons
└── Gallery grid with lightbox viewing

About Me Page
├── Profile section (image + bio)
├── Education
├── Group Exhibitions
├── Publications
└── Contact information
```

---

## 2. Color Theme

The color palette draws inspiration from the dreamlike, warm quality of Azukios's artwork - soft, muted tones that create an elegant and inviting atmosphere.

### 2.1 Primary Palette

| Role | Color Name | RGBA Code | Usage |
|------|------------|-----------|-------|
| **Background Primary** | Warm Cream | `rgba(245, 240, 235, 1)` | Main page background |
| **Background Secondary** | Soft Ivory | `rgba(250, 248, 245, 1)` | Cards, highlighted sections |
| **Text Primary** | Charcoal | `rgba(44, 44, 44, 1)` | Headings, body text |
| **Text Secondary** | Warm Gray | `rgba(107, 101, 96, 1)` | Captions, secondary info |
| **Text Muted** | Dusty Gray | `rgba(154, 149, 144, 1)` | Placeholders, hints |

### 2.2 Accent Palette

| Role | Color Name | RGBA Code | Usage |
|------|------------|-----------|-------|
| **Accent Primary** | Dusty Rose | `rgba(196, 166, 143, 1)` | Links, active states, highlights |
| **Accent Hover** | Warm Taupe | `rgba(168, 145, 122, 1)` | Hover states, interactions |
| **Accent Gold** | Muted Gold | `rgba(212, 184, 150, 1)` | Special highlights, decorative elements |

### 2.3 Structural Colors

| Role | Color Name | RGBA Code | Usage |
|------|------------|-----------|-------|
| **Header/Footer** | Deep Charcoal | `rgba(58, 54, 51, 1)` | Navigation bar, footer background |
| **Header Text** | Soft White | `rgba(245, 240, 235, 1)` | Navigation text on dark background |
| **Divider** | Light Taupe | `rgba(229, 221, 213, 1)` | Section dividers, borders |
| **Overlay** | Dark Overlay | `rgba(44, 44, 44, 0.85)` | Lightbox background, modals |

### 2.4 Color Usage Guidelines

```
┌─────────────────────────────────────────────────────────────────┐
│  Header: Deep Charcoal rgba(58, 54, 51, 1)                      │
│  Text: Soft White rgba(245, 240, 235, 1)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Background: Warm Cream rgba(245, 240, 235, 1)                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Card/Section: Soft Ivory rgba(250, 248, 245, 1)        │   │
│  │  Border: Light Taupe rgba(229, 221, 213, 1)             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Heading: Charcoal rgba(44, 44, 44, 1)                         │
│  Body Text: Charcoal rgba(44, 44, 44, 1)                       │
│  Caption: Warm Gray rgba(107, 101, 96, 1)                      │
│  Link: Dusty Rose rgba(196, 166, 143, 1)                       │
│        → Hover: Warm Taupe rgba(168, 145, 122, 1)              │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Footer: Deep Charcoal rgba(58, 54, 51, 1)                      │
│  Text: Soft White rgba(245, 240, 235, 1)                        │
└─────────────────────────────────────────────────────────────────┘
```

### 2.5 Accessibility Notes
- Text contrast ratio meets WCAG AA standards
- Primary text `rgba(44, 44, 44, 1)` on cream background `rgba(245, 240, 235, 1)`: **12.5:1** ✓
- Header text `rgba(245, 240, 235, 1)` on dark background `rgba(58, 54, 51, 1)`: **10.2:1** ✓
- Links have distinct hover states for visual feedback

---

## 3. Typography

Typography establishes the elegant, artistic identity of the website. The font choices complement Azukios's dreamlike aesthetic with a blend of calligraphic elegance and clean readability.

### 3.1 Font Families

| Font | Type | Usage | Source |
|------|------|-------|--------|
| **Zapfino Forte** | Serif/Script | Logo text fallback, large decorative titles | Local TTF |
| **Amatic SC Bold** | Handwritten | Descriptions, section headings, body text | Google Fonts |
| **Amatic SC Regular** | Handwritten | Small text, copyright, captions | Google Fonts |

### 3.2 Logo & Branding

The primary logo is the **Azukios-Signature.PNG** image file, used for:
- Navigation bar brand name
- Homepage hero title
- Footer branding

```
┌─────────────────────────────────────────┐
│  [Azukios-Signature.PNG]                │
│   - Use as <img> element                │
│   - Height: 40px (navbar), 80px (hero)  │
│   - Maintain aspect ratio               │
│   - Alt text: "Azukios"                 │
└─────────────────────────────────────────┘
```

**Fallback**: If image fails to load, use Zapfino Forte font with text "Azukios"

### 3.3 Type Scale

| Element | Font Family | Size | Weight | Letter-Spacing | Line-Height |
|---------|-------------|------|--------|----------------|-------------|
| **Page Title** | Amatic SC | 48px | 700 (Bold) | 5px | 1.2 |
| **Section Heading** | Amatic SC | 36px | 700 (Bold) | 5px | 1.3 |
| **Subsection Heading** | Amatic SC | 28px | 700 (Bold) | 4px | 1.3 |
| **Body Text** | Amatic SC | 20px | 700 (Bold) | 5px | 1.6 |
| **Caption** | Amatic SC | 16px | 400 (Regular) | 3px | 1.5 |
| **Small Text** | Amatic SC | 14px | 400 (Regular) | 2px | 1.5 |
| **Copyright** | Amatic SC | 14px | 400 (Regular) | 2px | 1.4 |
| **Nav Links** | Amatic SC | 18px | 700 (Bold) | 4px | 1.0 |

### 3.4 CSS Font Definitions

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

/* Local Font (Zapfino Forte fallback) */
@font-face {
  font-family: 'Zapfino Forte';
  src: url('/fonts/ZapfinoForte.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* Typography Variables */
:root {
  --font-primary: 'Amatic SC', cursive;
  --font-logo: 'Zapfino Forte', cursive;

  /* Font Sizes */
  --text-xs: 14px;
  --text-sm: 16px;
  --text-base: 20px;
  --text-lg: 28px;
  --text-xl: 36px;
  --text-2xl: 48px;

  /* Letter Spacing */
  --tracking-tight: 2px;
  --tracking-normal: 3px;
  --tracking-wide: 4px;
  --tracking-wider: 5px;
}
```

### 3.5 Typography Styles

**Page Titles**
```css
.page-title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.2;
  color: rgba(44, 44, 44, 1);
  text-align: left;
}
```

**Section Headings**
```css
.section-heading {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.3;
  color: rgba(44, 44, 44, 1);
  text-align: left;
}
```

**Body Text / Descriptions**
```css
.body-text {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.6;
  color: rgba(44, 44, 44, 1);
  text-align: left;
}
```

**Captions & Small Text**
```css
.caption {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: 400;
  letter-spacing: 3px;
  line-height: 1.5;
  color: rgba(107, 101, 96, 1);
  text-align: left;
}

.small-text, .copyright {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.4;
  color: rgba(154, 149, 144, 1);
}
```

**Navigation Links**
```css
.nav-link {
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(245, 240, 235, 1);
}
```

### 3.6 Text Alignment Guidelines

| Element | Alignment |
|---------|-----------|
| Page titles | Left |
| Section headings | Left |
| Body text / descriptions | Left |
| Captions | Left |
| Navigation links | Center (within nav container) |
| Copyright text | Center |
| Art titles | Center (below artwork) |

### 3.7 Responsive Typography

```css
/* Mobile (< 768px) */
@media (max-width: 767px) {
  :root {
    --text-2xl: 36px;
    --text-xl: 28px;
    --text-lg: 24px;
    --text-base: 18px;
  }
}

/* Tablet (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  :root {
    --text-2xl: 42px;
    --text-xl: 32px;
    --text-lg: 26px;
    --text-base: 19px;
  }
}
```

---

## 4. Navigation Bar

A horizontal navigation bar that remains consistent across all pages, providing clear wayfinding while maintaining the elegant aesthetic.

### 4.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   [Azukios-Signature.PNG]                      HOME    ART    ABOUT ME     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
    ↑                                            ↑
    Logo (left-aligned)                          Nav Links (right-aligned)
```

### 4.2 Dimensions & Spacing

| Property | Value |
|----------|-------|
| **Height** | 80px |
| **Padding (horizontal)** | 60px (desktop), 24px (mobile) |
| **Logo height** | 40px |
| **Nav link spacing** | 40px gap between links |
| **Background** | `rgba(58, 54, 51, 1)` (Deep Charcoal) |

### 4.3 Navigation Items

| Item | Link Target | Position |
|------|-------------|----------|
| **Logo (Azukios-Signature.PNG)** | `/` (Home) | Left |
| **HOME** | `/` | Right - 1st |
| **ART** | `/art` | Right - 2nd |
| **ABOUT ME** | `/about` | Right - 3rd |

### 4.4 Visual States

**Default State**
```css
.nav-link {
  font-family: 'Amatic SC', cursive;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(245, 240, 235, 1);
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}
```

**Hover State**
```css
.nav-link:hover {
  color: rgba(212, 184, 150, 1); /* Muted Gold */
}

/* Underline animation on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: rgba(212, 184, 150, 1);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

**Active State (Current Page)**
```css
.nav-link.active {
  color: rgba(212, 184, 150, 1); /* Muted Gold */
}

.nav-link.active::after {
  width: 100%;
  background-color: rgba(212, 184, 150, 1);
}
```

### 4.5 Logo Styling

```css
.nav-logo {
  height: 40px;
  width: auto;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.nav-logo:hover {
  opacity: 0.8;
}
```

### 4.6 Complete Navigation CSS

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 60px;
  background-color: rgba(58, 54, 51, 1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  height: 40px;
  width: auto;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  font-family: 'Amatic SC', cursive;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(245, 240, 235, 1);
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}

.navbar-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: rgba(212, 184, 150, 1);
  transition: width 0.3s ease;
}

.navbar-links a:hover,
.navbar-links a.active {
  color: rgba(212, 184, 150, 1);
}

.navbar-links a:hover::after,
.navbar-links a.active::after {
  width: 100%;
}
```

### 4.7 Mobile Navigation (< 768px)

On mobile devices, the navigation transforms into a hamburger menu.

```
┌─────────────────────────────────────────┐
│   [Logo]                          ☰    │
└─────────────────────────────────────────┘

When menu is open:
┌─────────────────────────────────────────┐
│   [Logo]                          ✕    │
├─────────────────────────────────────────┤
│                                         │
│              HOME                       │
│                                         │
│              ART                        │
│                                         │
│           ABOUT ME                      │
│                                         │
└─────────────────────────────────────────┘
```

**Mobile CSS**
```css
@media (max-width: 767px) {
  .navbar {
    padding: 0 24px;
    height: 70px;
  }

  .navbar-logo img {
    height: 32px;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 8px;
  }

  .hamburger span {
    width: 24px;
    height: 2px;
    background-color: rgba(245, 240, 235, 1);
    transition: all 0.3s ease;
  }

  .navbar-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(58, 54, 51, 1);
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .navbar-links.open {
    transform: translateX(0);
  }

  .navbar-links a {
    font-size: 24px;
    letter-spacing: 6px;
  }
}
```

### 4.8 Interaction Summary

| Action | Effect |
|--------|--------|
| **Hover on link** | Text color → Muted Gold, underline animates in from left |
| **Click on logo** | Navigate to Home page |
| **Current page** | Link highlighted in Muted Gold with full underline |
| **Mobile hamburger** | Opens full-screen menu overlay with slide animation |
| **Scroll behavior** | Navbar stays fixed at top (z-index: 1000) |

---

## 5. General Layout

The layout system provides a consistent structural foundation across all pages, ensuring visual harmony and optimal content presentation.

### 5.1 Page Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NAVBAR (fixed, 80px height)                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                         MAIN CONTENT                                │   │
│  │                                                                     │   │
│  │  ┌─────────────────────────────────────────────────────────────┐   │   │
│  │  │                    CONTAINER (max-width)                    │   │   │
│  │  │                                                             │   │   │
│  │  │    Content goes here with consistent padding                │   │   │
│  │  │                                                             │   │   │
│  │  └─────────────────────────────────────────────────────────────┘   │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Container System

| Container Type | Max Width | Usage |
|----------------|-----------|-------|
| **Full Width** | 100% | Hero sections, full-bleed images |
| **Wide** | 1400px | Gallery grids, art displays |
| **Standard** | 1200px | General content, About page |
| **Narrow** | 800px | Text-heavy sections, bio |

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 60px;
}

.container--wide {
  max-width: 1400px;
}

.container--standard {
  max-width: 1200px;
}

.container--narrow {
  max-width: 800px;
}

@media (max-width: 767px) {
  .container {
    padding: 0 24px;
  }
}
```

### 5.3 Spacing System

A consistent spacing scale based on 8px units.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Tight spacing, inline elements |
| `--space-sm` | 16px | Small gaps, compact sections |
| `--space-md` | 24px | Default padding, card interiors |
| `--space-lg` | 40px | Section padding, component gaps |
| `--space-xl` | 64px | Large section margins |
| `--space-2xl` | 100px | Page section separators |
| `--space-3xl` | 140px | Hero sections, major breaks |

```css
:root {
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --space-2xl: 100px;
  --space-3xl: 140px;
}
```

### 5.4 Grid System

**Gallery Grid (Art Page)**
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

**Two-Column Layout (About Page)**
```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

@media (max-width: 1024px) {
  .two-column {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

### 5.5 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| **Mobile** | < 768px | Phones |
| **Tablet** | 768px - 1024px | Tablets, small laptops |
| **Desktop** | 1025px - 1400px | Standard desktops |
| **Large Desktop** | > 1400px | Wide screens |

```css
/* Mobile First Approach */

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1025px) { }

/* Large desktop */
@media (min-width: 1401px) { }
```

### 5.6 Vertical Rhythm

Consistent vertical spacing between page sections.

```
┌─────────────────────────────────────────┐
│  Navbar (80px)                          │
├─────────────────────────────────────────┤
│  ↕ Navbar offset padding (80px)         │
├─────────────────────────────────────────┤
│                                         │
│  Section 1 (Hero / Page Header)         │
│                                         │
├─────────────────────────────────────────┤
│  ↕ Section gap (100px)                  │
├─────────────────────────────────────────┤
│                                         │
│  Section 2                              │
│                                         │
├─────────────────────────────────────────┤
│  ↕ Section gap (100px)                  │
├─────────────────────────────────────────┤
│                                         │
│  Section 3                              │
│                                         │
├─────────────────────────────────────────┤
│  ↕ Footer margin (100px)                │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

```css
.page {
  padding-top: 80px; /* Offset for fixed navbar */
}

.section {
  padding: 100px 0;
}

.section:first-child {
  padding-top: 64px;
}

@media (max-width: 767px) {
  .section {
    padding: 64px 0;
  }
}
```

### 5.7 Z-Index Scale

| Layer | Z-Index | Element |
|-------|---------|---------|
| **Base** | 0 | Default content |
| **Dropdown** | 100 | Dropdown menus |
| **Sticky** | 500 | Sticky elements |
| **Navbar** | 1000 | Fixed navigation |
| **Modal** | 2000 | Lightbox, overlays |
| **Toast** | 3000 | Notifications |

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 500;
  --z-navbar: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
}
```

### 5.8 CSS Variables Summary

```css
:root {
  /* Container Widths */
  --container-wide: 1400px;
  --container-standard: 1200px;
  --container-narrow: 800px;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;
  --space-2xl: 100px;
  --space-3xl: 140px;

  /* Layout */
  --navbar-height: 80px;
  --navbar-height-mobile: 70px;
  --container-padding: 60px;
  --container-padding-mobile: 24px;

  /* Z-Index */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 500;
  --z-navbar: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
}
```

---

## 6. Page Designs

### 6.1 Home Page

The homepage creates an immersive first impression, showcasing Azukios's artwork through a full-screen image carousel.

#### 6.1.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                                                                             │
│                                                                             │
│                    ┌─────────────────────────────┐                          │
│                    │                             │                          │
│                    │    [CAROUSEL IMAGE]         │                          │
│                    │                             │                          │
│                    │                             │                          │
│                    └─────────────────────────────┘                          │
│                                                                             │
│                    [Azukios-Signature.PNG]                                  │
│                                                                             │
│                         ○ ○ ● ○ ○ ○ ○ ○ ○                                   │
│                       (carousel indicators)                                 │
│                                                                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 6.1.2 Hero Section

**Full-screen hero with image carousel**
- Height: 100vh (full viewport height)
- Background: `rgba(245, 240, 235, 1)` (Warm Cream)

**Carousel Images (9 total)**
| # | Filename | Description |
|---|----------|-------------|
| 1 | Affection2-Chivalry.png | Affection series piece |
| 2 | Building.png | Architectural artwork |
| 3 | Church.png | Church dome illustration |
| 4 | Fly.PNG | Flying figure artwork |
| 5 | Gentle3.jpeg | Gentle series piece |
| 6 | Lucid-dream1.PNG | Dreamlike illustration |
| 7 | Mountain.jpeg | Mountain landscape |
| 8 | Royal-1.jpeg | Royal series piece |
| 9 | Seasons4.jpeg | Seasons series piece |

#### 6.1.3 Carousel Specifications

```css
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(245, 240, 235, 1);
  padding-top: 80px; /* navbar offset */
}

.carousel-container {
  position: relative;
  width: 70%;
  max-width: 900px;
  aspect-ratio: 4 / 3;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-image.active {
  opacity: 1;
}
```

#### 6.1.4 Carousel Behavior

| Property | Value |
|----------|-------|
| **Auto-advance** | Every 5 seconds |
| **Transition** | Fade (1s ease-in-out) |
| **Pause on hover** | Yes |
| **Indicators** | Dot navigation below image |
| **Click indicator** | Jump to specific image |

#### 6.1.5 Signature Logo Placement

```css
.hero-logo {
  margin-top: 40px;
  height: 60px;
  width: auto;
}

@media (max-width: 767px) {
  .hero-logo {
    height: 40px;
    margin-top: 24px;
  }
}
```

#### 6.1.6 Carousel Indicators

```css
.carousel-indicators {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(44, 44, 44, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-dot.active,
.carousel-dot:hover {
  background-color: rgba(44, 44, 44, 1);
}
```

---

### 6.2 Art Page

The Art page showcases artwork organized by five distinct styles, with intuitive tab navigation for switching between collections.

#### 6.2.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                              ART                                            │
│                         (page title)                                        │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  AFFECTION  │  GENTLE  │  LUCID-DREAM  │  ROYAL  │  SEASONS        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│            ↑ Style tabs (horizontal, scrollable on mobile)                  │
│                                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                      │
│  │              │  │              │  │              │                      │
│  │   Artwork 1  │  │   Artwork 2  │  │   Artwork 3  │                      │
│  │              │  │              │  │              │                      │
│  │   [Title]    │  │   [Title]    │  │   [Title]    │                      │
│  └──────────────┘  └──────────────┘  └──────────────┘                      │
│                                                                             │
│  ┌──────────────┐                                                          │
│  │              │                                                          │
│  │   Artwork 4  │                                                          │
│  │              │                                                          │
│  │   [Title]    │                                                          │
│  └──────────────┘                                                          │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 6.2.2 Style Tab Navigation

**Five Art Styles**
| Style | Images | Artwork Titles |
|-------|--------|----------------|
| **Affection** | 4 | Crush, Chivalry, Together, Heartburn |
| **Gentle** | 4 | Gentle 1, Gentle 2, Gentle 3, Gentle 4 |
| **Lucid-dream** | 4 | Lucid-dream 1, 2, 3, 4 |
| **Royal** | 4 | Royal 1, 2, 3, 4 |
| **Seasons** | 4 | Seasons 1, 2, 3, 4 |

#### 6.2.3 Tab Navigation Design

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   AFFECTION     GENTLE     LUCID-DREAM     ROYAL     SEASONS               │
│   ─────────                                                                 │
│   (active)                                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Tab Styling**
```css
.style-tabs {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(229, 221, 213, 1);
  margin-bottom: 48px;
}

.style-tab {
  font-family: 'Amatic SC', cursive;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(107, 101, 96, 1);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}

.style-tab::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: rgba(44, 44, 44, 1);
  transition: width 0.3s ease;
}

.style-tab:hover {
  color: rgba(44, 44, 44, 1);
}

.style-tab.active {
  color: rgba(44, 44, 44, 1);
}

.style-tab.active::after {
  width: 100%;
}

/* Mobile: Horizontal scroll */
@media (max-width: 767px) {
  .style-tabs {
    justify-content: flex-start;
    gap: 32px;
    overflow-x: auto;
    padding: 16px 24px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .style-tabs::-webkit-scrollbar {
    display: none;
  }

  .style-tab {
    font-size: 20px;
    white-space: nowrap;
  }
}
```

#### 6.2.4 Gallery Grid

**Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column**

```css
.art-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 60px;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .art-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 767px) {
  .art-gallery {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 24px;
  }
}
```

#### 6.2.5 Artwork Card

```
┌─────────────────────────────┐
│                             │
│                             │
│         [IMAGE]             │
│                             │
│                             │
├─────────────────────────────┤
│        Artwork Title        │
│         (centered)          │
└─────────────────────────────┘
```

```css
.artwork-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.artwork-card:hover {
  transform: translateY(-4px);
}

.artwork-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
}

.artwork-title {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: rgba(44, 44, 44, 1);
  text-align: center;
  margin-top: 16px;
}
```

#### 6.2.6 Gallery Transition Animation

When switching between styles, the gallery content fades out and back in.

```css
.art-gallery {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.art-gallery.switching {
  opacity: 0;
}
```

#### 6.2.7 Lightbox (Click to Enlarge)

When user clicks an artwork, it opens in a full-screen lightbox.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                              [✕ Close]     │
│                                                                             │
│                                                                             │
│                    ┌─────────────────────────────┐                          │
│                    │                             │                          │
│       [←]          │      [ENLARGED IMAGE]       │          [→]             │
│                    │                             │                          │
│                    └─────────────────────────────┘                          │
│                                                                             │
│                           Artwork Title                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

```css
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(44, 44, 44, 0.95);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.lightbox.open {
  opacity: 1;
  visibility: visible;
}

.lightbox-image {
  max-width: 80%;
  max-height: 70vh;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: rgba(245, 240, 235, 1);
  background: none;
  border: none;
  cursor: pointer;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  color: rgba(245, 240, 235, 1);
  background: none;
  border: none;
  cursor: pointer;
  padding: 16px;
}

.lightbox-nav.prev { left: 24px; }
.lightbox-nav.next { right: 24px; }

.lightbox-title {
  font-family: 'Amatic SC', cursive;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgba(245, 240, 235, 1);
  margin-top: 24px;
}
```

#### 6.2.8 Art Page Interactions Summary

| Action | Result |
|--------|--------|
| **Click style tab** | Gallery fades, loads new style's images, fades back in |
| **Hover artwork** | Card lifts slightly (translateY -4px) |
| **Click artwork** | Opens lightbox with enlarged image |
| **Lightbox arrows** | Navigate between images in current style |
| **Click outside / ✕** | Close lightbox |
| **Keyboard ESC** | Close lightbox |
| **Keyboard ← →** | Navigate lightbox images |

---

### 6.3 About Me Page

The About Me page presents the artist's profile, biography, exhibitions, publications, and contact information.

#### 6.3.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                            ABOUT ME                                         │
│                          (page title)                                       │
│                                                                             │
│  ┌─────────────────────────┐  ┌─────────────────────────────────────────┐  │
│  │                         │  │                                         │  │
│  │   [Profile Picture]     │  │  Ki (Azukios)                          │  │
│  │   Azukios-Profile       │  │  Artist                                │  │
│  │   Picture-rose.jpeg     │  │                                         │  │
│  │                         │  │  Currently based in London and         │  │
│  │                         │  │  studying Product and Industrial       │  │
│  │                         │  │  Design at Central Saint Martins...    │  │
│  │                         │  │                                         │  │
│  └─────────────────────────┘  └─────────────────────────────────────────┘  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  GROUP EXHIBITIONS                                                          │
│                                                                             │
│  • Affection — Co-Cocoon Collection, FIRST International Film Festival     │
│    × Geometry Bookstore, July 20–28, 2025, Xining, China                   │
│                                                                             │
│  • Taurin Chair — Co-Domain Collection, The Handbag Factory,               │
│    May 31–June 2, 2025, London, UK                                         │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  PUBLICATIONS                                                               │
│                                                                             │
│  • Ancient Wormhole — Urchamber: Prototype Chamber, Paris-based            │
│    non-profit magazine, October 2025, Paris, France                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  CONTACT                                                                    │
│                                                                             │
│  Email: azukios.co@gmail.com                                               │
│  Instagram: @azukios                                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### 6.3.2 Profile Section (Two-Column)

```css
.profile-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
  padding: 64px 60px;
}

@media (max-width: 1024px) {
  .profile-section {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
}
```

#### 6.3.3 Profile Picture

```css
.profile-image {
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
}

@media (max-width: 1024px) {
  .profile-image {
    margin: 0 auto;
    max-width: 280px;
  }
}
```

#### 6.3.4 Bio Content

**Content Structure**
```
Ki (Azukios)          ← Name (Section Heading)
Artist                ← Title (Caption style)

[Bio paragraph]       ← Body text
```

```css
.bio-name {
  font-family: 'Amatic SC', cursive;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgba(44, 44, 44, 1);
  margin-bottom: 8px;
}

.bio-title {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  color: rgba(107, 101, 96, 1);
  margin-bottom: 24px;
}

.bio-text {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.8;
  color: rgba(44, 44, 44, 1);
  text-align: left;
}
```

**Bio Text Content**
> Currently based in London and studying Product and Industrial Design at Central Saint Martins. Her practice spans digital painting, oil painting, ink painting, and furniture design. She focuses on emotional and inner worlds, with a hazy, dreamlike use of color.

#### 6.3.5 Section Dividers

```css
.section-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(229, 221, 213, 1);
  margin: 64px 0;
}
```

#### 6.3.6 Exhibitions Section

```css
.about-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 60px;
}

.about-section-title {
  font-family: 'Amatic SC', cursive;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgba(44, 44, 44, 1);
  margin-bottom: 32px;
  text-transform: uppercase;
}

.exhibition-item,
.publication-item {
  margin-bottom: 24px;
}

.exhibition-title {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgba(44, 44, 44, 1);
}

.exhibition-details {
  font-family: 'Amatic SC', cursive;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  color: rgba(107, 101, 96, 1);
  line-height: 1.6;
  margin-top: 4px;
}
```

**Exhibitions Content**
| Work | Event | Date & Location |
|------|-------|-----------------|
| **Affection** | Co-Cocoon Collection, FIRST International Film Festival × Geometry Bookstore | July 20–28, 2025, Xining, China |
| **Taurin Chair** | Co-Domain Collection, The Handbag Factory | May 31–June 2, 2025, London, UK |

#### 6.3.7 Publications Section

**Publications Content**
| Work | Publication | Date & Location |
|------|-------------|-----------------|
| **Ancient Wormhole** | Urchamber: Prototype Chamber, Paris-based non-profit magazine focusing on feminist thought and contemporary art | October 2025, Paris, France |

#### 6.3.8 Contact Section

```css
.contact-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 60px 100px;
}

.contact-item {
  margin-bottom: 16px;
}

.contact-label {
  font-family: 'Amatic SC', cursive;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  color: rgba(107, 101, 96, 1);
}

.contact-link {
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgba(196, 166, 143, 1);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: rgba(168, 145, 122, 1);
}
```

**Contact Information**
| Type | Value | Link |
|------|-------|------|
| **Email** | azukios.co@gmail.com | `mailto:azukios.co@gmail.com` |
| **Instagram** | @azukios | `https://instagram.com/azukios` |

#### 6.3.9 About Page Mobile Layout

```css
@media (max-width: 767px) {
  .profile-section {
    padding: 40px 24px;
  }

  .about-section {
    padding: 0 24px;
  }

  .contact-section {
    padding: 0 24px 64px;
  }

  .bio-name {
    font-size: 28px;
  }

  .about-section-title {
    font-size: 24px;
  }
}
```

---

## 7. Interactions & Animations

All interactions follow a consistent, elegant timing that reflects the dreamlike quality of Azukios's artwork. Animations are smooth and subtle, never jarring.

### 7.1 Global Animation Settings

```css
:root {
  /* Timing Functions */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-in-out: ease-in-out;

  /* Durations */
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
  --duration-slower: 1s;
}
```

### 7.2 Hover Effects Summary

| Element | Effect | Duration | Timing |
|---------|--------|----------|--------|
| **Nav links** | Color → Muted Gold, underline grows | 0.3s | ease |
| **Nav logo** | Opacity → 0.8 | 0.3s | ease |
| **Style tabs** | Color → Charcoal, underline grows | 0.3s | ease |
| **Artwork cards** | Lift up (translateY -4px) | 0.3s | ease |
| **Contact links** | Color → Warm Taupe | 0.3s | ease |
| **Carousel dots** | Background → Charcoal | 0.3s | ease |
| **Lightbox nav arrows** | Opacity → 1 | 0.3s | ease |
| **Footer social icons** | Color → Muted Gold | 0.3s | ease |

### 7.3 Navigation Interactions

#### 7.3.1 Nav Link Hover
```css
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: rgba(212, 184, 150, 1);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: rgba(212, 184, 150, 1);
}

.nav-link:hover::after {
  width: 100%;
}
```

#### 7.3.2 Mobile Hamburger Animation
```css
/* Hamburger to X transformation */
.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile menu slide-in */
.navbar-links {
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.navbar-links.open {
  transform: translateX(0);
}
```

### 7.4 Home Page Carousel

#### 7.4.1 Image Fade Transition
```css
.carousel-image {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
}

.carousel-image.active {
  opacity: 1;
}

.carousel-image.fade-out {
  opacity: 0;
}
```

#### 7.4.2 Carousel Auto-Advance Logic
```javascript
// Pseudocode for carousel behavior
const INTERVAL = 5000; // 5 seconds
const TRANSITION_DURATION = 1000; // 1 second fade

function autoAdvance() {
  // Fade out current image
  currentImage.classList.remove('active');
  currentImage.classList.add('fade-out');

  // After transition, show next image
  setTimeout(() => {
    nextImage.classList.add('active');
    updateDots();
  }, TRANSITION_DURATION);
}

// Pause on hover
carousel.addEventListener('mouseenter', pauseAutoAdvance);
carousel.addEventListener('mouseleave', resumeAutoAdvance);
```

#### 7.4.3 Carousel Dot Interaction
```css
.carousel-dot {
  background-color: rgba(44, 44, 44, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.carousel-dot:hover {
  background-color: rgba(44, 44, 44, 0.6);
  transform: scale(1.2);
}

.carousel-dot.active {
  background-color: rgba(44, 44, 44, 1);
}
```

### 7.5 Art Page Interactions

#### 7.5.1 Style Tab Selection
```css
.style-tab {
  color: rgba(107, 101, 96, 1);
  transition: color 0.3s ease;
}

.style-tab::after {
  width: 0;
  transition: width 0.3s ease;
}

.style-tab:hover,
.style-tab.active {
  color: rgba(44, 44, 44, 1);
}

.style-tab.active::after {
  width: 100%;
}
```

#### 7.5.2 Gallery Fade Transition (Style Switch)
```css
.art-gallery {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.art-gallery.switching {
  opacity: 0;
}
```

```javascript
// Pseudocode for style switching
function switchStyle(newStyle) {
  // 1. Fade out gallery
  gallery.classList.add('switching');

  // 2. Wait for fade out
  setTimeout(() => {
    // 3. Load new images
    loadImages(newStyle);

    // 4. Fade in gallery
    gallery.classList.remove('switching');
  }, 300);
}
```

#### 7.5.3 Artwork Card Hover
```css
.artwork-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.artwork-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(44, 44, 44, 0.1);
}

.artwork-image {
  transition: transform 0.3s ease;
}

.artwork-card:hover .artwork-image {
  transform: scale(1.02);
}
```

#### 7.5.4 Lightbox Open/Close
```css
.lightbox {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.lightbox.open {
  opacity: 1;
  visibility: visible;
}

/* Image scale-in effect */
.lightbox-image {
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.lightbox.open .lightbox-image {
  transform: scale(1);
}
```

#### 7.5.5 Lightbox Navigation
```css
.lightbox-nav {
  opacity: 0.6;
  transition: opacity 0.3s ease, transform 0.2s ease;
}

.lightbox-nav:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

/* Image switch animation */
.lightbox-image.switching {
  opacity: 0;
  transform: scale(0.98);
}
```

```javascript
// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.isOpen) return;

  switch(e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPreviousImage();
      break;
    case 'ArrowRight':
      showNextImage();
      break;
  }
});
```

### 7.6 About Page Interactions

#### 7.6.1 Contact Link Hover
```css
.contact-link {
  color: rgba(196, 166, 143, 1);
  transition: color 0.3s ease;
  position: relative;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: rgba(168, 145, 122, 1);
  transition: width 0.3s ease;
}

.contact-link:hover {
  color: rgba(168, 145, 122, 1);
}

.contact-link:hover::after {
  width: 100%;
}
```

#### 7.6.2 Profile Image Hover (Optional Subtle Effect)
```css
.profile-image {
  transition: transform 0.5s ease, filter 0.5s ease;
}

.profile-image:hover {
  transform: scale(1.02);
  filter: brightness(1.05);
}
```

### 7.7 Page Transitions

Smooth transitions when navigating between pages.

```css
/* Page fade-in on load */
.page {
  animation: pageEnter 0.5s ease forwards;
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Page fade-out on exit (requires JS) */
.page.exiting {
  animation: pageExit 0.3s ease forwards;
}

@keyframes pageExit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### 7.8 Scroll Animations

#### 7.8.1 Fade-In on Scroll (About Page Sections)
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});
```

### 7.9 Loading States

#### 7.9.1 Image Loading Placeholder
```css
.image-placeholder {
  background: linear-gradient(
    90deg,
    rgba(229, 221, 213, 0.5) 25%,
    rgba(245, 240, 235, 0.5) 50%,
    rgba(229, 221, 213, 0.5) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

#### 7.9.2 Page Loading Indicator
```css
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: rgba(196, 166, 143, 1);
  transform: scaleX(0);
  transform-origin: left;
  animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
  0% { transform: scaleX(0); }
  50% { transform: scaleX(0.7); }
  100% { transform: scaleX(1); }
}
```

### 7.10 Interaction Timing Reference

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| **Hover color change** | 0.3s | ease |
| **Underline grow** | 0.3s | ease |
| **Card lift** | 0.3s | ease |
| **Gallery fade** | 0.3s | ease |
| **Carousel fade** | 1s | ease-in-out |
| **Lightbox open/close** | 0.3s | ease |
| **Page enter** | 0.5s | ease |
| **Page exit** | 0.3s | ease |
| **Scroll reveal** | 0.6s | ease |
| **Mobile menu slide** | 0.3s | ease |

### 7.11 Reduced Motion Support

For users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .carousel-image {
    transition: none;
  }

  .scroll-reveal {
    opacity: 1;
    transform: none;
  }
}
```

---

## 8. Footer

The footer provides consistent closure across all pages with copyright information, social links, and branding.

### 8.1 Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                         [Instagram Icon]  [Email Icon]                      │
│                                                                             │
│                      All rights reserved by Azukios.                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.2 Footer Specifications

| Property | Value |
|----------|-------|
| **Background** | `rgba(58, 54, 51, 1)` (Deep Charcoal) |
| **Padding** | 48px vertical, 60px horizontal |
| **Text Color** | `rgba(245, 240, 235, 1)` (Soft White) |
| **Text Alignment** | Center |

### 8.3 Footer Content

| Element | Content | Link |
|---------|---------|------|
| **Instagram Icon** | Instagram logo | `https://instagram.com/azukios` |
| **Email Icon** | Email/envelope icon | `mailto:azukios.co@gmail.com` |
| **Copyright** | "All rights reserved by Azukios." | — |

### 8.4 Complete Footer CSS

```css
.footer {
  background-color: rgba(58, 54, 51, 1);
  padding: 48px 60px;
  text-align: center;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(245, 240, 235, 1);
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-social-link:hover {
  color: rgba(212, 184, 150, 1);
  transform: translateY(-2px);
}

.footer-social-link svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.footer-copyright {
  font-family: 'Amatic SC', cursive;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  color: rgba(154, 149, 144, 1);
}
```

### 8.5 Social Icons

**Instagram Icon (SVG)**
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg>
```

**Email Icon (SVG)**
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
```

### 8.6 Footer HTML Structure

```html
<footer class="footer">
  <div class="footer-social">
    <a
      href="https://instagram.com/azukios"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-social-link"
      aria-label="Instagram"
    >
      <!-- Instagram SVG -->
    </a>
    <a
      href="mailto:azukios.co@gmail.com"
      class="footer-social-link"
      aria-label="Email"
    >
      <!-- Email SVG -->
    </a>
  </div>
  <p class="footer-copyright">All rights reserved by Azukios.</p>
</footer>
```

### 8.7 Hover Interaction

```css
.footer-social-link {
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-social-link:hover {
  color: rgba(212, 184, 150, 1); /* Muted Gold */
  transform: translateY(-2px);
}
```

### 8.8 Mobile Footer

```css
@media (max-width: 767px) {
  .footer {
    padding: 40px 24px;
  }

  .footer-social {
    gap: 20px;
    margin-bottom: 20px;
  }

  .footer-social-link {
    width: 36px;
    height: 36px;
  }

  .footer-social-link svg {
    width: 20px;
    height: 20px;
  }

  .footer-copyright {
    font-size: 12px;
  }
}
```

### 8.9 Footer Visual Summary

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Background: Deep Charcoal                          │
│                          rgba(58, 54, 51, 1)                                │
│                                                                             │
│                              ┌────┐  ┌────┐                                 │
│                              │ IG │  │ ✉  │   ← Icons: Soft White           │
│                              └────┘  └────┘     rgba(245, 240, 235, 1)      │
│                                                 Hover: Muted Gold           │
│                                                                             │
│                    All rights reserved by Azukios.                          │
│                    ↑                                                        │
│                    Amatic SC Regular, 14px                                  │
│                    Dusty Gray rgba(154, 149, 144, 1)                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Responsive Design

The website adapts seamlessly across all device sizes, prioritizing mobile-first design while maintaining the elegant aesthetic on larger screens.

### 9.1 Breakpoint System

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| **Mobile** | < 768px | Phones (portrait & landscape) |
| **Tablet** | 768px – 1024px | Tablets, small laptops |
| **Desktop** | 1025px – 1400px | Standard desktops, laptops |
| **Large Desktop** | > 1400px | Wide screens, external monitors |

```css
/* Mobile First Approach */

/* Base styles for mobile */

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1025px) { }

/* Large desktop */
@media (min-width: 1401px) { }
```

### 9.2 Layout Changes by Breakpoint

#### 9.2.1 Navigation

| Property | Mobile (< 768px) | Tablet+ (≥ 768px) |
|----------|------------------|-------------------|
| **Height** | 70px | 80px |
| **Padding** | 0 24px | 0 60px |
| **Logo height** | 32px | 40px |
| **Menu** | Hamburger → Fullscreen overlay | Horizontal links |
| **Link font size** | 24px (in overlay) | 18px |

```css
/* Mobile Navigation */
@media (max-width: 767px) {
  .navbar {
    height: 70px;
    padding: 0 24px;
  }

  .navbar-logo img {
    height: 32px;
  }

  .hamburger {
    display: flex;
  }

  .navbar-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    transform: translateX(100%);
  }

  .navbar-links.open {
    transform: translateX(0);
  }
}

/* Desktop Navigation */
@media (min-width: 768px) {
  .hamburger {
    display: none;
  }

  .navbar-links {
    display: flex;
    position: static;
    transform: none;
  }
}
```

#### 9.2.2 Home Page Carousel

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| **Container width** | 90% | 80% | 70% |
| **Logo height** | 40px | 50px | 60px |
| **Dot size** | 8px | 10px | 10px |
| **Dot gap** | 10px | 12px | 12px |

```css
.carousel-container {
  width: 90%;
}

.hero-logo {
  height: 40px;
  margin-top: 24px;
}

@media (min-width: 768px) {
  .carousel-container {
    width: 80%;
  }

  .hero-logo {
    height: 50px;
    margin-top: 32px;
  }
}

@media (min-width: 1025px) {
  .carousel-container {
    width: 70%;
    max-width: 900px;
  }

  .hero-logo {
    height: 60px;
    margin-top: 40px;
  }
}
```

#### 9.2.3 Art Page Gallery

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| **Grid columns** | 1 | 2 | 3 |
| **Gap** | 24px | 24px | 32px |
| **Padding** | 0 24px | 0 40px | 0 60px |
| **Tab font size** | 20px | 22px | 24px |
| **Tab gap** | 24px (scroll) | 36px | 48px |

```css
/* Mobile: Single column */
.art-gallery {
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 0 24px;
}

.style-tabs {
  overflow-x: auto;
  gap: 24px;
  padding: 16px 24px;
}

.style-tab {
  font-size: 20px;
  white-space: nowrap;
}

/* Tablet: Two columns */
@media (min-width: 768px) {
  .art-gallery {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }

  .style-tabs {
    overflow-x: visible;
    gap: 36px;
    justify-content: center;
  }

  .style-tab {
    font-size: 22px;
  }
}

/* Desktop: Three columns */
@media (min-width: 1025px) {
  .art-gallery {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding: 0 60px;
  }

  .style-tabs {
    gap: 48px;
  }

  .style-tab {
    font-size: 24px;
  }
}
```

#### 9.2.4 About Page

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| **Profile layout** | Single column | Single column | Two columns |
| **Profile image** | 280px max, centered | 300px max, centered | 350px max |
| **Bio text align** | Center | Center | Left |
| **Section padding** | 0 24px | 0 40px | 0 60px |
| **Name font size** | 28px | 32px | 36px |

```css
/* Mobile: Stacked layout */
.profile-section {
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 40px 24px;
  text-align: center;
}

.profile-image {
  max-width: 280px;
  margin: 0 auto;
}

.bio-name {
  font-size: 28px;
}

.about-section {
  padding: 0 24px;
}

/* Tablet */
@media (min-width: 768px) {
  .profile-section {
    gap: 40px;
    padding: 48px 40px;
  }

  .profile-image {
    max-width: 300px;
  }

  .bio-name {
    font-size: 32px;
  }

  .about-section {
    padding: 0 40px;
  }
}

/* Desktop: Side-by-side layout */
@media (min-width: 1025px) {
  .profile-section {
    grid-template-columns: 1fr 1.5fr;
    gap: 64px;
    padding: 64px 60px;
    text-align: left;
  }

  .profile-image {
    max-width: 350px;
    margin: 0;
  }

  .bio-name {
    font-size: 36px;
  }

  .about-section {
    padding: 0 60px;
  }
}
```

#### 9.2.5 Footer

| Property | Mobile | Desktop |
|----------|--------|---------|
| **Padding** | 40px 24px | 48px 60px |
| **Icon size** | 20px | 24px |
| **Icon container** | 36px | 40px |
| **Copyright font** | 12px | 14px |

```css
.footer {
  padding: 40px 24px;
}

.footer-social-link {
  width: 36px;
  height: 36px;
}

.footer-social-link svg {
  width: 20px;
  height: 20px;
}

.footer-copyright {
  font-size: 12px;
}

@media (min-width: 768px) {
  .footer {
    padding: 48px 60px;
  }

  .footer-social-link {
    width: 40px;
    height: 40px;
  }

  .footer-social-link svg {
    width: 24px;
    height: 24px;
  }

  .footer-copyright {
    font-size: 14px;
  }
}
```

### 9.3 Typography Scaling

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Page title** | 36px | 42px | 48px |
| **Section heading** | 28px | 32px | 36px |
| **Subsection** | 24px | 26px | 28px |
| **Body text** | 18px | 19px | 20px |
| **Caption** | 14px | 15px | 16px |
| **Small text** | 12px | 13px | 14px |

```css
:root {
  --text-2xl: 36px;
  --text-xl: 28px;
  --text-lg: 24px;
  --text-base: 18px;
  --text-sm: 14px;
  --text-xs: 12px;
}

@media (min-width: 768px) {
  :root {
    --text-2xl: 42px;
    --text-xl: 32px;
    --text-lg: 26px;
    --text-base: 19px;
    --text-sm: 15px;
    --text-xs: 13px;
  }
}

@media (min-width: 1025px) {
  :root {
    --text-2xl: 48px;
    --text-xl: 36px;
    --text-lg: 28px;
    --text-base: 20px;
    --text-sm: 16px;
    --text-xs: 14px;
  }
}
```

### 9.4 Spacing Scaling

| Token | Mobile | Desktop |
|-------|--------|---------|
| **Container padding** | 24px | 60px |
| **Section padding** | 64px 0 | 100px 0 |
| **Component gap** | 24px | 40px |

```css
:root {
  --container-padding: 24px;
  --section-padding: 64px;
  --component-gap: 24px;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 40px;
    --section-padding: 80px;
    --component-gap: 32px;
  }
}

@media (min-width: 1025px) {
  :root {
    --container-padding: 60px;
    --section-padding: 100px;
    --component-gap: 40px;
  }
}
```

### 9.5 Touch Targets

Ensure all interactive elements meet minimum touch target sizes on mobile:

| Element | Minimum Size |
|---------|--------------|
| **Buttons** | 44px × 44px |
| **Nav links** | 44px height |
| **Carousel dots** | 44px tap area |
| **Social icons** | 44px × 44px |
| **Lightbox arrows** | 48px × 48px |

```css
/* Increase tap targets on touch devices */
@media (max-width: 767px) {
  .nav-link {
    padding: 12px 0;
    min-height: 44px;
  }

  .carousel-dot {
    padding: 12px;
  }

  .style-tab {
    padding: 12px 8px;
    min-height: 44px;
  }

  .lightbox-nav {
    padding: 24px;
    min-width: 48px;
    min-height: 48px;
  }
}
```

### 9.6 Lightbox Responsive Behavior

| Property | Mobile | Desktop |
|----------|--------|---------|
| **Image max-width** | 95% | 80% |
| **Image max-height** | 60vh | 70vh |
| **Close button** | Top right, larger | Top right |
| **Nav arrows** | Bottom center | Side center |
| **Title font size** | 22px | 28px |

```css
/* Mobile Lightbox */
@media (max-width: 767px) {
  .lightbox-image {
    max-width: 95%;
    max-height: 60vh;
  }

  .lightbox-close {
    top: 16px;
    right: 16px;
    font-size: 18px;
    padding: 12px;
  }

  .lightbox-nav {
    top: auto;
    bottom: 24px;
    transform: none;
  }

  .lightbox-nav.prev {
    left: 24px;
  }

  .lightbox-nav.next {
    right: 24px;
  }

  .lightbox-title {
    font-size: 22px;
    margin-top: 16px;
  }
}
```

### 9.7 Device-Specific Diagrams

**Mobile Layout (< 768px)**
```
┌─────────────────────┐
│ [Logo]         [☰] │  ← 70px navbar
├─────────────────────┤
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │   CAROUSEL    │  │  ← 90% width
│  │               │  │
│  └───────────────┘  │
│                     │
│    [Signature]      │
│      ○ ○ ● ○ ○      │
│                     │
├─────────────────────┤
│  [IG] [✉]          │
│  © Azukios          │
└─────────────────────┘
```

**Tablet Layout (768px – 1024px)**
```
┌─────────────────────────────────────┐
│ [Logo]          HOME  ART  ABOUT   │  ← 80px navbar
├─────────────────────────────────────┤
│                                     │
│      ┌─────────────────────┐        │
│      │                     │        │
│      │      CAROUSEL       │        │  ← 80% width
│      │                     │        │
│      └─────────────────────┘        │
│                                     │
│          [Signature]                │
│          ○ ○ ● ○ ○ ○ ○ ○ ○          │
│                                     │
├─────────────────────────────────────┤
│         [IG]  [✉]                   │
│     All rights reserved...          │
└─────────────────────────────────────┘
```

**Desktop Layout (≥ 1025px)**
```
┌─────────────────────────────────────────────────────────┐
│ [Logo]                          HOME    ART    ABOUT   │  ← 80px navbar
├─────────────────────────────────────────────────────────┤
│                                                         │
│            ┌─────────────────────────────┐              │
│            │                             │              │
│            │         CAROUSEL            │              │  ← 70% width, max 900px
│            │                             │              │
│            └─────────────────────────────┘              │
│                                                         │
│                    [Signature]                          │
│                  ○ ○ ● ○ ○ ○ ○ ○ ○                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                    [IG]  [✉]                            │
│              All rights reserved by Azukios.            │
└─────────────────────────────────────────────────────────┘
```

### 9.8 Responsive Testing Checklist

| Test | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Navigation hamburger works | ✓ | — | — |
| Navigation links visible | — | ✓ | ✓ |
| Carousel images scale | ✓ | ✓ | ✓ |
| Art gallery columns adjust | 1 col | 2 col | 3 col |
| Style tabs scroll horizontally | ✓ | — | — |
| Lightbox arrows accessible | ✓ | ✓ | ✓ |
| About page layout stacks | ✓ | ✓ | Side-by-side |
| Touch targets ≥ 44px | ✓ | ✓ | — |
| Text remains readable | ✓ | ✓ | ✓ |
| Footer scales appropriately | ✓ | ✓ | ✓ |
