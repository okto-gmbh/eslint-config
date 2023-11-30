/* eslint-disable eslint-plugin-sort-keys/sort-keys-fix */
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginTypeScriptSortKeys from 'eslint-plugin-typescript-sort-keys'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

export const typescript = [
    // sort type keys
    {
        files: ['**/*.{js,jsx,tsx}'],
        plugins: {
            'eslint-plugin-typescript-sort-keys':
                eslintPluginTypeScriptSortKeys,
            'eslint-plugin-import': eslintPluginImport
        },
        rules: {
            'eslint-plugin-typescript-sort-keys/interface': [
                'warn',
                'asc',
                {
                    caseSensitive: true,
                    natural: true,
                    requiredFirst: true
                }
            ],
            'eslint-plugin-typescript-sort-keys/string-enum': 'warn'
        }
    },

    ...compat.config({
        overrides: [
            // tsconfig.json
            {
                files: ['**/tsconfig.json', '**/tsconfig.*.json'],
                parser: 'jsonc-eslint-parser',

                rules: {
                    'jsonc/sort-keys': [
                        'warn',
                        {
                            order: {
                                caseSensitive: true,
                                natural: true,
                                type: 'asc'
                            },
                            pathPattern: '^.*..*$'
                        },
                        {
                            order: [
                                'extends',
                                'compilerOptions',
                                'include',
                                'exclude'
                            ],
                            pathPattern: '^$'
                        }
                    ]
                }
            },

            // typescript
            {
                files: ['*.ts', '*.tsx'],
                extends: ['plugin:@typescript-eslint/eslint-recommended'],
                parser: '@typescript-eslint/parser',
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true
                    },
                    ecmaVersion: 'latest',
                    project: ['tsconfig.json']
                },
                plugins: ['@typescript-eslint'],
                rules: {
                    // type imports
                    'eslint-plugin-import/consistent-type-specifier-style': [
                        'warn',
                        'prefer-top-level'
                    ],

                    '@typescript-eslint/consistent-type-imports': [
                        'warn',
                        { disallowTypeAnnotations: false }
                    ],

                    // quotes
                    quotes: 'off',
                    '@typescript-eslint/quotes': [
                        'warn',
                        'single',
                        { avoidEscape: true, allowTemplateLiterals: false }
                    ],

                    // promises
                    '@typescript-eslint/no-floating-promises': 'warn',

                    // optional chaining
                    '@typescript-eslint/no-unnecessary-condition': 'warn',
                    '@typescript-eslint/no-non-null-asserted-optional-chain':
                        'warn',

                    // type assertions
                    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
                    '@typescript-eslint/non-nullable-type-assertion-style':
                        'warn'
                }
            }
        ]
    })
]
