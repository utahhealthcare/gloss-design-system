# Contributing to Gloss

Gloss Design System 3 is in pre-alpha. The project is still establishing its architecture, tooling, and component conventions, so expect things to change as we learn. Small, focused contributions are especially welcome.

## Before you start

For a substantial change, open an issue or start a discussion first. This gives us a chance to agree on the problem and avoid building something that does not belong in the design system.

Small fixes, documentation improvements, and clearly scoped maintenance changes can usually go straight into a pull request.

## Making a change

- Keep pull requests focused on one problem.
- Explain the user or developer problem the change solves.
- Update documentation and examples when behavior or public markup changes.
- Do not edit generated files by hand.
- When source styles or JavaScript change, regenerate and commit the tracked files in `dist/`.
- Follow the existing style of the code around your change.
- Keep new dependencies to a minimum and explain why one is needed.

Accessibility is part of the feature, not a later task. New components should use semantic HTML, support keyboard interaction, and include appropriate focus, naming, contrast, and reduced-motion behavior.

## Component documentation

The component pages in `docs/*.md` are generated from the pinned UIkit site submodule. Keep Gloss-specific documentation in `scripts/docs-addenda/` and register each addendum in `scripts/uikit-docs.json`. The sync script appends it before expanding example fences and formatting the page. Addenda stay separate from UIkit content, so upstream page updates flow through without conflicting with Gloss additions.

Use `npm run sync:uikit-docs` to regenerate the pages, then review and commit the resulting `docs/` changes. `npm run check:uikit-docs` verifies that the committed output matches the pinned UIkit revision plus addenda. Do not edit the generated page directly.

## Assets and licensing

Do not add fonts, University marks, icons, photography, or other restricted assets unless their redistribution rights have been confirmed. When in doubt, ask before committing the file. Keep licensed assets separate from the open-source codebase.

## Pull requests

Please include:

- a short summary of the change;
- the problem it addresses;
- screenshots or a documentation link when the visual output changes;
- notes about accessibility considerations;
- any follow-up work that is intentionally out of scope.

The project’s automated checks will grow as the foundation is built. Until then, please call out what you tested locally and be honest about anything you could not verify.

Pull requests run the repository’s GitHub Actions checks automatically. They
currently verify formatting, linting, token generation, token tests, and the
CSS build.

## Questions

If you are unsure whether something belongs in Gloss, or how an existing pattern should evolve, open a discussion. Design-system decisions are easier to maintain when the reasoning is recorded along with the code.
