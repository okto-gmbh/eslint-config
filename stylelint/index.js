module.exports = {
  customSyntax: "@stylelint/postcss-css-in-js",
  defaultSeverity: "warning",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "custom-property-empty-line-before": null,
    "custom-property-pattern": "^(-?[_a-z0-9]+[A-Za-z0-9]*)+$",
    "declaration-empty-line-before": null,
    "function-name-case": null,
    "function-no-unknown": [true, { ignoreFunctions: ["/\\${/"] }],
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-empty-source": null,
    "no-invalid-double-slash-comments": null,
    "no-missing-end-of-source-newline": null,
    "declaration-block-no-redundant-longhand-properties": null, // TODO: re-enable when https://github.com/stylelint/stylelint/issues/6701 is fixed
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["content-visibility"],
      },
    ],
    "value-keyword-case": null,
  },
};
