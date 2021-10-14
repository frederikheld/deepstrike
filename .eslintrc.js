module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:mocha/recommended'
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    // '@typescript-eslint',
    'mocha'
  ],
  rules: {
  }
}

/**
 * The lines that are commented out can be used to turn
 * on TypeScript support. The respective dependencies are
 * already installed ESlint has some issues with checking
 * TypeScript, so the parser is diasbled until TS is
 * actually being used in this project.
 */
