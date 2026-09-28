/* global TESTS */
import { addClass, css, on, prepend, removeClass, ucfirst } from 'gloss-util';

const tests = TESTS;
const storage = window.sessionStorage;
const key = '_gloss_style';
const keyinverse = '_gloss_inverse';
const docEl = document.documentElement;

// try to load themes.json
const request = new XMLHttpRequest();
request.open('GET', '../themes.json', false);
request.send(null);

const themes = request.status === 200 ? JSON.parse(request.responseText) : {};
const styles = {
    '': 'Core',
};
const component = location.pathname
    .split('/')
    .pop()
    .replace(/.html$/, '');

for (const theme in themes) {
    styles[theme] = themes[theme];
}

const variations = {
    '': 'Default',
    light: 'Dark',
    dark: 'Light',
};

if (getParam('style') && getParam('style').match(/\.(json|css)$/)) {
    styles.custom = getParam('style');
}

storage[key] = storage[key] || '';
storage[keyinverse] = storage[keyinverse] || '';

const dir = storage._gloss_dir || 'ltr';

// set dir
docEl.dir = dir;

const style = styles[storage[key]] || styles.theme;

// add style
// document.writeln(`<link rel="stylesheet" href="${dir !== 'rtl' ? style.css : style.css.replace('.css', '-rtl.css')}">`);
document.writeln(`<link rel="stylesheet" href="../dist/css/gloss.css">`);

// add javascript
document.writeln('<script src="../dist/js/gloss.js"></script>');
// document.writeln('<script src="../dist/js/gloss-icons.js"></script>');
//document.writeln(`<script src="${style.icons ? style.icons : '../dist/js/gloss-icons.js'}"></script>`);

on(window, 'load', () =>
    setTimeout(
        () =>
            requestAnimationFrame(() => {
                const $body = document.body;
                const $container = prepend(
                    $body,
                    `
        <div class="gls-container">
            <select class="gls-select gls-form-width-small" style="margin: 20px 20px 20px 0">
                <option value="index.html">Overview</option>
                ${tests
                    .map(
                        (name) =>
                            `<option value="${name}.html">${name
                                .split('-')
                                .map(ucfirst)
                                .join(' ')}</option>`,
                    )
                    .join('')}
            </select>
            <select class="gls-select gls-form-width-small" style="margin: 20px">
                ${Object.keys(styles)
                    .map((style) => `<option value="${style}">${styles[style]}</option>`)
                    .join('')}
            </select>
            <select class="gls-select gls-form-width-small" style="margin: 20px">
                ${Object.keys(variations)
                    .map((name) => `<option value="${name}">${variations[name]}</option>`)
                    .join('')}
            </select>
            <!--<label style="margin: 20px">
                <input type="checkbox" class="gls-checkbox"/>
                <span style="margin: 5px">RTL</span>
            </label>-->
        </div>
    `,
                );

                const [$tests, $styles, $inverse, $rtl] = $container.children;

                // Tests
                // ------------------------------

                on($tests, 'change', () => {
                    if ($tests.value) {
                        location.href = `${$tests.value}${
                            styles.custom ? `?style=${getParam('style')}` : ''
                        }`;
                    }
                });
                $tests.value = `${component || 'index'}.html`;

                // Styles
                // ------------------------------

                // on($styles, 'change', () => {
                //     storage[key] = $styles.value;
                //     location.reload();
                // });
                // $styles.value = storage[key];

                $styles.value = storage[key];

                if ($styles.value) {
                    removeClass(docEl, [
                        'gls-theme-core',
                        'gls-theme-uhealth',
                        'gls-theme-huntsman',
                        'gls-theme-hmhi',
                        'gls-theme-safeut',
                        'gls-theme-moran',
                    ]);

                    addClass(docEl, `${$styles.value}`);

                    console.log(storage[key]);
                }

                on($styles, 'change', () => {
                    storage[key] = $styles.value;
                    location.reload();
                });

                // Variations
                // ------------------------------

                $inverse.value = storage[keyinverse];

                if ($inverse.value) {
                    removeClass(
                        document.querySelectorAll('*'),
                        'gls-navbar-container',
                        'gls-card-default',
                        'gls-card-outline',
                        'gls-card-primary',
                        'gls-card-secondary',
                        'gls-card-tertiary',
                        'gls-card-gradient',
                        'gls-tile-default',
                        'gls-tile-muted',
                        'gls-tile-primary',
                        'gls-tile-primary-light',
                        'gls-tile-secondary',
                        'gls-tile-secondary-light',
                        'gls-tile-tertiary',
                        'gls-tile-gradient',
                        'gls-section-default',
                        'gls-section-muted',
                        'gls-section-primary',
                        'gls-section-primary-light',
                        'gls-section-secondary',
                        'gls-section-secondary-light',
                        'gls-section-tertiary',
                        'gls-section-gradient',
                        'gls-overlay-default',
                        'gls-overlay-primary',
                    );

                    css(docEl, 'background', $inverse.value === 'dark' ? '#fff' : '#222');
                    addClass($body, `gls-${$inverse.value}`);
                }

                on($inverse, 'change', () => {
                    storage[keyinverse] = $inverse.value;
                    location.reload();
                });

                // RTL
                // ------------------------------

                // on($rtl, 'change', ({ target }) => {
                //     storage._gloss_dir = target.checked ? 'rtl' : 'ltr';
                //     location.reload();
                // });
                // $rtl.firstElementChild.checked = dir === 'rtl';

                css(docEl, 'paddingTop', '');
            }),
        100,
    ),
);

css(docEl, 'paddingTop', '80px');

function getParam(name) {
    const match = new RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
