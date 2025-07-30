import cypressPlugin from "eslint-plugin-cypress";

export default [
  {
    files: ["cypress/**/*.js", "cypress.config.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: {
      cypress: cypressPlugin
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "cypress/no-unnecessary-waiting": "error"
    }
  }
];
