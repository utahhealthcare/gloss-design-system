## Gloss stack

Gloss adds the Stack layout primitive to manage vertical spacing between stacked elements and override adjacent sibling margins cleanly:

| Class / Attribute     | Description                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| `.gls-stack`          | Base container element managing vertical spacing between child elements.                               |
| `.gls-stack-small`    | Applies a small gap (16px) between stacked children. Also supports `data-gls-gap="small"`.             |
| `.gls-stack-medium`   | Applies a medium gap (32px) between stacked children. Also supports `data-gls-gap="medium"`.           |
| `.gls-stack-large`    | Applies a large gap (48px, 64px at 1200px+) between stacked children. Supports `data-gls-gap="large"`. |
| `.gls-stack-collapse` | Collapses gap spacing to 0px. Also supports `data-gls-gap="none"`.                                     |

### Usage

```example
<div class="gls-stack gls-stack-medium">
    <div class="gls-card gls-card-default gls-card-body">
        <h3>First Block</h3>
        <p>Top child margin is normalized automatically.</p>
    </div>
    <div class="gls-card gls-card-default gls-card-body">
        <h3>Second Block</h3>
        <p>Separated by a consistent 32px vertical gap.</p>
    </div>
</div>
```
