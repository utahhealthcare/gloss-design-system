---
title: Hero Banner
---

# Hero Banner

<p class="gls-text-lead">Create prominent display heroes featuring a full-bleed media panel, multi-stop accessibility scrim, fluid headline typography, caption link pill, and an integrated search box panel.</p>

## Usage

The Hero Banner component is architected for top-of-page editorial landing experiences. On desktop views, it arranges the headline and search box side-by-side inside the photo. On mobile and tablet views (< 960px), the search box flows naturally as a full-width panel beneath the photo.

| Class                                | Description                                                                                               |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `.gls-hero-banner`                   | Outer container bounding box. Snaps to 1600px column with 16px corners above 1760px.                      |
| `.gls-slideshow-items`               | Slideshow track container enforcing responsive viewport heights.                                         |
| `.gls-hero-banner-item`              | Individual slide container managing layout flow.                                                          |
| `.gls-hero-banner-media`             | Upper photo panel (fits content / min 350px on mobile, 50vh on tablet, full-bleed on desktop).           |
| `.gls-hero-banner-image`             | Background image styled with `object-fit: cover` and lazy/fetchpriority support.                          |
| `.gls-hero-banner-scrim`             | Multi-stop `uu-sand-950` gradient protecting white text contrast over imagery.                           |
| `.gls-hero-banner-caption`           | Top caption pill container (absolute top: 16px mobile, 40px tablet/desktop, 80px large desktop).         |
| `.gls-hero-banner-caption-link`      | Text Button Special on dark (50% sand-950 pill, 8px radius, 48px tap target, white arrow/underline).     |
| `.gls-hero-banner-text-content`      | Anchored headline and supporting copy container.                                                          |
| `.gls-hero-banner-title`             | Headline Line 1 (Archivo 700, never wraps, scales at 5.6vw up to 88px max, line-height 0.95).             |
| `.gls-hero-banner-subtitle`          | Headline Line 2 (Archivo 400 Italic, never wraps, scales identically to Title).                           |
| `.gls-hero-banner-body`              | Supporting body copy (Sofia Pro 400, 16px mobile, 18px tablet/desktop, balanced below 480px).             |
| `.gls-hero-banner-search-box`        | Sand-100 search panel (full-width below photo on < 960px, bottom-right beside headline on 960px+).       |
| `.gls-hero-search-box`               | Search form wrapper containing the input, accessible label, and submit button.                            |

---

<div class="gls-docs-example">
    <div class="gls-hero-banner" gls-slideshow="animation: fade">
        <ul class="gls-slideshow-items">
            <li class="gls-hero-banner-item gls-active">
                <div class="gls-hero-banner-media">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
                        alt="Modern hospital building facade"
                        data-gls-cover
                        fetchpriority="high"
                        class="gls-hero-banner-image"
                    />
                    <div class="gls-hero-banner-scrim" aria-hidden="true"></div>

                    <div class="gls-hero-banner-caption">
                        <a href="#explore" class="gls-button gls-button-text gls-button-arrow-trailing gls-hero-banner-caption-link">
                            <span class="gls-button-label">Explore our care</span>
                            <span class="gls-button-icon-trailing gls-margin-small-left" gls-icon="icon: arrow-right; ratio: 0.8"></span>
                        </a>
                    </div>

                    <div class="gls-hero-banner-text-content">
                        <h1 class="gls-hero-banner-title">Healthcare</h1>
                        <p class="gls-hero-banner-subtitle">Compassion</p>
                        <div class="gls-hero-banner-body">
                            <p>Leading the way in healthcare discovery, patient care, and medical education across the Mountain West.</p>
                        </div>
                    </div>
                </div>

                <div class="gls-hero-banner-search-box">
                    <div class="gls-hero-search-box">
                        <form action="#search" method="get" role="search" class="gls-hero-search-box-form">
                            <div class="gls-hero-search-box-inner">
                                <label for="docs-hero-search" class="gls-hidden-visually">
                                    Find a doctor, service, or location...
                                </label>
                                <input
                                    type="search"
                                    id="docs-hero-search"
                                    name="q"
                                    placeholder="Find a doctor, service, or location..."
                                    autocomplete="off"
                                    class="gls-input gls-hero-search-box-input"
                                />
                                <button type="submit" class="gls-button gls-button-primary gls-hero-search-box-button" aria-label="Submit Search">
                                    <span gls-icon="icon: search; ratio: 1.1"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

