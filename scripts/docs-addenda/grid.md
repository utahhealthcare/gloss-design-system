## Gloss highlight row

Gloss adds the Highlight Row utility to constrain grid items strictly to a single row (1 to 6 items) and hide excess items via CSS without requiring server-side truncation:

| Class / Attribute          | Description                                                                    |
| -------------------------- | ------------------------------------------------------------------------------ |
| `.gls-highlight-row`       | Applied alongside `.gls-grid` to enable the single-row item constraint.        |
| `data-gls-max="1"`–`"6"`   | Sets the maximum visible item count (1 to 6). Children beyond this are hidden. |
| `data-max-cards="1"`–`"6"` | Alternative attribute for setting the maximum visible item count.              |
| `.gls-max-1`–`.gls-max-6`  | Class modifier alternative for setting the maximum visible item count.         |

### Usage

```example
<div
    class="gls-grid gls-child-width-1-1 gls-child-width-expand@m gls-grid-match gls-highlight-row"
    data-gls-max="3"
    gls-grid
>
    <div><div class="gls-card gls-card-default gls-card-body">Card 1</div></div>
    <div><div class="gls-card gls-card-default gls-card-body">Card 2</div></div>
    <div><div class="gls-card gls-card-default gls-card-body">Card 3</div></div>
    <div><div class="gls-card gls-card-default gls-card-body">Card 4 (Hidden by CSS)</div></div>
    <div><div class="gls-card gls-card-default gls-card-body">Card 5 (Hidden by CSS)</div></div>
</div>
```
