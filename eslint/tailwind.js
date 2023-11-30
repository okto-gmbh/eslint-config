import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const tailwindOptions = {
    callees: ['twMerge', 'twJoin']
}

export const tailwind = compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    plugins: ['tailwindcss'],
    rules: {
        'tailwindcss/classnames-order': ['warn', tailwindOptions],
        'tailwindcss/enforces-negative-arbitrary-values': [
            'warn',
            tailwindOptions
        ],
        'tailwindcss/enforces-shorthand': ['warn', tailwindOptions],
        'tailwindcss/no-contradicting-classname': ['warn', tailwindOptions],
        'tailwindcss/no-custom-classname': ['off', tailwindOptions]
    }
})
