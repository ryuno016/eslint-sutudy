export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    env: {
      browser: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    rules: {
      "no-console": "error",
      "eqeqeq": ["error", "always"],
      "curly": "error"
    }
  }
];
