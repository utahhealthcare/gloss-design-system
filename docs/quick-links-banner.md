---
title: Quick Links Banner
---

# Quick Links Banner

<p class="gls-text-lead">Create prominent action navigation banners with responsive content padding, an orphan-free link grid, clickable action cards, and optional background illustrations.</p>

## Usage

The Quick Links Banner component combines an outer container, responsive content wrapper, link grid, and individual action cards. It is designed for high-visibility navigation callouts (such as "Ready to help?") that direct users to key resources.

| Class                                  | Description                                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `.gls-quick-links-banner`              | Outer container shell with 16px rounded corners and overflow clipping. Can be paired with background styles. |
| `.gls-quick-links-banner-content`      | Content wrapper managing responsive padding (24px mobile, 30px tablet, 40px desktop) and column layout.   |
| `.gls-link-grid`                       | Responsive grid container for quick links that prevents orphaned rows.                                    |
| `.gls-link-grid-inner`                 | Grid wrapper applying layout rules based on link count (1 col mobile, 2 col tablet, 3–4 col desktop).       |
| `.gls-quick-link`                      | Interactive navigation action card with label, hover elevation, and focus indicator.                      |
| `.gls-quick-link-arrow`                | Forward arrow indicator pinned to the right, styled with brand primary red.                               |
| `.gls-quick-links-banner-illustration` | Decorative background illustration anchored flush to the bottom.                                          |

```html
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Ready to help?</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Find a Doctor</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
```

<div class="gls-docs-example">
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Ready to help?</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Find a Doctor</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Locations &amp; Directions</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Patient Portal (MyChart)</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Pay a Bill</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>

    <div class="gls-quick-links-banner-illustration" aria-hidden="true">
        <img src="images/backgrounds/mountains.svg" alt="" />
    </div>
</div>
</div>

```html
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Ready to help?</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Find a Doctor</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Locations &amp; Directions</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Patient Portal (MyChart)</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Pay a Bill</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>

    <div class="gls-quick-links-banner-illustration" aria-hidden="true">
        <img src="images/backgrounds/mountains.svg" alt="" />
    </div>
</div>
```

---

## Responsive grid layouts

The `.gls-link-grid-inner` container uses CSS `:has()` pseudo-classes to evaluate how many links are present and automatically adapt the layout across breakpoints without requiring manual modifier classes:

- **4 links:** Stacks into 1 column on mobile (< 640px), organizes into a 2×2 grid on tablet (640px–1199px), and displays 4 across on desktop (1200px+).
- **3 links:** Stacks into 1 column below 960px to avoid an awkward 2+1 orphan row on tablet screens, then expands to 3 across on medium viewports and up (960px+).
- **2 links:** Stacks into 1 column on mobile (< 640px) and displays 2 across on tablet and up (640px+).

### Three links (orphan prevention)

Below 960px, a 3-link banner collapses to a single column to prevent a lone orphan item on the second row. At 960px and wider, it expands to a 3-column row.

<div class="gls-docs-example">
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Clinical Services</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Primary Care</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Cardiology &amp; Heart Health</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Cancer Care (Huntsman)</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
</div>

```html
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Clinical Services</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Primary Care</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Cardiology &amp; Heart Health</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Cancer Care (Huntsman)</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
```

### Two links

A 2-link banner displays as a single column on mobile (< 640px) and side-by-side in 2 equal columns at 640px and wider.

<div class="gls-docs-example">
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Urgent &amp; Emergency</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Urgent Care Wait Times</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Emergency Department Locations</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
</div>

```html
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <h3 class="gls-h2 gls-margin-remove-bottom">Urgent &amp; Emergency</h3>

        <div class="gls-link-grid">
            <div class="gls-link-grid-inner">
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Urgent Care Wait Times</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
                <a class="gls-quick-link" href="#">
                    <span class="gls-text-bold">Emergency Department Locations</span>
                    <span class="gls-quick-link-arrow" aria-hidden="true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="3.47"
                                y1="10"
                                x2="15.47"
                                y2="10"
                                stroke-width="1.5"
                            />
                            <polyline
                                points="11.98 13.84 15.82 10 11.98 6.16"
                                stroke-width="1.5"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
```

