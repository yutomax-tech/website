# Responsive Design Changes — September 30, 2026

## Overview

A full responsive audit was performed across the entire codebase. The project was already well-architected for responsive design using Tailwind CSS responsive prefixes. Six targeted issues were identified and fixed across 4 files.

**No dependencies added. No components removed. No redesign performed.**

---

## Changes Made

### 1. `src/sections/hero.tsx` — Trust Badges Grid (Line ~71)

**Problem:** The three trust badges ("100%", "< 50ms", "0-Lockin") used a fixed `grid-cols-3` layout. On very small screens (320px), three columns made the content too cramped and risked text overflow.

**Fix:**
- Changed grid from `grid-cols-3` to `grid-cols-2 xs:grid-cols-3`
- Reduced gap from `gap-6` to `gap-4 xs:gap-6`
- Added `col-span-2 xs:col-span-1` to the third badge so it spans full width on 2-col layout
- Reduced base font size from `text-xl` to `text-lg xs:text-xl`

---

### 2. `src/sections/hero.tsx` — Window Header (Line ~105)

**Problem:** The code window header displayed a filename (`yutomax-core.pipeline.ts`) and an "Active Node" badge in a `flex justify-between` layout with no wrapping. On narrow viewports inside the card, these elements could collide or overflow.

**Fix:**
- Added `flex-wrap` and `gap-2` to the header container
- Added `min-w-0` on the left group to allow text truncation
- Added `shrink-0` on the traffic light dots and badge to prevent them from shrinking
- Added `truncate` on the filename text

---

### 3. `src/sections/hero.tsx` — Code Snippet (Line ~347)

**Problem:** The monospace code line (`const system = createEngine({ tier: 'enterprise', ai: true });`) was displayed as a single line with no overflow handling. On small screens, this could cause horizontal scrolling.

**Fix:**
- Added `overflow-x-auto scrollbar-hide` on the code container
- Added `whitespace-nowrap` on the code line to keep it on one line (with horizontal scroll instead of page-level overflow)
- Added `shrink-0 ml-2` on the "Healthy" status indicator to prevent it from being pushed off-screen

---

### 4. `src/sections/stats.tsx` — Stat Values Font Size (Line ~17)

**Problem:** Stat values used `text-4xl` (2.25rem) as the base size in a `grid-cols-2` layout. On 320px screens, this could cause longer stat values to overflow their grid cells.

**Fix:**
- Changed from `text-4xl sm:text-5xl lg:text-6xl` to `text-3xl xs:text-4xl sm:text-5xl lg:text-6xl`
- This adds a smaller 1.875rem base and an intermediate step at the `xs` (475px) breakpoint

---

### 5. `src/app/not-found.tsx` — 404 Heading (Line ~21)

**Problem:** The "Endpoint Not Found" heading used `text-5xl` (3rem) as the base size. On 320px screens, this monospace heading was too large and could overflow.

**Fix:**
- Changed from `text-5xl sm:text-7xl` to `text-4xl xs:text-5xl sm:text-7xl`
- Starts at 2.25rem instead of 3rem, with a smooth step up through `xs` and `sm`

---

### 6. `src/app/(marketing)/blog/page.tsx` — Blog Grid (Line ~71)

**Problem:** The blog article grid jumped from `grid-cols-1` directly to `grid-cols-3` at the `md` breakpoint (768px). At 768–1023px, three article cards in a row were too narrow to be readable.

