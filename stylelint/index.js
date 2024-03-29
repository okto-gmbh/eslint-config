module.exports = {
    defaultSeverity: 'warning',
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-idiomatic-order',
        'stylelint-prettier/recommended'
    ],
    overrides: [
        {
            customSyntax: '@stylelint/postcss-css-in-js',
            files: [
                '*.js',
                '**/*.js',
                '*.jsx',
                '**/*.jsx',
                '*.ts',
                '**/*.ts',
                '*.tsx',
                '**/*.tsx'
            ]
        }
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        'custom-property-empty-line-before': null,
        'custom-property-pattern': '^(-?[_a-z0-9]+[A-Za-z0-9]*)+$',
        'declaration-empty-line-before': null,
        'function-name-case': null,
        'function-no-unknown': [null, { ignoreFunctions: ['/\\${/'] }],
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'no-empty-source': null,
        'no-invalid-double-slash-comments': null,
        'no-missing-end-of-source-newline': null,
        // TODO: re-enable when https://github.com/stylelint/stylelint/issues/6701 is fixed
        "declaration-block-no-redundant-longhand-properties": null,
        'property-no-unknown': [
            null,
            {
                ignoreProperties: ['content-visibility']
            }
        ],
        'value-keyword-case': null
    }
}
