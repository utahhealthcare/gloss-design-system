---
title: Footer Nav
---

# Footer Nav

<p class="gls-text-lead">Create responsive multi-column footer navigation that collapses into an accessible accordion on mobile and displays as open static columns on desktop, paired with a secondary legal and utility links row.</p>

## Usage

The Footer Nav component provides two coordinated navigation structures designed for institutional footers:

1. **Primary Navigation Columns (`.gls-footer-nav`):** Auto-adapts to 1, 2, or 3 columns on tablet and desktop via CSS `:has()` rules, while automatically converting to touch-friendly, collapsible accordion panels on mobile screens (&lt; 640px).
2. **Secondary Utility / Legal Row (`.gls-footer-legal`):** A flexible wrapping row for compliance, disclaimer, privacy, and copyright notices.

| Class                            | Description                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `.gls-footer-nav`                | Primary navigation wrapper element (`<nav>`).                                                                                               |
| `.gls-footer-nav-columns`        | Columns container list (`<ul>`) with accordion integration (`.gls-accordion`).                                                               |
| `.gls-footer-nav-col`            | Individual column item (`<li>`). Converts to an accordion panel on mobile screens.                                                           |
| `.gls-footer-nav-heading-static` | Static non-interactive `<h3>` heading visible only on tablet and desktop (hidden on mobile).                                                 |
| `.gls-footer-nav-heading-toggle` | Interactive mobile toggle trigger link (`.gls-accordion-title`, hidden on tablet/desktop). Automatically provides 48px target and rotating chevron. |
| `.gls-footer-nav-content`        | Column links wrapper (`.gls-accordion-content`). Expandable on mobile and forced visible on tablet/desktop.                                  |
| `.gls-footer-nav-item`           | Individual link list item (`<li>`).                                                                                                          |
| `.gls-footer-nav-link`           | Navigation link anchor (`<a>`) with clean text at rest and a 2px underline on hover and focus.                                               |
| `.gls-footer-legal`              | Wrapper container for secondary institutional and legal links (`<div>`).                                                                     |
| `.gls-footer-legal-list`         | Horizontal wrapping flex list (`<ul>`) for utility links.                                                                                    |
| `.gls-footer-legal-item`         | Individual legal/utility item (`<li>`). Anchors have a persistent 1px underline that transitions to Sand 200 (`#dfdad1`) on hover and focus. |
| `.gls-footer-legal-copyright`    | Copyright text notice item within the legal list.                                                                                            |

---

## Responsive Breakpoint Behavior

The Footer Nav component adapts automatically across viewport sizes:

* **Mobile Viewport (&lt; 640px):**
  * Columns stack vertically with `1px` translucent white dividers (`rgba(255, 255, 255, 0.2)`).
  * Static headings are hidden; interactive accordion toggles (`.gls-footer-nav-heading-toggle`) are displayed with a minimum `48px` touch target.
  * Toggling a section smoothly reveals its links and rotates the trailing chevron indicator 180&deg;.
  * Focus states are suppressed on click or tap, but clearly visible when navigating with a keyboard.
  * Navigation links have a `16px` font size and `6px` vertical padding for optimal touch ergonomics.
* **Tablet and Desktop Viewports (&ge; 640px):**
  * Columns display side-by-side in a responsive CSS Grid with a `32px` column gap.
  * Mobile interactive toggles are hidden; non-interactive `<h3>` static headings are displayed.
  * Content panels are forced visible even when UIkit accordion JavaScript is active.
  * Navigation links have an `18px` font size with `12px` vertical spacing between items.

---

## Three-Column Layout

By default, three or more columns automatically arrange into a 3-column grid on viewports &ge; 640px.

<div class="gls-docs-example">
    <div class="gls-background-sand-800 gls-padding">
        <nav class="gls-footer-nav" aria-label="Footer Navigation">
            <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Patient Care</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Patient Care</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Find a Doctor</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Locations &amp; Clinics</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Services &amp; Specialties</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Schedule an Appointment</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Education &amp; Research</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Education &amp; Research</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Spencer Fox Eccles School of Medicine</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">College of Nursing</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">College of Pharmacy</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Clinical Trials</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">About Us</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">About Us</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">About University of Utah Health</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Careers</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">News &amp; Media</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Giving &amp; Philanthropy</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>