**Fix:**
- Changed from `grid-cols-1 md:grid-cols-3` to `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Articles now show 2 columns on tablet before expanding to 3 on desktop

---

### 7. `src/components/ui/select.tsx` — Dropdown Background Color & Chevron Icon (Line ~31)

**Problem:** In the contact form, dropdown select elements (`Primary Service Interest`, `Target Budget`, `Target Timeline`) were rendering with default white browser backgrounds and light text instead of the dark `bg-surface-secondary` styling used by other input fields. This was caused by `tailwind-merge` classifying the inline SVG background utility (`bg-[url(...)]`) in the same group as `bg-surface-secondary`, discarding the background color.

**Fix:**
- Removed conflicting arbitrary background class `bg-[url(...)]` from the `select` element so `bg-surface-secondary` is preserved by `tailwind-merge`.
- Rendered the custom dropdown chevron cleanly via an SVG wrapped in `pointer-events-none absolute inset-y-0 right-0`.
- Added dark background (`bg-[#141428]`) to `<option>` items so dropdown options blend seamlessly with the dark theme.
- Added consistent focus/error border rings matching the `Input` component.

---

### 8. `src/components/layout/mobile-nav.tsx` & `globals.css` — Mobile Nav Right Drawer & Gap Alignment Fix

**Problem:** 
1. `scrollbar-gutter: stable` in `globals.css` forced a permanent scrollbar track gap on the right edge of mobile devices and responsive viewports, resulting in a dark unaligned column gap.
2. The drawer was full-width rather than a compact right-aligned panel sized only to what is required.
3. The component was previously trapped inside the header's `backdrop-filter`.

**Fix:**
- Removed `scrollbar-gutter: stable` from `src/app/globals.css` to eliminate the right-edge column gap on mobile and responsive screens.
- Avoided mutating `document.body.style.overflow` so scrollbars and layout flow never shift or produce gaps when opening the nav.
- Sized the drawer strictly to what is required: `w-72 max-w-[calc(100vw-3rem)] sm:w-80` anchored to the right (`fixed inset-y-0 right-0 z-[100]`), sliding in smoothly with `translate-x-0` / `translate-x-full`.
- Ensured it is never full-screen on any screen size (leaving at least 3rem / 48px of the dimmed backdrop and page visible on the left even on narrow 297px viewports).
- Portaled directly to `document.body` via `createPortal` and `useSyncExternalStore` so it is not confined by header containing blocks.

---

### 9. System-wide Horizontal Scroll & Layout Gap Prevention

**Problem:** 
1. The ambient radial background glows (`w-[500px]`, `w-[700px]`, `w-[800px]`) in `SectionWrapper` and on marketing page heroes (`about`, `blog`, `careers`, `case-studies`, `contact`, `industries`, `services`) were not clipped by `overflow-hidden`. On mobile/narrow screens (< 500px), these absolute positioned glows bled past the right edge of the viewport, creating an expanded horizontal scroll area and a visible dark gap on the right.
2. In `mobile-nav.tsx`, the translated drawer container was present in the DOM even when closed, causing Chromium to calculate off-canvas scroll width.

**Fix:**
- Added `relative overflow-hidden` to [SectionWrapper](file:///c:/GitHub/YUTOMAX/website/src/components/layout/section-wrapper.tsx) so all homepage sections automatically clip wide background glows.
- Added `overflow-hidden` to hero headers across all 8 marketing pages.
- Added `overflow-x-hidden` and `max-w-full` to `<main>` and `<body>` in [src/app/layout.tsx](file:///c:/GitHub/YUTOMAX/website/src/app/layout.tsx) and [src/app/globals.css](file:///c:/GitHub/YUTOMAX/website/src/app/globals.css).
- In `MobileNav`, conditionally unmounted the component when closed so off-screen elements do not exist in the DOM or participate in layout calculations.

---

## Validation Results

| Check | Command | Result |
|---|---|---|
| TypeScript | `tsc --noEmit` | ✅ 0 errors |
| ESLint | `eslint src/` | ✅ 0 errors |
| Build | `next build` | ✅ All routes compiled |
| Tests | `vitest run` | ✅ 27/27 passed |

---

## Components Audited — No Changes Needed

The following components were inspected and found to already have correct responsive behavior:

- `Container` — responsive horizontal padding (`px-4 sm:px-6 lg:px-8`)
- `Header` — desktop nav hidden on mobile, hamburger menu toggle
- `MobileNav` — slide-in drawer with focus trap, body scroll lock, escape key
- `Footer` — responsive 1→2→4 column grid
- `SectionWrapper` — responsive vertical padding via `section-padding` utility
- `Card` — responsive padding (`p-6 sm:p-8`)
- `Button / ButtonLink` — inherently flexible with `inline-flex`
- `Input / Select / Textarea` — full-width with proper touch targets
- `ServiceCard` — flex-wrap on tech badges
- `CtaBanner` — button stacking (`flex-col sm:flex-row`)
- `Contact Form` — 2-column to 1-column field layout
- All section grids — proper `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` patterns
- All page hero headings — `text-4xl sm:text-5xl lg:text-6xl` scaling
- Privacy/Terms pages — narrow container with adequate mobile padding

## Breakpoints Used (Tailwind Config — Unchanged)

| Prefix | Min-width |
|---|---|
| `xs` | 475px (custom) |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px (custom) |
| `3xl` | 1920px (custom) |
