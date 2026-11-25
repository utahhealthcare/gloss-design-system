---
title: Footer
---

# Footer

<p class="gls-text-lead">Build complete responsive institutional footers with outer container tokens, 2×2 tablet and 280px/1fr desktop layout grids, top/bottom anchored branding and contact columns, 48×48px transparent social buttons, multi-column navigation, and legal utility rows.</p>

## Overview & Architecture

The Gloss Footer suite provides a complete, cohesive system for institutional footers:

1. **Outer Shell (`.gls-footer-global`):** Applies Sand-800 background, white text, and responsive padding (56px mobile/tablet, 100px desktop).
2. **Main Layout Grid (`.gls-footer-main-grid`):**
   * **Mobile (&lt; 640px):** Single vertical column stack with 40px gap.
   * **Tablet (640px – 959px):** 2×2 grid with intermediate block wrappers flattened via `display: contents !important`, allowing the 3 navigation columns to form a balanced 4-cell grid alongside branding.
   * **Desktop (&ge; 960px):** 280px branding column paired with a 1fr multi-column navigation grid (64px gap).
3. **Institutional Branding (`.gls-footer-social-block`):**
   * Top-anchored logo and address.
   * Bottom-anchored contact links (`margin-top: auto` on desktop), social icons, and disclaimer text.
4. **Social Buttons (`.gls-social-btn`):** 48×48px touch targets with 8px rounded corners, transparent rest state, and 15% white opacity hover state.
5. **Primary Navigation Columns (`.gls-footer-nav`):** Auto-adapts to 1, 2, or 3 columns on tablet/desktop via `:has()` rules, collapsing into mobile accordions (&lt; 640px) with rotating chevron indicators and click-suppressed focus states.
6. **Utility Row (`.gls-footer-utility-row` &amp; `.gls-footer-legal`):** 64px top margin separating the main grid from the flex-wrapping institutional policy links and copyright.

---

## Component Classes

| Class                            | Description                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `.gls-footer-global`             | Outer footer wrapper element (`<footer>`). Applies Sand-800 background and responsive 56px / 100px padding.                                  |
| `.gls-footer-main-grid`          | Responsive layout grid switching from stacked mobile to 2×2 tablet grid and 280px / 1fr desktop layout.                                      |
| `.gls-footer-branding-col`       | Container for the institutional branding and contact column.                                                                                 |
| `.gls-footer-social-block`       | Flex column with top/bottom content distribution (`height: 100%`).                                                                          |
| `.gls-footer-brand-top`          | Top section containing logo and address.                                                                                                     |
| `.gls-footer-brand-bottom`       | Bottom section containing contact links, social icons, and disclaimer (`margin-top: auto` on desktop).                                       |
| `.gls-footer-logo`               | Institutional logo container (`max-width: 216px`).                                                                                           |
| `.gls-footer-address`            | Institutional physical address in Sofia Pro (14px mobile, 16px desktop).                                                                    |
| `.gls-footer-contact-links`      | List of telephone and email contact links in Sofia Pro Bold (weight 700).                                                                    |
| `.gls-footer-social-icons`       | Flex-wrapping container with an 8px gap for social media icon links.                                                                         |
| `.gls-social-btn`                | 48×48px accessible social button with 8px rounded corners and transparent background with 15% white hover state.                             |
| `.gls-footer-disclaimer`         | Institutional disclaimer copy in 14px 80% opacity white text with underlined links.                                                          |
| `.gls-footer-navigation-col`     | Container for navigation columns. Flattened on tablet via `display: contents !important`.                                                   |
| `.gls-footer-nav`                | Primary navigation wrapper element (`<nav>`).                                                                                               |
| `.gls-footer-nav-columns`        | Columns container list (`<ul>`) with accordion integration (`.gls-accordion`).                                                               |
| `.gls-footer-nav-col`            | Individual column item (`<li>`). Converts to an accordion panel on mobile screens.                                                           |
| `.gls-footer-nav-heading-static` | Static non-interactive `<h3>` heading visible only on tablet and desktop (hidden on mobile).                                                 |
| `.gls-footer-nav-heading-toggle` | Interactive mobile toggle trigger link (`.gls-accordion-title`, hidden on tablet/desktop). Provides 48px target and rotating chevron.        |
| `.gls-footer-nav-content`        | Column links wrapper (`.gls-accordion-content`). Expandable on mobile and forced visible on tablet/desktop.                                  |
| `.gls-footer-nav-item`           | Individual link list item (`<li>`).                                                                                                          |
| `.gls-footer-nav-link`           | Navigation link anchor (`<a>`) with clean text at rest and a 2px underline on hover and focus.                                               |
| `.gls-footer-utility-row`        | Utility row wrapper with 64px top margin separation from the main grid.                                                                      |
| `.gls-footer-legal`              | Wrapper container for secondary institutional and legal links (`<div>`).                                                                     |
| `.gls-footer-legal-list`         | Horizontal wrapping flex list (`<ul>`) for utility links.                                                                                    |
| `.gls-footer-legal-item`         | Individual legal/utility item (`<li>`). Anchors have a persistent 1px underline that transitions to Sand 200 (`#dfdad1`) on hover and focus. |
| `.gls-footer-legal-copyright`    | Copyright text notice item within the legal list.                                                                                            |

