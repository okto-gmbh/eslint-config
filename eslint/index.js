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
    "simple-import-sort",
    "typescript-sort-keys",
    "sort-keys-fix",
    "jsonc",
    "markdown",
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
    "import/order": "off",
    "import/no-duplicates": "error",
    "simple-import-sort/exports": "warn",
    "sort-imports": "off",
    "simple-import-sort/imports": "warn",


    // Sort object keys

    "sort-keys": ["warn", "asc", { "allowLineSeparatedGroups": true, "natural": true }],
    "sort-keys-fix/sort-keys-fix": "warn",

  },
  "overrides": [


    // TypeScript

    {
      "files": ["*.ts", "*.tsx", ".mts", ".mtsx", ".cts", ".ctsx"],
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

  
    // Standalone TypeScript

    {
      "files": [
        "**/*.config.ts",
        "**/*.config.mts",
        "**/*.config.cts",
        "**/*.md/*.ts",
        "**/*.md/*.tsx",
        "**/*.md/*.mts",
        "**/*.md/*.mtsx",
        "**/*.md/*.cts",
        "**/*.md/*.ctsx"
      ],
      "parserOptions": {
        "createDefaultProgram": true
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
              "volta",
              {
                "order": {
                  "caseSensitive": true,
                  "natural": true,
                  "type": "asc",
                }
              },
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


    // Markdown

    {
      "files": ["**/*.md"],
      "processor": "markdown/markdown"
    },
    {
      "files": [
        "**/*.md/*.ts",
        "**/*.md/*.tsx",
        "**/*.md/*.mts",
        "**/*.md/*.mtsx",
        "**/*.md/*.cts",
        "**/*.md/*.ctsx",
        "**/*.md/*.js",
        "**/*.md/*.jsx",
        "**/*.md/*.mjs",
        "**/*.md/*.mjsx",
        "**/*.md/*.cjs",
        "**/*.md/*.cjsx"
      ],
      "rules": {
        "import/newline-after-import": ["warn", { "count": 1 }],
        "unused-imports/no-unused-imports": "off"
      }
    }


  ]
}
