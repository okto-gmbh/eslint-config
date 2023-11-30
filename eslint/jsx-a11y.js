import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

export const jsxA11y = compat.config({
    overrides: [
        {
            extends: ['plugin:jsx-a11y/recommended'],
            files: ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.tsx'],
            plugins: ['jsx-a11y'],
            rules: {
                'jsx-a11y/anchor-is-valid': [
                    'error',
                    {
                        aspects: ['invalidHref', 'preferButton'],
                        components: ['Link'],
                        specialLink: ['hrefLeft', 'hrefRight']
                    }
                ]
            }
        }
    ]
})
