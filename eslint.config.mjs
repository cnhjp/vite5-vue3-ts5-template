import antfu from "@antfu/eslint-config";

export default antfu({
  unocss: true,
  formatters: true,
  typescript: true,
  vue: true,
  rules: {
    "jsdoc/require-returns-description": "off",
    "jsonc/sort-keys": "off",
    "vue/block-tag-newline": "off",
    "style/semi": "off",
    "style/quotes": "off",
    "no-console": "off",
    "unused-imports/no-unused-imports-ts": "warn",
  },
});

//   10:1  warning  Missing JSDoc @returns description  jsdoc/require-returns-description
