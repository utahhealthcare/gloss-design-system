## Gloss advanced image

Gloss adds responsive layout options for editorial single and dual image presentations:

| Class                              | Description                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `.gls-image-advanced`              | Container element for advanced image presentation layouts.                                       |
| `.gls-image-advanced-ratio-3-2`    | Single image layout constraining the image to a 3:2 landscape aspect ratio.                      |
| `.gls-image-advanced-fixed-height` | Single image layout with responsive fixed heights (260px mobile / 380px tablet / 500px desktop). |
| `.gls-image-advanced-collage`      | Overlapping dual image layout with 2:3 portrait aspect ratio.                                    |
| `.gls-image-advanced-wrapper`      | Constrains the dual image layout within a 1:1 aspect ratio grid.                                 |
| `.gls-image-advanced-image`        | Base wrapper for each image in the dual collage layout.                                          |
| `.gls-image-advanced-primary`      | Lower-left primary image container (60% width, 80% height), positioned in front.                 |
| `.gls-image-advanced-secondary`    | Upper-right secondary image container (48% width, 50% height), positioned behind.                |
| `.gls-image-advanced-img`          | Image element applying aspect ratio or height with programmatic `object-fit: cover`.             |

### Single image (3:2)

```example
<div class="gls-image-advanced gls-image-advanced-ratio-3-2">
    <img
        class="gls-image-advanced-img gls-border-rounded"
        src="images/photo.jpg"
        alt="Single image 3:2 aspect ratio"
    />
</div>
```

### Single image (Fixed height)

```example
<div class="gls-image-advanced gls-image-advanced-fixed-height">
    <img
        class="gls-image-advanced-img gls-border-rounded"
        src="images/photo.jpg"
        alt="Single image fixed responsive height"
    />
</div>
```

### Double image (overlapping portrait collage)

```example
<div class="gls-image-advanced gls-image-advanced-collage">
    <div class="gls-image-advanced-wrapper">
        <div class="gls-image-advanced-primary gls-image-advanced-image">
            <img
                class="gls-image-advanced-img gls-border-rounded"
                src="images/size-v.jpg"
                alt="Primary lower-left portrait"
            />
        </div>
        <div class="gls-image-advanced-secondary gls-image-advanced-image">
            <img
                class="gls-image-advanced-img gls-border-rounded"
                src="images/photo2.jpg"
                alt="Secondary upper-right portrait"
            />
        </div>
    </div>
</div>
```
