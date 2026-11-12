---
title: Story Card
---

# Story Card

<p class="gls-text-lead">Create prominent narrative and editorial cards designed for carousels and highlight grids, combining a portrait media panel, legibility scrim, headline, and animated Text Button link.</p>

## Usage

The Story Card component combines an upper media panel with a lower content area. It is optimized for editorial storytelling, patient testimonials, and clinical highlights within carousels (`gls-slider`) or multi-column grids.

| Class                                     | Description                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `.gls-story-card`                         | Outer container article without lift, scale, or shadow, designed for carousel item expansion.            |
| `.gls-story-card--image`                  | Modifier for image-only story cards.                                                                      |
| `.gls-story-card-media`, `.__media`       | Responsive portrait container (9:16 aspect on mobile, 520px at `@sm`, 560px at `@lg`) with 8px radius.   |
| `.gls-story-card-media-link`              | Clickable wrapper around the image (`tabindex="-1"` and `aria-hidden="true"` for single tab stop).       |
| `.gls-story-card-image`, `.__image`       | Fitted image with `object-fit: cover` and lazy loading support.                                           |
| `.gls-story-card-scrim`, `.__scrim`       | Bottom-up dark legibility gradient overlay protecting lower media contrast.                              |
| `.gls-story-card-content`, `.__content`   | Lower container for headline and action link.                                                             |
| `.gls-story-card-title`, `.__title`       | Headline rendered as `<h3>` with clamp to 3 lines (≤ 70 characters recommended).                          |
| `.gls-story-card-action`, `.__action`     | Action wrapper containing the design-system Text Button Special (`.gls-button-text.gls-button-arrow-trailing`). |

<div class="gls-docs-example">
    <div class="gls-width-1-3@m">
        <article class="gls-story-card gls-story-card--image" aria-labelledby="story-card-title">
            <div class="gls-story-card-media">
                <a href="#story-demo" class="gls-story-card-media-link" tabindex="-1" aria-hidden="true">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=720&h=1120&q=80"
                        alt="Physician consulting with a patient in outpatient clinic"
                        width="720"
                        height="1120"
                        loading="lazy"
                        decoding="async"
                        class="gls-story-card-image"
                    />
                    <div class="gls-story-card-scrim" aria-hidden="true"></div>
                </a>
            </div>

            <div class="gls-story-card-content">
                <h3 id="story-card-title" class="gls-story-card-title">
                    Compassionate Heart Care When Every Second Counts
                </h3>
                <div class="gls-story-card-action">
                    <a class="gls-button gls-button-text gls-button-arrow-trailing" href="#story-demo">
                        <span class="gls-button-label">Read Eliza's Story</span>
                        <span class="gls-button-icon-trailing gls-margin-small-left" gls-icon="icon: arrow-right"></span>
                    </a>
                </div>
            </div>
        </article>
    </div>
</div>

```html
<article class="gls-story-card gls-story-card--image" aria-labelledby="story-card-title">
    <div class="gls-story-card-media">
        <a href="/stories/eliza-heart-care" class="gls-story-card-media-link" tabindex="-1" aria-hidden="true">
            <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=720&h=1120&q=80"
                alt="Physician consulting with a patient in outpatient clinic"
                width="720"
                height="1120"
                loading="lazy"
                decoding="async"
                class="gls-story-card-image"
            />
            <div class="gls-story-card-scrim" aria-hidden="true"></div>
        </a>
    </div>

    <div class="gls-story-card-content">
        <h3 id="story-card-title" class="gls-story-card-title">
            Compassionate Heart Care When Every Second Counts
        </h3>
        <div class="gls-story-card-action">
            <a class="gls-button gls-button-text gls-button-arrow-trailing" href="/stories/eliza-heart-care">
                <span class="gls-button-label">Read Eliza's Story</span>
                <span class="gls-button-icon-trailing gls-margin-small-left" gls-icon="icon: arrow-right"></span>
            </a>
        </div>
    </div>
</article>
```

---

## Accessibility & Keyboard Navigation

* **Single Tab Stop**: To prevent redundant link announcements for screen reader and keyboard users, the top image panel link is marked with `tabindex="-1"` and `aria-hidden="true"`.
* **Accessible Name**: The `<article>` is labeled by its story title via `aria-labelledby`.
* **Focus Indicator**: Keyboard focus lands exclusively on the action button below the title, with visible outline rings.
