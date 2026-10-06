const content = document.querySelector('[data-docs-content]');
const toc = document.querySelector('[data-docs-toc]');
const tocColumn = document.querySelector('[data-docs-toc-column]');

if (content && toc && tocColumn) {
    const headings = content.querySelectorAll('h2');

    if (headings.length === 0) {
        tocColumn.hidden = true;
    }

    for (const heading of headings) {
        const id = heading.id;
        const text = heading.textContent;
        const item = document.createElement('li');
        const link = document.createElement('a');
        const anchor = document.createElement('a');

        link.href = `#${id}`;
        link.textContent = text;
        item.append(link);
        toc.append(item);

        anchor.className = 'docs-heading-link';
        anchor.href = `#${id}`;
        anchor.setAttribute('aria-label', `Link to ${text}`);
        anchor.textContent = '#';
        heading.append(anchor);
    }
}