---

## Complete Global Footer Example

<div class="gls-docs-example">
    <footer class="gls-footer-global">
        <div class="gls-container">
            <div class="gls-footer-main-grid">
                <!-- Branding Column -->
                <div class="gls-footer-branding-col">
                    <div class="gls-footer-social-block">
                        <div class="gls-footer-brand-top">
                            <div class="gls-footer-logo gls-margin-bottom">
                                <svg width="216" height="57" viewBox="0 0 582.38 152.91" xmlns="http://www.w3.org/2000/svg" aria-label="University of Utah Health Logo">
                                    <path fill="#FFFFFF" d="M362.78 255.43v71.77h-13.43v-29.68h-28.76v29.69h-13.23v-71.78h13.23v30.11h28.75v-30.11zM382.58 255.43H427v11.88h-31.19V286h27.29v11.77h-27.29v17.6H428v11.88h-45.42zM484.56 309.81h-26.77l-6.56 17.4h-14.17l26.88-71.77h14.38l26.88 71.77h-14.07zm-22.29-11.67h17.92l-9.06-27.4zM517 255.43h13.3v59.9H558v11.88h-41zM559 255.43h53.86v12.19H592.7v59.59h-13.44v-59.59H559zM683 255.43v71.77h-13.42v-29.68h-28.75v29.69H627.6v-71.78h13.23v30.11h28.75v-30.11z" transform="translate(-100.63 -225.96)"/>
                                    <g>
                                        <path fill="#FFFFFF" d="M322.24 369.41v-17.1h4.07v17.1a9.35 9.35 0 0 1-9.69 9.46c-5.24 0-9.73-3.72-9.73-9.46v-17.1H311v17.1a5.62 5.62 0 0 0 11.25 0zM352.53 378.49h-3.76l-11.25-18.73v18.73h-4v-26.18h3.88l11.13 18.58v-18.58h4zM359.1 352.31h4v26.18h-4zM372.33 352.31l5.59 19.45 5.62-19.45h4.18l-7.9 26.18h-3.76l-7.94-26.18zM392.39 352.31h15.77V356h-11.74v7.75h10.26v3.68h-10.26v7.33h12.12v3.69h-16.15zM433 378.49h-4.9l-6.53-9.61h-2.81v9.61h-4.06v-26.18h10.22c5.62 0 8 4.14 8 8.32 0 3.84-1.94 7.56-6.76 8.09zM418.76 356v9.16h5.85c2.93 0 4.1-2.32 4.1-4.56s-1.14-4.6-4-4.6zM442.44 370.89c.08 2.13 2.09 4.29 5.21 4.29s4.67-1.67 4.94-3.57c.15-2.43-1.71-3.69-4.14-4.26l-3.31-.83c-5.62-1.52-6.5-4.71-6.5-7 0-4.48 4-7.48 8.62-7.48 4.83 0 8.51 3 8.51 7.75h-4c0-2.39-1.86-4-4.56-4-2.39 0-4.52 1.44-4.52 3.61 0 1 .38 2.62 3.5 3.42l3.34.87c5.28 1.41 7.48 4.37 7.07 8.13-.38 4.1-3.91 7-8.93 7-5.43 0-9.23-3.72-9.23-8zM461.85 352.31h4v26.18h-4zM470.48 352.31H490v3.76h-7.7v22.42h-4.1v-22.41h-7.71zM502.44 378.49v-12l-10-14.17h4.83l7.22 10.41 7.29-10.41h4.83l-10.07 14.21v12zM542.07 352a13.43 13.43 0 1 1-13.22 13.45A13.27 13.27 0 0 1 542.07 352zm0 22.91a9.48 9.48 0 1 0-9.19-9.46 9.27 9.27 0 0 0 9.19 9.47zM560.43 352.31H576V356h-11.55v7.75h9.12v3.68h-9.12v11h-4zM605.49 369.41v-17.1h4.07v17.1a9.35 9.35 0 0 1-9.69 9.46c-5.24 0-9.73-3.72-9.73-9.46v-17.1h4.1v17.1a5.62 5.62 0 0 0 11.25 0zM614.76 352.31h19.53v3.76h-7.71v22.42h-4.1v-22.41h-7.71zM651.51 372h-10.56l-2.51 6.54h-4.29l9.85-26.23h4.37l9.88 26.18H654zm-9.2-3.61h7.83l-3.91-11zM683 352.31v26.18h-4.1v-11.17h-11.81v11.17h-4v-26.18h4v11.32h11.82v-11.32z" transform="translate(-100.63 -225.96)"/>
                                    </g>
                                    <g>
                                        <path fill="#FFFFFF" d="M229.91 290.82c2.31-2.19 5-5.29 8.17-7.83M253.55 339.34v9.07l-16.1 16c-22.88-45.34 3.42-64.19 16.1-82.77v21.14l-3-2.87a2.84 2.84 0 0 0-4 .13 2.84 2.84 0 0 0 0 4l7 6.64v7.75l-14.45-.68a2.86 2.86 0 0 0-3 2.72 2.86 2.86 0 0 0 2.62 3.06l14.82.69v8.56L237.78 339a3 3 0 0 0-1.67 3.91 3 3 0 0 0 3.83 1.84l13.59-5.45z" transform="translate(-100.63 -225.96)"/>
                                        <path fill="#FFFFFF" d="M241.19 234.62l4.13 4.41a1.75 1.75 0 0 0 2.46.19 1.75 1.75 0 0 0 .08-2.47l-4.69-5a29.18 29.18 0 0 1 5.64-5.76h20.05v46h-10.31c2-6.37 1.42-13.21-4.15-21.46 15.33 38.33-64.1 37.11-29.72 126.29l-1.8 2.1h-76.26L116 348.41v-76.46h-15.37V226h76.47v46h-15.34v60.93h46v-60.98h-15.34V226h49.3c-16.1 12-25.93 43.08-11.82 64.85 2.31-2.19 5-5.29 8.17-7.83a33 33 0 0 1-3.38-7.8l16.53-6.4a1.88 1.88 0 0 0 1.1-2.41 1.88 1.88 0 0 0-2.41-1.1l-16.09 6.23a46.61 46.61 0 0 1-.61-11.81l16.19-.5a1.85 1.85 0 0 0 1.82-1.87 1.85 1.85 0 0 0-1.91-1.78l-15.72.48a57.57 57.57 0 0 1 2.41-10.39l11.16 3.66a1.81 1.81 0 0 0 2.32-1.07 1.81 1.81 0 0 0-1.14-2.28l-11.11-3.65a50.1 50.1 0 0 1 3.96-7.71z" transform="translate(-100.63 -225.96)"/>
                                    </g>
                                </svg>
                            </div>
                            <address class="gls-footer-address">
                                50 North Medical Drive<br />
                                Salt Lake City, UT 84132
                            </address>
                        </div>
                        <div class="gls-footer-brand-bottom">
                            <div class="gls-footer-contact-links">
                                <div class="gls-footer-contact-link-item">
                                    <a href="tel:8015812121" class="gls-button gls-button-text">
                                        <span class="gls-button-label">801-581-2121</span>
                                    </a>
                                </div>
                                <div class="gls-footer-contact-link-item">
                                    <a href="mailto:contact@uhealth.utah.edu" class="gls-button gls-button-text">
                                        <span class="gls-button-label">contact@uhealth.utah.edu</span>
                                    </a>
                                </div>
                            </div>
                            <div class="gls-footer-social-icons">
                                <a href="#" class="gls-social-btn" aria-label="Facebook">
                                    <span gls-icon="icon: facebook"></span>
                                </a>
                                <a href="#" class="gls-social-btn" aria-label="X / Twitter">
                                    <span gls-icon="icon: twitter"></span>
                                </a>
                                <a href="#" class="gls-social-btn" aria-label="Instagram">
                                    <span gls-icon="icon: instagram"></span>
                                </a>
                                <a href="#" class="gls-social-btn" aria-label="YouTube">
                                    <span gls-icon="icon: youtube"></span>
                                </a>
                            </div>
                            <div class="gls-footer-disclaimer">
                                <h4>Scheduling: <strong>801-213-9500</strong></h4>
                                <p><strong>University of Utah Health</strong> is the state’s only academic medical center.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation Columns -->
                <div class="gls-footer-navigation-col">
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
                                            <a href="#" class="gls-footer-nav-link show-focus">Locations &amp; Directions</a>
                                        </li>
                                        <li class="gls-footer-nav-item">
                                            <a href="#" class="gls-footer-nav-link show-focus">Services &amp; Treatments</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="gls-footer-nav-col">
                                <h3 class="gls-footer-nav-heading-static">Academics</h3>
                                <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Academics</a>
                                <div class="gls-accordion-content gls-footer-nav-content">
                                    <ul class="gls-list gls-margin-remove">
                                        <li class="gls-footer-nav-item">
                                            <a href="#" class="gls-footer-nav-link show-focus">School of Medicine</a>
                                        </li>
                                        <li class="gls-footer-nav-item">
                                            <a href="#" class="gls-footer-nav-link show-focus">College of Nursing</a>
                                        </li>
                                        <li class="gls-footer-nav-item">
                                            <a href="#" class="gls-footer-nav-link show-focus">College of Pharmacy</a>
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
                                        <li class="gls-footer-nav-item">
                                            <a href="#" class="gls-footer-nav-link show-focus">Newsroom</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Utility Row -->
            <div class="gls-footer-utility-row">
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
    </footer>
