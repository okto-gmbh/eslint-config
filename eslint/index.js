module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:@next/next/recommended",
    "prettier"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": [
    "@typescript-eslint",
    "unused-imports",
    "import",
    "typescript-sort-keys",
    "sort-keys-fix",
    "jsonc",
    "yml",
    "tsdoc",
    "prettier",
  ],
  "rules": {


    // Prettier

    "prettier/prettier": "warn",


    // Imports

    "unused-imports/no-unused-imports": "warn",
    "import/first": "warn",
    "import/no-duplicates": "error",
    "import/no-relative-packages": "warn", "import/order": [
      "warn", {
        "alphabetize": {
          "caseInsensitive": true,
          "order": "asc"
        },
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "newlines-between": "always"
      }
    ],


    // Sort object keys

    "sort-keys": ["warn", "asc", { "allowLineSeparatedGroups": true, "natural": true }],
    "sort-keys-fix/sort-keys-fix": "warn",

  },
  "overrides": [


    // TypeScript

    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 2020,
        "project": ["tsconfig.json"]
      },
      "rules": {


        // Sort type keys

        "typescript-sort-keys/interface": [
          "warn",
          "asc",
          {
            "caseSensitive": true,
            "natural": true,
            "requiredFirst": true
          }
        ],
        "typescript-sort-keys/string-enum": "warn"
      }
    },
  

    // JSON

    {
      "excludedFiles": ["package-lock.json", "yarn.lock"],
      "files": ["*.json", "*.json5", "*.jsonc"],
      "parser": "jsonc-eslint-parser",
      "rules": {
        "jsonc/comma-dangle": ["error", "never"], // Trailing comma is invalid in JSON
        "jsonc/sort-keys": [
          "warn",
          "asc",
          {
            "caseSensitive": false,
            "minKeys": 2,
            "natural": true
          }
        ]
      }
    },


    // Package json

    {
      "files": ["package.json"],
      "rules": {
        "jsonc/sort-keys": [
          "warn",
          {
            "order": {
              "caseSensitive": true,
              "natural": true,
              "type": "asc"
            },
            "pathPattern": "^.*..*$"
          },
          {
            "order": [
              "version",
              "type",
              "name",
              "displayName",
              "description",
              "license",
              "author",
              "funding",
              "private",
              "homepage",
              "repository",
              "bugs",
              "sideEffects",
              "exports",
              "main",
              "bin",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "scripts",
              "engines",
              "files",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "overrides",
              "devDependencies",
              "keywords",
              "volta"
            ],
            "pathPattern": "^$"
          },
          {
            "order": [
              "types",
              "require",
              "import"
            ],
            "pathPattern": "^exports.*$"
          }
        ]
      }
    },


    // TSConfig json

    {
      "files": ["tsconfig.json", "tsconfig.*.json"],
      "rules": {
        "jsonc/sort-keys": [
          "warn",
          {
            "order": {
              "caseSensitive": true,
              "natural": true,
              "type": "asc"
            },
            "pathPattern": "^.*..*$"
          },
          {
            "order": [
              "extends",
              "compilerOptions",
              "include",
              "exclude"
            ],
            "pathPattern": "^$"
          }
        ]
      }
    },


    // eslintrc json

    {
      "files": [".eslintrc.json", "eslintrc.json"],
      "rules": {
        "jsonc/sort-keys": [
          "warn",
          {
            "order": {
              "caseSensitive": true,
              "natural": true,
              "type": "asc"
            },
            "pathPattern": "^.*..*$"
          },
          {
            "order": [
              "extends",
              "plugins",
              "overrides",
              "rules"
            ],
            "pathPattern": "^$"
          }
        ]
      }
    },


    // YAML

    {
      "excludedFiles": ["pnpm-lock.yaml"],
      "files": ["*.yaml", "*.yml"],
      "parser": "yaml-eslint-parser",
      "rules": {
        "yml/quotes": ["warn", { "avoidEscape": true, "prefer": "double" }],
        "yml/sort-keys": [
          "warn",
          "asc",
          {
            "caseSensitive": false,
            "minKeys": 2,
            "natural": true
          }
        ]
      }
    },

  ]
}
