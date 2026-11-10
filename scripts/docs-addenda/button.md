## Multi-part icon & label structure

When building `.gls-button-text` or `.gls-button-link` with leading or trailing icons, wrap the text in `<span class="gls-button-label">`:

```example
<a class="gls-button gls-button-text" href="#">
    <span class="gls-button-label">Learn More</span>
    <span class="gls-button-icon-trailing gls-margin-small-left" gls-icon="icon: arrow-right; ratio: 0.9"></span>
</a>

<a class="gls-button gls-button-link" href="#">
    <span class="gls-button-label">Explore Programs</span>
    <span class="gls-button-icon-trailing gls-margin-small-left" gls-icon="icon: arrow-right; ratio: 0.9"></span>
</a>
```

### Why `span.gls-button-label` is required

The animated sliding underline on `.gls-button-text` uses an expanding `::before` pseudo-element anchored to `.gls-button-label`. Scoping the underline strictly to `.gls-button-label` ensures the underline animates beneath the text without running under the trailing icon. Without this wrapper, no animated underline will render on hover.
