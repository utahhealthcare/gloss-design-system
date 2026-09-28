import eslint from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: [
            'node_modules/**',
            'vendor/**',
            'dist/**',
            'docs/assets/js/gloss.js',
            'docs/assets/js/gloss-icons.js',
            '_site/**',
            'coverage/**',
            'playwright-report/**',
            'test-results/**',
            'tests/**',
        ],
    },
    eslint.configs.recommended,
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
];
