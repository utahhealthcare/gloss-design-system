# Documentation

This directory is the source for the GitHub Pages Jekyll site.

`button.md` is generated from the UIkit site submodule. Do not edit generated
documentation directly; use `npm run sync:uikit-docs` after changing the
selected pages in `scripts/uikit-docs.json`.

Edit the project root `CHANGELOG.md` to add release notes. Run
`npm run sync:changelog` and commit the generated `docs/changelog.md` with it.
The Jekyll site publishes from `docs/`, so it needs that generated copy.

To prepare the docs directory for local Jekyll development, run:

```sh
npm run build:docs
```

This synchronizes the selected documentation and changelog, compiles Gloss CSS, and copies
the generated stylesheet into the Jekyll asset directory. The copied CSS is a
build artifact and should not be edited or committed.

The compiled CSS and JavaScript files in `dist/` are tracked because they are
the versioned distribution consumed by downstream teams. Use the exact Git tag
for CDN consumption; do not link to `main` for production sites.

Then start the local Jekyll server with Docker Desktop running:

```sh
docker run --rm -it \
  --volume "$PWD/docs:/srv/jekyll" \
  --publish 4000:4000 \
  --publish 35729:35729 \
  jekyll/jekyll:pages \
  jekyll serve --host 0.0.0.0 --baseurl="" --livereload
```

Open <http://localhost:4000/> in a browser. Re-run `npm run build:docs` after
changing source styles or documentation; Jekyll will reload ordinary content
changes while the server is running.

Layouts live in `_layouts/`, while documentation-only styles live in
`assets/css/`. The compiled Gloss stylesheet will be added to the published
site by the documentation deployment workflow.
