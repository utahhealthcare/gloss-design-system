# Gloss Design System

Gloss is the design system for University of Utah Health. It provides a shared foundation for clinical and academic digital experiences, including accessible interface patterns, styles, JavaScript behaviors, design tokens, and documentation.

## Status

Gloss Design System 3 is in pre-alpha development (`3.0.0-alpha.0`). The repository currently contains only the initial project foundation. APIs, file structure, build commands, and components are subject to change.

Gloss 3 is intended to replace and unify the work currently split between:

- `gloss-source`, the UIkit-based CSS and JavaScript source;
- `gloss-docs`, the separate documentation website.

Those repositories are migration references during early development. They are not modified as part of this project unless explicitly requested.

## Goals

Gloss 3 aims to provide:

- UIkit as an npm dependency rather than a maintained fork;
- a central, versioned design-token source;
- modern CSS enhancements layered over a stable UIkit foundation;
- accessible, tested, documented components;
- automated JavaScript and CSS linting and formatting;
- automated behavioral, accessibility, and visual regression checks;
- a single repository for source code, tokens, documentation, and build automation;
- a clear boundary between open-source code and licensed University assets.

## Planned structure

The structure will be introduced incrementally as the project develops. The planned direction is:

```text
src/tokens/       Canonical design tokens
src/styles/       UIkit overrides, generated token CSS, and Gloss styling
src/js/           Gloss JavaScript and component behavior
dist/             Generated, versioned CSS and JavaScript distribution files
docs/             Jekyll documentation and examples
tests/            Unit, accessibility, interaction, and visual tests
assets-private/   Locally supplied licensed assets; not open-source code
```

Generated files are clearly identified, must not be edited by hand, and are verified by automated checks.

The files in `dist/` are generated distribution artifacts and are intentionally
tracked. They are part of Gloss's public release surface so downstream teams
can consume a specific Git tag through a CDN. Regenerate them with
`npm run build:css`; never edit them directly.

## Development principles

- Prefer standards-based HTML, CSS, and JavaScript.
- Treat accessibility as part of a component's definition of done.
- Keep public APIs small, documented, and backwards-compatible within a major version.
- Extend UIkit through supported variables and hooks instead of copying or modifying its source.
- Prefer progressive enhancement when introducing newer browser features.
- Keep dependencies intentional and review them periodically.
- Do not commit copyrighted or restricted assets without confirmed redistribution rights.

## Roadmap

Development will proceed in small, validated stages:

1. Establish the repository, package metadata, developer guidance, and CI foundation.
2. Define the token model and generate the first CSS custom properties.
3. Add UIkit as a dependency and prove the override/theme layer.
4. Build one representative component with documentation and automated tests.
5. Expand the component library and migrate selected 2.x behavior.
6. Bring the documentation site into this repository and publish it with GitHub Pages.
7. Prepare migration guidance and an alpha release for consumers.

## Contributing

Contribution guidance, coding standards, testing commands, release procedures, and AI-assisted development guidance will be added as the project foundation is established. Until then, please treat this repository as pre-alpha work in progress and expect the structure to change.

## License and assets

Gloss's original source code is released under the BSD-3-Clause license. See [LICENSE](LICENSE) for the full text.

Fonts, University marks, icons, photography, and other restricted assets may be distributed separately and must not be added to this repository unless their licensing and redistribution terms have been confirmed. The Gloss code license does not grant permission to use University trademarks or branding.
