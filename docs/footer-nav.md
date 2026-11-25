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
                                <svg width="216" height="38" viewBox="0 0 216 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="University of Utah Health Logo">
                                    <rect width="38" height="38" rx="4" fill="#CC0000" />
                                    <text x="19" y="26" font-family="Sofia Pro, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle">U</text>
                                    <text x="48" y="18" font-family="Sofia Pro, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">HEALTH</text>
                                    <text x="48" y="32" font-family="Sofia Pro, sans-serif" font-size="11" fill="#DFDAD1">UNIVERSITY OF UTAH</text>
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
