---
title: Body
---

# Body

<p class="gls-text-lead">Define responsive body typography using semantic content roles that adapt automatically across mobile, tablet, and desktop viewports.</p>

## Usage

Body copy is structured into five semantic roles rather than rigid pixel sizes. Each role defines font size, line height, and font weight using the Sofia Pro font family (`var(--gls-font-family-base)`).

| Class                  | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| `.gls-body`            | Base body typography class. Applies Sofia Pro and defaults to the Default role. |
| `.gls-body-feature`    | Feature text for prominent callouts, impactful statistics, and lead sentences.  |
| `.gls-body-lead`       | Lead text for section introductory copy and article subheaders.                 |
| `.gls-body-default`    | Standard editorial copy for general paragraph text and primary body content.    |
| `.gls-body-secondary`  | Secondary copy for metadata, card descriptions, and secondary annotations.      |
| `.gls-body-caption`    | Caption copy for image captions, footnotes, and legal disclaimers.              |

```html
<div class="gls-body gls-body-default">
    <p>Standard editorial copy...</p>
</div>
```

---

## Semantic roles and responsive scales

Each role responds fluidly across breakpoints (Mobile `<640px`, Tablet `640px–959px`, Desktop `960px+`).

| Role        | Weight       | Line Height | Desktop (960px+)     | Tablet (640px–959px) | Mobile (&lt;640px)   | Primary Use Cases                                     |
| ----------- | ------------ | ----------- | -------------------- | -------------------- | -------------------- | ----------------------------------------------------- |
| `feature`   | Medium (500) | 1.3 (130%)  | 32px (5xl / 2rem)    | 28px (4xl / 1.75rem) | 24px (3xl / 1.5rem)  | Prominent callout sentences, impactful stats, teaser. |
| `lead`      | Reg. (400)   | 1.5 (150%)  | 24px (3xl / 1.5rem)  | 22px (2xl / 1.375rem)| 20px (xl / 1.25rem)  | Section introductory copy, article subheaders.        |
| `default`   | Reg. (400)   | 1.6 (160%)  | 18px (lg / 1.125rem) | 18px (lg / 1.125rem) | 16px (base / 1rem)   | Standard editorial copy, general paragraph text.      |
| `secondary` | Reg. (400)   | 1.6 (160%)  | 16px (base / 1rem)   | 16px (base / 1rem)   | 14px (sm / 0.875rem) | Metadata, card descriptions, secondary annotations.   |
| `caption`   | Reg. (400)   | 1.6 (160%)  | 14px (sm / 0.875rem) | 14px (sm / 0.875rem) | 14px (sm / 0.875rem) | Image captions, footnotes, legal disclaimers.         |

---

## Roles overview

<div class="gls-docs-example">
    <div class="gls-margin">
        <span class="gls-label gls-margin-small-bottom">Feature</span>
        <div class="gls-body-feature">
            University of Utah Health provides world-class care across the Mountain West region.
        </div>
    </div>
    <hr>
    <div class="gls-margin">
        <span class="gls-label gls-margin-small-bottom">Lead</span>
        <div class="gls-body-lead">
            Our clinical teams and researchers collaborate across disciplines to transform patient outcomes.
        </div>
    </div>
    <hr>
    <div class="gls-margin">
        <span class="gls-label gls-margin-small-bottom">Default</span>
        <div class="gls-body-default">
            Patients and families are at the center of every medical decision we make. Our comprehensive care network encompasses specialty clinics, research facilities, and community health centers.
        </div>
    </div>
    <hr>
    <div class="gls-margin">
        <span class="gls-label gls-margin-small-bottom">Secondary</span>
        <div class="gls-body-secondary">
            Published on October 24, 2026 &bull; Department of Internal Medicine &bull; Reading time: 4 min
        </div>
    </div>
    <hr>
    <div class="gls-margin">
        <span class="gls-label gls-margin-small-bottom">Caption</span>
        <div class="gls-body-caption">
            Figure 1.2: Annual patient wellness outcomes measured across University of Utah Health regional hospitals.
        </div>
    </div>
</div>

