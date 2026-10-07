## Gloss background styles

Gloss adds these background modifiers to the Section component:

| Class                        | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| `.gls-section-granite`       | Adds a granite slate background with inverse (light) text. |
| `.gls-section-gradient-cool` | Adds a cool blue gradient fading to white.                 |
| `.gls-section-gradient-grey` | Adds a subtle grey gradient fading to white.               |
| `.gls-section-gradient-sand` | Adds a sand gradient fading to white.                      |

Apply one modifier alongside `.gls-section`:

```example
<div class="gls-section gls-section-granite">
    <div class="gls-container">
        <h3>Granite section</h3>
        <p>Content on a high-contrast slate background.</p>
    </div>
</div>

<div class="gls-section gls-section-gradient-cool">
    <div class="gls-container">
        <h3>Cool gradient section</h3>
        <p>Content on a cool blue gradient.</p>
    </div>
</div>

<div class="gls-section gls-section-gradient-grey">
    <div class="gls-container">
        <h3>Grey gradient section</h3>
        <p>Content on a subtle grey gradient.</p>
    </div>
</div>

<div class="gls-section gls-section-gradient-sand">
    <div class="gls-container">
        <h3>Sand gradient section</h3>
        <p>Content on a sand gradient.</p>
    </div>
</div>
```
