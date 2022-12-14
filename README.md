# eslint-config

Shared eslint config.

## Installation

```sh
pnpm i --save-dev @authentiqagency/eslint-config
```

It is also recommended to let pnpm auto install peer dependencies:

```sh
pnpm config set auto-install-peers true
```

## Usage

```jsonc
// .eslintrc.json
{
  "extends": "@authentiqagency/eslint-config/eslint"
}
```

```jsonc
// .prettierrc
"@authentiqagency/eslint-config/prettier"
```

## VSCode integration

For automatic code formatting on save, install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
Prettier will also run through eslint, so you don't need to install the Prettier extension.

To recommend the extension in your repository create a `.vscode/extensions.json` with the following content:

```jsonc
{
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```

To configure the extension properly, create a `.vscode/settings.json` with the following content:

```jsonc
{
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json5]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "editor.formatOnSave": false,
  "eslint.validate": ["javascript", "typescript", "json", "jsonc", "json5", "yaml"],
  "prettier.enable": false
}
```

If you want to have linting scripts, you can use something like this in the `package.json`:

```jsonc
{
  "scripts": {
    "lint": "node_modules/.bin/eslint --ext .ts,.tsx,.js,.jsx,.json,.jsonc,.yml,.md ./",
    "lint:ci": "pnpm run lint -- --max-warnings 0",
    "lint:fix": "pnpm run lint -- --fix"
  }
}
```
