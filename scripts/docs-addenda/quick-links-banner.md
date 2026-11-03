## Gloss quick links banner

Gloss adds the Quick Links Banner component for featured action navigation banners (such as "Ready to Help"), combining a contained banner container, responsive content padding, an orphan-free link grid, clickable action cards, and optional background illustrations.

| Class                                  | Description                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `.gls-quick-links-banner`              | Outer container shell with rounded corners and overflow clipping. Can be paired with background styles. |
| `.gls-quick-links-banner-content`      | Content wrapper managing responsive padding (24px mobile, 30px tablet, 40px desktop) and column layout. |
| `.gls-quick-links-banner-illustration` | Decorative background illustration anchored flush to bottom.                                            |
| `.gls-link-grid`                       | Responsive grid container for quick links that prevents orphaned rows.                                  |
| `.gls-link-grid-inner`                 | Grid wrapper applying layout rules based on link count (1 col mobile, 2 col tablet, 3–4 col desktop).   |
| `.gls-quick-link`                      | Interactive navigation action card with label, hover elevation, and focus indicator.                    |
| `.gls-quick-link-arrow`                | Forward arrow indicator pinned to the right, styled with brand primary red.                             |

### Usage (4 Links with Granite Background and Illustration)

```example
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

### 3 Links (Orphan Prevention)

When 3 links are present, the grid stacks vertically below 960px to avoid an awkward 2+1 orphan row on tablet screens, expanding to 3 columns at 960px and above.

```example
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

### 2 Links

When 2 links are present, the grid displays a single column on mobile (< 640px) and 2 columns at 640px and above.

```example
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
                    <span class="gls-text-bold">Emergency Department</span>
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
