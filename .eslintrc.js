module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: [
    "import",
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "eslint-comments",
    "jsx-a11y",
  ],
  rules: {
    "no-use-before-define": "off",
    "prettier/prettier": "error",
  },
};
