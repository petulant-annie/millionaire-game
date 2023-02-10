module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'array-callback-return': 1,
    'arrow-body-style': 1,
    camelcase: 1,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'linebreak-style': ['error', 'unix'],
    'comma-spacing': ['error', { before: false, after: true }],
    semi: 2,
    'no-trailing-spaces': 2,
    'import/newline-after-import': 1,
    'import/no-unresolved': 'error',
    quotes: ['error', 'single'],
    'no-unused-expressions': 1,
    'react/require-default-props': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
