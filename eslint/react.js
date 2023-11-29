/* eslint-disable sort-keys/sort-keys-fix */
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@next/next/recommended'
    ],
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        // React
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',

        // Next
        '@next/next/no-document-import-in-page': 'off',

        // Accessibility
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
}
