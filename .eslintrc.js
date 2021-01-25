module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'func-names': ['error', 'never'],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        json: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.js'] }],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-param-reassign': 0,
    'no-console': 0,
    'no-unused-vars': 1,
  },
};
