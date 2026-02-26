# BEANS Volleyball — Project Instructions

This project uses:

- Next.js (App Router, React 19)
- SCSS (global styles + variables)
- shadcn/ui (primary UI component system, Radix-based)
- Tailwind CSS v4 (utility-first, minimal usage)
- No unnecessary custom CSS
- No design overengineering

This document is the permanent style and architecture contract for this repository.
Follow it strictly.

---

## Core Philosophy

1. Simplicity over cleverness.
2. Delete more than you add.
3. Prefer structure over styling.
4. Prefer shadcn/ui over custom UI.
5. Prefer semantic HTML over utility noise.
6. Prefer component extraction over duplication.
7. Tailwind is for layout, not decoration.
8. SCSS is for reusable patterns, not random overrides.
9. Never fight shadcn/ui defaults.
10. Every class must justify its existence.

If something feels visually "overbuilt", simplify it.

---

## Architecture Rules

- Keep components small and focused.
- Extract UI repetition into components.
- Do not duplicate Tailwind chains across templates.
- Avoid deep component nesting when unnecessary.
- Do not introduce global CSS unless absolutely required.

If a pattern repeats 3+ times:
→ Extract a component OR
→ Create a semantic SCSS class using @apply in globals.scss.

Never solve repetition with copy/paste.

---

## Tailwind Usage Rules (STRICT)

### Allowed for:

- Layout (flex, grid)
- Spacing (gap, space-y, p-*, m-*)
- Width/height (w-full, max-w-*, h-*)
- Simple alignment
- Rare responsive adjustments

### NOT for:

- Overriding theme colors with arbitrary values when CSS vars exist
- Heavy typography manipulation
- Shadow stacking with arbitrary values
- Micro adjustments

### Remove redundant utilities:

Do not use:
- `flex-row` (default)
- `items-stretch` (default)
- `justify-start` (default)
- `overflow-visible` (default)
- `font-normal` (default)
- `leading-normal` (default)
- `text-black` (default)
- `bg-white` (if already white)
- `relative` (unless needed for positioned children)
- `w-auto` / `h-auto`
- `w-full` on block-level elements (already full width)
- `w-fit` on `inline-flex` elements (already wraps content)
- Unnecessary responsive chains

### Avoid margin stacking:

Instead of `mt-4 mb-6` on children, use parent with `gap-*` or `space-y-*`.

### Max utility count:

No element should have more than 6–8 Tailwind utilities unless justified.
If you see 10+ utilities → Refactor.

### Class order (readability):

1. layout
2. spacing
3. sizing
4. typography
5. background
6. border
7. effects
8. state

---

## shadcn/ui Rules

shadcn/ui is the primary UI system (Button, Card, Input, Sheet, Accordion, etc.).

Always prefer shadcn/ui components over building custom equivalents.

Do NOT:
- Override shadcn/ui deeply with Tailwind.
- Add heavy class lists directly to UI primitives.
- Pixel-push UI components.

Instead:
- Use Tailwind on wrapper containers.
- Use component APIs (variant, size, disabled, etc.).
- Keep vertical rhythm with gap-* on parent containers.

---

## SCSS Rules

### Allowed for:

- Reusable visual patterns
- Extracting repeated Tailwind utilities via @apply
- Typography scale definitions
- Component-scoped structure

### NOT allowed for:

- Random styling experiments
- Replacing Tailwind unnecessarily
- Duplicating theme logic

Use @apply sparingly and only when:
- The utility chain repeats 3+ times
- It reduces template noise
- It improves clarity

---

## Responsive Rules

Use the fewest breakpoints possible. Usually: `base` + `md`.
Avoid `sm → md → lg → xl` chains unless clearly justified.
Mobile-first always.

---

## Template Cleanliness Standard

Templates should:
- Be readable without scrolling horizontally.
- Not contain utility soup.
- Not fight shadcn/ui.
- Prefer structural clarity over styling tricks.

Before adding a class, ask:
- Is this default already?
- Can layout solve this instead?
- Can parent spacing solve this?
- Should this be a component instead?

If yes → simplify.

---

## When Modifying Existing Code

- Make the smallest possible change.
- Preserve behavior, accessibility, responsiveness.
- Remove redundancy.
- Simplify utilities.
- Replace margin soup with gap.
- Remove Tailwind defaults.
- Avoid touching logic unless required.

---

## Final Principle

Clean > Clever · Simple > Fancy · Structured > Styled · Reusable > Repeated · Readable > Compact

If code feels heavy, it is wrong. Always refactor toward minimalism.
