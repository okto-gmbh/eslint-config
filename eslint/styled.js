/* eslint-disable eslint-plugin-sort-keys/sort-keys-fix */

/** @type {import("eslint").Linter.FlatConfig} */
export const styled = [
    {
        files: ['**/*.styled.{js,jsx,cjs,mjs,ts,tsx}'],
        rules: {
            'sort-keys': 'off',
            'sort-keys-fix/sort-keys-fix': 'off'
        }
    }
]
