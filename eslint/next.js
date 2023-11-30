import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

export const next = compat.config({
    extends: ['plugin:@next/next/recommended'],
    plugins: ['@next/next'],
    rules: {
        '@next/next/no-document-import-in-page': 'off'
    }
})