```html
<div class="gls-hero-banner" gls-slideshow="animation: fade">
    <ul class="gls-slideshow-items">
        <li class="gls-hero-banner-item gls-active">
            <div class="gls-hero-banner-media">
                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
                    alt="Modern hospital building facade"
                    data-gls-cover
                    fetchpriority="high"
                    class="gls-hero-banner-image"
                />
                <div class="gls-hero-banner-scrim" aria-hidden="true"></div>

                <div class="gls-hero-banner-caption">
                    <a href="/services" class="gls-button gls-button-text gls-button-arrow-trailing gls-hero-banner-caption-link">
                        <span class="gls-button-label">Explore our care</span>
                        <span class="gls-button-icon-trailing gls-margin-small-left" gls-icon="icon: arrow-right; ratio: 0.8"></span>
                    </a>
                </div>

                <div class="gls-hero-banner-text-content">
                    <h1 class="gls-hero-banner-title">Healthcare</h1>
                    <p class="gls-hero-banner-subtitle">Compassion</p>
                    <div class="gls-hero-banner-body">
                        <p>Leading the way in healthcare discovery, patient care, and medical education across the Mountain West.</p>
                    </div>
                </div>
            </div>

            <div class="gls-hero-banner-search-box">
                <div class="gls-hero-search-box">
                    <form action="/search" method="get" role="search" class="gls-hero-search-box-form">
                        <div class="gls-hero-search-box-inner">
                            <label for="hero-search-input" class="gls-hidden-visually">
                                Find a doctor, service, or location...
                            </label>
                            <input
                                type="search"
                                id="hero-search-input"
                                name="q"
                                placeholder="Find a doctor, service, or location..."
                                autocomplete="off"
                                class="gls-input gls-hero-search-box-input"
                            />
                            <button type="submit" class="gls-button gls-button-primary gls-hero-search-box-button" aria-label="Submit Search">
                                <span gls-icon="icon: search; ratio: 1.1"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </li>
    </ul>
</div>
```

---

## Responsive Specifications

| Width | Layout | Hero Height | Side Margins | Headline (Lines 1 & 2) | Supporting Copy | Search Box |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0–479px** | Photo & text; search panel below | Fits content, min 350px | 20px | Up to 36px (never wraps) | 16px, 2 balanced lines (≤ 26ch) | Full width below photo, 20px padding |
| **480–639px** | Same as 0–479px | Fits content, min 350px | 20px | Up to 36px (never wraps) | 16px, wraps naturally | Full width below photo, 20px padding |
| **640–959px** | Same as 0–479px | 50% screen height, min 360px | 40px | Up to 56px (never wraps) | 18px | Full width below photo, 40px padding |
| **960–1199px** | Search box inside photo, bottom right | 100vh − nav − 20px (520–680px) | 40px | Fluid 5.6vw (54px → 67px) | 18px | 460px → 520px (grows 1px per 4px screen) |
| **1200–1599px** | Search box inside photo, bottom right | 100vh − nav − 20px (520–680px) | 80px | Fluid 5.6vw (67px → 88px max) | 18px | 520px → 600px (reaches 600px at 1280px) |
| **1600px+** | Full width; snaps to 1600px at 1760px+ | 100vh − nav − 20px (520–680px) | 80px | 88px (maximum) | 18px | 600px fixed |

---

## Accessibility & Contrast

* **Legibility Scrim Stops**: Uses a multi-stop `uu-sand-950` gradient (`transparent 0%–28%`, `40% at 42%`, `62% at 55%`, `82% at 75%`, `94% at 100%`) ensuring headlines pass 3:1 contrast and supporting copy passes 4.5:1 contrast against pure white backgrounds.
* **Caption Link Pill**: Meets the minimum 48px tap target size requirement with an 8px corner radius.
* **Isolated Font Features**: Headings explicitly reset `font-feature-settings` to `normal` to ensure OpenType `salt` and `ss01` are strictly scoped to Sofia Pro body copy.
