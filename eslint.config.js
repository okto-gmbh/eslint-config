import { javascript, json, prettier } from '@okto-gmbh/eslint-config/eslint'

/** @type {import("eslint").Linter.FlatConfig} */
export default [...javascript, ...prettier, ...json]
