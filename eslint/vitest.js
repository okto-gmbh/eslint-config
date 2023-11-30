/* eslint-disable eslint-plugin-sort-keys/sort-keys-fix */

import eslintPluginVitest from 'eslint-plugin-vitest'

/** @type {import("eslint").Linter.FlatConfig} */
export const vitest = [
    {
        files: ['**/*.test.{js,jsx,cjs,mjs,ts,tsx}', '**/*.test-d.{ts,tsx}'],
        plugins: {
            'eslint-plugin-vitest': eslintPluginVitest
        },
        rules: {
            'eslint-plugin-vitest/expect-expect': 'warn',
            'eslint-plugin-vitest/no-alias-methods': 'warn',
            'eslint-plugin-vitest/no-identical-title': 'warn',
            'eslint-plugin-vitest/prefer-comparison-matcher': 'warn',
            'eslint-plugin-vitest/prefer-each': 'warn',
            'eslint-plugin-vitest/prefer-equality-matcher': 'warn',
            'eslint-plugin-vitest/prefer-lowercase-title': 'warn',
            'eslint-plugin-vitest/prefer-to-be': 'warn',
            'eslint-plugin-vitest/prefer-to-be-object': 'warn',
            'eslint-plugin-vitest/prefer-to-contain': 'warn',
            'eslint-plugin-vitest/prefer-to-have-length': 'warn',
            'eslint-plugin-vitest/prefer-todo': 'warn',
            'eslint-plugin-vitest/valid-expect': 'warn',
            'eslint-plugin-vitest/valid-title': 'warn'
        }
    }
]