```html
<!-- Feature: Impact callouts and lead stats -->
<div class="gls-body-feature">
    University of Utah Health provides world-class care across the Mountain West region.
</div>

<!-- Lead: Section introductions and subheaders -->
<div class="gls-body-lead">
    Our clinical teams and researchers collaborate across disciplines to transform patient outcomes.
</div>

<!-- Default: Standard editorial copy -->
<div class="gls-body-default">
    Patients and families are at the center of every medical decision we make. Our comprehensive care network encompasses specialty clinics, research facilities, and community health centers.
</div>

<!-- Secondary: Metadata and annotations -->
<div class="gls-body-secondary">
    Published on October 24, 2026 &bull; Department of Internal Medicine &bull; Reading time: 4 min
</div>

<!-- Caption: Disclaimers and footnotes -->
<div class="gls-body-caption">
    Figure 1.2: Annual patient wellness outcomes measured across University of Utah Health regional hospitals.
</div>
```

---

## Layout spacing and containment

When embedding body content in layout stacks, combine the semantic role class with margin resets and text wrapping:
- `.gls-text-break`: Ensures unbroken strings or URLs wrap within narrow columns.
- `.gls-margin-remove-first-child`: Resets top margin on the first child element.
- `.gls-margin-remove-last-child`: Resets bottom margin on the last child element.

<div class="gls-docs-example">
    <div class="gls-card gls-card-default gls-card-body gls-width-xlarge">
        <div class="gls-body gls-body-default gls-text-break gls-margin-remove-first-child gls-margin-remove-last-child">
            <p>First paragraph inside the card has no extra top margin.</p>
            <p>Second paragraph maintains normal editorial flow spacing.</p>
            <p>Last paragraph has no extra bottom margin, preventing double padding against the card bottom.</p>
        </div>
    </div>
</div>

```html
<div class="gls-card gls-card-default gls-card-body">
    <div class="gls-body gls-body-default gls-text-break gls-margin-remove-first-child gls-margin-remove-last-child">
        <p>First paragraph inside the card has no extra top margin.</p>
        <p>Second paragraph maintains normal editorial flow spacing.</p>
        <p>Last paragraph has no extra bottom margin.</p>
    </div>
</div>
```

---

## Hyperlinks

Hyperlinks within `.gls-body` and `.gls-body-*` automatically adapt based on their surface background:

- **Light Backgrounds**: The text color inherits the dark body copy while the underline uses the brand primary color (`var(--global-primary-background)`). On hover and focus, the text color shifts to primary red while underline thickness remains constant. On pressed (active), both the text and underline transition to the active brand color.
- **Dark Backgrounds** (`.gls-light` / `:--inverse`): Both the text and underline are white. On hover and pressed states, the text and underline colors remain white while the underline thickness increases to 16% for clear interactive feedback.

<div class="gls-docs-example">
    <div class="gls-child-width-1-2@s" gls-grid>
        <div>
            <div class="gls-card gls-card-default gls-card-body">
                <span class="gls-label gls-margin-small-bottom">Light Surface</span>
                <div class="gls-body gls-body-default">
                    <p>
                        Explore our <a href="#">Primary Care Services</a> or schedule an appointment online.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="gls-card gls-card-body gls-background-granite-900 gls-light">
                <span class="gls-label gls-margin-small-bottom">Dark Surface</span>
                <div class="gls-body gls-body-default">
                    <p>
                        Explore our <a href="#">Primary Care Services</a> or schedule an appointment online.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<!-- Light surface link -->
<div class="gls-body gls-body-default">
    <p>Explore our <a href="#">Primary Care Services</a> online.</p>
</div>

<!-- Dark surface link -->
<div class="gls-card gls-card-body gls-background-granite-900 gls-light">
    <div class="gls-body gls-body-default">
        <p>Explore our <a href="#">Primary Care Services</a> online.</p>
    </div>
