/* eslint-disable eslint-plugin-sort-keys/sort-keys-fix */

import eslintPluginReact from 'eslint-plugin-react'

/** @type {import("eslint").Linter.FlatConfig} */
export const react = [
    {
        files: ['**/*.{js,jsx,tsx}'],
        plugins: {
            'eslint-plugin-react': eslintPluginReact,

            react: eslintPluginReact
        },

        settings: {
            react: {
                version: 'detect'
            }
        },

        rules: {
            ...eslintPluginReact.configs.recommended.rules,
            ...eslintPluginReact.configs['jsx-runtime'].rules,

            'eslint-plugin-react/react-in-jsx-scope': 'off',
            'eslint-plugin-react/prop-types': 'off'
        }
    }
]
