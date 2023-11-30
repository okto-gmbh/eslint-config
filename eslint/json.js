/* eslint-disable eslint-plugin-sort-keys/sort-keys-fix */
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

export const json = compat.config({
    overrides: [
        // json
        {
            extends: ['plugin:jsonc/recommended-with-jsonc'],
            plugins: ['jsonc'],
            excludedFiles: ['package-lock.json', 'yarn.lock'],
            files: ['*.json', '*.jsonc', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/comma-dangle': ['error', 'never'],
                'jsonc/sort-keys': [
                    'warn',
                    'asc',
                    {
                        caseSensitive: false,
                        minKeys: 2,
                        natural: true
                    }
                ]
            }
        },

        // package.json
        {
            files: ['package.json'],
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
                            'version',
                            'type',
                            'name',
                            'displayName',
                            'description',
                            'license',
                            'author',
                            'funding',
                            'private',
                            'homepage',
                            'repository',
                            'bugs',
                            'sideEffects',
                            'exports',
                            'main',
                            'bin',
                            'module',
                            'unpkg',
                            'jsdelivr',
                            'types',
                            'scripts',
                            'engines',
                            'files',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'optionalDependencies',
                            'overrides',
                            'devDependencies',
                            'keywords',
                            'volta',
                            {
                                order: {
                                    caseSensitive: true,
                                    natural: true,
                                    type: 'asc'
                                }
                            }
                        ],
                        pathPattern: '^$'
                    },
                    {
                        order: ['types', 'require', 'import'],
                        pathPattern: '^exports.*$'
                    }
                ]
            }
        }
    ]
})
