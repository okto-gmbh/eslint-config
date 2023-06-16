# eslint-config

This repository contains shared configs for ESLint, Stylelint and Prettier.

## Installation

```bash
yarn add -D @okto-gmbh/eslint-config
```

## Usage

```jsonc
// .eslintrc
{
  "extends": "@okto-gmbh/eslint-config/eslint"
}
```

```jsonc
// .stylelintrc
{
    "extends": "@okto-gmbh/eslint-config/stylelint"
}
```

```jsonc
// .prettierrc
"@okto-gmbh/eslint-config/prettier"
```

```jsonc
// tsconfig.json
{
    "extends": "@okto-gmbh/eslint-config/tsconfig"
}
```

## VSCode integration

For automatic code formatting on save, install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and the [stylelint]() config.
Prettier will also run through eslint, so you don't need to install the Prettier extension.

To recommend the extension in your repository create a `.vscode/extensions.json` with the following content:

```jsonc
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint"
  ]
}
```

It should also be configured which files and directories should be excluded from linting.

```jsonc
// .eslintignore, .stylelintignore, .prettierignore
.next
.swc
!/.vscode
*.min.js
plop-templates
node_modules
```

To configure the extension properly, create a `.vscode/settings.json` with the following content:

```jsonc
{

    // Stylelint
    "[css]": {
        "editor.defaultFormatter": "stylelint.vscode-stylelint"
    },
    // ESLint
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[javascriptreact]": {
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
    "[typescriptreact]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true,
        "source.organizeImports": false
    },

    // VSCode
    "editor.formatOnSave": false,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "json",
        "jsonc",
        "json5",
        "typescript",
        "typescriptreact",
        "yaml"
    ],

    // Prettier
    "prettier.enable": false,

    // Stylelint
    "stylelint.enable": true,
    "stylelint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "css",
        "less",
        "scss",
        "postcss"
    ],

    // Module import
    "typescript.preferences.importModuleSpecifier": "non-relative",
    "typescript.preferences.useAliasesForRenames": true
}
```

If you want to have linting scripts, you can use something like this in the `package.json`:

```jsonc
{
  "scripts": {
      "lint": "yarn lint:js && yarn lint:css",
      "lint:ci": "yarn lint:js --max-warnings 0 && yarn lint:css --max-warnings 0",
      "lint:css": "node_modules/.bin/stylelint ./**/*.styled.{js,jsx,ts,tsx}",
      "lint:css:fix": "yarn lint:css --fix",
      "lint:fix": "yarn lint:js --fix && yarn lint:css --fix",
      "lint:js": "node_modules/.bin/eslint --ext .ts,.tsx,.js,.jsx,.json,.jsonc,.yml,.md ./",
      "lint:js:fix": "yarn lint:js --fix"
  }
}
```