</div>

```html
<footer class="gls-footer-global">
    <div class="gls-container">
        <div class="gls-footer-main-grid">
            <!-- Branding & Contact Column -->
            <div class="gls-footer-branding-col">
                <div class="gls-footer-social-block">
                    <div class="gls-footer-brand-top">
                        <div class="gls-footer-logo gls-margin-bottom">
                            <img src="/logo.svg" alt="University of Utah Health" />
                        </div>
                        <address class="gls-footer-address">
                            50 North Medical Drive<br />
                            Salt Lake City, UT 84132
                        </address>
                    </div>

                    <div class="gls-footer-brand-bottom">
                        <div class="gls-footer-contact-links">
                            <div class="gls-footer-contact-link-item">
                                <a href="tel:8015812121" class="gls-button gls-button-text">
                                    <span class="gls-button-label">801-581-2121</span>
                                </a>
                            </div>
                        </div>

                        <div class="gls-footer-social-icons">
                            <a href="#" class="gls-social-btn" aria-label="Facebook">
                                <span gls-icon="icon: facebook"></span>
                            </a>
                            <a href="#" class="gls-social-btn" aria-label="X / Twitter">
                                <span gls-icon="icon: twitter"></span>
                            </a>
                        </div>

                        <div class="gls-footer-disclaimer">
                            <p><strong>University of Utah Health</strong> is the state’s only academic medical center.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Columns -->
            <div class="gls-footer-navigation-col">
                <nav class="gls-footer-nav" aria-label="Footer Navigation">
                    <ul class="gls-footer-nav-columns gls-accordion" gls-accordion="multiple: true; targets: .gls-footer-nav-col;">
                        <li class="gls-footer-nav-col">
                            <h3 class="gls-footer-nav-heading-static">Patient Care</h3>
                            <a class="gls-accordion-title gls-footer-nav-heading-toggle" href="#">Patient Care</a>
                            <div class="gls-accordion-content gls-footer-nav-content">
                                <ul class="gls-list gls-margin-remove">
                                    <li class="gls-footer-nav-item">
                                        <a href="/find-a-doctor" class="gls-footer-nav-link show-focus">Find a Doctor</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- Utility Row -->
        <div class="gls-footer-utility-row">
            <div class="gls-footer-legal">
                <ul class="gls-footer-legal-list">
                    <li class="gls-footer-legal-item">
                        <a href="/privacy" class="show-focus">Patient Privacy</a>
                    </li>
                    <li class="gls-footer-legal-item gls-footer-legal-copyright">
                        Copyright &copy; 2026 University of Utah Health
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
```
