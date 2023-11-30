/* eslint-disable eslint-plugin-sort-keys/sort-keys-fix */

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import eslintJavascript from '@eslint/js'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys'
import eslintPluginSortKeys from 'eslint-plugin-sort-keys'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

/** @type {import("eslint").Linter.FlatConfig} */
export const javascript = [
    {
        files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
        plugins: {
            'eslint-plugin-unused-imports': eslintPluginUnusedImports,
            'eslint-plugin-import': eslintPluginImport,
            'eslint-plugin-unicorn': eslintPluginUnicorn,
            'eslint-plugin-simple-import-sort': eslintPluginSimpleImportSort,
            'eslint-plugin-sort-keys': eslintPluginSortKeys,
            'eslint-plugin-sort-destructure-keys':
                eslintPluginSortDestructureKeys,
            'eslint-plugin-no-secrets': eslintPluginNoSecrets,
            'eslint-plugin-security': eslintPluginSecurity,

            security: eslintPluginSecurity
        },
        rules: {
            // recommended
            ...eslintJavascript.configs.recommended.rules,

            // imports
            'sort-imports': 'off',

            'eslint-plugin-unused-imports/no-unused-imports': 'warn',
            'eslint-plugin-unused-imports/no-unused-vars': [
                'warn',
                { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
            ],

            'eslint-plugin-import/first': 'warn',
            'eslint-plugin-import/order': 'off',
            'eslint-plugin-import/no-duplicates': 'error',

            'eslint-plugin-unicorn/prefer-node-protocol': 'warn',

            'eslint-plugin-simple-import-sort/exports': 'warn',
            'eslint-plugin-simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        // side effect imports.
                        ['^\\u0000'],
                        // node.js builtins.
                        ['^node:'],
                        // external packages.
                        ['^'],
                        // q-core
                        ['^@core(.*|$)'],
                        // internal packages.
                        ['^(~)(.*|$)'],
                        // parent imports. Put `..` last.
                        ['^\\.\\.(?!/?.*\\u0000$)', '^\\.\\./?(?!.*\\u0000$)'],
                        // other relative imports. Put same-folder imports and `.` last.
                        [
                            '^\\./(?=.*/)(?!/?.*\\u0000$)',
                            '^\\.(?!/?.*\\u0000$)',
                            '^\\./?(?!.*\\u0000$)'
                        ],
                        // style imports.
                        ['^.+\\.s?css$'],
                        // styled components.
                        ['^.+\\.styled\\.(j|t)sx?$', '^.+\\.styled$'],
                        // JSON imports.
                        ['^.+\\.jsonc?$'],

                        // type imports
                        ['^node:(.*)\\u0000$'],
                        // types from external packages.
                        ['\\u0000$'],
                        // types from internal packages.
                        ['^@(.*)\\u0000$'],
                        ['^(?!node:)(.*):(.*)\\u0000$'],
                        // types from parent imports. Put `..` last.
                        ['^\\.\\.(?=/?\\u0000$)', '^\\.\\./?\\u0000$'],
                        // types from other relative imports. Put same-folder imports and `.` last.
                        [
                            '^\\./(?=.*\\u0000$)',
                            '^\\.(?=/?\\u0000$)',
                            '^\\./?\\u0000$'
                        ]
                    ]
                }
            ],

            // object keys
            'sort-keys': 'off',

            'object-shorthand': ['warn', 'always', { avoidQuotes: true }],

            'eslint-plugin-sort-keys/sort-keys-fix': 'warn',

            'eslint-plugin-sort-destructure-keys/sort-destructure-keys': 'warn',

            // functions
            'arrow-body-style': ['warn', 'as-needed'],

            // quotes
            quotes: [
                'warn',
                'single',
                { avoidEscape: true, allowTemplateLiterals: false }
            ],

            // bundle size
            'no-unused-vars': [
                'warn',
                { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
            ],

            // security
            ...eslintPluginSecurity.configs.recommended.rules,
            'eslint-plugin-security/detect-object-injection': 'off',

            'eslint-plugin-no-secrets/no-secrets': ['warn', { tolerance: 5 }]
        }
    },

    // complexity
    ...compat.config({
        overrides: [
            {
                extends: ['plugin:sonarjs/recommended'],
                plugins: ['sonarjs'],
                files: ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.ts', '*.tsx'],
                rules: {
                    'sonarjs/cognitive-complexity': 'warn',
                    'sonarjs/no-duplicate-string': 'warn',
                    'sonarjs/no-nested-template-literals': 'off'
                }
            }
        ]
    })
]
