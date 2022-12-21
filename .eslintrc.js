module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    eqeqeq: 2,
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'no-debugger': 'warn',
    'prefer-const': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'],
    'comma-dangle': ['warn', 'only-multiline'],
    '@typescript-eslint/ban-ts-comment': 0,
  },
  ignorePatterns: ["**/dist/*"],
};