---

## Background illustration

To add decorative illustrations, place a `.gls-quick-links-banner-illustration` container inside the banner. It anchors flush to the bottom edge with `pointer-events: none` and `z-index: 0`, while content in `.gls-quick-links-banner-content` sits above it at `z-index: 1`.

Always add `aria-hidden="true"` to the illustration container and leave the image `alt=""` blank to ensure screen readers skip decorative graphics.

```html
<div class="gls-quick-links-banner gls-background-granite-300">
    <div class="gls-quick-links-banner-content">
        <!-- Content sits above the illustration -->
    </div>

    <div class="gls-quick-links-banner-illustration" aria-hidden="true">
        <img src="images/backgrounds/mountains.svg" alt="" />
    </div>
</div>
```

---

## Action cards

Individual quick links use the `.gls-quick-link` class on an `<a>` element. Each action card includes:

- White card background with 16px rounded corners (`var(--border-rounded-lg)`).
- Flex alignment with the link label on the left and `.gls-quick-link-arrow` pinned to the right.
- High-contrast text color (`var(--color-sand-950)`) across normal, visited, and hover states.
- Subtle elevation box shadow (`0 4px 12px rgba(0, 0, 0, 0.08)`) on hover.
- Visible keyboard focus ring using the design system focus token (`var(--gls-color-reference-focus)`).
- Forward arrow indicator rendered in brand primary red (`var(--gls-color-reference-brand-primary)`).

<div class="gls-docs-example">
<div class="gls-width-medium">
    <a class="gls-quick-link gls-margin-small-bottom" href="#">
        <span>Schedule an Appointment</span>
        <span class="gls-quick-link-arrow" aria-hidden="true">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="3.47" y1="10" x2="15.47" y2="10" stroke-width="1.5" />
                <polyline points="11.98 13.84 15.82 10 11.98 6.16" stroke-width="1.5" />
            </svg>
        </span>
    </a>
    <a class="gls-quick-link" href="#">
        <span>Longer action card label that wraps gracefully across multiple lines</span>
        <span class="gls-quick-link-arrow" aria-hidden="true">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="3.47" y1="10" x2="15.47" y2="10" stroke-width="1.5" />
                <polyline points="11.98 13.84 15.82 10 11.98 6.16" stroke-width="1.5" />
            </svg>
        </span>
    </a>
</div>
</div>

```html
<div class="gls-width-medium">
    <a class="gls-quick-link gls-margin-small-bottom" href="#">
        <span>Schedule an Appointment</span>
        <span class="gls-quick-link-arrow" aria-hidden="true">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="3.47" y1="10" x2="15.47" y2="10" stroke-width="1.5" />
                <polyline points="11.98 13.84 15.82 10 11.98 6.16" stroke-width="1.5" />
            </svg>
        </span>
    </a>
    <a class="gls-quick-link" href="#">
        <span>Longer action card label that wraps gracefully across multiple lines</span>
        <span class="gls-quick-link-arrow" aria-hidden="true">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="3.47" y1="10" x2="15.47" y2="10" stroke-width="1.5" />
                <polyline points="11.98 13.84 15.82 10 11.98 6.16" stroke-width="1.5" />
            </svg>
        </span>
    </a>
</div>
```

---

## Background styling

The `.gls-quick-links-banner` container is neutral by default and can be paired with background utility classes from the [Background component](background.md):

| Class                          | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `.gls-background-granite-300`  | Granite 300 slate background, commonly paired with the mountain illustration.   |
| `.gls-background-muted`        | Muted neutral grey background.                                                  |
| `.gls-background-default`      | Default page background.                                                        |