</div>
```

---

## Kitchen sink

The following sample illustrates rich HTML content rendered within `.gls-body.gls-body-default`, showcasing paragraphs, hyperlinks, inline formatting, ordered and unordered lists, nested hierarchies, blockquotes, and overflow handling.

<div class="gls-docs-example">
    <div class="gls-body gls-body-default gls-text-break gls-margin-remove-first-child gls-margin-remove-last-child">
        <p>
            University of Utah Health leads the nation in patient care, research, and education. Our faculty, staff, and medical residents pioneer innovative treatments while serving patients throughout the Intermountain West.
        </p>
        <p>
            This editorial sample demonstrates <strong>strong emphasis</strong>, standard <b>bold styling</b>, <em>italicized narrative</em>, <i>taxonomic tags</i>, inline <code>code elements</code>, highlighted <mark>key findings</mark>, and accessible <abbr title="University of Utah Health">U of U Health</abbr> acronyms. You can explore our <a href="#">primary patient care services</a> or read our <a href="#">latest medical research updates</a>.
        </p>
        <blockquote>
            <p>Our goal is not simply to provide care, but to redefine what clinical excellence looks like for our entire community.</p>
            <footer>Chief Medical Officer, <cite><a href="#">Annual Healthcare Review</a></cite></footer>
        </blockquote>
        <h4>Clinical Services and Programs</h4>
        <ul>
            <li>Comprehensive Cardiology &amp; Vascular Surgery</li>
            <li>Neurology, Brain Health, &amp; Advanced Therapeutics
                <ul>
                    <li>Specialty stroke rehabilitation care</li>
                    <li>Pediatric neurological clinical trials</li>
                </ul>
            </li>
            <li>Huntsman Cancer Institute oncology protocols</li>
            <li>Primary Care &amp; Preventive Health Networks</li>
        </ul>
        <h4>Appointment Scheduling Steps</h4>
        <ol>
            <li>Select your preferred clinic location or telehealth option.</li>
            <li>Verify your accepted insurance provider network:
                <ol>
                    <li>Commercial and employer-sponsored plans:
                        <ol>
                            <li>In-network primary care copay verification</li>
                            <li>Specialist consultation referral pre-authorization</li>
                        </ol>
                    </li>
                    <li>University Health Plans and Medicare Advantage</li>
                </ol>
            </li>
            <li>Complete your secure digital pre-registration via MyChart.</li>
            <li>Arrive 15 minutes prior to your scheduled consultation.</li>
        </ol>
        <p class="gls-body-secondary gls-text-muted">
            Reference URL: https://healthcare.utah.edu/internal-medicine/patient-services/clinical-trials/neurology/long-protocol-identifier-sample
        </p>
        <p class="gls-body-caption">
            Notice: Clinical trial availability is subject to institutional review board approval and patient qualification criteria.
        </p>
    </div>
</div>

```html
<div class="gls-body gls-body-default gls-text-break gls-margin-remove-first-child gls-margin-remove-last-child">
    <p>
        University of Utah Health leads the nation in patient care, research, and education. Our faculty, staff, and medical residents pioneer innovative treatments while serving patients throughout the Intermountain West.
    </p>
    <p>
        This editorial sample demonstrates <strong>strong emphasis</strong>, standard <b>bold styling</b>, <em>italicized narrative</em>, <i>taxonomic tags</i>, inline <code>code elements</code>, highlighted <mark>key findings</mark>, and accessible <abbr title="University of Utah Health">U of U Health</abbr> acronyms. You can explore our <a href="#">primary patient care services</a> or read our <a href="#">latest medical research updates</a>.
    </p>
    <blockquote>
        <p>Our goal is not simply to provide care, but to redefine what clinical excellence looks like for our entire community.</p>
        <footer>Chief Medical Officer, <cite><a href="#">Annual Healthcare Review</a></cite></footer>
    </blockquote>
    <h4>Clinical Services and Programs</h4>
    <ul>
        <li>Comprehensive Cardiology &amp; Vascular Surgery</li>
        <li>Neurology, Brain Health, &amp; Advanced Therapeutics
            <ul>
                <li>Specialty stroke rehabilitation care</li>
                <li>Pediatric neurological clinical trials</li>
            </ul>
        </li>
        <li>Huntsman Cancer Institute oncology protocols</li>
        <li>Primary Care &amp; Preventive Health Networks</li>
    </ul>
    <h4>Appointment Scheduling Steps</h4>
    <ol>
        <li>Select your preferred clinic location or telehealth option.</li>
        <li>Verify your accepted insurance provider network:
            <ol>
                <li>Commercial and employer-sponsored plans:
                    <ol>
                        <li>In-network primary care copay verification</li>
                        <li>Specialist consultation referral pre-authorization</li>
                    </ol>
                </li>
                <li>University Health Plans and Medicare Advantage</li>
            </ol>
        </li>
        <li>Complete your secure digital pre-registration via MyChart.</li>
        <li>Arrive 15 minutes prior to your scheduled consultation.</li>
    </ol>
    <p class="gls-body-secondary gls-text-muted">
        Reference URL: https://healthcare.utah.edu/internal-medicine/patient-services/clinical-trials/neurology/long-protocol-identifier-sample
    </p>
    <p class="gls-body-caption">
        Notice: Clinical trial availability is subject to institutional review board approval and patient qualification criteria.
    </p>
</div>
```
