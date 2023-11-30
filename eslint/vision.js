import { javascript } from './javascript.js'
import { json } from './json.js'
import { jsxA11y } from './jsx-a11y.js'
import { next } from './next.js'
import { prettier } from './prettier.js'
import { react } from './react.js'
import { tailwind } from './tailwind.js'
import { typescript } from './typescript.js'
import { vitest } from './vitest.js'

/** @type {import("eslint").Linter.FlatConfig} */
export const vision = [
    ...javascript,
    ...json,
    ...tailwind,
    ...vitest,
    ...jsxA11y,
    ...react,
    ...next,
    ...typescript,
    ...prettier
]
