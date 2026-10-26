## Gloss image collage

Gloss adds responsive image collage layouts for single and dual image presentations:

| Class                          | Description                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `.gls-image-collage`           | Container element for the image collage layout.                                              |
| `.gls-image-collage-single`    | Single image layout constraining the image to a 3:2 landscape aspect ratio.                  |
| `.gls-image-collage-double`    | Overlapping dual image layout with 2:3 portrait aspect ratio.                                |
| `.gls-image-collage-wrapper`   | Constrains the dual image layout within a 1:1 aspect ratio grid.                             |
| `.gls-image-collage-image`     | Base wrapper for each image in the dual collage layout.                                      |
| `.gls-image-collage-primary`   | Lower-left primary image container (~68% width), elevated in front with shadow and rounding. |
| `.gls-image-collage-secondary` | Upper-right secondary image container (~50% width), positioned behind the primary image.     |
| `.gls-image-collage-img`       | Image element applying aspect ratio and object-fit cover.                                    |

### Single image (3:2)

```example
<div class="gls-image-collage gls-image-collage-single">
    <img
        class="gls-image-collage-img gls-border-rounded"
        src="images/photo.jpg"
        alt="Single image 3:2 aspect ratio"
    />
</div>
```

### Double image (overlapping portrait)

```example
<div class="gls-image-collage gls-image-collage-double">
    <div class="gls-image-collage-wrapper">
        <div class="gls-image-collage-primary gls-image-collage-image">
            <img
                class="gls-image-collage-img gls-border-rounded"
                src="images/size-v.jpg"
                alt="Primary lower-left portrait"
            />
        </div>
        <div class="gls-image-collage-secondary gls-image-collage-image">
            <img
                class="gls-image-collage-img gls-border-rounded"
                src="images/photo2.jpg"
                alt="Secondary upper-right portrait"
            />
        </div>
    </div>
</div>
```