```html
<nav class="gls-footer-nav" aria-label="Footer Navigation">
    <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
        <!-- Column 1 -->
        <li class="gls-footer-nav-col">
            <h3 class="gls-footer-nav-heading-static">Patient Care</h3>
            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Patient Care</a>
            <div class="gls-accordion-content gls-footer-nav-content">
                <ul class="gls-list gls-margin-remove">
                    <li class="gls-footer-nav-item">
                        <a href="/find-a-doctor" class="gls-footer-nav-link show-focus">Find a Doctor</a>
                    </li>
                    <li class="gls-footer-nav-item">
                        <a href="/locations" class="gls-footer-nav-link show-focus">Locations &amp; Clinics</a>
                    </li>
                </ul>
            </div>
        </li>

        <!-- Column 2 -->
        <li class="gls-footer-nav-col">
            <h3 class="gls-footer-nav-heading-static">Education &amp; Research</h3>
            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Education &amp; Research</a>
            <div class="gls-accordion-content gls-footer-nav-content">
                <ul class="gls-list gls-margin-remove">
                    <li class="gls-footer-nav-item">
                        <a href="/school-of-medicine" class="gls-footer-nav-link show-focus">School of Medicine</a>
                    </li>
                    <li class="gls-footer-nav-item">
                        <a href="/clinical-trials" class="gls-footer-nav-link show-focus">Clinical Trials</a>
                    </li>
                </ul>
            </div>
        </li>

        <!-- Column 3 -->
        <li class="gls-footer-nav-col">
            <h3 class="gls-footer-nav-heading-static">About Us</h3>
            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">About Us</a>
            <div class="gls-accordion-content gls-footer-nav-content">
                <ul class="gls-list gls-margin-remove">
                    <li class="gls-footer-nav-item">
                        <a href="/about" class="gls-footer-nav-link show-focus">About University of Utah Health</a>
                    </li>
                    <li class="gls-footer-nav-item">
                        <a href="/careers" class="gls-footer-nav-link show-focus">Careers</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

---

## Two-Column Layout

When exactly two columns are present, the grid automatically adapts to two equal columns via CSS `:has(> :nth-child(2):last-child)`.

<div class="gls-docs-example">
    <div class="gls-background-sand-800 gls-padding">
        <nav class="gls-footer-nav" aria-label="Footer Navigation">
            <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Patient Resources</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Patient Resources</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">MyChart Portal</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Pay Your Bill</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Insurance Accepted</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Contact &amp; Connect</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Contact &amp; Connect</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">General Contact Information</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Emergency Services</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Media Inquiries</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>

```html
<nav class="gls-footer-nav" aria-label="Footer Navigation">
    <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
        <li class="gls-footer-nav-col">
            <h3 class="gls-footer-nav-heading-static">Patient Resources</h3>
            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Patient Resources</a>
            <div class="gls-accordion-content gls-footer-nav-content">
                <ul class="gls-list gls-margin-remove">
                    <li class="gls-footer-nav-item">
                        <a href="/mychart" class="gls-footer-nav-link show-focus">MyChart Portal</a>
                    </li>
                    <li class="gls-footer-nav-item">
                        <a href="/billing" class="gls-footer-nav-link show-focus">Pay Your Bill</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="gls-footer-nav-col">
            <h3 class="gls-footer-nav-heading-static">Contact &amp; Connect</h3>
            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Contact &amp; Connect</a>
            <div class="gls-accordion-content gls-footer-nav-content">
                <ul class="gls-list gls-margin-remove">
                    <li class="gls-footer-nav-item">
                        <a href="/contact" class="gls-footer-nav-link show-focus">General Contact Information</a>
                    </li>
                    <li class="gls-footer-nav-item">
                        <a href="/emergency" class="gls-footer-nav-link show-focus">Emergency Services</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

---

## One-Column Layout

When a single column is used, it expands to full width via `:has(> :nth-child(1):last-child)`.

