module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsdoc/recommended',
    './node_modules/gts/',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc'],
  rules: {
    'node/no-unpublished-import': 0,
    'jsdoc/require-jsdoc': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.cjs'],
      rules: {
        'jsdoc/require-returns': 1,
        'jsdoc/require-returns-check': 1,
        'jsdoc/require-returns-type': 1,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'jsdoc/require-file-overview': 1,
        'jsdoc/require-example': 1,
        'jsdoc/check-tag-names': 0,
        'jsdoc/no-undefined-types': 0,
        'jsdoc/check-alignment': 0,
        'jsdoc/check-values': 0,
        'jsdoc/tag-lines': 0,
      },
    },
  ],
};
