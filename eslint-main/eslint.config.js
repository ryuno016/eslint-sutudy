export default {
  files: ["src/**/*.js"],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "17.0"
    }
  },
  rules: {
    "no-console": "error",
    "eqeqeq": ["error", "always"],
    "curly": "error"
  }
};
