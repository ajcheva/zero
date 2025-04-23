// .eslintrc.js
module.exports = {
  root: true, // marca este archivo como el config “root”
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // usa tu tsconfig para validación de tipos
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  rules: {
    // permite argumentos que empiecen con _ sin error “unused vars”
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // aquí puedes afinar más reglas…
  },
};
