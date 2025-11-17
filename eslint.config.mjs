// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",

      globals: {
        process: "readonly",
        __dirname: "readonly",
        require: "readonly",
        module: "readonly",
        console: "readonly",
      }
    },

    rules: {
      "no-undef": "off",
    }
  }
];