<div class="gls-docs-example">
    <div class="gls-background-sand-800 gls-padding">
        <nav class="gls-footer-nav" aria-label="Footer Navigation">
            <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Quick Navigation</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Quick Navigation</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Find a Doctor</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Locations &amp; Directions</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Patient Portal (MyChart)</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>

```html
<nav class="gls-footer-nav" aria-label="Footer Navigation">
    <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
        <li class="gls-footer-nav-col">
            <h3 class="gls-footer-nav-heading-static">Quick Navigation</h3>
            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Quick Navigation</a>
            <div class="gls-accordion-content gls-footer-nav-content">
                <ul class="gls-list gls-margin-remove">
                    <li class="gls-footer-nav-item">
                        <a href="/find-a-doctor" class="gls-footer-nav-link show-focus">Find a Doctor</a>
                    </li>
                    <li class="gls-footer-nav-item">
                        <a href="/locations" class="gls-footer-nav-link show-focus">Locations &amp; Directions</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

---

## Secondary Legal Links Row

Use `.gls-footer-legal` to render institutional policy links, compliance disclosures, and copyright statements in a horizontal, responsive wrapping row.

<div class="gls-docs-example">
    <div class="gls-background-sand-800 gls-padding">
        <div class="gls-footer-legal">
            <ul class="gls-footer-legal-list">
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Price Transparency</a>
                </li>
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Patient Privacy</a>
                </li>
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Patient Rights &amp; Responsibilities</a>
                </li>
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Disclaimer</a>
                </li>
                <li class="gls-footer-legal-item gls-footer-legal-copyright">
                    Copyright &copy; 2026 University of Utah Health
                </li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="gls-footer-legal">
    <ul class="gls-footer-legal-list">
        <li class="gls-footer-legal-item">
            <a href="/pricing" class="show-focus">Price Transparency</a>
        </li>
        <li class="gls-footer-legal-item">
            <a href="/privacy" class="show-focus">Patient Privacy</a>
        </li>
        <li class="gls-footer-legal-item">
            <a href="/rights" class="show-focus">Patient Rights &amp; Responsibilities</a>
        </li>
        <li class="gls-footer-legal-item">
            <a href="/disclaimer" class="show-focus">Disclaimer</a>
        </li>
        <li class="gls-footer-legal-item gls-footer-legal-copyright">
            Copyright &copy; 2026 University of Utah Health
        </li>
    </ul>
</div>
```

---

## Combined Layout

To compose a complete footer navigation structure, place `.gls-footer-legal` below `.gls-footer-nav` with vertical spacing (such as `.gls-margin-large-top`), with no separating border line between the sections.

<div class="gls-docs-example">
    <div class="gls-background-sand-800 gls-padding">
        <nav class="gls-footer-nav" aria-label="Footer Navigation">
            <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Patient Care</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Patient Care</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Find a Doctor</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Locations &amp; Clinics</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">Education &amp; Research</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Education &amp; Research</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">School of Medicine</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Clinical Trials</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="gls-footer-nav-col">
                    <h3 class="gls-footer-nav-heading-static">About Us</h3>
                    <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">About Us</a>
                    <div class="gls-accordion-content gls-footer-nav-content">
                        <ul class="gls-list gls-margin-remove">
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">About Our System</a>
                            </li>
                            <li class="gls-footer-nav-item">
                                <a href="#" class="gls-footer-nav-link show-focus">Careers</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="gls-footer-legal gls-margin-large-top">
            <ul class="gls-footer-legal-list">
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Price Transparency</a>
                </li>
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Patient Privacy</a>
                </li>
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Patient Rights &amp; Responsibilities</a>
                </li>
                <li class="gls-footer-legal-item">
                    <a href="#" class="show-focus">Disclaimer</a>
                </li>
                <li class="gls-footer-legal-item gls-footer-legal-copyright">
                    Copyright &copy; 2026 University of Utah Health
                </li>
            </ul>
        </div>
    </div>
</div>

```html
<nav class="gls-footer-nav" aria-label="Footer Navigation">
    <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
        <!-- Columns -->
    </ul>
</nav>

<div class="gls-footer-legal gls-margin-large-top">
    <ul class="gls-footer-legal-list">
        <!-- Legal links -->
    </ul>
</div>
```
